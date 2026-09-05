// Assemble rendered PNGs into a single deterministic PDF at 1440x960 pages.
import { chromium } from 'playwright-core';
import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dir = dirname(fileURLToPath(import.meta.url));
const EXE = '/opt/pw-browsers/chromium-1194/chrome-linux/chrome';
const args = process.argv.slice(2);
const out = args[0];
const pages = args.slice(1);

const imgs = pages.map(p => {
  const f = join(__dir, 'renders', p.endsWith('.png') ? p : p + '.png');
  if (!existsSync(f)) throw new Error('missing render: ' + f);
  const b64 = readFileSync(f).toString('base64');
  return `<div class="pg"><img src="data:image/png;base64,${b64}"></div>`;
}).join('\n');

const html = `<!doctype html><html><head><style>
  @page{size:1440px 960px;margin:0}
  *{margin:0;padding:0}
  html,body{background:#fff}
  .pg{width:1440px;height:960px;break-after:page;overflow:hidden}
  .pg:last-child{break-after:auto}
  .pg img{width:1440px;height:960px;display:block}
</style></head><body>${imgs}</body></html>`;

const browser = await chromium.launch({ executablePath: EXE });
const page = await browser.newPage();
await page.setContent(html, { waitUntil: 'networkidle' });
await page.pdf({ path: join(__dir, out), width: '1440px', height: '960px', printBackground: true, pageRanges: '' });
await browser.close();
console.log('PDF ->', out, '(' + pages.length + ' pages)');
