"use client";
const projects = [
  {
    id: 1,
    num: "01",
    title: "E-Commerce Platform",
    description:
      "A full-featured online store with cart management, Stripe payments, real-time inventory, and a sleek admin dashboard. Built for performance with SSR and ISR.",
    tags: ["react", "nextjs", "typescript", "fullstack"],
    category: "Full Stack",
    gradient: "linear-gradient(135deg,#1a1030 0%,#2d1b6b 50%,#0f1a2e 100%)",
    emoji: "🛒",
    featured: true,
    tech: [
      { label: "Next.js", style: "pill-purple" },
      { label: "TypeScript", style: "pill-cyan" },
      { label: "Tailwind", style: "pill-green" },
      { label: "Stripe", style: "pill-amber" },
      { label: "Prisma", style: "pill-pink" },
    ],
    github: "#",
    live: "#",
  },
  {
    id: 2,
    num: "02",
    title: "Analytics Dashboard",
    description:
      "Real-time data visualization dashboard with dynamic charts, KPI tracking, and customizable widgets. Responsive across all screens.",
    tags: ["react", "typescript"],
    category: "React",
    gradient: "linear-gradient(135deg,#0a1628 0%,#0e3a5c 50%,#061220 100%)",
    emoji: "📊",
    featured: false,
    tech: [
      { label: "React", style: "pill-cyan" },
      { label: "Recharts", style: "pill-purple" },
      { label: "TypeScript", style: "pill-green" },
    ],
    github: "#",
    live: "#",
  },
  {
    id: 3,
    num: "03",
    title: "AI Chat App",
    description:
      "AI-powered chat interface with streaming responses, conversation memory, and markdown rendering. Integrated with OpenAI and Firebase.",
    tags: ["react", "fullstack"],
    category: "Full Stack",
    gradient: "linear-gradient(135deg,#0d1f0d 0%,#1a4a1a 50%,#081408 100%)",
    emoji: "🤖",
    featured: false,
    tech: [
      { label: "React", style: "pill-green" },
      { label: "OpenAI", style: "pill-amber" },
      { label: "Firebase", style: "pill-pink" },
    ],
    github: "#",
    live: "#",
  },
];

const pillColorClasses = {
  "pill-purple": "bg-purple-500/20 text-purple-300 border border-purple-500/30",
  "pill-cyan": "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30",
  "pill-green": "bg-green-500/20 text-green-300 border border-green-500/30",
  "pill-pink": "bg-pink-500/20 text-pink-300 border border-pink-500/30",
  "pill-amber": "bg-amber-500/20 text-amber-300 border border-amber-500/30",
};

function TechPill({ label, style }) {
  return (
    <span
      className={`px-2.5 py-1 rounded text-xs font-medium font-mono tracking-wide ${pillColorClasses[style]}`}
    >
      {label}
    </span>
  );
}

function ProjectCard({ project, featured }) {
  return (
    <div
      className={`relative rounded-2xl overflow-hidden transition-all hover:-translate-y-1.5 hover:shadow-[0_6px_10px_rgba(147,51,234,0.3)]  duration-200 cursor-pointer border border-violet-500/20 bg-gray-900 hover:bg-gradient-to-r from-violet-500/10 to-fuchsia-500/20
      } ${featured ? "col-span-full grid grid-cols-1" : ""}`}
    >
      {/* Image area */}
      <div
        className={`relative flex items-center justify-center overflow-hidden ${featured ? "h-full min-h-64" : "h-52"}`}
      >
        <div
          className={`absolute inset-0 transition-transform duration-500 hover:scale-105`}
          style={{ background: project.gradient }}
        />
        <span
          className={`text-5xl relative z-10 transition-transform duration-300 hover:scale-110 hover:-right-5 
          }`}
        >
          {project.emoji}
        </span>
        <div className="absolute inset-0 bg-black/30 flex items-start justify-end p-4 z-20">
          <span className="bg-black/10 backdrop-blur-lg border border-white/10 px-3 py-1 rounded-lg text-xs font-medium text-white/90 tracking-wider uppercase">
            {project.category}
          </span>
        </div>
      </div>

      {/* Card body */}
      <div className="p-6 relative z-10">
        <div className="font-mono text-xs text-gray-500 mb-1">
          {project.num}
        </div>
        <div className="flex flex-col justify-between items-start gap-3 mb-2.5">
          <h3 className="text-lg font-semibold text-white/95 tracking-tight">
            {project.title}{" "}
          </h3>
          <div className="flex gap-2 flex-shrink-0">
            {[project.live].map((href, i) => (
              <a
                key={i}
                href={href}
                className="group relative inline-flex items-center gap-2 px-4 py-2 text-sm font-medium uppercase tracking-[0.35em]"
              >
                {/* Gradient background layer */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-violet-500/20 to-fuchsia-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Border with glow */}
                <div className="absolute inset-0 rounded-lg border border-violet-500/30 group-hover:border-violet-400/60 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all duration-300" />

                {/* Background */}
                <div className="absolute inset-0 rounded-lg bg-slate-900/50 group-hover:bg-slate-800/70 transition-colors duration-300" />

                {/* Text content */}
                <span className="relative z-10 text-violet-300 group-hover:text-violet-100 transition-colors duration-300 text-[10px] md:text-xs font-mono tracking-widest">
                  Live Demo
                </span>
              </a>
            ))}
          </div>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed mb-4 font-light">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <TechPill key={t.label} label={t.label} style={t.style} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <>
      <section className="py-20 px-10 max-w-6xl mx-auto" id="projects">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/30 text-violet-400 text-xs font-medium tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
          <span className="w-1.5 h-1.5 bg-violet-400 rounded-full animate-pulse" />
          My Work
        </div>

        {/* Title */}
        <h2 className="text-4xl md:text-4xl lg:text-5xl text-white font-bold leading-tight  tracking-tight">
          Featured{" "}
          <span className="bg-gradient-to-r from-violet-500 to-fuchsia-400 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>

        <p className="text-gray-400 max-w-2xl  mb-16 mt-6  text-lg md:text-xl ">
          A selection of projects I've built — from sleek interfaces to
          full-stack applications.
        </p>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              featured={project.featured}
            />
          ))}
        </div>
      </section>
    </>
  );
}
