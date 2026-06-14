"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const navItems = ["Home", "About", "Projects", "Skills", "Contact"];
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-[9999] transition-all duration-300 ease-in-out p-2 ${
        scrolled
          ? "bg-white/4 border-b border-purple-500/15 shadow-[0_18px_55px_-30px_rgba(0,0,0,0.5)] backdrop-blur-xl"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-5 py-3 md:px-10 lg:px-14">
        <Link href="/" className="flex items-center gap-3">
          <span className="text-sm font-black text-white hover:text-violet-500 shadow-md  ">
            N7
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-[11px] font-medium uppercase tracking-[0.2em] text-slate-300 transition-colors duration-200 hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              <span className="block pb-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:scale-x-0 after:origin-left after:bg-gradient-to-r after:from-violet-400 after:to-fuchsia-500 after:transition-transform after:duration-300 hover:after:scale-x-100">
                {item}
              </span>
            </Link>
          ))}
        </div>

        <button
          type="button"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200/10 bg-slate-900/75 text-slate-100 shadow-lg shadow-slate-950/30 transition-all duration-200 hover:border-slate-200/20 hover:bg-slate-900/95 md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className="relative h-5 w-5">
            <span
              className={`absolute left-0 top-1/2 h-0.5 w-full rounded-full bg-white transition-all duration-300 ${
                menuOpen ? "rotate-45" : "-translate-y-1.5"
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 h-0.5 w-full rounded-full bg-white transition-all duration-300 ${
                menuOpen ? "opacity-0" : "translate-y-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 h-0.5 w-full rounded-full bg-white transition-all duration-300 ${
                menuOpen ? "-rotate-45" : "translate-y-1.5"
              }`}
            />
          </span>
        </button>
        {/* burger menu */}
      </div>
      {/* responsive menu */}
      <div
        className={`md:hidden overflow-hidden text-center transition-[max-height] duration-500 ease-out ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="mx-auto max-w-[1280px] px-5 pb-6 pt-2 md:px-8">
          <div className="relative rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.4)] backdrop-blur-2xl overflow-hidden">
            {/* Animated background accent */}
            <div className="absolute inset-0 rounded-[1.75rem] bg-gradient-to-r from-violet-500/0 via-violet-400/10 to-fuchsia-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Gradient border glow effect */}
            <div className="absolute -inset-px rounded-[1.75rem] bg-gradient-to-br from-violet-500/20 via-fuchsia-500/10 to-transparent opacity-0 -z-10 blur-xl" />

            <div className="relative flex flex-col gap-2">
              {navItems.map((item, idx) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="group relative rounded-[1.25rem] border border-white/15 bg-gradient-to-r from-white/8 to-white/3 px-5 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-100 transition-all duration-300 hover:border-violet-400/60 hover:from-white/12 hover:to-white/6 hover:shadow-[0_8px_32px_rgba(147,51,234,0.2)] hover:scale-105 active:scale-95"
                >
                  <span className="pl-3 block">{item}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* responsive menu */}
    </nav>
  );
}
