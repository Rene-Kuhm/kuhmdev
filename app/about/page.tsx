'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function AboutPage() {
  const skills = [
    { name: 'Frontend Development', level: 90 },
    { name: 'Backend Development', level: 85 },
    { name: 'UI/UX Design', level: 80 },
    { name: 'Cloud Services', level: 75 },
  ];

  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/yourusername' },
    { icon: FaTwitter, url: 'https://twitter.com/yourusername' },
    { icon: FaLinkedin, url: 'https://linkedin.com/in/yourusername' },
  ];

  const education = [
    {
      title: "Master en Desarrollo Web Full Stack",
      institution: "Universidad Tecnológica",
      year: "2023",
      description: "Especialización en tecnologías web modernas y arquitectura de software."
    },
    {
      title: "Ingeniería en Sistemas",
      institution: "Universidad Nacional",
      year: "2021",
      description: "Formación integral en ciencias de la computación y desarrollo de software."
    }
  ];

  const certifications = [
    {
      title: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      year: "2024",
      badge: "/aws-badge.png"
    },
    {
      title: "Professional Scrum Master",
      issuer: "Scrum.org",
      year: "2023",
      badge: "/scrum-badge.png"
    },
    {
      title: "Meta Frontend Developer",
      issuer: "Meta",
      year: "2023",
      badge: "/meta-badge.png"
    },
    {
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      year: "2024",
      badge: "/aws-cloud-practitioner-badge.png"
    },
    {
      title: "Certificación en Ciberseguridad",
      issuer: "Google",
      year: "2024",
      badge: "/google-cybersecurity-badge.png"
    },
    {
      title: "Certificación en SEO",
      issuer: "Google Digital Garage",
      year: "2024",
      badge: "/google-seo-badge.png"
    }
  ];

  return (
    <main className="min-h-screen bg-black pt-20">
      {/* Background Effects */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#00FF7F]/10 via-black to-black"></div>
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `linear-gradient(#00FF7F 1px, transparent 1px),
              linear-gradient(to right, #00FF7F 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            mask: 'radial-gradient(circle at center, transparent 0%, black 100%)'
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="py-16"
        >
          {/* Profile Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="relative w-full aspect-square max-w-[400px] mx-auto"
              >
                <Image
                  src="/hero.png"
                  alt="Profile"
                  fill
                  className="object-cover rounded-2xl"
                  priority
                />
                <div className="absolute inset-0 bg-[#00FF7F]/20 rounded-2xl blur-[50px] -z-10"></div>
              </motion.div>
            </div>

            <div>
              <motion.h1 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold mb-6 text-[#00FF7F]"
              >
                Sobre Mi
              </motion.h1>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-gray-300 space-y-4"
              >
                <p className="text-lg">
                ¡Hola! Soy un apasionado desarrollador full-stack con amor por la creación.
                  Aplicaciones web innovadoras y fáciles de usar. Mi viaje en tecnología
                  Ha sido impulsado por la curiosidad y un deseo constante de aprender.
                </p>
                <p className="text-lg">
                Me especializo en tecnologías web modernas y tengo buen ojo para
                  detalle. Ya sea creando hermosas interfaces de usuario o
                  Al diseñar sistemas backend robustos, siempre estoy preparado para el desafío.
                </p>
              </motion.div>

              {/* Social Links */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex gap-4 mt-8"
              >
                {socialLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#00FF7F] hover:text-[#00FF7F]/80 transition-colors"
                    >
                      <Icon className="w-6 h-6" />
                    </a>
                  );
                })}
              </motion.div>
            </div>
          </div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12"
          >
            <h2 className="text-3xl font-bold mb-8 text-[#00FF7F]">Educación</h2>
            <div className="space-y-6">
              <div className="bg-gray-800/50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Carrera Full Stack Developer</h3>
                <p className="text-gray-400">Coderhouse</p>
                <ul className="mt-4 space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-[#00FF7F] mt-1.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Desarrollo Web - HTML, CSS, SASS, Bootstrap, Git</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-[#00FF7F] mt-1.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>JavaScript - ES6+, DOM, Eventos, Async/Await</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-[#00FF7F] mt-1.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>React JS - Componentes, Hooks, Router, Redux</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-[#00FF7F] mt-1.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Backend - Node.js, Express, MongoDB, Firebase</span>
                  </li>
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Certificado Desarrollo Web</span>
                  <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Certificado JavaScript</span>
                  <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Certificado React JS</span>
                  <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Certificado Backend</span>
                </div>
              </div>

              {/* AWS Certification */}
              <div className="bg-gray-800/50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">AWS Cloud Practitioner</h3>
                <p className="text-gray-400">Amazon Web Services</p>
                <ul className="mt-4 space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-[#00FF7F] mt-1.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Servicios en la nube de AWS</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-[#00FF7F] mt-1.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Arquitectura y seguridad en la nube</span>
                  </li>
                </ul>
              </div>

              {/* Google Cybersecurity */}
              <div className="bg-gray-800/50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Certificación en Ciberseguridad</h3>
                <p className="text-gray-400">Google</p>
                <ul className="mt-4 space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-[#00FF7F] mt-1.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Seguridad de redes y sistemas</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-[#00FF7F] mt-1.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Gestión de amenazas y vulnerabilidades</span>
                  </li>
                </ul>
              </div>

              {/* SEO Certification */}
              <div className="bg-gray-800/50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Certificación en SEO</h3>
                <p className="text-gray-400">Google Digital Garage</p>
                <ul className="mt-4 space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-[#00FF7F] mt-1.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Optimización para motores de búsqueda</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-[#00FF7F] mt-1.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Marketing digital y análisis web</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-[#00FF7F]">Habilidades</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="bg-black/50 p-6 rounded-lg border border-[#00FF7F]/10"
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-white">{skill.name}</span>
                    <span className="text-[#00FF7F]">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-black/50 rounded-full h-2.5">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      className="bg-[#00FF7F] h-2.5 rounded-full"
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-20"
          >
            <h2 className="text-3xl font-bold mb-8 text-[#00FF7F]">Certifications</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="bg-black/50 p-6 rounded-lg border border-[#00FF7F]/10 flex flex-col items-center text-center group hover:border-[#00FF7F]/30 transition-colors"
                >
                  <div className="w-24 h-24 mb-4 relative">
                    <div className="absolute inset-0 bg-[#00FF7F]/20 rounded-full blur-[20px] group-hover:blur-[25px] transition-all"></div>
                    <div className="relative w-full h-full rounded-full bg-black/50 border border-[#00FF7F]/20 flex items-center justify-center text-[#00FF7F]">
                      {cert.year}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-[#00FF7F] mb-2">{cert.title}</h3>
                  <p className="text-gray-400 text-sm">{cert.issuer}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.section>
      </div>
    </main>
  );
}
