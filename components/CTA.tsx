"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-32 bg-black relative overflow-hidden" id="contacto">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_var(--color-gold-glow))] from-yellow-700/20 via-black/0 to-transparent pointer-events-none opacity-40 mix-blend-screen" />

      <div className="container relative z-10 mx-auto px-6 max-w-5xl text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 border border-white/10 rounded-full bg-white/5">
             <div className="w-2 h-2 bg-[var(--accent-primary)] animate-pulse rounded-full" />
             <span className="font-mono text-xs uppercase tracking-widest text-white/60">Limited Capacity - Q4 2026</span>
          </div>

          <h2 className="font-display text-5xl md:text-8xl font-light text-white mb-8 tracking-tighter uppercase relative">
             Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-primary)] to-white">Dominate?</span>
          </h2>
          
          <p className="text-xl text-white/50 max-w-2xl mx-auto mb-12 font-light">
             Stop playing fair. Deploy our neural engine and outpace your competition by 10x speeds.
          </p>

          <button className="group relative inline-flex items-center justify-center px-12 py-6 bg-white text-black font-display text-lg tracking-widest uppercase hover:bg-[var(--accent-primary)] transition-colors duration-300">
             <span className="relative z-10 flex items-center gap-4">
               Initialize Sequence <ArrowRight className="group-hover:translate-x-2 transition-transform" />
             </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
