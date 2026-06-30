"use client";

import { useLanguage } from "@/app/context/ToogleLang";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

// ─── Variants ────────────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const cardContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const cardItem = {
  hidden: { opacity: 0, y: 20, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const timelineContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18, delayChildren: 0.1 } },
};

const timelineItem = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const developer = {
  name: "Mohamad Noor",
  role: "Frontend Developer",
  seniority: "Mid-Level",
  location: "Syria,Hama",
};

const experiences = [
  { year: "2024", titleKey: "journey.2024.role", descKey: "journey.2024.desc" },
  { year: "2025", titleKey: "journey.2025.role", descKey: "journey.2025.desc" },
  { year: "2026", titleKey: "journey.2026.role", descKey: "journey.2026.desc" },
];

const codeLines = [
  <>
    <span className="text-[#c586c0]">const </span>
    <span className="text-[#9cdcfe]">developer</span>
    <span className="text-[#d4d4d4]"> = </span>
    <span className="text-[#dcdcaa]">{"{"}</span>
  </>,
  <>
    &nbsp;&nbsp;<span className="text-[#c586c0]">name</span>
    <span className="text-[#d4d4d4]">: </span>
    <span className="text-[#ce9178]">'{developer.name}'</span>
    <span>,</span>
  </>,
  <>
    &nbsp;&nbsp;<span className="text-[#c586c0]">role</span>
    <span className="text-[#d4d4d4]">: </span>
    <span className="text-[#ce9178]">'{developer.role}'</span>
    <span>,</span>
  </>,
  <>
    &nbsp;&nbsp;<span className="text-[#c586c0]">seniority</span>
    <span className="text-[#d4d4d4]">: </span>
    <span className="text-[#ce9178]">'{developer.seniority}'</span>
    <span>,</span>
  </>,
  <>
    &nbsp;&nbsp;<span className="text-[#c586c0]">location</span>
    <span className="text-[#d4d4d4]">: </span>
    <span className="text-[#ce9178]">'{developer.location}'</span>
    <span>,</span>
  </>,
  null,
  <>
    &nbsp;&nbsp;<span className="text-[#c586c0]">skills</span>
    <span className="text-[#d4d4d4]">: </span>
    <span className="text-[#dcdcaa]">{"["}</span>
  </>,
  <>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <span className="text-[#6b69a3]">{"// frontend"}</span>
  </>,
  <>
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#dcdcaa]">React</span>
    <span>, </span>
    <span className="text-[#dcdcaa]">Next.js</span>
    <span>, </span>
    <span className="text-[#dcdcaa]">Shadcn</span>
    <span>,</span>
  </>,
  <>
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#dcdcaa]">TypeScript</span>
    <span>, </span>
    <span className="text-[#dcdcaa]">TailwindCss</span>
    <span>,</span>
  </>,
  <>
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#dcdcaa]">JavaScript</span>
    <span>, </span>
    <span className="text-[#dcdcaa]">CSS</span>
    <span>, </span>
    <span className="text-[#dcdcaa]">HTML</span>
    <span>,</span>
  </>,
  null,
  <>
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#6b69a3]">{"// tools"}</span>
  </>,
  <>
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#dcdcaa]">il8n</span>
    <span>, </span>
    <span className="text-[#dcdcaa]">Git</span>
    <span>, </span>
    <span className="text-[#dcdcaa]">GitHub</span>
    <span>,</span>
  </>,
  <>
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#dcdcaa]">Zod</span>
    <span>, </span>
    <span className="text-[#dcdcaa]">Zustand</span>
    <span>, </span>
    <span className="text-[#dcdcaa]">React Hook Form</span>
    <span>,</span>
  </>,
  <>
    &nbsp;&nbsp;<span>{"]"}</span>
    <span>,</span>
  </>,
  null,
  <>
    &nbsp;&nbsp;<span className="text-[#c586c0]">experience</span>
    <span>: </span>
    <span className="text-[#b5cea8]">1+</span>
    <span>, </span>
    <span className="text-[#6b69a3]">{"// years"}</span>
  </>,
  <>
    &nbsp;&nbsp;<span className="text-[#c586c0]">projects</span>
    <span>: </span>
    <span className="text-[#b5cea8]">3+</span>
    <span>,</span>
  </>,
  <>
    &nbsp;&nbsp;<span className="text-[#c586c0]">available</span>
    <span>: </span>
    <span className="text-[#569cd6]">true</span>
    <span>,</span>
  </>,
  null,
  <>
    &nbsp;&nbsp;<span className="text-[#c586c0]">passions</span>
    <span>: </span>
    <span>{"["}</span>
    <span className="text-[#dcdcaa]">'clean code'</span>
    <span>, </span>
    <span className="text-[#dcdcaa]">'great Ui Ux'</span>
    <span>, </span>
    <span className="text-[#dcdcaa]">'Responsive Design'</span>
    <span>{"]"}</span>
    <span>,</span>
  </>,
  <>
    <span>{"}"}</span>
    <span>;</span>
  </>,
  null,
  <>
    <span className="text-[#c586c0]">export default </span>
    <span className="text-[#dcdcaa]">developer</span>
    <span>;</span>
  </>,
];

