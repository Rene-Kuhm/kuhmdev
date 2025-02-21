'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string[];
  technologies: string[];
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Systema Reclamos',
    description:
      'Este proyecto es una aplicación web moderna para la gestión de reclamos, diseñada para facilitar la interacción entre administradores, técnicos y usuarios. Utiliza tecnologías de vanguardia para proporcionar una experiencia fluida y eficiente en el manejo de reclamos y la comunicación con los clientes.',
    image: '/projects/Systema-reclamos.png',
    category: ['Web'],
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Typescript'],
    github: 'https://github.com/Rene-Kuhm/prueba-systema',
  },
  {
    id: 2,
    title: 'WEB TDP',
    description:
      '🔥Plataforma dedicada a la creación de experiencias digitales innovadoras y soluciones tecnológicas.',
    image: '/projects/TDP.png',
    category: ['Web'],
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Typescript'],
    github: 'https://github.com/Rene-Kuhm/nextjs',
  },
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isVisible, setIsVisible] = useState(false);
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const categories = [
    'All',
    ...new Set(projects.flatMap((project) => project.category)),
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('portfolio-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setFilteredProjects(
      selectedCategory === 'All'
        ? projects
        : projects.filter((project) =>
            project.category.includes(selectedCategory)
          )
    );
  }, [selectedCategory]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section
      id="portfolio-section"
      className="bg-black py-20 relative overflow-hidden"
    >
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(#00FF7F 1px, transparent 1px),
            linear-gradient(to right, #00FF7F 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          mask: 'radial-gradient(circle at center, black 40%, transparent 100%)',
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            Ultimos <span className="text-[#00FF7F]">Projectos</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore nuestro trabajo reciente y soluciones innovadoras
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              type="button"
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full border-2 transition-all duration-300 ${
                selectedCategory === category
                  ? 'border-[#00FF7F] text-[#00FF7F] bg-[#00FF7F]/10'
                  : 'border-gray-700 text-gray-400 hover:border-[#00FF7F] hover:text-[#00FF7F]'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group relative"
              >
                <div className="relative bg-black/50 backdrop-blur-sm border border-[#00FF7F]/20 rounded-lg overflow-hidden group-hover:border-[#00FF7F]/40 transition-all duration-300">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    {/* Fallback for development */}
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-[#00FF7F]/20 rounded-full hover:bg-[#00FF7F]/40 transition-colors duration-300"
                        >
                          <FaGithub className="text-[#00FF7F] text-xl" />
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-[#00FF7F]/20 rounded-full hover:bg-[#00FF7F]/40 transition-colors duration-300"
                        >
                          <FaExternalLinkAlt className="text-[#00FF7F] text-xl" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00FF7F] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    {/* Technologies */}
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

                  {/* Hover Effects */}
                  <div className="absolute -inset-1 bg-[#00FF7F]/20 blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;
