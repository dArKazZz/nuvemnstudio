"use client";

import { Code, Rocket, Database, Globe } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Descubrimiento & Estrategia",
    description:
      "Entendemos tu negocio, objetivos y público. Definimos alcance, contenidos y prioridades del sitio.",
    icon: Database,
  },
  {
    number: "02",
    title: "Diseño UX/UI",
    description:
      "Creamos una interfaz clara y atractiva: wireframes, estilos y componentes coherentes.",
    icon: Code,
  },
  {
    number: "03",
    title: "Desarrollo & Integración",
    description:
      "Implementamos en Next.js/React con rendimiento y accesibilidad. Integración de formularios y analítica.",
    icon: Globe,
  },
  {
    number: "04",
    title: "Lanzamiento & Soporte",
    description:
      "Pruebas, SEO técnico y despliegue. Monitoreo, actualizaciones y mejoras continuas.",
    icon: Rocket,
  },
];

export default function Process() {
  return (
    <section className="py-24 bg-black text-white relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20">
            <h2 className="font-display text-4xl md:text-6xl font-light uppercase tracking-wide mb-4">
              Proceso de Creación Web
            </h2>
            <div className="h-1 w-20 bg-[var(--accent-primary)]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
                <div key={index} className="relative group">
                    <div className="mb-6 opacity-30 group-hover:opacity-100 transition-opacity duration-300">
                        <step.icon size={32} />
                    </div>
                    <div className="text-6xl font-display font-bold text-white/5 mb-4 group-hover:text-white/10 transition-colors">
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
