'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Target, Sparkles, ShieldCheck } from 'lucide-react';

const team = [
  {
    name: 'Joe Villarreal',
    role: 'CEO & Founder',
    image: 'https://media.licdn.com/dms/image/v2/D4E03AQEuNJiymIjS7A/profile-displayphoto-crop_800_800/B4EZm8wZSMHIAM-/0/1759808428166?e=1769644800&v=beta&t=UrWhf-gnZrcW4iNkLYcHQwB2S55q3SNullW8uGX-XNw',
    bio: 'Líder tecnológico en formación y estudiante de Ingeniería de Sistemas. Me impulsa el reto de transformar conceptos abstractos en realidad digital mediante el Desarrollo Web y la Inteligencia Artificial.',
    socials: {
      linkedin: 'www.linkedin.com/in/joe-villarreal-mejia-763029293',
      github: 'https://github.com/joestevil'
    }
  },
  {
    name: 'Marco Chacón',
    role: 'CEO & Founder',
    image: 'https://media.licdn.com/dms/image/v2/D4E03AQG-cdw37Y-Gww/profile-displayphoto-scale_400_400/B4EZuAl1TzI0Ag-/0/1767388960509?e=1769644800&v=beta&t=lXUJ11k1oOh_0p_T46cDCDQqWZ8H5V8zjAA1RFDrD3A',
    bio: 'Estudiante de Ingeniería de Sistemas con pasión por el Desarrollo Web y especializado en Desarrollo Móvil. Apasionado por crear soluciones digitales innovadoras que transformen ideas en realidades tangibles.',
    socials: {
      twitter: '#',
      linkedin: '#',
      github: '#'
    }
  }
];


const values = [
  {
    title: 'Claridad y enfoque',
    description: 'Diseñamos experiencias simples que convierten, sin ruido ni piezas innecesarias.',
    Icon: Target
  },
  {
    title: 'Detalle artesanal',
    description: 'Cuidamos tipografia, ritmo y microinteracciones para que todo se sienta premium.',
    Icon: Sparkles
  },
  {
    title: 'Confianza tecnica',
    description: 'Construimos con bases solidas: performance y escalabilidad desde el inicio.',
    Icon: ShieldCheck
  }
];

export default function Team() {
  return (
    <section className="py-24 bg-black text-white" id="team">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Nosotros
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-1 w-20 bg-blue-500 mx-auto rounded-full"
          />
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-white/60 leading-relaxed"
          >
            Somos un estudio creativo y tecnico enfocado en paginas que comunican con fuerza y convierten con claridad.
            Unimos estrategia, diseño y desarrollo para crear experiencias digitales que se sienten solidas desde el primer click.
          </motion.p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl border border-white/5 bg-neutral-900/60 p-8"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/80">
                <value.Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
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

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
