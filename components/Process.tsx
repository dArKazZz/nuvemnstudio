"use client";

import { useEffect, useRef, useState } from "react";
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
  const gridRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState<Record<number, boolean>>({});

  useEffect(() => {
    if (!gridRef.current) return;
    const cards = Array.from(
      gridRef.current.querySelectorAll<HTMLDivElement>(".process-card")
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const indexAttr = entry.target.getAttribute("data-index");
          const idx = indexAttr ? parseInt(indexAttr, 10) : NaN;
          if (!Number.isNaN(idx) && entry.isIntersecting) {
            setVisible((v) => (v[idx] ? v : { ...v, [idx]: true }));
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.2 }
    );

    cards.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative bg-black text-white py-24 overflow-hidden">
      {/* Blobs decorativos flotantes */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full blur-3xl opacity-20 blob-float"
        style={{ background: "radial-gradient(closest-side, var(--accent-primary), rgba(0,0,0,0))" }} />
      <div className="pointer-events-none absolute -bottom-16 -left-16 h-96 w-96 rounded-full blur-3xl opacity-10 blob-float-delayed"
        style={{ background: "radial-gradient(closest-side, rgba(255,255,255,0.65), rgba(0,0,0,0))" }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16 md:mb-20">
          <h2 className="font-display text-4xl md:text-6xl font-light uppercase tracking-wide mb-5">
            Proceso Desarrollo
          </h2>
          <div className="relative h-[3px] w-28 rounded-full overflow-hidden">
            <span className="absolute inset-0 bg-gradient-to-r from-[var(--accent-primary)] via-white/70 to-[var(--accent-primary)] animate-gradient-x" />
          </div>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 items-stretch">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group h-full"
              onMouseMove={(e) => {
                const target = e.currentTarget as HTMLDivElement;
                const r = target.getBoundingClientRect();
                const relX = (e.clientX - r.left) / r.width;
                const relY = (e.clientY - r.top) / r.height;
                const x = relX * 100;
                const y = relY * 100;
                target.style.setProperty("--x", `${x}%`);
                target.style.setProperty("--y", `${y}%`);
                const rx = (relX - 0.5) * 10; // rotateY
                const ry = -(relY - 0.5) * 8; // rotateX
                target.style.setProperty("--rx", `${rx.toFixed(2)}deg`);
                target.style.setProperty("--ry", `${ry.toFixed(2)}deg`);
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget as HTMLDivElement;
                target.style.removeProperty("--rx");
                target.style.removeProperty("--ry");
              }}
            >
              {/* Aura hover */}
              <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-[radial-gradient(120px_60px_at_var(--x,50%)_var(--y,50%),rgba(255,255,255,0.18),transparent)]" />

              {/* Card con glassmorphism y borde sutil */}
              <div
                data-index={index}
                className={
                  "process-card tilt relative h-full min-h-[240px] flex flex-col rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 md:p-7 transition-all duration-500 will-change-transform " +
                  "opacity-0 translate-y-6 scale-[0.98] " +
                  (visible[index] ? "show" : "")
                }
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                {/* Brillo barrido */}
                <div className="shine pointer-events-none absolute inset-0 rounded-2xl overflow-hidden" aria-hidden />
                {/* Número en marca de agua */}
                <div className="pointer-events-none absolute top-4 right-4 text-[72px] leading-none font-display font-bold tracking-tighter text-white/5 select-none tabular-nums">
                  {step.number}
                </div>

                {/* Icono en pastilla */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="icon-bump icon-float relative h-12 w-12 rounded-xl bg-gradient-to-br from-[var(--accent-primary)]/25 to-white/10 border border-white/15 flex items-center justify-center shadow-[0_0_0_3px_rgba(255,255,255,0.05)_inset] transition-transform duration-500 group-hover:scale-105">
                    <step.icon size={22} className="text-white" />
                  </div>
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/60">Paso {index + 1}</span>
                </div>

                <h3 className="text-lg md:text-xl font-medium uppercase tracking-wider text-[var(--accent-primary)] mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  {step.description}
                </p>

                {/* Efecto de luz inferior */}
                <div className="pointer-events-none absolute left-6 right-6 -bottom-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </div>

              {/* Conector entre tarjetas en desktop */}
              {index < steps.length - 1 && (
                <div
                  className={"hidden md:block connector-line absolute top-1/2 right-[-12%] translate-y-[-50%] w-[24%] h-[1px] bg-gradient-to-r from-[var(--accent-primary)]/20 via-white/15 to-transparent " + (visible[index] ? "show" : "")}
                  style={{ animationDelay: `${index * 120 + 300}ms` }}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Animaciones locales */}
      <style jsx>{`
        @keyframes floatY {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
          100% { transform: translateY(0px); }
        }
        .blob-float { animation: floatY 9s ease-in-out infinite; }
        .blob-float-delayed { animation: floatY 12s ease-in-out infinite; animation-delay: 0.6s; }

        @keyframes gradientX {
          0% { transform: translateX(-60%); }
          50% { transform: translateX(0%); }
          100% { transform: translateX(60%); }
        }
        .animate-gradient-x { background-size: 200% 100%; animation: gradientX 6s ease-in-out infinite alternate; }

        .process-card.show { opacity: 1; transform: translateY(0) scale(1); }
        .process-card.tilt { transform-style: preserve-3d; }
        .process-card.tilt:hover { transform: perspective(900px) translateY(-4px) scale(1.02) rotateX(var(--ry, 0deg)) rotateY(var(--rx, 0deg)); }

        /* Shine sweep */
        @keyframes shine {
          from { transform: translateX(-120%); }
          to { transform: translateX(120%); }
        }
        .group:hover .shine::before {
          content: '';
          position: absolute;
          inset: -20%;
          background: linear-gradient(120deg, transparent 40%, rgba(255,255,255,0.16) 50%, transparent 60%);
          transform: translateX(-120%);
          animation: shine 900ms ease;
        }

        /* Icon micro-interaction */
        @keyframes bump { 0%{ transform: translateZ(0) scale(1);} 40%{ transform: translateZ(0) scale(1.08);} 100%{ transform: translateZ(0) scale(1);} }
        .group:hover .icon-bump { animation: bump 600ms ease; }
        .icon-float { animation: floatY 14s ease-in-out infinite; }

        /* Connector draw */
        @keyframes growX { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        .connector-line { transform-origin: left; transform: scaleX(0); }
        .connector-line.show { animation: growX 800ms cubic-bezier(0.22, 1, 0.36, 1) forwards; }

        @media (prefers-reduced-motion: reduce) {
          .blob-float, .blob-float-delayed, .animate-gradient-x, .icon-float { animation: none !important; }
          .process-card, .connector-line { transition: none !important; }
        }
      `}</style>
    </section>
  );
}
