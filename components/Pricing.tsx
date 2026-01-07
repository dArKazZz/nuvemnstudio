"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";
import QuoteButton from "@/components/QuoteButton";

const plans = [
    {
        name: "Landing Page",
        price: "Desde $299",
        period: "",
        features: [
            "Sección única optimizada",
            "Diseño responsive",
            "Formulario de contacto",
            "Entrega rápida",
        ],
    },
    {
        name: "Sitio Institucional",
        price: "Desde $699",
        period: "",
        features: [
            "Hasta 6 páginas",
            "Blog/Noticias opcional",
            "Integración básica SEO",
            "Mapa y redes sociales",
        ],
    },
    {
        name: "Tienda Online",
        price: "Desde $1299",
        period: "",
        featured: true,
        features: [
            "Catálogo de productos",
            "Checkout seguro",
            "Pasarela de pago",
            "Gestión de inventario",
        ],
    },
    {
        name: "Proyecto Personalizado",
        price: "A medida",
        period: "",
        features: [
            "Arquitectura a medida",
            "Integraciones específicas",
            "Escalabilidad y performance",
            "Acompañamiento experto",
        ],
    },
];

// Conversión aproximada USD → PEN (soles peruanos)
const USD_TO_PEN = 3.8;
const toPEN = (price: string): string | null => {
    const match = price.match(/\$(\d+(?:\.\d+)?)/);
    if (!match) return null;
    const usd = parseFloat(match[1]);
    const pen = Math.round(usd * USD_TO_PEN);
    return `≈ S/ ${pen}`;
};

export default function Pricing() {
  return (
    <section className="py-24 bg-black text-white" id="precios">
      <div className="container mx-auto px-6">
                <h2 className="font-display text-4xl md:text-6xl font-light uppercase tracking-wide mb-20 text-center">
                        Paquetes de Servicio Web
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                        {plans.map((plan, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -8, scale: 1.01 }}
                                    whileTap={{ scale: 0.995 }}
                                    transition={{ delay: index * 0.1, duration: 0.6, type: 'spring', stiffness: 240, damping: 20 }}
                                    className={`group p-8 lg:p-10 border ${plan.featured ? 'border-[var(--accent-primary)] bg-white/10' : 'border-white/10 bg-white/5'} relative flex flex-col hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]`}
                                >
                                    {plan.featured && (
                                        <div className="absolute top-0 right-0 bg-[var(--accent-primary)] text-black text-[10px] font-bold px-2 py-1 uppercase tracking-widest">
                                            Recomendado
                                        </div>
                                    )}

                                    <h3 className="font-mono text-sm uppercase tracking-widest mb-4 opacity-80">{plan.name}</h3>
                                    <div className="flex items-baseline mb-6 gap-3">
                                        <span className="text-3xl lg:text-4xl font-display font-bold">{plan.price}</span>
                                        {plan.period && <span className="text-sm opacity-50 ml-2">{plan.period}</span>}
                                        {toPEN(plan.price) && (
                                            <span className="text-xs opacity-70 font-mono bg-white/5 border border-white/10 px-2 py-0.5 rounded">
                                                {toPEN(plan.price)}
                                            </span>
                                        )}
                                    </div>

                                    <ul className="space-y-3 mb-8 flex-1">
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm font-light opacity-90">
                                                <Check size={16} className="text-[var(--accent-primary)] mt-0.5" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <button
                                        className={`w-full py-3 uppercase tracking-widest text-xs font-bold border transition-colors ${plan.featured ? 'bg-[var(--accent-primary)] text-black border-[var(--accent-primary)] hover:bg-white hover:border-white' : 'border-white/20 hover:bg-white hover:text-black'}`}
                                    >
                                        Solicitar paquete
                                    </button>
                                </motion.div>
            ))}
        </div>

                <div className="mt-12 text-center">
                    <QuoteButton href="#contacto" size="lg" variant="accent" />
                </div>
      </div>
    </section>
  );
}
