"use client";

import { motion } from "framer-motion";
import { 
  Rocket, 
  Users, 
  Calendar, 
  ThumbsUp 
} from "lucide-react";

const stats = [
  { 
    label: "Proyectos Lanzados", 
    value: "+120",
    icon: Rocket
  },
  { 
    label: "Clientes Activos", 
    value: "48",
    icon: Users
  },
  { 
    label: "Tiempo Promedio", 
    value: "4-6 sem",
    icon: Calendar
  },
  { 
    label: "Satisfacción", 
    value: "98%",
    icon: ThumbsUp
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export default function Stats() {
  return (
    <section className="px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <motion.div 
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="flex items-center gap-4 rounded-2xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <motion.div 
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--nuvem-100)]"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <stat.icon size={24} strokeWidth={1.5} className="text-[var(--nuvem-600)]" />
              </motion.div>
              <div>
                <p className="font-display text-2xl font-bold text-[var(--nuvem-950)]">
                  {stat.value}
                </p>
                <p className="text-sm text-[var(--nuvem-700)]">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
