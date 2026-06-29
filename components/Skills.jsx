"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "motion/react";
import { IoLogoHtml5 } from "react-icons/io5";
import { FaCss3 } from "react-icons/fa6";
import { AiOutlineJavaScript } from "react-icons/ai";
import { TbBrandTypescript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { IoIosGitBranch, IoLogoGithub } from "react-icons/io";
import { MdTranslate } from "react-icons/md";
import { BiLogoVisualStudio } from "react-icons/bi";
import { SiZod, SiShadcnui, SiReacthookform, SiRedux } from "react-icons/si";
import { useLanguage } from "@/app/context/ToogleLang";

// ─── Data ─────────────────────────────────────────────────────────────────────

const core = [
  {
    name: "HTML",
    level: "Expert",
    pct: 100,
    color: "#D85A30",
    bg: "rgba(216,90,48,0.12)",
    abbr: <IoLogoHtml5 />,
  },
  {
    name: "CSS",
    level: "Expert",
    pct: 100,
    color: "#378ADD",
    bg: "rgba(55,138,221,0.12)",
    abbr: <FaCss3 />,
  },
  {
    name: "JavaScript",
    level: "Advanced",
    pct: 90,
    color: "#BA7517",
    bg: "rgba(186,117,23,0.12)",
    abbr: <AiOutlineJavaScript />,
  },
  {
    name: "TypeScript",
    level: "Intermediate",
    pct: 75,
    color: "#185FA5",
    bg: "rgba(24,95,165,0.12)",
    abbr: <TbBrandTypescript />,
  },
];

const frameworks = [
  {
    name: "React",
    level: "Advanced",
    pct: 90,
    color: "#1D9E75",
    bg: "rgba(29,158,117,0.12)",
    abbr: <FaReact />,
  },
  {
    name: "Next.js",
    level: "Intermediate",
    pct: 80,
    color: "#888780",
    bg: "rgba(136,135,128,0.12)",
    abbr: <RiNextjsLine />,
  },
  {
    name: "TailwindCSS",
    level: "Advanced",
    pct: 100,
    color: "#378ADD",
    bg: "rgba(55,138,221,0.12)",
    abbr: <RiTailwindCssFill />,
  },
];

const devTools = [
  { name: "Git", icon: <IoIosGitBranch /> },
  { name: "GitHub", icon: <IoLogoGithub /> },
  { name: "i18n", icon: <MdTranslate /> },
  { name: "VS Code", icon: <BiLogoVisualStudio /> },
];
const stateLibs = [
  { name: "Zustand", icon: "" },
  { name: "Redux Toolkit", icon: <SiRedux /> },
  { name: "React Hook Form", icon: <SiReacthookform /> },
];
const valLibs = [
  { name: "Zod", icon: <SiZod /> },
  { name: "Shadcn/ui", icon: <SiShadcnui /> },
  { name: "Material UI", icon: "" },
];

const TABS = ["frontend", "tools", "all"];

// ─── Variants ─────────────────────────────────────────────────────────────────

const headerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const headerItem = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const gridContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
const cardVariant = {
  hidden: { opacity: 0, y: 20, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const toolGroupContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};
const toolGroupItem = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

const pillContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};
const pillVariant = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

const tabContent = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
  exit: { opacity: 0, y: -8, transition: { duration: 0.25 } },
};

// ─── SectionLabel ─────────────────────────────────────────────────────────────

function SectionLabel({ children }) {
  return (
    <p className="mb-3.5 flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-[2.5px] text-slate-400">
      {children}
      <span className="h-px flex-1 bg-violet-500/50" />
    </p>
  );
}

// ─── SkillCard ────────────────────────────────────────────────────────────────

