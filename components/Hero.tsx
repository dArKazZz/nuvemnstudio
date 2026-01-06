"use client";

import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Sparkles,
  Star,
  Zap,
  Globe,
  Code
} from "lucide-react";

const floatingCardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (delay: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-12 pt-8">
      <div className="mx-auto max-w-6xl">
        {/* Hero Card with Image */}
        <motion.div 
          className="relative overflow-hidden rounded-[32px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop')`,
            }}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--nuvem-100)]/95 via-[var(--nuvem-50)]/90 to-[var(--nuvem-200)]/95" />
          
          {/* Floating Cards */}
          <motion.div 
            className="pointer-events-none absolute -right-4 top-20 hidden rotate-6 md:block"
            variants={floatingCardVariants}
            initial="hidden"
            animate="visible"
            custom={0.4}
          >
            <motion.div 
              className="rounded-2xl bg-white/80 p-4 shadow-xl backdrop-blur-sm"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--nuvem-500)]">
                  <Globe size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-[var(--nuvem-600)]">Sitios Activos</p>
                  <p className="font-display font-bold text-[var(--nuvem-950)]">+150</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="pointer-events-none absolute -left-4 bottom-32 hidden -rotate-6 md:block"
            variants={floatingCardVariants}
            initial="hidden"
            animate="visible"
            custom={0.6}
          >
            <motion.div 
              className="rounded-2xl bg-white/80 p-4 shadow-xl backdrop-blur-sm"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--nuvem-400)]">
                  <Zap size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-[var(--nuvem-600)]">Performance</p>
                  <p className="font-display font-bold text-[var(--nuvem-950)]">99/100</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="pointer-events-none absolute bottom-10 right-16 hidden rotate-3 md:block"
            variants={floatingCardVariants}
            initial="hidden"
            animate="visible"
            custom={0.8}
          >
            <motion.div 
              className="rounded-2xl bg-white/80 p-4 shadow-xl backdrop-blur-sm"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--nuvem-600)]">
                  <Code size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-[var(--nuvem-600)]">Tecnología</p>
                  <p className="font-display font-bold text-[var(--nuvem-950)]">Next.js</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Decorative Stars */}
          <motion.div 
            className="pointer-events-none absolute right-1/4 top-10 text-[var(--nuvem-500)] opacity-60"
            animate={{ rotate: 360, scale: [1, 1.2, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <Star size={24} strokeWidth={2} fill="currentColor" />
          </motion.div>
          <motion.div 
            className="pointer-events-none absolute bottom-20 left-1/4 text-[var(--nuvem-400)] opacity-60"
            animate={{ rotate: -360, scale: [1, 1.3, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            <Star size={16} strokeWidth={2} fill="currentColor" />
          </motion.div>
          <motion.div 
            className="pointer-events-none absolute right-10 top-1/3 text-[var(--nuvem-600)] opacity-40"
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          >
            <Star size={20} strokeWidth={2} fill="currentColor" />
          </motion.div>

          {/* Content */}
          <div className="relative z-10 px-8 py-20 md:px-16 md:py-28">
            <div className="mx-auto max-w-3xl text-center">
              {/* Badge */}
              <motion.div 
                className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-[var(--nuvem-700)] shadow-sm backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <span className="h-2 w-2 rounded-full bg-[var(--nuvem-500)]"></span>
                <Sparkles size={16} strokeWidth={2} />
                Estudio Creativo Digital
              </motion.div>

              {/* Heading */}
              <motion.h1 
                className="font-display text-4xl font-bold leading-tight text-[var(--nuvem-950)] md:text-5xl lg:text-6xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Impulsa tu marca con una web a tu medida
              </motion.h1>

              {/* Description */}
              <motion.p 
                className="mx-auto mt-6 max-w-xl text-lg text-[var(--nuvem-800)]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                Diseñamos experiencias digitales que conectan con tu audiencia y 
                transforman visitantes en clientes. Creamos sitios web únicos con 
                personalidad y resultados.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                className="mt-8 flex flex-wrap items-center justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <motion.a
                  href="#contacto"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--nuvem-600)] px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-[var(--nuvem-700)] hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Iniciar Proyecto
                  <ArrowRight size={18} strokeWidth={2} />
                </motion.a>
                <motion.a
                  href="#proyectos"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[var(--nuvem-900)] shadow-lg transition hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Ver Proyectos
                </motion.a>
              </motion.div>

              {/* Trust Badges */}
              <motion.div 
                className="mt-12 flex flex-wrap items-center justify-center gap-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <div className="flex items-center gap-2 text-sm text-[var(--nuvem-700)]">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <motion.div 
                        key={i} 
                        className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[var(--nuvem-200)]"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.7 + i * 0.1 }}
                      >
                        <span className="text-xs font-medium text-[var(--nuvem-700)]">{String.fromCharCode(64 + i)}</span>
                      </motion.div>
                    ))}
                  </div>
                  <span>+50 clientes felices</span>
                </div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + i * 0.05 }}
                    >
                      <Star size={16} strokeWidth={2} className="fill-[var(--nuvem-400)] text-[var(--nuvem-400)]" />
                    </motion.div>
                  ))}
                  <span className="ml-2 text-sm text-[var(--nuvem-700)]">5.0 en Google</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
