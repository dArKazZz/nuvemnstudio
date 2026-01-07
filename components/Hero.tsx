"use client";

import { motion } from "framer-motion";
import QuoteButton from "@/components/QuoteButton";

export default function Hero() {
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
          className="w-full max-w-5xl mt-24 relative z-20"
        >
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12">
                <div className="text-xs tracking-widest font-mono text-white/60 mb-4">CASOS DE ÉXITO</div>
                <h3 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6">
                  Porfolio <span className="italic">web</span>
                </h3>
                <p className="text-white/80 leading-relaxed mb-6">
                  Entendemos que tu presencia en línea es crucial para el éxito de tu negocio. Ya sea que necesites lanzar un nuevo sitio web, mejorar el diseño de uno existente o asistencia con la administración y mantenimiento continuo, estamos aquí para ayudarte.
                </p>
                <ul className="space-y-4 text-white/85">
                  <li className="flex gap-3">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-white/60" />
                    <div>
                      <span className="font-semibold">Experiencia Comprobada:</span> Nuestro equipo tiene años de experiencia trabajando exclusivamente con WordPress. Conocemos las mejores prácticas, las últimas tendencias y estamos comprometidos a brindarte soluciones personalizadas y eficientes.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-white/60" />
                    <div>
                      <span className="font-semibold">Diseño Atractivo:</span> Sabemos que la primera impresión cuenta. Creamos diseños atractivos, intuitivos y centrados en el usuario que no solo impresionarán a tus visitantes, sino que también mejorarán la experiencia general de navegación.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-white/60" />
                    <div>
                      <span className="font-semibold">Optimización Constante:</span> La presencia en línea no es estática, y entendemos la importancia de mantener tu sitio actualizado y optimizado. Ofrecemos servicios de mantenimiento, actualizaciones de seguridad y optimización para garantizar un rendimiento óptimo a lo largo del tiempo.
                    </div>
                  </li>
                </ul>
                <div className="mt-8">
                  <a
                    href="#portfolio"
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white text-black hover:bg-white/90 transition-colors"
                  >
                    Ver Portfolio
                  </a>
                </div>
              </div>
              <div className="relative min-h-[320px] lg:min-h-[520px]">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#3debd6]/30 via-[#0ea5e9]/10 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[85%] h-[70%] rounded-2xl bg-gradient-to-br from-white/10 to-white/0 border border-white/10 shadow-[0_0_60px_rgba(255,255,255,0.08)]" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div> <br /><br />
      <QuoteButton onClick={() => console.log("cotizar")} />
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
