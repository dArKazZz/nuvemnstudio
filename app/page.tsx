"use client";

import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Showcase from "@/components/Showcase";
import Pricing from "@/components/Pricing";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export type TabType = "inicio" | "servicios" | "proyectos" | "nosotros";

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
            <Hero setActiveTab={setActiveTab} />
            
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
      case "nosotros":
        return <Team />;
      
    }
  };

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <SiteHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="min-h-[calc(100vh-200px)]">
        {renderContent()}
      </main>
      <SiteFooter activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}
