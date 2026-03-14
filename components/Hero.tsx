"use client";

import { motion } from "framer-motion";
export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[90vh] scroll-mt-28 flex-col items-center justify-center overflow-hidden bg-black pb-12 pt-32 text-white"
    >
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
          className="relative z-20 mt-12"
        >
          <h2 className="text-xl md:text-2xl font-light text-white/90">
            Impulsa tu marca con una web a tu medida
          </h2>
        </motion.div>

       
      
        {/* Portfolio Card */}
        
      </div> 
      
       {/* Bottom Text */}
       <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }} 
        className="relative z-20 container mx-auto mt-16 max-w-3xl px-6 pb-12 text-center"
       >
         <h3 className="text-lg md:text-2xl font-light leading-relaxed text-white/75">
            Diseño a medida, desarrollo sólido y una presencia digital lista para convertir.
         </h3>
       </motion.div>
    </section>
  );
}
