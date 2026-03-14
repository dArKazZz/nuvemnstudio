"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type Project = {
  id: number;
  title: string;
  summary: string;
  details: string[];
  accent: {
    solid: string;
    glow: string;
    edge: string;
  };
  images: {
    desktop: string;
    tablet: string;
    mobile: string;
  };
};

const projects: Project[] = [
  {
    id: 1,
    title: "Dogehoot",
    summary:
      "Una experiencia competitiva y en vivo para trivias multijugador, con una interfaz divertida y ritmo visual constante.",
    details: [
      "La plataforma se construyo para que la energia del juego se sintiera desde la primera pantalla, con transiciones rapidas y una jerarquia clara para preguntas, rankings y resultados.",
      "El producto combina sincronizacion en vivo, gestion de salas y una identidad visual marcada para que cada partida se vea dinamica tanto en desktop como en mobile.",
    ],
    accent: {
      solid: "#c084fc",
      glow: "rgba(192, 132, 252, 0.28)",
      edge: "rgba(192, 132, 252, 0.45)",
    },
    images: {
      desktop: "/projects/3desk.png",
      tablet: "/projects/3tab.png",
      mobile: "/projects/3mob.png",
    },
  },
  {
    id: 2,
    title: "ChatStream Store",
    summary:
      "Una tienda digital pensada para vender con claridad, reducir friccion en checkout y sostener una identidad futurista de marca.",
    details: [
      "La composicion pone el foco en producto, conversion y confianza: catalogo claro, carrito dinamico y jerarquia visual estable para guiar toda la compra.",
      "El resultado es una tienda que se siente mas premium que utilitaria, sin perder velocidad ni legibilidad en flujos de pago y administracion.",
    ],
    accent: {
      solid: "#34d399",
      glow: "rgba(52, 211, 153, 0.25)",
      edge: "rgba(52, 211, 153, 0.42)",
    },
    images: {
      desktop: "/projects/4desk.png",
      tablet: "/projects/4tab.png",
      mobile: "/projects/4mob.png",
    },
  },
  {
    id: 3,
    title: "Brismar",
    summary:
      "Una landing corporativa con atmosfera oceanica y direccion visual clara para proyectar confianza comercial internacional.",
    details: [
      "El sitio se planteo como una vitrina de marca: imagenes inmersivas, narrativa directa y bloques pensados para presentar productos y abrir conversaciones comerciales.",
      "La interfaz equilibra presencia premium y lectura rapida para que la empresa se vea solida en desktop, tablet y mobile sin caer en una web corporativa generica.",
    ],
    accent: {
      solid: "#38bdf8",
      glow: "rgba(56, 189, 248, 0.24)",
      edge: "rgba(56, 189, 248, 0.4)",
    },
    images: {
      desktop: "/projects/5desk.png",
      tablet: "/projects/5tab.png",
      mobile: "/projects/5mob.png",
    },
  },
];

