'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';

const team = [
  {
    name: 'Joe Villareal',
    role: 'CEO & Founder',
    image: 'https://placehold.co/400x400/101010/ffffff?text=JV',
    bio: 'Líder visionario apasionado por transformar ideas en soluciones digitales de alto impacto. Con experiencia en dirección estratégica y desarrollo de negocios.',
    socials: {
      twitter: '#',
      linkedin: '#',
      github: '#'
    }
  },
  {
    name: 'Marco Chacón',
    role: 'CTO & Lead Developer',
    image: 'https://placehold.co/400x400/101010/ffffff?text=MC',
    bio: 'Arquitecto de software experto en tecnologías modernas. Especialista en crear sistemas escalables, robustos y experiencias de usuario fluidas.',
    socials: {
      twitter: '#',
      linkedin: '#',
      github: '#'
    }
  }
];

export default function Team() {
  return (
    <section className="py-24 bg-black text-white" id="team">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Nuestro Equipo
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-1 w-20 bg-blue-500 mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group bg-neutral-900/50 rounded-2xl p-8 text-center border border-white/5 hover:border-white/10 transition-colors"
            >
              <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-neutral-800 group-hover:border-blue-500/50 transition-colors duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
              <p className="text-blue-400 font-medium mb-4">{member.role}</p>
              <p className="text-gray-400 leading-relaxed mb-8 text-sm">
                {member.bio}
              </p>

              <div className="flex justify-center gap-4">
                <a href={member.socials.github} className="p-2 bg-white/5 rounded-full hover:bg-white/10 hover:text-white text-gray-400 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href={member.socials.linkedin} className="p-2 bg-white/5 rounded-full hover:bg-blue-600/20 hover:text-blue-500 text-gray-400 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href={member.socials.twitter} className="p-2 bg-white/5 rounded-full hover:bg-sky-500/20 hover:text-sky-400 text-gray-400 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}