"use client";

import { motion } from "framer-motion";
import { 
  ArrowUpRight,
  ShoppingBag,
  Globe,
  PenTool
} from "lucide-react";

const projects = [
  {
    name: "Aether Beauty",
    category: "E-commerce Premium",
    description: "Rediseño completo con foco en narrativa visual y checkout optimizado.",
    tags: ["Branding", "UX/UI", "SEO"],
    icon: ShoppingBag,
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2087&auto=format&fit=crop",
  },
  {
    name: "Cloudshore",
    category: "SaaS B2B",
    description: "Landing modular con storytelling para captación de leads calificados.",
    tags: ["Estrategia", "CRO", "Performance"],
    icon: Globe,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
  },
  {
    name: "Luma Atelier",
    category: "Estudio Creativo",
    description: "Web portfolio con experiencias inmersivas y microinteracciones sutiles.",
    tags: ["Diseño", "Animación", "Motion"],
    icon: PenTool,
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=2064&auto=format&fit=crop",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Showcase() {
  return (
    <section id="proyectos" className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div 
          className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-[var(--nuvem-700)] shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[var(--nuvem-500)]"></span>
              Proyectos
            </div>
            <h2 className="font-display text-3xl font-bold text-[var(--nuvem-950)] md:text-4xl">
              Proyectos destacados
            </h2>
            <p className="mt-4 max-w-xl text-lg text-[var(--nuvem-700)]">
              Cada sitio es una colaboración estratégica con objetivos claros.
            </p>
          </div>
          <motion.a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--nuvem-600)] transition hover:gap-3 hover:text-[var(--nuvem-700)]"
            whileHover={{ x: 5 }}
          >
            Ver todos los proyectos
            <ArrowUpRight size={16} strokeWidth={2} />
          </motion.a>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, index) => (
            <motion.article
              key={project.name}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group cursor-pointer overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-xl"
            >
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden">
                <motion.img 
                  src={project.image} 
                  alt={project.name}
                  className="h-full w-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--nuvem-950)]/60 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                
                {/* Icon Badge */}
                <motion.div 
                  className="absolute left-4 top-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/90 shadow-lg backdrop-blur-sm">
                    <project.icon size={20} strokeWidth={1.5} className="text-[var(--nuvem-600)]" />
                  </div>
                </motion.div>
                
                {/* Arrow Button */}
                <div className="absolute right-4 top-4">
                  <motion.div 
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 opacity-0 shadow-lg backdrop-blur-sm transition group-hover:opacity-100"
                    whileHover={{ rotate: 45 }}
                  >
                    <ArrowUpRight size={18} strokeWidth={2} className="text-[var(--nuvem-700)]" />
                  </motion.div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--nuvem-500)]">
                  {project.category}
                </p>
                <h3 className="mt-2 font-display text-xl font-bold text-[var(--nuvem-950)]">
                  {project.name}
                </h3>
                <p className="mt-2 text-sm text-[var(--nuvem-700)]">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tag}
                      className="rounded-full bg-[var(--nuvem-50)] px-3 py-1 text-xs font-medium text-[var(--nuvem-700)]"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + tagIndex * 0.05 }}
                      whileHover={{ scale: 1.05, backgroundColor: "var(--nuvem-100)" }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
