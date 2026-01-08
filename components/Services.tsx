"use client";

import { motion } from "framer-motion";
import QuoteButton from "@/components/QuoteButton";
import { 
  University, 
  Store, 
  User,
  Zap,
  Bot,
  Monitor,
  Palette,
  RefreshCcw,
  Server
} from "lucide-react";

const services = [
  {
    title: "WEB INSTITUCIONAL",
    description: "Entrar en internet es un paso clave para cualquier empresa. Una web sirve como carta de presentación y canal de comunicación con tus clientes.",
    icon: University,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop",
    features: ["Autoadministrable", "Carga rápida", "Sliders en Home", "Seccion Nosotros", "Seccion Servicios" , "Seccion Contacto", "Botón WhatsApp", "Blog si es necesario"],
  },
  {
    title: "LANDING PAGE",
    description: "Ideal para campañas específicas, una landing page bien diseñada puede aumentar significativamente las conversiones y captar leads de calidad.",
    icon: Bot,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2670&auto=format&fit=crop",
    features: ["Diseño atractivo", "Llamadas a la acción", "Información ubicada estratégicamente", "Formulario de contacto", "Método de pago si es requerido", "Funnel de ventas si es requerido", "Enlaces anclados para rápida navegación", "Botón de WhatsApp"],
  },
  {
    title: "E-COMMERCE",
    description: "Vender en línea nunca ha sido tan crucial. Un sitio de e-commerce optimizado no solo mejora la experiencia del usuario, sino que también impulsa las ventas y la fidelización de clientes.",
    icon: Store,
    image: "https://images.unsplash.com/photo-1472851294608-41551b116d48?q=80&w=2670&auto=format&fit=crop",
    features: ["Catálogo de productos", "Carrito de compras", "Pasarela de pago segura", "Gestión de inventario",  "Reseñas de clientes", "Integración con redes sociales"],
  },
  {
    title: "PERSONALIZADO",
    description: "Si tienes necesidades específicas, podemos desarrollar una solución web a medida que se adapte perfectamente a los objetivos y requisitos de tu negocio.",
    icon: User,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop",
    features: ["Funcionalidades a medida", "Integraciones específicas", "Diseño único",  "Soporte y mantenimiento", "Escalabilidad futura", "Integración con Software o APIs externas"],
  },
];

const technicalServices = [
  {
    title: "Desarrollo Web a Medida",
    description: "Sitios rápidos, seguros y escalables con Next.js y React.",
    icon: Monitor,
    features: ["Next.js / React", "Tailwind CSS", "Accesibilidad AA"],
  },
  {
    title: "Diseño UX/UI",
    description: "Interfaces centradas en el usuario: limpias, intuitivas y responsivas.",
    icon: Palette,
    features: ["Wireframes & prototipos", "Design System", "Responsive"],
  },
  {
    title: "Rediseño y Migraciones",
    description: "Mejoramos sitios existentes y migramos a tecnologías modernas.",
    icon: RefreshCcw,
    features: ["Migración a Next.js", "Core Web Vitals"],
  },
  {
    title: "Mantenimiento y Soporte",
    description: "Actualizaciones, backups y monitoreo para operar sin interrupciones.",
    icon: Server,
    features: ["Uptime & monitoreo", "Backups automáticos", "Soporte técnico"],
  }
];

