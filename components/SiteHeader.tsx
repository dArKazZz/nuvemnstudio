"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Briefcase,
  Layers,
  Users,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";
import type { SectionId } from "@/app/page";
import Link from "next/link";

export const navLinks = [
  { label: "Inicio", section: "inicio" as SectionId, icon: Home },
  { label: "Servicios", section: "servicios" as SectionId, icon: Briefcase },
  { label: "Proyectos", section: "proyectos" as SectionId, icon: Layers },
  { label: "Nosotros", section: "nosotros" as SectionId, icon: Users },
];

interface SiteHeaderProps {
  activeSection: SectionId;
  onNavigate: (section: SectionId) => void;
}

export default function SiteHeader({ activeSection, onNavigate }: SiteHeaderProps) {
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
            type="button"
            onClick={() => onNavigate("inicio")}
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex h-18 w-18 items-center justify-center ">
              <img src="/LOGO.svg" alt="Nuvemn Studio Logo" className="h-18 w-18" />
            </div>
            <div className="flex flex-col items-end leading-tight">
              <span className="font-display text-lg font-bold text-white">
              Nuvemn
              </span>
              <span className="font-display text-md font-regular text-white -mt-1">
              Studio
              </span>
            </div>
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
                type="button"
                onClick={() => onNavigate(link.section)}
                aria-current={activeSection === link.section ? "page" : undefined}
                className={`relative flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition ${activeSection === link.section
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

          {/* 
          
          <motion.a
            href="https://wa.me/51924391079"
            className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-gray-200 md:inline-flex"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            Contactar
          </motion.a>
          */}
          
          <Link
                    href="/agendarreunion"
                    className="hidden items-center gap-2 rounded-full border-2 border-white px-6 py-2 font-medium text-white transition-colors hover:bg-white hover:text-black md:inline-flex"
                  >
                    Agendar Reunión
                  </Link>

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
                <Link
                  href="/agendarreunion"
                  onClick={() => setMobileOpen(false)}
                  className="mb-1 rounded-2xl bg-white px-4 py-3 text-center text-sm font-semibold text-black hover:bg-gray-200"
                >
                  Agendar Reunión
                </Link>
                {navLinks.map((link, index) => (
                  <motion.button
                    key={link.label}
                    type="button"
                    onClick={() => {
                      onNavigate(link.section);
                      setMobileOpen(false);
                    }}
                    aria-current={activeSection === link.section ? "page" : undefined}
                    className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${activeSection === link.section
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
                  href="https://wa.me/51924391079"
                  className="mt-2 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-center text-sm font-semibold text-white hover:bg-white/10"
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
