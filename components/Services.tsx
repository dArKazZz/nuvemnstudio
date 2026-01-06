"use client";

import { motion } from "framer-motion";
import { 
  TrendingUp, 
  Palette, 
  Code, 
  Settings,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const services = [
  {
    title: "Estrategia Digital",
    description: "Analizamos tu marca, audiencias y objetivos para construir un roadmap digital con impacto.",
    icon: TrendingUp,
    features: ["Análisis de mercado", "Roadmap digital", "KPIs definidos"],
  },
  {
    title: "UX/UI a Medida",
    description: "Interfaces elegantes y funcionales que reflejan tu identidad y convierten visitantes en clientes.",
    icon: Palette,
    features: ["Diseño responsive", "Prototipado", "Testing de usuarios"],
  },
  {
    title: "Desarrollo Web",
    description: "Sitios rápidos, escalables y listos para crecer, optimizados para SEO y rendimiento.",
    icon: Code,
    features: ["Next.js & React", "SEO optimizado", "Alto rendimiento"],
  },
  {
    title: "Evolución Continua",
    description: "Acompañamiento post-lanzamiento con mejoras, métricas y nuevas funcionalidades.",
    icon: Settings,
    features: ["Mantenimiento", "Analytics", "Mejoras continuas"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export default function Services() {
  return (
    <section id="servicios" className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div 
          className="mb-12 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-[var(--nuvem-700)] shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[var(--nuvem-500)]"></span>
            Servicios
          </div>
          <h2 className="font-display text-3xl font-bold text-[var(--nuvem-950)] md:text-4xl">
            Todo lo que necesitas para brillar online
          </h2>
          <p className="mt-4 text-lg text-[var(--nuvem-700)]">
            Combinamos estrategia, creatividad y tecnología para lanzar sitios únicos que elevan tu marca.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid gap-6 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group rounded-2xl bg-white p-8 shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="mb-6 flex items-start justify-between">
                <motion.div 
                  className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--nuvem-100)] transition group-hover:bg-[var(--nuvem-500)]"
                  whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.5 } }}
                >
                  <service.icon 
                    size={28} 
                    strokeWidth={1.5} 
                    className="text-[var(--nuvem-600)] transition group-hover:text-white" 
                  />
                </motion.div>
                <ArrowRight 
                  size={20} 
                  strokeWidth={2} 
                  className="text-[var(--nuvem-300)] transition group-hover:translate-x-1 group-hover:text-[var(--nuvem-600)]" 
                />
              </div>
              
              <h3 className="font-display text-xl font-bold text-[var(--nuvem-950)]">
                {service.title}
              </h3>
              <p className="mt-3 text-[var(--nuvem-700)]">
                {service.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {service.features.map((feature, featureIndex) => (
                  <motion.span
                    key={feature}
                    className="inline-flex items-center gap-1.5 rounded-full bg-[var(--nuvem-50)] px-3 py-1.5 text-xs font-medium text-[var(--nuvem-700)]"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + featureIndex * 0.1 }}
                  >
                    <CheckCircle size={14} strokeWidth={2} className="text-[var(--nuvem-500)]" />
                    {feature}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
