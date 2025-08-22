import { useEffect } from "react";
import Navigation from "@/components/portfolio/Navigation";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Projects from "@/components/portfolio/Projects";
import Experience from "@/components/portfolio/Experience";
import Contact from "@/components/portfolio/Contact";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Index = () => {
  const { addElementRef } = useScrollAnimation();

  useEffect(() => {
    // Initialize scroll animations
    const timer = setTimeout(() => {
      addElementRef(document.body);
    }, 100);

    return () => clearTimeout(timer);
  }, [addElementRef]);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default Index;
