export default function Footer() {
  return (
    <footer
      role="contentinfo"
      className="border-t border-groovetop-navy/8 bg-white py-10"
    >
      <div className="max-w-content mx-auto px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-groovetop-navy/55 font-medium">
          Raymond Merrill II · Da&rsquo;Bombay UX Design · Groovetop DS v1
        </p>
        <a
          href="mailto:ray2real1@gmail.com"
          className="text-xs text-groovetop-navy/50 hover:text-groovetop-navy transition-colors"
        >
          ray2real1@gmail.com
        </a>
        <p className="text-[10px] text-groovetop-navy/25">
          &copy; 2026 Raymond Merrill II. Portfolio case study.
        </p>
      </div>
    </footer>
  );
}
