"use client";

import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Showcase from "@/components/Showcase";
import Team from "@/components/Team";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export type SectionId = "inicio" | "servicios" | "proyectos" | "nosotros";

const sectionIds: SectionId[] = ["inicio", "servicios", "proyectos", "nosotros"];

export default function Home() {
  const [activeSection, setActiveSection] = useState<SectionId>("inicio");

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) {
      return;
    }

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + 160;
      let currentSection = sections[0].id as SectionId;

      sections.forEach((section) => {
        if (section.offsetTop <= scrollPosition) {
          currentSection = section.id as SectionId;
        }
      });

      setActiveSection((previousSection) =>
        previousSection === currentSection ? previousSection : currentSection
      );
    };

    updateActiveSection();

    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  const handleNavigate = (section: SectionId) => {
    const target = document.getElementById(section);

    if (!target) {
      return;
    }

    target.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveSection(section);
  };

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <SiteHeader activeSection={activeSection} onNavigate={handleNavigate} />
      <main className="min-h-[calc(100vh-200px)] bg-black">
        <Hero />
        <Services />
        <Process />
        <Showcase />
        <Team />
      </main>
      <SiteFooter activeSection={activeSection} onNavigate={handleNavigate} />
    </div>
  );
}