export default function Showcase() {
  return (
    <section
      className="relative overflow-hidden bg-black py-24 text-white scroll-mt-28"
      id="proyectos"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_38%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:28px_28px]" />

      <div className="container relative z-10 mx-auto px-6 pt-8">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="max-w-5xl font-display text-[clamp(3.4rem,8vw,7.4rem)] uppercase leading-[0.86] tracking-[-0.05em] text-white">
            Proyectos con
            <span className="block text-white/55">mas presencia visual</span>
          </h2>
        </motion.div>

        <div className="space-y-10">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.article
                key={project.id}
                className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-4 md:rounded-[34px] md:p-6 lg:p-8"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.7, delay: index * 0.08, ease: "easeOut" }}
                style={{
                  boxShadow: `inset 0 1px 0 rgba(255,255,255,0.05), 0 24px 80px rgba(0,0,0,0.34), 0 0 0 1px ${project.accent.edge}`,
                }}
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-90"
                  style={{
                    background: `radial-gradient(circle at ${
                      isEven ? "18% 22%" : "82% 22%"
                    }, ${project.accent.glow} 0%, rgba(0,0,0,0) 42%)`,
                  }}
                />
                <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:22px_22px]" />

                <div
                  className={`grid items-center gap-6 md:gap-8 lg:gap-12 ${
                    isEven
                      ? "lg:grid-cols-[0.92fr_1.08fr]"
                      : "lg:grid-cols-[1.08fr_0.92fr]"
                  }`}
                >
                  <div className={`relative z-10 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    <h3 className="font-display text-[clamp(2.2rem,9vw,5.6rem)] uppercase leading-[0.92] tracking-[-0.05em] text-white">
                      {project.title}
                    </h3>

                    <p className="mt-4 max-w-xl text-base leading-relaxed text-white/68 md:mt-5 md:text-lg">
                      {project.summary}
                    </p>

                    <div className="mt-6 space-y-3 text-sm leading-relaxed text-white/56 md:mt-8 md:text-[15px]">
                      {project.details.map((detail) => (
                        <p key={detail}>{detail}</p>
                      ))}
                    </div>
                  </div>

                  <div className={`relative ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    <motion.div
                      className="relative overflow-hidden rounded-[26px] border border-white/10 bg-black/35 p-3 backdrop-blur-sm sm:p-4 lg:hidden"
                      initial={{ opacity: 0, scale: 0.96 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
                    >
                      <div
                        className="absolute inset-3 rounded-[22px] opacity-100 sm:inset-4 sm:rounded-[26px]"
                        style={{
                          border: `1px solid ${project.accent.edge}`,
                          background: `radial-gradient(circle at 50% 0%, ${project.accent.glow}, rgba(0,0,0,0) 55%)`,
                        }}
                      />

                      <div className="relative z-10">
                        <motion.div
                          className="relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-950 shadow-[0_18px_50px_rgba(0,0,0,0.38)]"
                          whileHover={{ y: -6, scale: 1.01 }}
                          transition={{ duration: 0.35, ease: "easeOut" }}
                        >
                          <Image
                            src={project.images.desktop}
                            alt={`${project.title} desktop`}
                            width={800}
                            height={500}
                            priority={index === 0}
                            className="h-auto w-full object-cover"
                          />
                        </motion.div>

                        <div className="mt-3 grid grid-cols-[0.62fr_1fr] gap-3 sm:gap-4">
                          <motion.div
                            className="relative overflow-hidden rounded-[1.4rem] border-[4px] border-neutral-950 bg-black shadow-[0_16px_40px_rgba(0,0,0,0.35)]"
                            initial={{ opacity: 0, x: -18, rotate: -8 }}
                            whileInView={{ opacity: 1, x: 0, rotate: -4 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: 0.22, ease: "easeOut" }}
                          >
                            <Image
                              src={project.images.mobile}
                              alt={`${project.title} mobile`}
                              width={300}
                              height={600}
                              className="h-auto w-full object-cover"
                            />
                          </motion.div>

                          <motion.div
                            className="relative overflow-hidden rounded-[1.1rem] border-[4px] border-neutral-950 bg-neutral-950 shadow-[0_18px_42px_rgba(0,0,0,0.35)]"
                            initial={{ opacity: 0, x: 18, rotate: 8 }}
                            whileInView={{ opacity: 1, x: 0, rotate: 4 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                          >
                            <Image
                              src={project.images.tablet}
                              alt={`${project.title} tablet`}
                              width={600}
                              height={400}
                              className="h-auto w-full object-cover"
                            />
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      className="relative hidden min-h-[520px] overflow-hidden rounded-[30px] border border-white/10 bg-black/35 backdrop-blur-sm lg:block"
                      initial={{ opacity: 0, scale: 0.96 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
                    >
                      <div
                        className="absolute inset-4 rounded-[26px] opacity-100"
                        style={{
                          border: `1px solid ${project.accent.edge}`,
                          background: `radial-gradient(circle at 50% 0%, ${project.accent.glow}, rgba(0,0,0,0) 55%)`,
                        }}
                      />
                      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[74%] w-[74%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 opacity-35" />
                      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[54%] w-[54%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 opacity-20" />

                      <motion.div
                        className="absolute left-1/2 top-[46%] z-10 w-[88%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl border border-white/10 bg-neutral-950 shadow-[0_30px_80px_rgba(0,0,0,0.5)]"
                        whileHover={{ y: -6, scale: 1.01 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                      >
                        <Image
                          src={project.images.desktop}
                          alt={`${project.title} desktop`}
                          width={800}
                          height={500}
                          priority={index === 0}
                          className="h-auto w-full object-cover"
                        />
                      </motion.div>

                      <motion.div
                        className="absolute bottom-[8%] left-[4%] z-30 w-[24%] overflow-hidden rounded-[1.7rem] border-[4px] border-neutral-950 bg-black shadow-[0_18px_50px_rgba(0,0,0,0.45)]"
                        initial={{ opacity: 0, x: -18, rotate: -8 }}
                        whileInView={{ opacity: 1, x: 0, rotate: -4 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.22, ease: "easeOut" }}
                      >
                        <Image
                          src={project.images.mobile}
                          alt={`${project.title} mobile`}
                          width={300}
                          height={600}
                          className="h-auto w-full object-cover"
                        />
                      </motion.div>

                      <motion.div
                        className="absolute bottom-[10%] right-[2%] z-20 w-[44%] overflow-hidden rounded-[1.35rem] border-[4px] border-neutral-950 bg-neutral-950 shadow-[0_22px_56px_rgba(0,0,0,0.45)]"
                        initial={{ opacity: 0, x: 18, rotate: 8 }}
                        whileInView={{ opacity: 1, x: 0, rotate: 4 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                      >
                        <Image
                          src={project.images.tablet}
                          alt={`${project.title} tablet`}
                          width={600}
                          height={400}
                          className="h-auto w-full object-cover"
                        />
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
