"use client";

import { motion } from "framer-motion";
import { Users, Zap, BarChart3 } from "lucide-react";

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
              Algorithm<br />
              <span className="font-normal text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">Dominance</span>
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
            <span className="text-xs font-mono tracking-widest uppercase text-white/70">AI Status: Optimizing</span>
          </div>
          
          <h2 className="text-xl md:text-2xl font-light text-white/90">
            Automated Business Growth Strategies
          </h2>
        </motion.div>

        <motion.p
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 0.6, duration: 0.8 }}
           className="mt-6 max-w-lg text-white/50 text-sm md:text-base leading-relaxed text-balance"
        >
          We leverage predictive AI to grow your social presence, automate engagement, and turn attention into revenue.
        </motion.p>
      
        {/* Stats Grid */}
        <motion.div 
           initial={{ opacity: 0, y: 40 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.8, duration: 0.8 }}
           className="grid grid-cols-1 md:grid-cols-3 w-full max-w-5xl mt-24 border-t border-white/10 relative z-20 bg-black/50 backdrop-blur-sm"
        >
          {[
            { label: "Reach Lift", value: "+400%", icon: Users },
            { label: "Leads Generated", value: "12.5k", icon: BarChart3 },
            { label: "Execution Speed", value: "10x", icon: Zap }
          ].map((stat, i) => (
            <div key={i} className="relative p-8 border-b md:border-b-0 md:border-r last:border-r-0 border-white/10 group hover:bg-white/5 transition-colors duration-300">
               <div className="flex justify-between items-start mb-8">
                 <span className="text-white/30"><stat.icon size={20} /></span> 
                 <span className="text-[10px] font-mono text-green-500 border border-green-500/30 px-1 py-0.5 rounded">LIVE</span>
               </div>
               <div className="absolute top-4 right-4 w-1.5 h-1.5 bg-white/20 rounded-full" />
               <div className="text-4xl md:text-5xl lg:text-6xl font-display font-light tracking-tighter mb-2 text-white">
                 {stat.value}
               </div>
               <div className="text-xs font-mono tracking-widest uppercase text-white/40">
                 {stat.label}
               </div>
            </div>
          ))}
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
            STOP GUESSING. START <span className="inline-block px-2 py-0 border border-white/20 bg-white/5 mx-1 align-middle">SCALING</span> WITH OUR <span className="bg-white text-black px-2 font-bold inline-block mx-1">NEURAL ENGINE</span> THAT TURNS CONTENT INTO PREDICTABLE REVENUE.
         </h3>
       </motion.div>
    </section>
  );
}
