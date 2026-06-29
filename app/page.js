"use client";

import About from "@/components/About";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="App min-h-screen bg-[#04030d] ">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
