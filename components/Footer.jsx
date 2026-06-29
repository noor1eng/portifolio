import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { FaRegHeart } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

export default function FooterViolet() {
  const { t } = useTranslation();

  const navLinks = [
    { label: t("nav.home"), href: "#home" },
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.projects"), href: "#projects" },
    { label: t("nav.skills"), href: "#skills" },
    { label: t("nav.contact"), href: "#contact" },
  ];

  const socials = [
    {
      label: "GitHub",
      icon: <IoLogoGithub className="text-lg" />,
      href: "https://github.com/noor1eng",
    },
    {
      label: "LinkedIn",
      icon: <FaLinkedin className="text-lg" />,
      href: "https://www.linkedin.com/in/mohammad-noor-b36420399/",
    },
    {
      label: "+963 91 790 432",
      icon: <FaWhatsapp className="text-lg" />,
      // href: "https://www.linkedin.com/in/mohammad-noor-b36420399/",
    },
  ];

  return (
    <footer className="relative overflow-hidden  px-6 md:px-12 pt-16 pb-8 font-[family-name:var(--font-syne)]">
      <div className="relative z-10 mx-auto max-w-6xl">
        {/* ── top divider ── */}
        <div
          className="mb-14 h-px w-full"
          style={{
            background:
              "linear-gradient(90deg,transparent 0%,rgba(124,58,237,0.5) 30%,rgba(167,139,250,0.7) 50%,rgba(124,58,237,0.5) 70%,transparent 100%)",
            boxShadow: "0 0 16px rgba(124,58,237,0.25)",
          }}
        />

        {/* ── main grid ── */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.6fr_1fr_1fr] md:gap-8 lg:gap-16 mb-14">
          {/* ── Brand ── */}
          <div>
            {/* logo */}
            <p className="mb-5 font-[family-name:var(--font-dm-mono)] text-[30px] md:text-[35px] font-bold tracking-[-3px] leading-none text-white">
              NooR
            </p>

            <p className="mb-5 max-w-[260px] text-sm leading-[2] text-slate-400">
              {t("footer.description")}
            </p>
            {/* <Image
              src="/ChatGPT Image Jun 25, 2026, 04_25_35 PM.png"
              alt="Portrait"
              width={520}
              height={640}
              className="h-[560px] w-full object-cover"
            /> */}

            {/* availability badge */}
          </div>

          {/* ── Navigate ── */}
          <div>
            <p className="mb-6 font-[family-name:var(--font-dm-mono)] text-[10px] uppercase tracking-[3px] font-semibold text-violet-400 pb-3 border-b border-violet-500/15">
              {t("footer.navigate")}
            </p>
            <ul className="flex flex-col gap-1">
              {navLinks.map(({ label, href }, idx) => (
                <li key={label}>
                  <a
                    href={href}
                    className="group flex items-center gap-3 py-1.5 text-sm text-slate-400 transition-all duration-300 hover:text-violet-300"
                  >
                    <span className="inline-block h-px w-3 flex-shrink-0 bg-violet-500/40 transition-all duration-300 group-hover:w-5 group-hover:bg-violet-400" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Connect ── */}
          <div>
            <p className="mb-6 font-[family-name:var(--font-dm-mono)] text-[10px] uppercase tracking-[3px] font-semibold text-violet-400 pb-3 border-b border-violet-500/15">
              {t("footer.connect")}
            </p>

            {/* social buttons */}
            <div className="flex flex-col gap-2.5 mb-4">
              {socials.map(({ label, icon, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative overflow-hidden flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.03] px-4 py-3 text-sm text-slate-400 transition-all duration-300 hover:border-violet-400/40 hover:bg-violet-500/[0.08] hover:text-violet-300"
                >
                  {/* shine on hover */}
                  <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-violet-500/0 via-violet-500/[0.06] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="relative transition-transform duration-300 group-hover:scale-110 ">
                    {icon}
                  </span>
                  <span className="relative text-[13px] font-medium">
                    {label}
                  </span>
                  <span className="relative ml-auto text-[10px] text-slate-600 transition-all duration-300 group-hover:text-violet-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    ↗
                  </span>
                </a>
              ))}
            </div>

            {/* email */}
            <div className="flex items-center gap-3 rounded-xl border border-violet-500/15 bg-white/[0.02] px-4 py-3 transition-all duration-300 hover:border-violet-400/30">
              <MdMailOutline className="flex-shrink-0 text-violet-400 text-base" />
              <a
                href="mailto:mohamad.okba99@gmail.com"
                className="font-[family-name:var(--font-dm-mono)] text-[11px] text-slate-400 transition-colors duration-300 hover:text-violet-300 truncate"
              >
                mohamad.okba99@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* ── bottom divider ── */}
        <div
          className="mb-6 h-px w-full"
          style={{
            background:
              "linear-gradient(90deg,transparent 0%,rgba(167,139,250,0.25) 50%,transparent 100%)",
          }}
        />

        {/* ── bottom bar ── */}
        <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="font-[family-name:var(--font-dm-mono)] text-[11px] tracking-wide text-slate-500 text-center sm:text-left">
            © 2026{" "}
            <span className="text-violet-400 font-semibold">Mohamad Noor</span>{" "}
            {t("footer.copyright")}
          </p>

          <p className="font-[family-name:var(--font-dm-mono)] flex items-center gap-2 text-[11px] text-white">
            Built with{" "}
            <span className="text-violet-400">
              <FaRegHeart />
            </span>
            <span className="text-white">By Noor</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
