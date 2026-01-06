"use client";

import { motion } from "framer-motion";
import { 
  CheckCircle,
  X,
  Star
} from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "Para emprendedores y pequeños negocios",
    price: "1.490",
    period: "único",
    highlighted: false,
    features: [
      { text: "Landing page personalizada", included: true },
      { text: "Diseño responsive", included: true },
      { text: "Formulario de contacto", included: true },
      { text: "SEO básico", included: true },
      { text: "Soporte por email", included: true },
      { text: "Analytics avanzado", included: false },
      { text: "Mantenimiento mensual", included: false },
    ],
  },
  {
    name: "Professional",
    description: "Para negocios en crecimiento",
    price: "2.990",
    period: "único",
    highlighted: true,
    features: [
      { text: "Sitio web completo (hasta 10 páginas)", included: true },
      { text: "Diseño UX/UI personalizado", included: true },
      { text: "CMS integrado", included: true },
      { text: "SEO avanzado", included: true },
      { text: "Analytics avanzado", included: true },
      { text: "Soporte prioritario", included: true },
      { text: "Mantenimiento mensual", included: true },
    ],
  },
  {
    name: "Enterprise",
    description: "Para grandes organizaciones",
    price: "A medida",
    period: "consultar",
    highlighted: false,
    features: [
      { text: "Proyecto a medida sin límites", included: true },
      { text: "Diseño premium exclusivo", included: true },
      { text: "Integraciones personalizadas", included: true },
      { text: "E-commerce avanzado", included: true },
      { text: "Account manager dedicado", included: true },
      { text: "SLA garantizado", included: true },
      { text: "Soporte 24/7", included: true },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export default function Pricing() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div 
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-[var(--nuvem-700)] shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[var(--nuvem-500)]"></span>
            Planes
          </div>
          <h2 className="font-display text-3xl font-bold text-[var(--nuvem-950)] md:text-4xl">
            Precios transparentes, sin sorpresas
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-[var(--nuvem-700)]">
            Elige el plan que mejor se adapte a tus necesidades.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div 
          className="grid gap-6 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className={`relative rounded-2xl p-8 shadow-sm transition-shadow hover:shadow-xl ${
                plan.highlighted 
                  ? 'bg-[var(--nuvem-950)] text-white' 
                  : 'bg-white'
              }`}
            >
              {plan.highlighted && (
                <motion.div 
                  className="absolute -top-3 left-1/2 -translate-x-1/2"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <span className="inline-flex items-center gap-1 rounded-full bg-[var(--nuvem-400)] px-3 py-1 text-xs font-semibold text-[var(--nuvem-950)]">
                    <Star size={12} strokeWidth={2} />
                    Más popular
                  </span>
                </motion.div>
              )}

              <div className="mb-6">
                <h3 className={`font-display text-xl font-bold ${plan.highlighted ? 'text-white' : 'text-[var(--nuvem-950)]'}`}>
                  {plan.name}
                </h3>
                <p className={`mt-1 text-sm ${plan.highlighted ? 'text-[var(--nuvem-300)]' : 'text-[var(--nuvem-600)]'}`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                <span className={`font-display text-4xl font-bold ${plan.highlighted ? 'text-[var(--nuvem-400)]' : 'text-[var(--nuvem-950)]'}`}>
                  {plan.price.startsWith("A") ? plan.price : `€${plan.price}`}
                </span>
                {!plan.price.startsWith("A") && (
                  <span className={`text-sm ${plan.highlighted ? 'text-[var(--nuvem-300)]' : 'text-[var(--nuvem-600)]'}`}>
                    {" "}pago {plan.period}
                  </span>
                )}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`mb-8 w-full rounded-xl py-3.5 text-sm font-semibold transition ${
                  plan.highlighted
                    ? 'bg-[var(--nuvem-400)] text-[var(--nuvem-950)] hover:bg-[var(--nuvem-300)]'
                    : 'bg-[var(--nuvem-600)] text-white hover:bg-[var(--nuvem-700)]'
                }`}
              >
                {plan.price.startsWith("A") ? "Contactar" : "Comenzar"}
              </motion.button>

              <ul className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <motion.li 
                    key={feature.text} 
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * featureIndex + 0.3 }}
                  >
                    {feature.included ? (
                      <CheckCircle 
                        size={18} 
                        strokeWidth={2} 
                        className={plan.highlighted ? 'text-[var(--nuvem-400)]' : 'text-[var(--nuvem-500)]'} 
                      />
                    ) : (
                      <X 
                        size={18} 
                        strokeWidth={2} 
                        className={plan.highlighted ? 'text-[var(--nuvem-700)]' : 'text-[var(--nuvem-300)]'} 
                      />
                    )}
                    <span className={`text-sm ${
                      feature.included 
                        ? plan.highlighted ? 'text-[var(--nuvem-200)]' : 'text-[var(--nuvem-800)]'
                        : plan.highlighted ? 'text-[var(--nuvem-700)]' : 'text-[var(--nuvem-400)]'
                    }`}>
                      {feature.text}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
