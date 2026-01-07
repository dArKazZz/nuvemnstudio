"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Portafolio Ing. Sistemas",
    description: (
      <>
        <p className="mb-4">
          Diseño y desarrollo de <strong className="text-white">Portafolio Profesional</strong> para estudiante de Ingeniería de Sistemas, enfocado en destacar habilidades técnicas y proyectos de software.
        </p>
        <p className="mb-4">
          La plataforma cuenta con una <strong className="text-white">interfaz minimalista y oscura</strong> ("Dark Mode") ideal para el sector tecnológico, integrando animaciones sutiles y una estructura de navegación fluida para presentar repositorios de código y casos de estudio.
        </p>
        <p>
          Se priorizó el <strong className="text-white">rendimiento y la accesibilidad</strong>, asegurando una presentación impecable tanto en dispositivos móviles como de escritorio, sirviendo como carta de presentación digital de alto impacto.
        </p>
      </>
    ),
    accentColor: "text-blue-400",
    images: {
      desktop: "/projects/2desk.png",
      tablet: "/projects/2tab.png",
      mobile: "/projects/2mob.png",
    },
  },
  {
    id: 2,
    title: "Dogehoot",
    description: (
      <>
        <p className="mb-4">
          Desarrollo de <strong className="text-white">Dogehoot</strong>, una plataforma de cuestionarios educativos en tiempo real inspirada en la gamificación, permitiendo a los usuarios crear y jugar trivias multijugador.
        </p>
        <p className="mb-4">
          El sistema cuenta con <strong className="text-white">sincronización en vivo</strong> (WebSockets) para gestionar preguntas, respuestas y puntuaciones instantáneas, ofreciendo una experiencia competitiva y fluida similar a Kahoot!.
        </p>
        <p>
          Incluye funcionalidades avanzadas como un editor intuitivo de preguntas, salas de espera personalizadas y un <strong className="text-white">panel de resultados dinámico</strong>, todo envuelto en una interfaz divertida y moderna.
        </p>
      </>
    ),
    accentColor: "text-purple-400",
    images: {
      desktop: "/projects/3desk.png",
      tablet: "/projects/3tab.png",
      mobile: "/projects/3mob.png",
    },
  },
  {
    id: 3,
    title: "ChatStream Store",
    description: (
      <>
        <p className="mb-4">
          Implementación de una <strong className="text-white">Tienda Virtual completa</strong> para ChatStream, diseñada para optimizar la venta de productos digitales y suscripciones de streaming.
        </p>
        <p className="mb-4">
          El sitio integra un <strong className="text-white">carrito de compras dinámico</strong> y pasarelas de pago seguras, ofreciendo una experiencia de usuario fluida desde la selección del producto hasta el checkout final.
        </p>
        <p>
          Se desarrolló un panel de administración personalizado para la gestión de inventario y pedidos, con un diseño visual <strong className="text-white">futurista y tecnológico</strong> alineado con la identidad de la marca.
        </p>
      </>
    ),
    accentColor: "text-emerald-400",
    images: {
      desktop: "/projects/4desk.png",
      tablet: "/projects/4tab.png",
      mobile: "/projects/4mob.png",
    },
  },
  {
    id: 4,
    title: "Brismar",
    description: (
      <>
        <p className="mb-4">
          Diseño y desarrollo de <strong className="text-white">Landing Page Corporativa</strong> para Brismar, empresa líder en el sector pesquero, enfocada en la exportación de productos marinos de alta calidad.
        </p>
        <p className="mb-4">
          La web presenta un diseño visual inmersivo que evoca la frescura del océano, con un catálogo detallado de productos y una estructura orientada a la <strong className="text-white">captación de clientes internacionales</strong>.
        </p>
        <p>
          Se optimizó la experiencia para dispositivos móviles y se integraron formularios de contacto directos, facilitando la conexión comercial y fortaleciendo su <strong className="text-white">presencia digital global</strong>.
        </p>
      </>
    ),
    accentColor: "text-sky-400",
    images: {
      desktop: "/projects/5desk.png",
      tablet: "/projects/5tab.png",
      mobile: "/projects/5mob.png",
    },
  },
  {
    id: 5,
    title: "Sistema Experto Bayesiano",
    description: (
      <>
        <p className="mb-4">
          Implementación académica de un <strong className="text-white">Sistema Experto con Inteligencia Artificial</strong>, diseñado para realizar diagnósticos y predicciones probabilísticas basadas en redes bayesianas.
        </p>
        <p className="mb-4">
          El proyecto integra algoritmos complejos de inferencia estadística con una <strong className="text-white">interfaz intuitiva</strong>, permitiendo a los usuarios visualizar nodos, probabilidades y dependencias de manera gráfica e interactiva.
        </p>
        <p>
          Desarrollado como solución tecnológica avanzada para la toma de decisiones bajo incertidumbre, destacando el uso de <strong className="text-white">modelos matemáticos rigurosos</strong> aplicados a problemas del mundo real.
        </p>
      </>
    ),
    accentColor: "text-rose-400",
    images: {
      desktop: "/projects/6desk.png",
      tablet: "/projects/6tab.png",
      mobile: "/projects/6mob.png",
    },
  },
  {
    id: 6,
    title: "EduQuiz",
    description: (
      <>
        <p className="mb-4">
          Plataforma de <strong className="text-white">cuestionarios en línea</strong> diseñada para fomentar el aprendizaje competitivo entre estudiantes a través de mecánicas de juego.
        </p>
        <p className="mb-4">
          EduQuiz permite crear salas de trivia personalizadas, donde los participantes compiten por puntos en tiempo real, impulsando la <strong className="text-white">participación activa</strong> y el repaso de conceptos académicos de forma lúdica.
        </p>
        <p>
          Con un diseño vibrante y responsivo, la herramienta facilita tanto a docentes como a alumnos la gestión de evaluaciones formativas, transformando el estudio en una <strong className="text-white">experiencia social y divertida</strong>.
        </p>
      </>
    ),
    accentColor: "text-orange-400",
    images: {
      desktop: "/projects/1desk.jpeg",
      tablet: "/projects/1tab.jpeg",
      mobile: "/projects/1mob.jpeg",
    },
  },
];

