// Deterministic page → PNG render harness for the Groovetop PDF build.
// Uses the pre-installed Chromium; fixed canvas; waits for fonts + images.
import { chromium } from 'playwright-core';
import { readdirSync, existsSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, join, basename } from 'node:path';

const __dir = dirname(fileURLToPath(import.meta.url));
const EXE = '/opt/pw-browsers/chromium-1194/chrome-linux/chrome';
const W = 1440, H = 960, SCALE = 2;

const pagesDir = join(__dir, 'pages');
const outDir = join(__dir, 'renders');

const args = process.argv.slice(2);
let files = args.length
  ? args.map(a => a.endsWith('.html') ? a : `${a}.html`)
  : readdirSync(pagesDir).filter(f => f.endsWith('.html')).sort();

const browser = await chromium.launch({
  executablePath: EXE,
  args: ['--force-color-profile=srgb', '--disable-lcd-text', '--font-render-hinting=none']
});
const ctx = await browser.newContext({
  viewport: { width: W, height: H },
  deviceScaleFactor: SCALE,
  reducedMotion: 'reduce'
});
const page = await ctx.newPage();

for (const f of files) {
  const p = join(pagesDir, f);
  if (!existsSync(p)) { console.log(`SKIP (missing): ${f}`); continue; }
  await page.goto(pathToFileURL(p).href, { waitUntil: 'networkidle' });
  await page.evaluate(async () => {
    await document.fonts.ready;
    const imgs = Array.from(document.images);
    await Promise.all(imgs.map(img => img.complete && img.naturalWidth
      ? Promise.resolve()
      : new Promise(r => { img.onload = img.onerror = r; })));
    // settle two frames for layout stability
    await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));
  });
  const out = join(outDir, basename(f, '.html') + '.png');
  const el = await page.$('.page');
  await (el || page).screenshot({ path: out });
  console.log(`RENDERED ${f} -> ${basename(out)}`);
}

await browser.close();
