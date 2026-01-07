"use client";

import { motion, AnimatePresence } from "framer-motion";
import { 
  Home,
  Briefcase,
  Layers,
  DollarSign,
  Users,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";
import { TabType } from "@/app/page";

const navLinks = [
  { label: "Inicio", tab: "inicio" as TabType, icon: Home },
  { label: "Servicios", tab: "servicios" as TabType, icon: Briefcase },
  { label: "Proyectos", tab: "proyectos" as TabType, icon: Layers },
  { label: "Nosotros", tab: "nosotros" as TabType, icon: Users },
];

interface SiteHeaderProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

export default function SiteHeader({ activeTab, setActiveTab }: SiteHeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/20 backdrop-blur-md"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-6xl px-6">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <motion.button 
            onClick={() => setActiveTab("inicio")}
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-black">
              <span className="font-display text-xs font-bold">NS</span>
            </div>
            <span className="font-display text-lg font-bold text-white">
              Nuvemn
            </span>
          </motion.button>

          {/* Desktop Navigation - Tabs */}
          <motion.div 
            className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1.5 backdrop-blur-lg md:flex"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {navLinks.map((link, index) => (
              <motion.button
                key={link.label}
                onClick={() => setActiveTab(link.tab)}
                className={`relative flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition ${
                  activeTab === link.tab
                    ? "bg-white text-black"
                    : "text-white/60 hover:text-white hover:bg-white/10"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
              >
                <link.icon size={15} strokeWidth={2} />
                {link.label}
              </motion.button>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.a
            href="#contacto"
            className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-gray-200 md:inline-flex"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            Contactar
          </motion.a>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white md:hidden"
            whileTap={{ scale: 0.9 }}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div 
              className="absolute left-0 right-0 top-full bg-[#0a0a0a] border-b border-white/10 p-4 md:hidden"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={link.label}
                    onClick={() => {
                      setActiveTab(link.tab);
                      setMobileOpen(false);
                    }}
                    className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                      activeTab === link.tab
                        ? "bg-white text-black"
                        : "text-white/60 hover:text-white hover:bg-white/5"
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <link.icon size={18} />
                    {link.label}
                  </motion.button>
                ))}
                <motion.a
                  href="#contacto"
                  className="mt-2 rounded-xl bg-white px-4 py-3 text-center text-sm font-semibold text-black hover:bg-gray-200"
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25 }}
                >
                  Contactar
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
