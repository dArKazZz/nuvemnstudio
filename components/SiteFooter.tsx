"use client";

import { motion } from "framer-motion";
import { 
  Mail,
  MapPin,
  Phone,
  Clock,
  Instagram,
  Twitter,
  Linkedin,
  Dribbble
} from "lucide-react";

const footerLinks = {
  servicios: [
    "Landing Pages",
    "Sitios Corporativos",
    "E-commerce",
    "Branding",
  ],
  recursos: [
    "Blog",
    "Guías",
    "FAQs",
    "Plantillas",
  ],
  empresa: [
    "Nosotros",
    "Proceso",
    "Contacto",
    "Carreras",
  ],
};

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Dribbble, href: "#", label: "Dribbble" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

export default function SiteFooter() {
  return (
    <footer className="bg-white">
      {/* Newsletter Section */}
      <div className="border-b border-[var(--nuvem-100)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Left - Newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="font-display text-2xl font-bold text-[var(--nuvem-950)] md:text-3xl">
                Construyamos tu presencia digital juntos.
              </h3>
              
              <form className="mt-6 flex gap-3">
                <div className="relative flex-1">
                  <Mail 
                    size={20} 
                    strokeWidth={1.5} 
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--nuvem-400)]" 
                  />
                  <input
                    type="email"
                    placeholder="Tu email"
                    className="w-full rounded-xl border border-[var(--nuvem-200)] bg-[var(--nuvem-50)] py-3.5 pl-12 pr-4 text-sm outline-none transition focus:border-[var(--nuvem-400)]"
                  />
                </div>
                <motion.button
                  type="submit"
                  className="rounded-xl bg-[var(--nuvem-600)] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[var(--nuvem-700)]"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Suscribirse
                </motion.button>
              </form>
              
              <p className="mt-3 text-xs text-[var(--nuvem-600)]">
                Al suscribirte aceptas nuestra{" "}
                <a href="#" className="underline">Política de Privacidad</a>
              </p>
            </motion.div>

            {/* Right - Contact Info */}
            <motion.div 
              className="grid gap-6 sm:grid-cols-2"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div className="flex gap-4" variants={itemVariants}>
                <motion.div 
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--nuvem-100)]"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <MapPin size={20} strokeWidth={1.5} className="text-[var(--nuvem-600)]" />
                </motion.div>
                <div>
                  <p className="font-semibold text-[var(--nuvem-950)]">Ubicación</p>
                  <p className="mt-1 text-sm text-[var(--nuvem-700)]">
                    Madrid, España<br />
                    Remote-first
                  </p>
                </div>
              </motion.div>

              <motion.div className="flex gap-4" variants={itemVariants}>
                <motion.div 
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--nuvem-100)]"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Phone size={20} strokeWidth={1.5} className="text-[var(--nuvem-600)]" />
                </motion.div>
                <div>
                  <p className="font-semibold text-[var(--nuvem-950)]">Teléfono</p>
                  <p className="mt-1 text-sm text-[var(--nuvem-700)]">
                    +34 600 000 000
                  </p>
                </div>
              </motion.div>

              <motion.div className="flex gap-4" variants={itemVariants}>
                <motion.div 
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--nuvem-100)]"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Mail size={20} strokeWidth={1.5} className="text-[var(--nuvem-600)]" />
                </motion.div>
                <div>
                  <p className="font-semibold text-[var(--nuvem-950)]">Email</p>
                  <p className="mt-1 text-sm text-[var(--nuvem-700)]">
                    hola@nuvemn.studio
                  </p>
                </div>
              </motion.div>

              <motion.div className="flex gap-4" variants={itemVariants}>
                <motion.div 
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--nuvem-100)]"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Clock size={20} strokeWidth={1.5} className="text-[var(--nuvem-600)]" />
                </motion.div>
                <div>
                  <p className="font-semibold text-[var(--nuvem-950)]">Horario</p>
                  <p className="mt-1 text-sm text-[var(--nuvem-700)]">
                    Lun - Vie: 9:00 - 18:00
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Links Section */}
      <div className="border-b border-[var(--nuvem-100)]">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <motion.div 
            className="grid gap-8 sm:grid-cols-2 md:grid-cols-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Servicios */}
            <motion.div variants={itemVariants}>
              <h4 className="font-semibold text-[var(--nuvem-950)]">Servicios</h4>
              <ul className="mt-4 space-y-3">
                {footerLinks.servicios.map((link) => (
                  <li key={link}>
                    <motion.a 
                      href="#" 
                      className="text-sm text-[var(--nuvem-700)] transition hover:text-[var(--nuvem-600)]"
                      whileHover={{ x: 4 }}
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Recursos */}
            <motion.div variants={itemVariants}>
              <h4 className="font-semibold text-[var(--nuvem-950)]">Recursos</h4>
              <ul className="mt-4 space-y-3">
                {footerLinks.recursos.map((link) => (
                  <li key={link}>
                    <motion.a 
                      href="#" 
                      className="text-sm text-[var(--nuvem-700)] transition hover:text-[var(--nuvem-600)]"
                      whileHover={{ x: 4 }}
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Empresa */}
            <motion.div variants={itemVariants}>
              <h4 className="font-semibold text-[var(--nuvem-950)]">Empresa</h4>
              <ul className="mt-4 space-y-3">
                {footerLinks.empresa.map((link) => (
                  <li key={link}>
                    <motion.a 
                      href="#" 
                      className="text-sm text-[var(--nuvem-700)] transition hover:text-[var(--nuvem-600)]"
                      whileHover={{ x: 4 }}
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Social Media */}
            <motion.div variants={itemVariants}>
              <h4 className="font-semibold text-[var(--nuvem-950)]">Síguenos</h4>
              <div className="mt-4 flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--nuvem-100)] text-[var(--nuvem-600)] transition hover:bg-[var(--nuvem-600)] hover:text-white"
                    whileHover={{ scale: 1.1, y: -3 }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <social.icon size={18} strokeWidth={1.5} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <motion.div 
        className="mx-auto max-w-6xl px-6 py-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <motion.div 
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--nuvem-600)]"
              whileHover={{ rotate: 10 }}
            >
              <span className="font-display text-xs font-bold text-white">NS</span>
            </motion.div>
            <span className="text-sm text-[var(--nuvem-700)]">
              © 2026 Nuvemn Studio. Todos los derechos reservados.
            </span>
          </div>
          
          <div className="flex gap-6 text-sm text-[var(--nuvem-700)]">
            <motion.a href="#" className="transition hover:text-[var(--nuvem-600)]" whileHover={{ y: -2 }}>
              Términos
            </motion.a>
            <motion.a href="#" className="transition hover:text-[var(--nuvem-600)]" whileHover={{ y: -2 }}>
              Privacidad
            </motion.a>
            <motion.a href="#" className="transition hover:text-[var(--nuvem-600)]" whileHover={{ y: -2 }}>
              Cookies
            </motion.a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
