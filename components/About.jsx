"use client";

export default function About() {
  // Developer Information
  const developer = {
    name: "Mohamad Noor",
    role: "Frontend Developer",
    seniority: "Junior-level  => Mid-Level",
    location: "Syria,Hama",
    skills: {
      frontend: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "TailwindCSS",
        "CSS",
        "HTML",
      ],
      tools: ["Stitch", "Git", "GitHub", "Zod", "Zustand", "ReduxTool"],
    },
    experience: "1+",
    projects: "5+",
    available: true,
    passions: ["clean code", "great UX", "OSS"],
  };
  // Developer Information

  const experiences = [
    {
      year: "2024",
      title: "Full-Stack Developer",
      description:
        "Building modern, scalable web applications with React and Node.js",
    },
    {
      year: "2023",
      title: "Frontend Specialist",
      description:
        "Creating responsive and interactive user interfaces with latest technologies",
    },
    {
      year: "2022",
      title: "Web Developer",
      description:
        "Started journey with HTML, CSS, and JavaScript fundamentals",
    },
  ];

  return (
    <section className="relative  text-white py-24" id="#About">
      {/* Animated Background Gradients */}
      <div className="pointer-events-none absolute inset-0" />

      {/* Floating Blur Orbs */}
      <div className="absolute right-[20%] top-1/4 h-[400px] w-[400px] rounded-full bg-fuchsia-500/8 blur-3xl" />
      <div className="absolute left-[10%] bottom-1/3 h-[350px] w-[350px] rounded-full bg-violet-500/8 blur-3xl" />

      <div className="relative mx-auto max-w-[1240px] px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 space-y-4 text-center md:mb-24">
          <p className="text-sm uppercase tracking-[0.4em] text-violet-500 animate-slideInFromLeft">
            Get To Know Me
          </p>
          <h2 className="text-5xl md:text-6xl font-bold leading-tight tracking-[-0.03em]">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-600">
              Me
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-300">
            A passionate front-end developer with a keen eye for design and a
            commitment to building exceptional digital experiences
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-16 items-center mb-20">
          {/* Left: Bio Section */}
          <div className="space-y-8">
            <div
              className="rounded-2xl overflow-hidden border border-violet-500/30"
              style={{
                background: "#0d0d14",
                boxShadow: "0 0 40px rgba(124,106,245,0.2)",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "13px",
                lineHeight: "1.7",
              }}
            >
              {/* Top Bar */}
              <div
                className="flex items-center gap-2 px-4 py-2 border-b border-violet-500/20"
                style={{ background: "rgba(255,255,255,0.04)" }}
              >
                <span className="w-[11px] h-[11px] rounded-full bg-[#ff5f57]" />
                <span className="w-[11px] h-[11px] rounded-full bg-[#febc2e]" />
                <span className="w-[11px] h-[11px] rounded-full bg-[#28c840]" />
                <span className="ml-2 text-[11px] text-[#6b69a3] tracking-wide">
                  Noor.jsx
                </span>
              </div>

              {/* Code Body */}
              <div className="py-5 overflow-x-auto">
                {/* Helper to render a code line */}
                {[
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
                    &nbsp;&nbsp;
                    <span className="text-[#c586c0]">seniority</span>
                    <span className="text-[#d4d4d4]">: </span>
                    <span className="text-[#ce9178]">
                      '{developer.seniority}'
                    </span>
                    <span>,</span>
                  </>,
                  <>
                    &nbsp;&nbsp;<span className="text-[#c586c0]">location</span>
                    <span className="text-[#d4d4d4]">: </span>
                    <span className="text-[#ce9178]">
                      '{developer.location}'
                    </span>
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
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="text-[#dcdcaa]">React</span>
                    <span>, </span>
                    <span className="text-[#dcdcaa]">Next.js</span>
                    <span>, </span>
                    <span className="text-[#dcdcaa]">Astro</span>
                    <span>,</span>
                  </>,
                  <>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="text-[#dcdcaa]">TypeScript</span>
                    <span>, </span>
                    <span className="text-[#dcdcaa]">JavaScript</span>
                    <span>,</span>
                  </>,
                  <>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="text-[#dcdcaa]">TailwindCSS</span>
                    <span>, </span>
                    <span className="text-[#dcdcaa]">CSS</span>
                    <span>, </span>
                    <span className="text-[#dcdcaa]">HTML</span>
                    <span>,</span>
                  </>,
                  null,
                  <>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="text-[#6b69a3]">{"// tools"}</span>
                  </>,
                  <>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="text-[#dcdcaa]">Figma</span>
                    <span>, </span>
                    <span className="text-[#dcdcaa]">Git</span>
                    <span>, </span>
                    <span className="text-[#dcdcaa]">GitHub</span>
                    <span>,</span>
                  </>,
                  <>
                    &nbsp;&nbsp;<span>{"]"}</span>
                    <span>,</span>
                  </>,
                  null,
                  <>
                    &nbsp;&nbsp;
                    <span className="text-[#c586c0]">experience</span>
                    <span>: </span>
                    <span className="text-[#b5cea8]">3+</span>
                    <span>, </span>
                    <span className="text-[#6b69a3]">{"// years"}</span>
                  </>,
                  <>
                    &nbsp;&nbsp;<span className="text-[#c586c0]">projects</span>
                    <span>: </span>
                    <span className="text-[#b5cea8]">50+</span>
                    <span>,</span>
                  </>,
                  <>
                    &nbsp;&nbsp;
                    <span className="text-[#c586c0]">available</span>
                    <span>: </span>
                    <span>true</span>
                    <span>,</span>
                  </>,
                  null,
                  <>
                    &nbsp;&nbsp;<span className="text-[#c586c0]">passions</span>
                    <span>: </span>
                    <span>{"["}</span>
                    <span className="text-[#dcdcaa]">'clean code'</span>
                    <span>, </span>
                    <span className="text-[#dcdcaa]">'great UX'</span>
                    <span>, </span>
                    <span className="text-[#dcdcaa]">'OSS'</span>
                    <span>{"]"}</span>
                    <span>,</span>
                  </>,
                  <>
                    <span>{"}"}</span>
                    <span>;</span>
                  </>,
                  null,
                  <>
                    <span>export default </span>
                    <span>developer</span>
                    <span>;</span>
                  </>,
                ].map((line, i) => (
                  <div
                    key={i}
                    className="flex px-5 min-h-[1.7em] group hover:bg-white/[0.025] transition-colors"
                  >
                    <span
                      className="min-w-[24px] mr-6 text-right select-none flex-shrink-0"
                      style={{ color: "#3a3a55" }}
                    >
                      {i + 1}
                    </span>
                    <span>{line ?? <>&nbsp;</>}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Core spanlues */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Attention to Detail", icon: "✨" },
                { label: "Clean Code", icon: "🎯" },
                { label: "User First", icon: "👥" },
                { label: "Continuous Learning", icon: "🚀" },
              ].map((value, idx) => (
                <div
                  key={idx}
                  className="group relative rounded-2xl border border-violet-500/20 bg-gradient-to-br from-white/6 to-white/2 p-4 backdrop-blur-xl hover:border-violet-400/50 transition-all duration-500 cursor-pointer"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/10 to-fuchsia-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative text-center space-y-2">
                    <div className="text-2xl">{value.icon}</div>
                    <p className="text-sm font-semibold text-slate-200">
                      {value.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mt-24 space-y-12">
          <div className="text-center space-y-4">
            <h3 className="text-4xl md:text-5xl font-bold">
              My{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-600">
                Journey
              </span>
            </h3>
            <p className="text-slate-400 max-w-2xl mx-auto">
              A timeline of key milestones in my development career
            </p>
          </div>

          {/* Timeline */}
          <div className="space-y-6 max-w-2xl mx-auto">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl border border-violet-500/20 bg-gradient-to-r from-white/8 to-white/3 p-6 backdrop-blur-xl shadow-[0_8px_20px_rgba(147,51,234,0.1)] hover:shadow-[0_12px_20px_rgba(145,51,234,0.25)] transition-all duration-500 overflow-hidden"
              >
                {/* Timeline connector - animated gradient */}
                <div className="absolute left-8 -bottom-6 h-8 w-0.5 bg-gradient-to-b from-violet-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-fuchsia-500/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative flex gap-6">
                  {/* Timeline dot */}
                  <div className="flex flex-col items-center gap-2">
                    <div className="h-4 w-4 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-600 shadow-[0_0_16px_rgba(147,51,234,0.6)] group-hover:shadow-[0_0_24px_rgba(147,51,234,0.8)] transition-shadow duration-500" />
                    {idx < experiences.length && (
                      <div className="h-12 w-0.5 bg-gradient-to-b from-violet-500/40 to-transparent" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="pb-4 space-y-2">
                    <div className="inline-flex items-center gap-2 rounded-full bg-violet-500/20 px-3 py-1">
                      <span className="text-xs font-semibold text-violet-300">
                        {exp.year}
                      </span>
                    </div>
                    <h4 className="text-xl font-bold text-white">
                      {exp.title}
                    </h4>
                    <p className="text-slate-400">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
