"use client";
import { useLanguage } from "@/app/context/ToogleLang";
import { useTranslation } from "react-i18next";
import { MdArrowOutward } from "react-icons/md";
import { PiGitFork } from "react-icons/pi";
import Image from "next/image";
import { motion } from "motion/react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const projects = [
  {
    id: 1,
    num: "01",
    titleKey: "projects.ecommerce.title",
    descKey: "projects.ecommerce.desc",
    category: "Full Stack",
    gradient: "linear-gradient(135deg,#1a1030 0%,#2d1b6b 50%,#0f1a2e 100%)",
    cover: "/Screenshot 2026-06-27 151752.png",
    tech: [
      { label: "React.js", style: "pill-purple" },
      { label: "Shadcn.io", style: "pill-cyan" },
      { label: "Tailwind", style: "pill-green" },
      { label: "Laravel", style: "pill-amber" },
      { label: "MySql", style: "pill-pink" },
    ],
    github: "https://github.com/noor1eng/E-commerce",
    live: "https://e-commerce-noor.netlify.app/",
  },
  {
    id: 2,
    num: "02",
    titleKey: "projects.portfolio.title",
    descKey: "projects.portfolio.desc",
    category: "Frontend",
    gradient: "linear-gradient(135deg,#0d0d1a 0%,#1a1040 50%,#0a0a14 100%)",
    cover: "/Screenshot 2026-06-27 151620.png",
    tech: [
      { label: "Next.js", style: "pill-cyan" },
      { label: "Tailwind", style: "pill-green" },
      { label: "Motion.dev", style: "pill-purple" },
    ],
    github: "https://github.com/noor1eng/portifolio",
    live: "https://portifolio-noor.netlify.app/",
  },
  {
    id: 3,
    num: "03",
    titleKey: "projects.taskmanager.title",
    descKey: "projects.taskmanager.desc",
    category: "React",
    gradient: "linear-gradient(135deg,#0d0d1a 0%,#1a1040 50%,#0a0a14 100%)",
    cover: "/Screenshot 2026-06-27 151922.png",
    tech: [
      { label: "React", style: "pill-cyan" },
      { label: "Material UI", style: "pill-purple" },
      { label: "Tailwind", style: "pill-green" },
    ],
    github: "https://github.com/noor1eng/todo-list",
    live: "https://noor1eng.github.io/todo-list/",
  },
];

const pillColorClasses = {
  "pill-purple": "bg-purple-500/20 text-purple-300 border border-purple-500/30",
  "pill-cyan": "bg-cyan-500/20   text-cyan-300   border border-cyan-500/30",
  "pill-green": "bg-green-500/20  text-green-300  border border-green-500/30",
  "pill-pink": "bg-pink-500/20   text-pink-300   border border-pink-500/30",
  "pill-amber": "bg-amber-500/20  text-amber-300  border border-amber-500/30",
};

// ─── Variants ─────────────────────────────────────────────────────────────────

const headerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.1 } },
};

const headerItem = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const gridContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 36, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const pillContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const pillItem = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

// ─── TechPill ─────────────────────────────────────────────────────────────────

function TechPill({ label, style }) {
  return (
    <motion.span
      variants={pillItem}
      className={`px-2.5 py-1 rounded text-xs font-medium font-mono tracking-wide ${pillColorClasses[style]}`}
    >
      {label}
    </motion.span>
  );
}

// ─── ProjectCard ──────────────────────────────────────────────────────────────

