"use client";

import { motion } from "framer-motion";
import { 
  ArrowRight,
  Sparkles,
  Cloud,
  Star,
  Zap
} from "lucide-react";

export default function CTA() {
  return (
    <section id="contacto" className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <motion.div 
          className="relative overflow-hidden rounded-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Background Image with Gradient Overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1534088568595-a066f410bcda?q=80&w=2051&auto=format&fit=crop')`,
            }}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--nuvem-950)]/60 via-[var(--nuvem-900)]/50 to-[var(--nuvem-950)]/80" />
          
          {/* Floating Decorative Elements */}
          <motion.div 
            className="pointer-events-none absolute left-[10%] top-[20%]"
            animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm">
              <Star size={24} strokeWidth={1.5} className="text-[var(--nuvem-300)]" />
            </div>
          </motion.div>
          <motion.div 
            className="pointer-events-none absolute right-[15%] top-[15%]"
            animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm">
              <Sparkles size={20} strokeWidth={1.5} className="text-[var(--nuvem-400)]" />
            </div>
          </motion.div>
          <motion.div 
            className="pointer-events-none absolute bottom-[25%] left-[20%]"
            animate={{ y: [0, 12, 0], x: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm">
              <Cloud size={16} strokeWidth={1.5} className="text-white/70" />
            </div>
          </motion.div>
          <motion.div 
            className="pointer-events-none absolute bottom-[30%] right-[10%]"
            animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm">
              <Zap size={20} strokeWidth={1.5} className="text-[var(--nuvem-300)]" />
            </div>
          </motion.div>

          {/* Content */}
          <div className="relative z-10 px-8 py-20 text-center md:px-16 md:py-28">
            {/* Badge */}
            <motion.div 
              className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <motion.span 
                className="h-2 w-2 rounded-full bg-[var(--nuvem-400)]"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              Empieza Hoy
            </motion.div>
            
            <motion.h2 
              className="mx-auto max-w-2xl font-display text-3xl font-bold text-white md:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Construyamos Tu Presencia Digital Juntos
            </motion.h2>
            <motion.p 
              className="mx-auto mt-6 max-w-xl text-lg text-white/80"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Sitios web únicos que elevan tu marca, aumentan conversiones y te posicionan como líder en tu industria.
            </motion.p>

            <motion.div 
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <motion.a
                href="#"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-[var(--nuvem-950)] shadow-lg transition hover:bg-[var(--nuvem-50)] hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Comenzar Proyecto
                <ArrowRight size={18} strokeWidth={2} />
              </motion.a>
              <motion.a
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Ver Portafolio
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