export default function Showcase() {

  return (
    <section className="py-24 bg-black text-white relative overflow-hidden" id="proyectos">
      <div className="container mx-auto px-6 pt-8">
        <div className="mb-20">
             <h2 className="font-display text-4xl md:text-6xl font-light uppercase tracking-wide mb-4">
                Proyectos Destacados
            </h2>
            <div className="h-1 w-20 bg-[var(--accent-primary)]" />
        </div>

        <div className="flex flex-col gap-32">
          {projects.map((project, index) => (
            <div key={project.id} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Content (Text) */}
              <div className={`order-2 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                <motion.h3 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`font-display text-5xl md:text-6xl font-bold mb-8 italic ${project.accentColor}`}
                >
                  {project.title}
                </motion.h3>
                
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-gray-400 leading-relaxed text-lg font-light mb-10"
                >
                  {project.description}
                </motion.div>
              </div>

              {/* Right Content - Device Composition Gallery */}
              <div className={`relative h-[400px] md:h-[500px] w-full mt-12 lg:mt-0 perspective-1000 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                {/* Decorative background glow */}
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-20 blur-[100px] pointer-events-none ${project.accentColor.replace('text-', 'bg-')}`} />

                {/* Desktop View (Center - Back) */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full md:w-[90%] z-10 rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-gray-900"
                >
                     <Image
                        src={project.images.desktop}
                        alt="Desktop View"
                        width={800}
                        height={500}
                        className="w-full h-auto object-cover"
                    />
                </motion.div>

                 {/* Mobile View (Left - Front) */}
                 <motion.div 
                    initial={{ opacity: 0, x: -30, rotate: -12 }}
                    whileInView={{ opacity: 1, x: 0, rotate: -6 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="absolute top-[60%] left-2 md:-left-4 -translate-y-1/2 w-[25%] md:w-[18%] z-30 rounded-[1.5rem] overflow-hidden shadow-2xl border-[4px] border-gray-900 bg-black"
                >
                     <Image
                        src={project.images.mobile}
                        alt="Mobile View"
                        width={300}
                        height={600}
                        className="w-full h-auto object-cover"
                    />
                </motion.div>

                {/* Tablet View (Right - Front) */}
                <motion.div 
                    initial={{ opacity: 0, x: 30, rotate: 12 }}
                    whileInView={{ opacity: 1, x: 0, rotate: 6 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="absolute top-[60%] right-2 md:-right-6 -translate-y-1/2 w-[45%] md:w-[45%] z-20 rounded-xl overflow-hidden shadow-2xl border-[4px] border-gray-900 bg-gray-900"
                >
                     <Image
                        src={project.images.tablet}
                        alt="Tablet View"
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover"
                    />
                </motion.div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
