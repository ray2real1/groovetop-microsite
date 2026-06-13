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
        <div className="flex items-center gap-6">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile — link coming soon"
            className="text-xs text-groovetop-navy/50 hover:text-groovetop-navy transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://dribbble.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Dribbble profile — link coming soon"
            className="text-xs text-groovetop-navy/50 hover:text-groovetop-navy transition-colors"
          >
            Dribbble
          </a>
          <a
            href="mailto:ray2real1@gmail.com"
            className="text-xs text-groovetop-navy/50 hover:text-groovetop-navy transition-colors"
          >
            Email
          </a>
        </div>
        <p className="text-[10px] text-groovetop-navy/25">
          &copy; 2026 Raymond Merrill II. Portfolio case study.
        </p>
      </div>
    </footer>
  );
}