function ProjectCard({ project }) {
  const { t } = useTranslation();
  const { lang } = useLanguage();

  return (
    <motion.div
      variants={cardVariant}
      whileHover={{
        y: -8,
        boxShadow: "0 20px 48px rgba(147,51,234,0.3)",
        borderColor: "rgba(139,92,246,0.5)",
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-violet-500/20 bg-gray-900 cursor-pointer"
    >
      {/* Image area */}
      <div
        className="relative w-full overflow-hidden bg-black"
        style={{ aspectRatio: "16/9" }}
      >
        <div
          className="absolute inset-0"
          style={{ background: project.gradient }}
        />
        <Image
          src={project.cover}
          alt={t(project.titleKey)}
          fill
          sizes="(max-width:768px) 100vw, (max-width:1280px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-700 group-hover:scale-108"
          style={{ transition: "transform 0.7s cubic-bezier(0.22,1,0.36,1)" }}
          priority={project.id <= 2}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
        {/* Shine on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/0 to-fuchsia-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-10" />
        {/* Category badge */}
        <div className="absolute right-3 top-3 z-10">
          <span className="rounded-lg border border-white/10 bg-black/40 px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-white/90 backdrop-blur-md">
            {project.category}
          </span>
        </div>
      </div>

      {/* Card body */}
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <div className="mb-1 font-mono text-[10px] tracking-widest text-gray-600">
          {project.num}
        </div>

        <h3 className="mb-3 text-base font-semibold tracking-tight text-white/95 md:text-lg">
          {t(project.titleKey)}
        </h3>

        <p className="mb-4 flex-1 text-sm font-light leading-relaxed text-gray-400">
          {t(project.descKey)}
        </p>

        {/* Tech pills — staggered */}
        <motion.div
          variants={pillContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-5 flex flex-wrap gap-1.5"
        >
          {project.tech.map((tech) => (
            <TechPill key={tech.label} label={tech.label} style={tech.style} />
          ))}
        </motion.div>

        {/* Action buttons */}
        <div className="mt-auto flex items-center gap-2.5">
          <motion.a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group/btn relative inline-flex flex-1 items-center justify-center gap-2 overflow-hidden rounded-xl border border-violet-500/30 bg-slate-900/50 px-3 py-2.5 text-[10px] font-mono font-medium uppercase tracking-widest text-violet-300 transition-all duration-300 hover:border-violet-400/60 hover:bg-violet-500/10 hover:text-violet-100 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] md:text-xs"
          >
            <MdArrowOutward className="flex-shrink-0" />
            {t("projects.liveDemo")}
          </motion.a>

          <motion.a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group/btn relative inline-flex flex-1 items-center justify-center gap-2 overflow-hidden rounded-xl border border-violet-500/30 bg-slate-900/50 px-3 py-2.5 text-[10px] font-mono font-medium uppercase tracking-widest text-violet-300 transition-all duration-300 hover:border-violet-400/60 hover:bg-violet-500/10 hover:text-violet-100 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] md:text-xs"
          >
            <PiGitFork className="flex-shrink-0" />
            {t("projects.sourceCode")}
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Projects ─────────────────────────────────────────────────────────────────

export default function Projects() {
  const { t } = useTranslation();

  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:px-10" id="projects">
      {/* Header */}
      <motion.div
        variants={headerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {/* Badge */}
        <motion.div variants={headerItem} className="mb-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-violet-400">
            <motion.span
              className="h-1.5 w-1.5 rounded-full bg-violet-400"
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.4, 1] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            {t("projects.badge")}
          </div>
        </motion.div>

        {/* Title */}
        <motion.h2
          variants={headerItem}
          className="text-4xl font-bold leading-tight tracking-tight text-white lg:text-5xl"
        >
          {t("projects.title").split(" ")[0]}{" "}
          <span className="bg-gradient-to-r from-violet-500 to-fuchsia-400 bg-clip-text text-transparent">
            {t("projects.title").split(" ").slice(1).join(" ")}
          </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          variants={headerItem}
          className="mb-14 mt-4 max-w-2xl text-base leading-relaxed text-gray-400 md:text-lg"
        >
          {t("projects.subtitle")}
        </motion.p>
      </motion.div>

      {/* Grid — staggered cards */}
      <motion.div
        variants={gridContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:gap-7"
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </section>
  );
}
