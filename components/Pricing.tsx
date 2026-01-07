"use client";

import { Check } from "lucide-react";

const plans = [
    {
        name: "CORE",
        price: "$2,500",
        period: "/mo",
        features: ["Data Ingestion", "Basic Modeling", "Weekly Reports", "Email Support"]
    },
    {
        name: "ADVANCED",
        price: "$5,000",
        period: "/mo",
        featured: true,
        features: ["Real-time Optimization", "Neural Cloning", "Daily Reports", "24/7 API Access", "Dedicated Analyst"]
    },
    {
        name: "DOMINANCE",
        price: "CUSTOM",
        period: "",
        features: ["Full Source Access", "Custom Algorithms", "On-premise Deployment", "White Glove Service"]
    }
];

export default function Pricing() {
  return (
    <section className="py-24 bg-black text-white" id="precios">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-4xl md:text-6xl font-light uppercase tracking-wide mb-20 text-center">
            Investment Protocols
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
                <div key={index} className={`p-10 border ${plan.featured ? 'border-[var(--accent-primary)] bg-[var(--accent-primary)]/5' : 'border-white/10 bg-white/5'} relative flex flex-col`}>
                    {plan.featured && <div className="absolute top-0 right-0 bg-[var(--accent-primary)] text-black text-[10px] font-bold px-2 py-1 uppercase tracking-widest">Recommended</div>}
                    
                    <h3 className="font-mono text-sm uppercase tracking-widest mb-4 opacity-70">{plan.name}</h3>
                    <div className="flex items-baseline mb-8">
                        <span className="text-4xl font-display font-bold">{plan.price}</span>
                        <span className="text-sm opacity-50 ml-2">{plan.period}</span>
                    </div>

                    <ul className="space-y-4 mb-10 flex-1">
                        {plan.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm font-light opacity-80">
                                <Check size={16} className="text-[var(--accent-primary)] mt-0.5" />
                                {feature}
                            </li>
                        ))}
                    </ul>

                    <button className={`w-full py-4 uppercase tracking-widest text-xs font-bold border transition-colors ${plan.featured ? 'bg-[var(--accent-primary)] text-black border-[var(--accent-primary)] hover:bg-white hover:border-white' : 'border-white/20 hover:bg-white hover:text-black'}`}>
                        Initialize
                    </button>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
