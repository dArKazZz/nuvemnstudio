"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    name: "VERTICAL SCALE",
    category: "Mobile",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
    stats: "+400% ROI"
  },
  {
    name: "GLOBAL REACH",
    category: "Social",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop",
    stats: "2.5M Views"
  },
  {
    name: "NEURAL CLONE",
    category: "AI",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop",
    stats: "98% Match"
  },
  {
    name: "DATA FUSION",
    category: "Analytics",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1888&auto=format&fit=crop",
    stats: "Real-time"
  }
];

export default function Showcase() {
  return (
    <section className="py-24 bg-black text-white relative overflow-hidden" id="proyectos">
      
      {/* Section Header */}
      <div className="container mx-auto px-6 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8">
            <div>
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-display text-5xl md:text-7xl font-light uppercase tracking-tighter mb-2"
                >
                    Outputs
                </motion.h2>
                <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="font-mono text-sm tracking-widest text-white/50"
                >
                    / CASE STUDIES / SOCIAL ROI
                </motion.p>
            </div>
            
            <div className="hidden md:block">
               <div className="flex items-center gap-2 text-xs font-mono text-white/40">
                 <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                 LIVE DATA FEED
               </div>
            </div>
        </div>
      </div>

      {/* Horizontal Scroll Area */}
      <div className="container mx-auto px-6 overflow-x-auto pb-12 hide-scrollbar">
        <div className="flex gap-6 min-w-max">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative w-[300px] md:w-[400px] h-[500px] group cursor-pointer"
            >
              {/* Card Image */}
              <div className="absolute inset-0 overflow-hidden rounded-sm">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity" />
                <Image 
                    src={project.image} 
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0"
                />
              </div>

              {/* Overlay Content */}
              <div className="absolute inset-0 z-20 p-8 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                    <span className="text-[10px] uppercase tracking-widest border border-white/20 px-2 py-1 bg-black/20 backdrop-blur-md text-white/80">
                        {project.category}
                    </span>
                    <ArrowUpRight className="text-white opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                </div>
                
                <div>
                    <h3 className="font-display text-2xl uppercase tracking-wider mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        {project.name}
                    </h3>
                    <div className="h-[1px] w-0 group-hover:w-full bg-white/50 transition-all duration-500 mb-2" />
                    <p className="font-mono text-xs text-[var(--accent-primary)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                        {project.stats}
                    </p>
                </div>
              </div>
              
              {/* Border Glitch Effect on Hover (Optional css trick) */}
              <div className="absolute inset-0 border border-white/0 group-hover:border-white/20 transition-colors duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