function SkillCard({ name, level, pct, color, bg, abbr }) {
  return (
    <motion.div
      variants={cardVariant}
      whileHover={{
        y: -4,
        borderColor: "rgba(139,92,246,0.4)",
        transition: { duration: 0.2 },
      }}
      className="group relative overflow-hidden rounded-[14px] border border-white/[0.06] bg-white/[0.02] p-4"
    >
      {/* Top shimmer */}
      <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/0 to-transparent transition-all duration-300 group-hover:via-violet-500/40" />

      {/* Icon */}
      <div
        className="mb-3 flex h-[34px] w-[34px] items-center justify-center rounded-[9px] text-[15px] font-bold"
        style={{ background: bg, color }}
      >
        {abbr}
      </div>

      <p className="mb-0.5 text-[13.5px] font-semibold text-[#d4d4e8]">
        {name}
      </p>
      <p className="mb-2.5 font-mono text-[11px] text-[#383855]">{level}</p>

      {/* Progress bar — animates when card enters viewport */}
      <div className="h-[2px] w-full overflow-hidden rounded-full bg-white/[0.06]">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-600"
          initial={{ width: "0%" }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        />
      </div>

      <p className="mt-1.5 text-right font-mono text-[10px] text-[#333355]">
        {pct}%
      </p>
    </motion.div>
  );
}

// ─── ToolPill ─────────────────────────────────────────────────────────────────

function ToolPill({ name, icon }) {
  return (
    <motion.span
      variants={pillVariant}
      whileHover={{
        scale: 1.05,
        color: "#a78bfa",
        borderColor: "rgba(139,92,246,0.4)",
        transition: { duration: 0.15 },
      }}
      className="mb-2 mr-1.5 inline-flex cursor-default items-center gap-2 rounded-[8px] border border-white/[0.07] bg-white/[0.03] px-3 py-1.5 text-[12.5px] text-[#5a5a80]"
    >
      {icon}
      {name}
    </motion.span>
  );
}

// ─── ToolGroup ────────────────────────────────────────────────────────────────

function ToolGroup({ title, items }) {
  return (
    <motion.div
      variants={toolGroupItem}
      className="rounded-[14px] border border-white/[0.05] bg-white/[0.02] p-[18px]"
    >
      <p className="mb-3.5 border-b border-violet-500/10 pb-2.5 font-mono text-[10px] uppercase tracking-[2px] text-violet-400">
        {title}
      </p>
      <motion.div
        variants={pillContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-wrap"
      >
        {items.map((t) => (
          <ToolPill key={t.name} {...t} />
        ))}
      </motion.div>
    </motion.div>
  );
}

// ─── Skills ───────────────────────────────────────────────────────────────────

export default function Skills() {
  const { t } = useTranslation();
  const { lang } = useLanguage();
  const [activeTab, setActiveTab] = useState("frontend");

  const allSkills = [...core, ...frameworks];

  return (
    <section
      id="skills"
      className="relative px-6 py-24 text-white lg:px-12"
      style={{ direction: lang === "en" ? "ltr" : "rtl" }}
    >
      <div className="relative mx-auto max-w-[900px]">
        {/* ── Header ── */}
        <motion.div
          variants={headerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-11 space-y-4 text-center"
        >
          <motion.div variants={headerItem}>
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/[0.08] px-4 py-1.5">
              <motion.span
                className="h-1.5 w-1.5 rounded-full bg-violet-400"
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.4, 1] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <span className="font-mono text-[11px] uppercase tracking-[2px] text-violet-300">
                {t("skills.skill")}
              </span>
            </div>
          </motion.div>

          <motion.h2
            variants={headerItem}
            className="flex justify-center text-[40px] font-semibold leading-tight tracking-[-1.5px] text-slate-100"
          >
            {t("skills.badge")}&nbsp;
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent">
              {t("skills.skill")}
            </span>
          </motion.h2>

          <motion.p
            variants={headerItem}
            className="mx-auto max-w-[440px] text-[15px] text-slate-300"
          >
            {t("skills.subtitle")}
          </motion.p>
        </motion.div>

        {/* ── Tabs ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mx-auto mb-9 flex w-fit items-center gap-0.5 rounded-[12px] border border-white/[0.06] bg-white/[0.03] p-1"
        >
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative rounded-[9px] border px-5 py-2 font-mono text-[11px] uppercase tracking-[1px] transition-colors duration-200 ${
                activeTab === tab
                  ? "border-violet-500/25 bg-violet-500/15 text-violet-400"
                  : "border-transparent bg-transparent text-slate-400 hover:text-slate-300"
              }`}
            >
              {tab === "frontend"
                ? t("skills.tab.frontend")
                : tab === "tools"
                  ? t("skills.tab.tools")
                  : t("skills.tab.all")}
            </button>
          ))}
        </motion.div>

        {/* ── Tab content ── */}
        <AnimatePresence mode="wait">
          {/* Frontend */}
          {activeTab === "frontend" && (
            <motion.div
              key="frontend"
              variants={tabContent}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="space-y-7"
            >
              <div>
                <SectionLabel>{t("skills.section.core")}</SectionLabel>
                <motion.div
                  variants={gridContainer}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-2 gap-2.5 sm:grid-cols-4"
                >
                  {core.map((s) => (
                    <SkillCard key={s.name} {...s} />
                  ))}
                </motion.div>
              </div>
              <div>
                <SectionLabel>{t("skills.section.frameworks")}</SectionLabel>
                <motion.div
                  variants={gridContainer}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-2 gap-2.5 sm:grid-cols-3"
                >
                  {frameworks.map((s) => (
                    <SkillCard key={s.name} {...s} />
                  ))}
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* Tools */}
          {activeTab === "tools" && (
            <motion.div
              key="tools"
              variants={tabContent}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.div
                variants={toolGroupContainer}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 gap-4 sm:grid-cols-3"
              >
                <ToolGroup
                  title={t("skills.group.devtools")}
                  items={devTools}
                />
                <ToolGroup title={t("skills.group.state")} items={stateLibs} />
                <ToolGroup
                  title={t("skills.group.validation")}
                  items={valLibs}
                />
              </motion.div>
            </motion.div>
          )}

          {/* All */}
          {activeTab === "all" && (
            <motion.div
              key="all"
              variants={tabContent}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <SectionLabel>{t("skills.section.all")}</SectionLabel>
              <motion.div
                variants={gridContainer}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-2 gap-2.5 sm:grid-cols-4"
              >
                {allSkills.map((s) => (
                  <SkillCard key={s.name} {...s} />
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
