export default function FooterViolet() {
  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  const socials = [
    { label: "GitHub", icon: <GithubIcon />, href: "https://github.com/" },
    {
      label: "LinkedIn",
      icon: <LinkedinIcon />,
      href: "https://linkedin.com/",
    },
    { label: "Twitter", icon: <TwitterIcon />, href: "https://twitter.com/" },
    { label: "Behance", icon: <BehanceIcon />, href: "https://behance.net/" },
  ];

  const stack = ["Next.js", "TypeScript", "Tailwind"];

  return (
    <footer className="relative overflow-hidden bg-[#0d0d14] px-6 md:px-10 pt-16 md:pt-20 pb-8 md:pb-10 font-[family-name:var(--font-syne)]">
      {/* Enhanced orb glows with layered effect */}
      <div className="pointer-events-none absolute -top-20 -left-20 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.15)_0%,transparent_75%)]" />
      <div className="pointer-events-none absolute bottom-10 right-12 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.1)_0%,transparent_75%)]" />
      <div className="pointer-events-none absolute top-1/2 -left-32 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(236,72,153,0.08)_0%,transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Top gradient divider with enhanced glow */}
        <div
          className="mb-12 md:mb-16 h-px w-full relative"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(124,58,237,0.6) 20%, rgba(167,139,250,0.8) 50%, rgba(124,58,237,0.6) 80%, transparent 100%)",
            boxShadow: "0 0 20px rgba(124,58,237,0.3)",
          }}
        />
        {/* Main grid - enhanced for large screens */}
        <div className="grid grid-cols-1 gap-8 md:gap-12 lg:gap-16 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1.1fr] mb-12 md:mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <p className="mb-4 font-[family-name:var(--font-dm-mono)] text-4xl md:text-5xl font-bold tracking-tighter text-white">
              N
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-500 after:absolute after:-bottom-1 after:left-0 after:h-1 after:w-full after:rounded-full after:bg-gradient-to-r after:from-violet-600 after:to-violet-400">
                7
              </span>
            </p>
            <p className="mb-6 max-w-[240px] text-sm leading-relaxed text-slate-400 hover:text-slate-300 transition-colors duration-300">
              Crafting fast, modern web experiences with meticulous attention to
              every pixel and every line of code.
            </p>
            <div className="inline-flex items-center gap-2 rounded-lg border border-violet-500/30 bg-gradient-to-br from-violet-500/15 to-violet-500/5 px-3.5 py-2 backdrop-blur-sm hover:border-violet-400/60 hover:from-violet-500/25 transition-all duration-300 cursor-pointer group">
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 shadow-lg shadow-emerald-400/50 group-hover:shadow-emerald-400/70 transition-shadow duration-300" />
              <span className="font-[family-name:var(--font-dm-mono)] text-xs tracking-widest uppercase text-violet-300 group-hover:text-violet-200 transition-colors duration-300">
                Available Now
              </span>
            </div>
          </div>

          {/* Navigate */}
          <div className="lg:col-span-1">
            <p className="mb-5 border-b border-violet-500/20 pb-3 font-[family-name:var(--font-dm-mono)] text-xs uppercase tracking-[3px] font-semibold text-violet-400">
              Navigate
            </p>
            <ul className="flex flex-col gap-3.5">
              {navLinks.map(({ label, href }, idx) => (
                <li
                  key={label}
                  style={{ animationDelay: `${idx * 40}ms` }}
                  className="animate-fadeIn"
                >
                  <a
                    href={href}
                    className="group relative flex items-center gap-3 text-sm text-slate-400 hover:text-violet-300 transition-all duration-300"
                  >
                    <span className="inline-block h-0.5 w-2 flex-shrink-0 bg-gradient-to-r from-violet-500 to-violet-400 transition-all duration-300 group-hover:w-6 group-hover:from-fuchsia-400 group-hover:to-violet-400" />
                    <span className="relative">
                      {label}
                      <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-violet-400 to-fuchsia-400 transition-all duration-300 group-hover:w-full" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div className="lg:col-span-1">
            <p className="mb-5 border-b border-violet-500/20 pb-3 font-[family-name:var(--font-dm-mono)] text-xs uppercase tracking-[3px] font-semibold text-violet-400">
              Connect
            </p>
            <div className="mb-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-2.5">
              {socials.map(({ label, icon, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] px-3 py-3 text-[12px] text-slate-400 transition-all duration-300 hover:border-violet-400/50 hover:bg-gradient-to-br hover:from-violet-500/20 hover:to-fuchsia-500/10 hover:text-violet-200"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-600/0 via-transparent to-fuchsia-600/0 group-hover:from-violet-600/10 group-hover:to-fuchsia-600/5 transition-all duration-300" />
                  <div className="relative flex items-center justify-center gap-2 min-h-[24px]">
                    <span className="transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-lg group-hover:drop-shadow-violet-500/50">
                      {icon}
                    </span>
                    <span className="text-xs font-medium hidden sm:inline">
                      {label}
                    </span>
                  </div>
                </a>
              ))}
            </div>
            <div className="rounded-xl border border-violet-500/20 bg-gradient-to-br from-white/8 to-white/3 px-4 py-3 backdrop-blur-sm hover:border-violet-400/40 hover:from-white/12 transition-all duration-300">
              <div className="flex items-center gap-3 min-h-[20px]">
                <MailIcon />
                <span className="font-[family-name:var(--font-dm-mono)] text-xs text-slate-500 hover:text-slate-400 transition-colors duration-300">
                  noor@example.com
                </span>
              </div>
            </div>
          </div>
          {/* Resources - New column for large screens */}
          <div className="hidden lg:block lg:col-span-1">
            <p className="mb-5 border-b border-violet-500/20 pb-3 font-[family-name:var(--font-dm-mono)] text-xs uppercase tracking-[3px] font-semibold text-violet-400">
              Built With
            </p>
            <div className="space-y-3">
              {stack.map((tag, i) => (
                <div
                  key={tag}
                  className="flex items-center gap-2 rounded-lg border border-violet-500/15 bg-white/5 px-3 py-2.5 backdrop-blur-sm hover:border-violet-400/40 hover:bg-white/10 transition-all duration-300 group cursor-default"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-violet-400 to-fuchsia-400 group-hover:shadow-lg group-hover:shadow-violet-400/50 transition-shadow duration-300" />
                  <span className="font-[family-name:var(--font-dm-mono)] text-xs font-semibold text-slate-300 group-hover:text-violet-300 transition-colors duration-300">
                    {tag}
                  </span>
                </div>
              ))}
              <div className="mt-5 rounded-lg border border-violet-500/10 bg-gradient-to-br from-violet-500/10 to-fuchsia-500/5 p-3 backdrop-blur-sm">
                <p className="font-[family-name:var(--font-dm-mono)] text-[11px] text-slate-400">
                  Continuously learning and evolving with latest web
                  technologies.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom divider */}
        <div
          className="mb-8 h-px w-full"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(167,139,250,0.4) 50%, transparent 100%)",
          }}
        />

        {/* Bottom bar - Enhanced with better layout */}
        <div className="flex flex-col items-center justify-between gap-5 md:gap-6 md:flex-row">
          <p className="font-[family-name:var(--font-dm-mono)] text-xs md:text-sm tracking-wide text-slate-500 hover:text-slate-400 transition-colors duration-300 text-center md:text-left order-2 md:order-1">
            © 2025{" "}
            <span className="text-violet-400 font-semibold">Mohamad Noor</span>{" "}
            — All rights reserved
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 order-1 md:order-2">
            {stack.map((tag, i) => (
              <span
                key={tag}
                className={`rounded-lg px-3 py-1.5 font-[family-name:var(--font-dm-mono)] text-xs border transition-all duration-300 ${
                  i === stack.length - 1
                    ? "border-violet-500/30 bg-gradient-to-br from-violet-500/20 to-fuchsia-500/10 text-violet-300 hover:border-violet-400/60 hover:from-violet-500/30 hover:to-fuchsia-500/15"
                    : "border-white/10 bg-white/5 text-slate-400 hover:border-white/20 hover:bg-white/10 hover:text-slate-300"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ── Icons ── */
const GithubIcon = () => (
  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const TwitterIcon = () => (
  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const BehanceIcon = () => (
  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.665 1.45.665 2.36 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-1.16 1.35-.48.348-1.05.6-1.7.76-.63.16-1.29.24-1.97.24H0V4.51h6.938v-.007zM16.94 16.665c.44.428 1.073.643 1.894.643.59 0 1.1-.148 1.533-.447.43-.3.7-.61.8-.93h2.79c-.44 1.347-1.13 2.31-2.06 2.88-.93.57-2.04.86-3.34.86-1.96 0-3.51-.58-4.64-1.73-1.13-1.15-1.7-2.77-1.7-4.88 0-2.02.57-3.65 1.71-4.86 1.14-1.22 2.67-1.82 4.59-1.82 1.23 0 2.3.23 3.19.7.89.47 1.6 1.1 2.12 1.9.52.79.87 1.69 1.04 2.69.17.99.22 2.02.16 3.08H15.56c.05 1.09.38 1.91.82 2.34h.56zm-10.24-4.56c.388 0 .72-.04 1-.13.28-.09.51-.22.7-.39.19-.17.33-.38.43-.63.1-.25.15-.54.15-.87 0-.68-.19-1.18-.57-1.5-.38-.32-.9-.48-1.56-.48H3.5v4h3.2zm9.7-5.49c-.47 0-.87.06-1.21.19-.34.13-.62.3-.85.51-.23.22-.41.48-.54.77-.13.29-.22.6-.27.93h5.55c-.1-.86-.38-1.5-.82-1.93-.45-.43-1.06-.64-1.86-.47zm-9.49 9.56c.45 0 .85-.04 1.2-.13.35-.09.65-.22.88-.4.24-.18.42-.41.55-.7.13-.29.19-.64.19-1.05 0-.83-.23-1.44-.69-1.83-.46-.39-1.08-.59-1.87-.59H3.5v4.7h3.4z" />
  </svg>
);

const MailIcon = () => (
  <svg
    className="h-3.5 w-3.5 flex-shrink-0 text-violet-700"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.75}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <polyline points="2,4 12,13 22,4" />
  </svg>
);
