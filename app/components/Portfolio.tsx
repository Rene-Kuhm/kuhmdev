'use client';

import { FaGithub } from 'react-icons/fa';
import Image from 'next/image';

interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
}

const projects: Project[] = [
  {
    title: 'Systema Reclamos',
    category: 'Web Development',
    description:
      'Este proyecto es una aplicación web moderna para la gestión de reclamos, diseñada para facilitar la interacción entre administradores, técnicos y usuarios.',
    image: '/projects/Systema-reclamos.png',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Typescript'],
    github: 'https://github.com/Rene-Kuhm/prueba-systema',
  },
  {
    title: 'WEB TDP',
    category: 'Web Development',
    description:
      'Plataforma dedicada a la creación de experiencias digitales innovadoras y soluciones tecnológicas.',
    image: '/projects/TDP.png',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Typescript'],
    github: 'https://github.com/Rene-Kuhm/nextjs',
  },
  {
    title: 'Próximo Proyecto',
    category: 'En Desarrollo',
    description: 'Nuevas ideas y soluciones innovadoras en camino.',
    image: '/portfolio3.jpg',
    technologies: ['Coming Soon'],
  },
];

const ProjectCard = ({ project }: { project: Project }) => (
  <div className="group relative overflow-hidden rounded-lg bg-zinc-900/50 backdrop-blur-sm border border-zinc-800">
    <div className="relative h-48 w-full">
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-110"
        loading="lazy"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-white mb-2">
        {project.title}
      </h3>
      <p className="text-[#00FF7F] mb-2">{project.category}</p>
      <p className="text-gray-400 mb-4 text-sm">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-sm bg-zinc-800 text-[#00FF7F] rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
      {project.github && (
        <div className="flex gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#00FF7F] transition-colors"
            aria-label={`Ver código fuente del proyecto ${project.title} en GitHub`}
          >
            <FaGithub size={24} aria-hidden="true" />
          </a>
        </div>
      )}
    </div>
  </div>
);

const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-black py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Últimos <span className="text-[#00FF7F]">Proyectos</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explora algunos de nuestros proyectos más destacados que muestran
            nuestra experiencia y creatividad
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
