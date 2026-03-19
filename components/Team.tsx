'use client';

import { motion } from 'framer-motion';

const team = [
  {
    name: 'Mauricio Herrera',
    role: 'CEO · Co-Founder',
    bio: 'Encargado de la gestión del estudio y de coordinar la operación del equipo para que cada proyecto avance con claridad, orden y foco comercial.',
    imageUrl: 'https://res.cloudinary.com/dpxslk02r/image/upload/v1773899183/1000105210.jpg_zxm3sa.jpg', // Ejemplo: 'https://ejemplo.com/foto-mauricio.jpg'
  },
  {
    name: 'Paola Hernandez',
    role: 'Co-Founder · Marketing',
    bio: 'Lidera el área de marketing y el posicionamiento de marca, conectando estrategia, comunicación y crecimiento para impulsar la presencia comercial de Nuvemn Studio.',
    imageUrl: 'https://media.licdn.com/dms/image/v2/D4E03AQHW7Dvw-XXigQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1696997826833?e=1775692800&v=beta&t=qNzsE_CymsGdzbiU5V5zkKgSCbsYmn6mJPsR1Yrebw4',
  },
  {
    name: 'Joe Villarreal',
    role: 'Co-Founder · Desarrollo Web e IA',
    bio: 'Líder tecnológico y Developer con experiencia en el desarrollo web y la inteligencia artificial.',
    imageUrl: 'https://media.licdn.com/dms/image/v2/D4E03AQE1MRq-xT8c5g/profile-displayphoto-scale_400_400/B4EZwQHlpTI0Ag-/0/1769796951593?e=1775692800&v=beta&t=Hu-gtNqoAdHDrXXOF9RPHmL6YQtFQkcq1U2YpQXP_Yw',
  },
  {
    name: 'Marco Chacón',
    role: 'Co-Founder · Desarrollo Móvil',
    bio: 'Developer con pasión por el Desarrollo Web y especializado en Desarrollo Móvil. Apasionado por crear soluciones digitales innovadoras que transformen ideas en realidades tangibles.',
    imageUrl: 'https://media-lim1-1.cdn.whatsapp.net/v/t61.24694-24/514239898_1799013120827998_6937545780761214036_n.jpg?ccb=11-4&oh=01_Q5Aa4AFCRz1c60dQdai_iKFcuWXbJW3BP9IQw2OuW1IVpnLRnA&oe=69C8AC94&_nc_sid=5e03e0&_nc_cat=102',
  }
];

export default function Team() {
  return (
    <section className="scroll-mt-28 bg-black py-24 text-white" id="nosotros">
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

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group bg-neutral-900/50 rounded-2xl p-8 text-center border border-white/5 hover:border-white/10 transition-colors"
            >
              <div className="relative mx-auto mb-6 flex h-32 w-32 items-center justify-center rounded-full border-4 border-neutral-800 bg-white/5 text-3xl font-display text-white/80 transition-colors duration-300 group-hover:border-blue-500/50 overflow-hidden">
                {member.imageUrl ? (
                  <img src={member.imageUrl} alt={member.name} className="h-full w-full object-cover" />
                ) : (
                  member.name
                    .split(" ")
                    .slice(0, 2)
                    .map((part) => part.charAt(0))
                    .join("")
                )}
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
