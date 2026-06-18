"use client";

import About from "@/components/About";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="App min-h-screen bg-[#04030d] ">
      <Hero />
      <About />
      <Projects />
      {/* <Skills /> */}
      {/* <Contact /> */}
    </div>
  );
}