// ─── About ────────────────────────────────────────────────────────────────────

export default function About() {
  const { t } = useTranslation();
  const { lang } = useLanguage();

  const snapshots = [
    {
      label: t("about.years"),
      value: "1+",
      accent: "from-violet-400 to-fuchsia-500",
    },
    {
      label: t("about.projects"),
      value: "3+",
      accent: "from-cyan-400 to-blue-500",
    },
    {
      label: t("about.toolset"),
      value: "React · Next.js",
      accent: "from-emerald-400 to-teal-500",
    },
    {
      label: t("about.status"),
      value: t("about.openToWork"),
      accent: "from-fuchsia-400 to-violet-500",
    },
  ];

  return (
    <section
      className="relative py-24 text-white"
      id="about"
      // style={{ direction: lang === "en" ? "ltr" : "rtl" }}
    >
      {/* Background orbs */}
      <div className="pointer-events-none absolute inset-0" />
      <div className="absolute right-[20%] top-1/4 h-[400px] w-[400px] rounded-full bg-fuchsia-500/8 blur-3xl" />
      <div className="absolute bottom-1/3 left-[10%] h-[350px] w-[350px] rounded-full bg-violet-500/8 blur-3xl" />

      <div className="relative mx-auto max-w-[1240px] px-6 lg:px-12">
        {/* ── Header ── */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-16 space-y-4 text-center md:mb-24"
        >
          <motion.p
            variants={item}
            className="text-sm uppercase tracking-[0.4em] text-violet-500"
          >
            {t("about.badge")}
          </motion.p>
          <motion.h2
            variants={item}
            className="text-5xl font-bold leading-tight tracking-[-0.03em] md:text-6xl"
          >
            {t("about.title")}
          </motion.h2>
          <motion.p
            variants={item}
            className="mx-auto max-w-2xl text-lg text-slate-300"
          >
            {t("about.subtitle")}
          </motion.p>
        </motion.div>

        {/* ── Main Grid ── */}
        <div className="mb-20 grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Code block */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={0}
            style={{ direction: "ltr" }}
          >
            <div
              className="overflow-hidden rounded-2xl border border-violet-500/30"
              style={{
                background: "#0d0d14",
                boxShadow: "0 0 40px rgba(124,106,245,0.2)",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "13px",
                lineHeight: "1.7",
              }}
            >
              {/* Mac bar */}
              <div
                className="flex items-center gap-2 border-b border-violet-500/20 px-4 py-2"
                style={{ background: "rgba(255,255,255,0.04)" }}
              >
                <span className="h-[11px] w-[11px] rounded-full bg-[#ff5f57]" />
                <span className="h-[11px] w-[11px] rounded-full bg-[#febc2e]" />
                <span className="h-[11px] w-[11px] rounded-full bg-[#28c840]" />
                <span className="ml-2 text-[11px] tracking-wide text-[#6b69a3]">
                  Noor.jsx
                </span>
              </div>

              {/* Lines */}
              <div className="overflow-x-auto py-5">
                {codeLines.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.03 }}
                    className="group flex min-h-[1.7em] px-5 transition-colors hover:bg-white/[0.025]"
                  >
                    <span
                      className="mr-6 min-w-[24px] flex-shrink-0 select-none text-right"
                      style={{ color: "#3a3a55" }}
                    >
                      {i + 1}
                    </span>
                    <span>{line ?? <>&nbsp;</>}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Snapshot cards */}
          <motion.aside
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={0.15}
            className="relative overflow-hidden rounded-[2rem] border border-violet-500/15 bg-slate-950/80 p-8 shadow-[0_35px_100px_rgba(15,23,42,0.3)] backdrop-blur-xl"
          >
            <div className="pointer-events-none absolute -right-[120px] top-16 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl" />

            <div className="relative space-y-8">
              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0.2}
                className="leading-8 text-slate-400"
              >
                {t("about.bio")}
              </motion.p>

              <motion.div
                variants={cardContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid gap-4 sm:grid-cols-2"
              >
                {snapshots.map((snap) => (
                  <motion.div
                    key={snap.label}
                    variants={cardItem}
                    whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                    className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
                  >
                    <div
                      className={`mb-3 h-1.5 rounded-full bg-gradient-to-r ${snap.accent}`}
                    />
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
                      {snap.label}
                    </p>
                    <p className="mt-3 text-[18px] font-semibold text-white md:text-[20px]">
                      {snap.value}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.aside>
        </div>

        {/* ── Timeline ── */}
        <div className="mt-24 space-y-12">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="space-y-4 text-center"
          >
            <motion.h3
              variants={item}
              className="text-4xl font-bold md:text-5xl"
            >
              {t("journey.title")}
            </motion.h3>
            <motion.p
              variants={item}
              className="mx-auto max-w-2xl text-slate-400"
            >
              {t("journey.subtitle")}
            </motion.p>
          </motion.div>

          <motion.div
            variants={timelineContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="mx-auto max-w-2xl space-y-6"
          >
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                variants={timelineItem}
                className="group relative overflow-hidden rounded-2xl border border-violet-500/20 bg-gradient-to-r from-white/8 to-white/3 p-6 shadow-[0_8px_20px_rgba(147,51,234,0.1)] backdrop-blur-xl transition-all duration-500"
              >
                {/* hover glow overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-fuchsia-500/15 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* timeline connector */}
                {idx < experiences.length - 1 && (
                  <div className="absolute -bottom-6 left-8 h-8 w-0.5 bg-gradient-to-b from-violet-500/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                )}

                <div className="relative flex gap-6">
                  {/* dot + line */}
                  <div className="flex flex-col items-center gap-2">
                    <motion.div
                      className="h-4 w-4 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-600 shadow-[0_0_16px_rgba(147,51,234,0.6)]"
                      whileHover={{
                        scale: 1.3,
                        boxShadow: "0 0 24px rgba(147,51,234,0.9)",
                      }}
                      transition={{ duration: 0.2 }}
                    />
                    {idx < experiences.length && (
                      <div className="h-12 w-0.5 bg-gradient-to-b from-violet-500/40 to-transparent" />
                    )}
                  </div>

                  {/* content */}
                  <div className="space-y-2 pb-4">
                    <div className="inline-flex items-center gap-2 rounded-full bg-violet-500/20 px-3 py-1">
                      <span className="text-xs font-semibold text-violet-300">
                        {exp.year}
                      </span>
                    </div>
                    <h4 className="text-xl font-bold text-white">
                      {t(exp.titleKey)}
                    </h4>
                    <p className="text-slate-400">{t(exp.descKey)}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
