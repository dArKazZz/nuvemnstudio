"use client";

import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Showcase from "@/components/Showcase";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export type TabType = "inicio" | "servicios" | "proyectos" | "precios" | "nosotros";

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabType>("inicio");

  // Scroll to top when tab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeTab]);

  const renderContent = () => {
    switch (activeTab) {
      case "inicio":
        return (
          <>
            <Hero />
            <Stats />
          </>
        );
      case "servicios":
        return (
          <>
            <Services />
            <Process />
          </>
        );
      case "proyectos":
        return <Showcase />;
      case "precios":
        return <Pricing />;
      case "nosotros":
        return <Testimonials />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <SiteHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="min-h-[calc(100vh-200px)]">
        {renderContent()}
      </main>
      <CTA />
      <SiteFooter />
    </div>
  );
}
