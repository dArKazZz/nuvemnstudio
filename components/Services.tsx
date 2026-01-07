"use client";

import { motion } from "framer-motion";
import { 
  Network, 
  Database, 
  ShieldCheck,
  Zap,
  Bot
} from "lucide-react";

const services = [
  {
    title: "NEURAL NETWORKS",
    description: "Deep learning algorithms that adapt to your business data patterns.",
    icon: Network,
    features: ["Pattern Recognition", "Auto-optimization", "Predictive Modeling"],
  },
  {
    title: "AI AUTOMATION",
    description: "End-to-end workflow automation powered by intelligent agents.",
    icon: Bot,
    features: ["Chatbots", "Process Mining", "Decision Automation"],
  },
  {
    title: "DATA INFRASTRUCTURE",
    description: "Scalable data lakes and real-time processing pipelines.",
    icon: Database,
    features: ["Low Latency", "High Availability", "Secure Storage"],
  },
  {
    title: "CYBER DEFENSE",
    description: "Proactive threat detection using anomaly scoring.",
    icon: ShieldCheck,
    features: ["Zero Trust", "Real-time Monitoring", "Threat Intel"],
  },
];

export default function Services() {
  return (
    <section id="servicios" className="px-6 py-24 bg-black relative">
       {/* Accents */}
      <div className="absolute right-0 top-0 w-1/3 h-[500px] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[var(--accent-glow)]/20 via-black/0 to-transparent pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <motion.div 
          className="mb-20 flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
           <div>
            <h2 className="font-display text-4xl md:text-6xl font-light text-white mb-2 uppercase tracking-wide">
                Capabilities
            </h2>
            <p className="font-mono text-sm tracking-widest text-[var(--accent-primary)]">
                / SYSTEMS / MODULES / CORE
            </p>
           </div>
           
           <div className="hidden md:block text-right">
             <p className="text-white/40 text-sm max-w-xs">
                 Deploy enterprise-grade AI modules into your existing stack with zero friction.
             </p>
           </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="group relative p-10 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors duration-300"
                >
                    {/* Hover Glow */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent pointer-events-none" />

                    <div className="mb-8 flex justify-between items-start">
                        <div className="p-3 bg-white/5 border border-white/5 rounded-sm">
                            <service.icon size={24} className="text-white relative z-10" />
                        </div>
                        <span className="font-mono text-xs text-white/30">0{index+1}</span>
                    </div>
                    
                    <h3 className="font-display text-2xl text-white mb-4 uppercase tracking-wide">
                        {service.title}
                    </h3>
                    
                    <p className="text-white/60 mb-8 leading-relaxed h-[60px]">
                        {service.description}
                    </p>

                    <ul className="space-y-3 border-t border-white/10 pt-6">
                        {service.features.map((feature, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-[var(--accent-primary)] font-mono">
                                <Zap size={12} />
                                <span className="text-white/70">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
