'use client";';
import Image from "next/image";
import Link from "next/link";
import TextType from "./bits/TextType";
import { FaReact } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { FaRegFolderClosed } from "react-icons/fa6";
import { TbBrandTypescript } from "react-icons/tb";
import { CiMail } from "react-icons/ci";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { useLanguage } from "@/app/context/ToogleLang";

export default function Hero() {
  const { t } = useTranslation();
  const { lang } = useLanguage();
  return (
    <section className={`relative overflow-hidden text-white`} id="home">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(134,83,255,0.18),_transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(122,77,255,0.16),_transparent_18%)]" />
      <div className="absolute left-[40%] top-1/2 h-[360px] w-[360px] -translate-y-1/2 rounded-full bg-violet-500/10 blur-3xl" />
      <div className="relative mx-auto flex min-h-screen max-w-[1240px] items-center px-6 py-24 lg:py-20 lg:px-12">
        <div className="grid  w-full gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-white/5 px-4 py-2 text-sm text-violet-200 shadow-[0_0_40px_rgba(147,51,234,0.12)]"
            >
              <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.7)] dot-sparkle" />
              {t("hero.available")}
            </motion.div>

            <div className="space-y-4 max-w-xl">
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-sm uppercase tracking-[0.4em] text-violet-500 "
              >
                {t("hero.greeting")}
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`lg:text-[55px] text-[50px] md:block flex ${lang == "ar" ? "flex-col-reverse" : "flex-col"} font-semibold leading-tight tracking-[-0.03em]`}
              >
                <span>{t("hero.role")}</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-600">
                  <TextType
                    text={t("hero.dev")}
                    typingSpeed={95}
                    pauseDuration={3800}
                    showCursor={false}
                    deletingSpeed={50}
                  />
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.4,
                }}
                className="text-base text-slate-300 max-w-[350px] text-[19px] leading-[1.7]"
              >
                {t("hero.description")}
              </motion.p>
            </div>

            <div className="grid grid-cols-2 gap-3 max-w-md sm:grid-cols-3">
              {["React", "Next.js", "TypeScript"].map((tech, idx) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.7 + idx * 0.15,
                    duration: 0.4,
                  }}
                  key={tech}
                  className="group relative"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  {/* Animated background glow */}
                  <div className="absolute inset-0 rounded-[1.5rem] bg-gradient-to-br from-violet-500/20 to-fuchsia-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg" />

                  <span className="relative rounded-[1.5rem] flex justify-center items-center gap-2 border border-white/15 bg-gradient-to-br from-white/8 to-white/3 px-4 py-3 text-xs font-medium text-slate-100 shadow-[0_8px_32px_rgba(147,51,234,0.1)] hover:shadow-[0_12px_48px_rgba(147,51,234,0.25)] backdrop-blur-xl transition-all duration-500 group-hover:border-violet-400/50 group-hover:from-white/12 group-hover:to-white/5 ">
                    {tech == "React" ? (
                      <FaReact className="text-cyan-400 text-sm group-hover:text-sky-300 transition-colors duration-500" />
                    ) : tech == "Next.js" ? (
                      <RiNextjsLine className="text-white text-sm group-hover:text-violet-300 transition-colors duration-500" />
                    ) : (
                      <TbBrandTypescript className="text-blue-400 text-sm group-hover:text-cyan-300 transition-colors duration-500" />
                    )}
                    {tech}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.8,
                duration: 0.7,
              }}
              className="flex items-center flex-wrap justify-center sm:justify-start gap-4 sm:gap-4 pt-2 "
            >
              <Link
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-500  to-fuchsia-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_50px_rgba(134,83,255,0.28)]"
              >
                <FaRegFolderClosed />
                {t("hero.viewProjects")}
                <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="#contact"
                className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-2xl border border-violet-500/50 bg-transparent px-6 py-3 text-sm font-semibold text-violet-100 transition hover:border-violet-600"
              >
                <CiMail />
                {t("hero.contactMe")}
              </Link>
            </motion.div>
          </div>

          <div className="relative mx-auto flex max-w-[520px] justify-end group">
            {/* Animated background orbs */}
            <div
              className="absolute -top-20 -right-20 w-72 h-72 bg-violet-500/20 rounded-full filter blur-3xl "
              style={{ animationDuration: "4s" }}
            />
            <div
              className="absolute -bottom-20 -left-20 w-64 h-64 bg-fuchsia-500/15 rounded-full filter blur-3xl"
              style={{ animationDuration: "5s", animationDelay: "1s" }}
            />

            <div className="relative w-full max-w-[420px] rounded-[2.5rem] border border-white/20 bg-gradient-to-br from-white/5 to-white/[0.02] p-4 shadow-[0_40px_120px_rgba(0,0,0,0.65)] backdrop-blur-xl overflow-hidden group/card hover:border-violet-400/40 transition-all duration-500">
              {/* Animated gradient border effect */}
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-r from-violet-500/0 via-violet-400/20 to-fuchsia-500/0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />

              {/* Image container with enhanced effects */}
              <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-[#0b0912] shadow-[inset_0_0_80px_rgba(133,77,255,0.15)] group-hover/card:shadow-[inset_0_0_120px_rgba(133,77,255,0.25)] transition-all duration-500">
                {/* Image with hover scale effect */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.8,
                    duration: 0.7,
                  }}
                  className="relative overflow-hidden h-[560px] w-full group-hover/card:scale-105 transition-transform duration-700"
                >
                  <Image
                    src="/avatar-transparent.png"
                    alt="Portrait"
                    width={520}
                    height={640}
                    className="h-[560px] w-full object-cover"
                    priority
                  />

                  {/* Animated overlay gradient */}
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950/95 via-slate-950/50 to-transparent group-hover/card:h-24 transition-all duration-500" />

                  {/* Animated light effect on hover */}
                </motion.div>
              </div>

              {/* Stats card with enhanced animation */}
              <div className="absolute right-4 bottom-6 w-full max-w-[280px] rounded-[1.75rem] border border-white/20 bg-gradient-to-br from-slate-900/50 to-slate-950/30 p-5 text-sm text-slate-200 shadow-[0_28px_90px_rgba(15,23,42,0.6)] backdrop-blur-3xl ring-1 ring-white/10 group-hover/card:border-violet-400/30 group-hover/card:bg-gradient-to-br group-hover/card:from-slate-900/60 group-hover/card:to-slate-950/40 transition-all duration-500 animate-slideUpStaggered">
                {/* Animated top accent line */}
                <div className="absolute inset-x-5 top-4 h-0.5 rounded-full bg-gradient-to-r from-violet-400 via-fuchsia-500 to-cyan-400 opacity-80 group-hover/card:opacity-100 group-hover/card:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all duration-500" />

                <div className="grid gap-4 pt-3">
                  <div className="grid gap-1 text-[0.8rem] text-slate-300">
                    <span
                      className="text-violet-300 text-xs uppercase tracking-[0.25em] font-medium "
                      style={{ animationDelay: "0.4s" }}
                    >
                      {t("stats.experience")}
                    </span>
                    <p
                      className="text-xl font-semibold text-white mt-1 "
                      style={{ animationDelay: "0.5s" }}
                    >
                      {t("stats.projects")}
                    </p>
                    <p
                      className="text-2xl font-bold text-violet-300 mt-1 group-hover/card:text-fuchsia-400 transition-colors duration-500 "
                      style={{ animationDelay: "0.6s" }}
                    >
                      3+
                    </p>
                  </div>
                  <div className="border-t border-white/10 pt-4 text-slate-300">
                    <p
                      className="text-xs uppercase tracking-[0.3em] text-slate-500 "
                      style={{ animationDelay: "0.7s" }}
                    >
                      {t("stats.satisfaction")}
                    </p>
                    <p
                      className="mt-2 text-2xl font-bold text-white group-hover/card:text-emerald-300 transition-colors duration-500 "
                      style={{ animationDelay: "0.8s" }}
                    >
                      100%
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
