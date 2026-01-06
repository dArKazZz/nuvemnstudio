"use client";

import { motion } from "framer-motion";
import { 
  Search, 
  Palette, 
  Code, 
  Rocket,
  ArrowRight
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Diagnóstico",
    description: "Exploramos tu visión y definimos objetivos claros para el proyecto.",
    icon: Search,
  },
  {
    number: "02",
    title: "Diseño",
    description: "Prototipamos la experiencia, la identidad visual y los flujos clave.",
    icon: Palette,
  },
  {
    number: "03",
    title: "Desarrollo",
    description: "Convertimos el diseño en una web rápida, estable y escalable.",
    icon: Code,
  },
  {
    number: "04",
    title: "Lanzamiento",
    description: "Probamos, optimizamos y lanzamos con métricas para crecer.",
    icon: Rocket,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export default function Process() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div 
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-[var(--nuvem-700)] shadow-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <motion.span 
              className="h-2 w-2 rounded-full bg-[var(--nuvem-500)]"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            Proceso
          </motion.div>
          <motion.h2 
            className="font-display text-3xl font-bold text-[var(--nuvem-950)] md:text-4xl"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            De la idea al lanzamiento
          </motion.h2>
          <motion.p 
            className="mx-auto mt-4 max-w-xl text-lg text-[var(--nuvem-700)]"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Un flujo de trabajo colaborativo con entregables claros y resultados medibles.
          </motion.p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection line */}
          <motion.div 
            className="absolute left-0 right-0 top-1/2 hidden h-0.5 -translate-y-1/2 bg-[var(--nuvem-200)] lg:block"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
          
          <motion.div 
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-lg"
              >
                {/* Step number badge */}
                <div className="mb-4 flex items-center gap-3">
                  <motion.span 
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--nuvem-600)] text-sm font-bold text-white"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {step.number}
                  </motion.span>
                  {index < steps.length - 1 && (
                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.2 }}
                    >
                      <ArrowRight 
                        size={16} 
                        strokeWidth={2} 
                        className="hidden text-[var(--nuvem-300)] lg:block" 
                      />
                    </motion.div>
                  )}
                </div>

                {/* Icon */}
                <motion.div 
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--nuvem-100)] transition group-hover:bg-[var(--nuvem-500)]"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <step.icon 
                    size={24} 
                    strokeWidth={1.5} 
                    className="text-[var(--nuvem-600)] transition group-hover:text-white" 
                  />
                </motion.div>

                <h3 className="font-display text-lg font-bold text-[var(--nuvem-950)]">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--nuvem-700)]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
