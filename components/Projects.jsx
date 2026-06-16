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
      className={`relative rounded-2xl overflow-hidden transition-all hover:-translate-y-1.5 hover:shadow-[0_0_8px_rgba(143,51,234,0.3)] hover:border-violet-500/40 duration-200 cursor-pointer border border-violet-500/20 bg-gray-900
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
        {featured && (
          <div className="flex items-center gap-1.5 text-xs tracking-widest uppercase text-purple-400 font-medium mb-3">
            ✦ Featured Project
          </div>
        )}
        <div className="font-mono text-xs text-gray-500 mb-1">
          {project.num}
        </div>
        <div className="flex justify-between items-start gap-3 mb-2.5">
          <h3 className="text-lg font-semibold text-white/95 tracking-tight">
            {project.title}{" "}
            <span
              className={`inline-block transition-transform duration-200 hover:translate-x-0.5 hover:-translate-y-0.5`}
            >
              ↗
            </span>
          </h3>
          <div className="flex gap-2 flex-shrink-0">
            {[project.github, project.live].map((href, i) => (
              <a
                key={i}
                href={href}
                className="w-8 h-8 rounded border border-purple-500/20 bg-gray-800 flex items-center justify-center text-gray-500 hover:text-purple-400 hover:border-purple-500/40 transition-colors"
              >
                {i === 0 ? "⌥" : "↗"}
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
      <section className="py-20 px-10 max-w-6xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/30 text-violet-400 text-xs font-medium tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
          <span className="w-1.5 h-1.5 bg-violet-400 rounded-full animate-pulse" />
          My Work
        </div>

        {/* Title */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight  tracking-tight mb-16">
          Featured{" "}
          <span className="bg-gradient-to-r from-violet-500 to-fuchsia-400 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>

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
