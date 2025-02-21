'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import Link from 'next/link';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string[];
  technologies: string[];
  github: string;
  demo?: string;
  features: string[];
}

export default function PortfolioPage() {
  const projects: Project[] = [
    {
      id: 2,
      title: 'Systema Reclamos',
      description:
        'Este proyecto es una aplicación web moderna para la gestión de reclamos, diseñada para facilitar la interacción entre administradores, técnicos y usuarios. Utiliza tecnologías de vanguardia para proporcionar una experiencia fluida y eficiente en el manejo de reclamos y la comunicación con los clientes.',
      image: '/projects/Systema-reclamos.png',
      category: ['Web'],
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'Typescript'],
      github: 'https://github.com/Rene-Kuhm/prueba-systema',
      features: [
        'Gestión de reclamos en tiempo real',
        'Panel de administración',
        'Sistema de notificaciones',
        'Seguimiento de estados',
      ],
    },
    {
      id: 3,
      title: 'WEB TDP',
      description:
        'Plataforma dedicada a la creación de experiencias digitales innovadoras y soluciones tecnológicas.',
      image: '/projects/TDP.png',
      category: ['Web'],
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'Typescript'],
      github: 'https://github.com/Rene-Kuhm/nextjs',
      features: [
        'Diseño moderno y atractivo',
        'Animaciones fluidas',
        'Optimización de rendimiento',
        'Integración con redes sociales',
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <main className="min-h-screen bg-black pt-20">
      {/* Background Effects */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#00FF7F]/10 via-black to-black" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'url("/grid.svg")',
            backgroundSize: '30px',
            backgroundRepeat: 'repeat',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <section className="py-16">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#00FF7F]">
              Portfolio
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Explora algunos de mis proyectos más destacados, donde combino
              tecnología y diseño para crear soluciones innovadoras.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="bg-black/50 rounded-lg border border-[#00FF7F]/10 overflow-hidden group hover:border-[#00FF7F]/30 transition-all"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-[#00FF7F] rounded-full text-black hover:bg-[#00FF7F]/90 transition-colors"
                    >
                      <FaGithub className="w-6 h-6" />
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-[#00FF7F] rounded-full text-black hover:bg-[#00FF7F]/90 transition-colors"
                      >
                        <FaExternalLinkAlt className="w-6 h-6" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-[#00FF7F]">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={`${project.title}-${tech}`}
                          className="px-3 py-1 text-sm bg-[#00FF7F]/10 text-[#00FF7F] rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2">
                    {project.features.map((feature) => (
                      <li
                        key={`${project.title}-${feature}`}
                        className="flex items-center text-gray-400 text-sm"
                      >
                        <span className="w-1.5 h-1.5 bg-[#00FF7F] rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-20 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#00FF7F]">
              ¿Tienes un proyecto en mente?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Estoy siempre interesado en nuevos proyectos y colaboraciones.
              Contáctame para discutir cómo podemos trabajar juntos.
            </p>
            <Link href="/contact">
              <button
                type="button"
                className="bg-[#00FF7F] text-black px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all"
              >
                Contactar
              </button>
            </Link>
          </motion.div>
        </section>
      </div>
    </main>
  );
}