export default function Services() {
  return (
    <section id="servicios" className="px-6 py-24 bg-black relative">
       {/* Accents */}
      <div className="absolute right-0 top-0 w-1/3 h-[500px] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[var(--accent-glow)]/20 via-black/0 to-transparent pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <motion.div 
          className="mb-20 flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8 pt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
           <div>
            <h2 className="font-display text-4xl md:text-6xl font-light text-white mb-2 uppercase tracking-wide">
                SERVICIOS
            </h2>
            <p className="font-mono text-sm tracking-widest text-[#00FF99]">
              / INSTITUCIONAL / LANDING PAGE / E-COMMERCE / PERSONALIZADO
            </p>
           </div>
           
           <div className="hidden md:block text-right">
             <p className="text-white/40 text-sm max-w-xs">
                 Servicios completos de desarrollo web para crear sitios atractivos, funcionales y optimizados que reflejen la identidad de tu marca y atraigan a tus clientes ideales.
             </p>
           </div>
        </motion.div>

        {/* Services Grid - Bento Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {services.map((service, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-500 ${
                        index === 0 || index === 3 ? "md:col-span-2" : "md:col-span-1"
                    }`}
                >
                    {/* Background Image for All Cards */}
                    {service.image && (
                        <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-105">
                            <img 
                                src={service.image} 
                                alt={service.title}
                                className="h-full w-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
                        </div>
                    )}

                    {/* Background Pattern */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10 flex flex-col h-full">
                        <div className="mb-6 flex items-start justify-between">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500">
                                <service.icon className="h-6 w-6 text-white" />
                            </div>
                            <span className="font-mono text-xs text-white/30 tracking-widest border border-white/5 bg-white/5 rounded-full px-3 py-1">0{index + 1}</span>
                        </div>

                        {/* Layout variations based on size */}
                        {(index === 0 || index === 3) ? (
                            <div className="flex flex-col h-full">
                                <div className="flex flex-col md:flex-row gap-8 flex-grow">
                                    <div className="flex flex-col flex-1">
                                        <h3 className="mb-4 font-display text-2xl md:text-4xl font-medium text-white group-hover:text-[#00FF99] transition-colors duration-300">
                                            {service.title}
                                        </h3>
                                        <p className="mb-6 text-white/60 leading-relaxed text-base md:text-lg">
                                            {service.description}
                                        </p>
                                        
                                        <div className="mt-auto flex flex-wrap gap-2">
                                            {service.features.map((feature, i) => (
                                                <span key={i} className="inline-flex items-center gap-1.5 rounded-lg bg-white/10 px-3 py-1.5 text-sm font-mono font-medium text-white border border-white/20 shadow-sm shadow-black/50 group-hover:border-[#00FF99]/30 group-hover:bg-[#00FF99]/10 group-hover:text-[#00FF99] transition-all duration-300">
                                                <Zap size={12} className="text-[#00FF99]" />
                                                {feature}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="mt-6">
                                          <QuoteButton href="#contacto" size="md" variant="accent" />
                                        </div>
                                    </div>

                                    {/* Visual Widget on the Right */}
                                    <div className="hidden md:block w-[300px] shrink-0 relative">
                                        <div className="absolute inset-0 rounded-2xl overflow-hidden border border-white/10 bg-black/50 group-hover:border-[#00FF99]/30 transition-colors duration-500">
                                            <div className="absolute inset-0 bg-gradient-to-br from-[#00FF99]/10 to-transparent z-10" />
                                            {service.image && (
                                                <img 
                                                    src={service.image} 
                                                    alt={service.title}
                                                    className="h-full w-full object-cover transform group-hover:scale-110 transition-transform duration-700 opacity-80" 
                                                />
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className="mb-auto">
                                    <h3 className="mb-4 font-display text-2xl md:text-3xl font-medium text-white group-hover:text-[#00FF99] transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                    <p className="mb-8 text-white/60 leading-relaxed text-sm md:text-base">
                                        {service.description}
                                    </p>
                                </div>

                                <div className="mt-4">
                                <div className="flex flex-wrap gap-2">
                                        {service.features.map((feature, i) => (
                                            <span key={i} className="inline-flex items-center gap-1.5 rounded-lg bg-white/10 px-3 py-1.5 text-xs font-mono font-medium text-white border border-white/20 shadow-sm shadow-black/50 group-hover:border-[#00FF99]/30 group-hover:bg-[#00FF99]/10 group-hover:text-[#00FF99] transition-all duration-300">
                                            <Zap size={12} className="text-[#00FF99]" />
                                            {feature}
                                            </span>
                                        ))}
                                </div>
                                </div>

                                <div className="mt-6">
                                  <QuoteButton href="#contacto" size="md" variant="accent" />
                                </div>
                            </>
                        )}
                    </div>
                    
                    {/* Hover Glow */}
                    <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#00FF99] opacity-0 blur-[80px] group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" />
                </motion.div>
            ))}
        </div>

        {/* Technical Services Section */}
        <motion.div 
          className="mt-32 mb-16 flex flex-col items-center justify-center text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
           <h2 className="font-display text-3xl md:text-5xl font-light text-white mb-4 uppercase tracking-wide">
               Soluciones Técnicas
           </h2>
           <p className="text-white/40 max-w-xl text-center">
               Expertise técnico para proyectos que requieren rendimiento, accesibilidad y escalabilidad.
           </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {technicalServices.map((service, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="group relative p-10 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors duration-300 rounded-3xl overflow-hidden"
                >
                    {/* Hover Glow */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent pointer-events-none" />

                    <div className="mb-8 flex justify-between items-start">
                        <div className="p-3 bg-white/5 border border-white/5 rounded-2xl">
                            <service.icon size={24} className="text-white relative z-10" />
                        </div>
                        <span className="font-mono text-xs text-white/30 tracking-widest border border-white/5 bg-white/5 rounded-full px-3 py-1">0{index+1}</span>
                    </div>
                    
                    <h3 className="font-display text-2xl text-white mb-4 uppercase tracking-wide group-hover:text-[#00FF99] transition-colors">
                        {service.title}
                    </h3>
                    
                    <p className="text-white/60 mb-8 leading-relaxed">
                        {service.description}
                    </p>

                    <ul className="space-y-3 border-t border-white/10 pt-6">
                        {service.features.map((feature, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-[var(--accent-primary)] font-mono">
                                <Zap size={12} color="#0f9"/>
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
