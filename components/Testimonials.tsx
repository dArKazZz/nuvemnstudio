"use client";

import { motion } from "framer-motion";
import { 
  Star,
  Quote
} from "lucide-react";

const testimonials = [
  {
    quote: "Nuvemn Studio entendió nuestra visión y la transformó en una web impecable. Subimos conversión desde la primera semana.",
    name: "Camila Torres",
    role: "Directora de Marketing",
    company: "Aether Beauty",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
  },
  {
    quote: "El equipo es rápido, creativo y súper estratégico. La nueva web refleja nuestra marca al 100%.",
    name: "Julián Mora",
    role: "Founder",
    company: "Cloudshore",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
  },
  {
    quote: "Su metodología es clara y el resultado final superó nuestras expectativas. Nuestro portafolio ahora inspira confianza.",
    name: "Lucía Rivas",
    role: "CEO",
    company: "Luma Atelier",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
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
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export default function Testimonials() {
  return (
    <section id="nosotros" className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div 
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-[var(--nuvem-700)] shadow-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <motion.span 
              className="h-2 w-2 rounded-full bg-[var(--nuvem-500)]"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            Testimonios
          </motion.div>
          <motion.h2 
            className="font-display text-3xl font-bold text-[var(--nuvem-950)] md:text-4xl"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Lo que dicen nuestros clientes
          </motion.h2>
          <motion.p 
            className="mx-auto mt-4 max-w-xl text-lg text-[var(--nuvem-700)]"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Nos convertimos en aliados creativos de cada proyecto.
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div 
          className="grid gap-6 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group flex flex-col rounded-2xl bg-white p-8 shadow-sm transition hover:shadow-lg"
            >
              {/* Rating */}
              <div className="mb-4 flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 + i * 0.05 }}
                  >
                    <Star 
                      size={16} 
                      strokeWidth={2} 
                      className="fill-[var(--nuvem-400)] text-[var(--nuvem-400)]" 
                    />
                  </motion.div>
                ))}
              </div>

              {/* Quote */}
              <div className="relative flex-1">
                <motion.div
                  initial={{ opacity: 0, rotate: -10 }}
                  whileInView={{ opacity: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <Quote 
                    size={32} 
                    strokeWidth={1} 
                    className="absolute -left-2 -top-2 text-[var(--nuvem-200)]" 
                  />
                </motion.div>
                <p className="relative z-10 text-[var(--nuvem-800)]">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </div>

              {/* Author */}
              <div className="mt-6 flex items-center gap-4 border-t border-[var(--nuvem-100)] pt-6">
                <motion.img 
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-[var(--nuvem-100)]"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                />
                <div>
                  <p className="font-semibold text-[var(--nuvem-950)]">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-[var(--nuvem-600)]">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
