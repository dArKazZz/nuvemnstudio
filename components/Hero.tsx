"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import QuoteButton from "@/components/QuoteButton";
import type { TabType } from "@/app/page";

interface HeroProps {
  setActiveTab: (tab: TabType) => void;
}

export default function Hero({ setActiveTab }: HeroProps) {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-12 overflow-hidden bg-black text-white">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[var(--color-gold-glow)] via-black/0 to-transparent pointer-events-none opacity-40 mix-blend-screen" />
      
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

      {/* Glowing Ring Effect */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[120%] aspect-square rounded-full border border-[var(--color-gold-600)] shadow-[0_0_100px_rgba(212,175,55,0.15)] opacity-40 pointer-events-none" />
      <div className="absolute top-[-15%] left-1/2 -translate-x-1/2 w-[110%] aspect-square rounded-full border border-[var(--color-gold-500)] opacity-20 pointer-events-none animate-pulse" />

      <div className="container relative z-10 mx-auto px-6 max-w-7xl flex flex-col items-center text-center">
        
        {/* Main Title */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="relative z-20"
        >
            <h1 className="font-display font-light text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight uppercase text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/60">
              Eleva tu marca<br />
              <span className="font-normal text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]"> a la nube</span>
            </h1>
        </motion.div>

        {/* Subtitle Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-12 flex flex-col md:flex-row items-center gap-6 md:gap-12 relative z-20"
        >
          <div className="flex items-center gap-3 px-4 py-2 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          </div>
          
          <h2 className="text-xl md:text-2xl font-light text-white/90">
            Impulsa tu marca con una web a tu medida
          </h2>
        </motion.div>

       
      
        {/* Portfolio Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="w-full max-w-7xl mt-24 relative z-20"
        >
          <div className="rounded-3xl border border-white/10 bg-black/40 backdrop-blur-md shadow-[0_20px_80px_rgba(0,0,0,0.6)]">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="p-8 md:p-12 lg:col-span-5 text-left">
                <div className="text-xs tracking-widest font-mono text-white/60 mb-4">CASOS DE ÉXITO</div>
                <h3 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6">
                  Portfolio <span className="italic">web</span>
                </h3>
                <p className="text-white/80 leading-relaxed mb-6">
                  Tu presencia online impulsa tu negocio. Creamos sitios nuevos, renovamos los que ya tienes y mantenemos todo funcionando para que siempre rinda.
                </p>
                <ul className="space-y-4 text-white/85">
                  <li className="flex gap-3">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-white/60" />
                    <div>
                      <span className="font-semibold">Experiencia:</span>  Soluciones a medida y eficientes.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-white/60" />
                    <div>
                      <span className="font-semibold">Diseño:</span> Primera impresión que enamora: limpio, intuitivo y centrado en el usuario.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-white/60" />
                    <div>
                      <span className="font-semibold">Optimización:</span> Actualizaciones y seguridad constantes para un rendimiento óptimo.
                    </div>
                  </li>
                </ul>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={() => setActiveTab("proyectos")}
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white text-black hover:bg-white/90 transition-colors"
                  >
                    Ver Portfolio
                  </button>
                  <QuoteButton href="#contacto" size="lg" variant="accent" />
                </div>
              </div>
              <div className="relative lg:col-span-7 min-h-[360px] lg:min-h-[620px] overflow-visible">
                {/* Composición tipo marketplace (desktop + mobile + tablet) */}
                {/* Desktop */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ y: -6, scale: 1.01 }}
                  whileTap={{ y: -2, scale: 0.995 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="absolute top-1/2 left-[47%] -translate-x-1/2 -translate-y-1/2 w-[92%] md:w-[88%] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-gray-900"
                >
                  <Image
                    src="/projects/4desk.png"
                    alt="ChatStream Store — Desktop"
                    width={1200}
                    height={700}
                    className="w-full h-auto object-contain object-left"
                    priority
                  />
                </motion.div>

                {/* Mobile (izquierda, frente) */}
                <motion.div
                  initial={{ opacity: 0, x: -30, rotate: -10 }}
                  whileInView={{ opacity: 1, x: 0, rotate: -6 }}
                  whileHover={{ y: -6, rotate: -5 }}
                  whileTap={{ y: -2, rotate: -6 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  className="absolute top-[62%] left-1 md:left-0 -translate-y-1/2 w-[24%] md:w-[18%] z-20 rounded-[1.5rem] overflow-hidden shadow-2xl border-[4px] border-gray-900 bg-black"
                >
                  <Image
                    src="/projects/4mob.png"
                    alt="ChatStream Store — Mobile"
                    width={360}
                    height={720}
                    className="w-full h-auto object-contain"
                  />
                </motion.div>

                {/* Tablet (derecha, frente) */}
                <motion.div
                  initial={{ opacity: 0, x: 30, rotate: 10 }}
                  whileInView={{ opacity: 1, x: 0, rotate: 6 }}
                  whileHover={{ y: -6, rotate: 5 }}
                  whileTap={{ y: -2, rotate: 6 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="absolute top-[62%] right-1 md:right-0 -translate-y-1/2 w-[46%] md:w-[44%] z-10 rounded-xl overflow-hidden shadow-2xl border-[4px] border-gray-900 bg-gray-900"
                >
                  <Image
                    src="/projects/4tab.png"
                    alt="ChatStream Store — Tablet"
                    width={800}
                    height={600}
                    className="w-full h-auto object-contain"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div> 
      
       {/* Bottom Text */}
       <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }} 
        className="container max-w-4xl mx-auto px-6 mt-24 text-center pb-20 relative z-20"
       >
         <h3 className="text-xl md:text-3xl font-light leading-relaxed text-white/80">
            Único para tu marca <span className="inline-block px-2 py-0 border border-white/20 bg-white/5 mx-1 align-middle">Personalización total</span> Crecimiento seguro <span className="bg-white text-black px-2 font-bold inline-block mx-1">NUVEMN</span> Tu espacio digital, seguro en la nube.
         </h3>
       </motion.div>
    </section>
  );
}
