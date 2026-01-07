"use client";

import { Code, Rocket, Database, Globe } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "RECOLECCIÓN DE INFORMACIÓN",
    description: "Reunión inicial, comprensión de objetivos y análisis de requisitos.",
    icon: Database,
  },
  {
    number: "02",
    title: "PLANIFICACIÓN",
    description: "Briefing de negocio, arquitectura técnica y roadmap del proyecto.",
    icon: Code,
  },
  {
    number: "03",
    title: "DISEÑO E IMPLEMENTACIÓN",
    description: "Prototipos interactivos y desarrollo ágil basado en sprints.",
    icon: Globe,
  },
  {
    number: "04",
    title: "LANZAMIENTO Y MONITOREO",
    description: "Prueba de lanzamiento, despliegue y optimización continua.",
    icon: Rocket,
  },
];

export default function Process() {
  return (
    <section className="py-24 bg-black text-white relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20">
            <h2 className="font-display text-4xl md:text-6xl font-light uppercase tracking-wide mb-4">
                Proceso Desarrollo
            </h2>
            <div className="h-1 w-20 bg-[var(--accent-primary)]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
                <div key={index} className="relative group">
                    <div className="mb-6 opacity-30 group-hover:opacity-100 transition-opacity duration-300">
                        <step.icon size={32} />
                    </div>
                    <div className="text-6xl font-display font-bold text-white/80 mb-4 group-hover:text-white/100 transition-colors">
                        {step.number}
                    </div>
                    <h3 className="text-xl font-mono uppercase tracking-widest mb-4 text-[var(--accent-primary)]">
                        {step.title}
                    </h3>
                    <p className="text-sm text-white/60 leading-relaxed font-light">
                        {step.description}
                    </p>
                    
                    {/* Connector Line */}
                    {index < steps.length - 1 && (
                        <div className="hidden md:block absolute top-8 right-[-50%] w-full h-[1px] bg-gradient-to-r from-white/10 to-transparent z-0 pointer-events-none" />
                    )}
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
