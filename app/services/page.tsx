'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  FaCloud,
  FaCode,
  FaDatabase,
  FaMobile,
  FaRobot,
  FaServer,
} from 'react-icons/fa';

export default function ServicesPage() {
  const services = [
    {
      icon: FaCode,
      title: 'Frontend Development',
      description:
        'Creación de interfaces modernas y responsivas utilizando las últimas tecnologías web como React, Next.js y Tailwind CSS.',
      features: [
        'Desarrollo de SPAs y aplicaciones web',
        'Diseño responsive y mobile-first',
        'Optimización de rendimiento',
        'Integración de APIs',
      ],
    },
    {
      icon: FaServer,
      title: 'Backend Development',
      description:
        'Desarrollo de APIs robustas y escalables utilizando Node.js, Express y bases de datos modernas.',
      features: [
        'Arquitectura RESTful',
        'Autenticación y autorización',
        'Manejo de bases de datos',
        'Optimización de consultas',
      ],
    },
    {
      icon: FaMobile,
      title: 'Mobile Development',
      description:
        'Desarrollo de aplicaciones móviles multiplataforma con React Native y tecnologías híbridas.',
      features: [
        'Apps para iOS y Android',
        'Interfaces nativas',
        'Integración con APIs',
        'Push notifications',
      ],
    },
    {
      icon: FaDatabase,
      title: 'Database Design',
      description:
        'Diseño e implementación de bases de datos optimizadas para tus necesidades específicas.',
      features: [
        'Modelado de datos',
        'Optimización de consultas',
        'Migración de datos',
        'Backups y seguridad',
      ],
    },
    {
      icon: FaCloud,
      title: 'Cloud Services',
      description:
        'Implementación y gestión de servicios en la nube utilizando AWS, Google Cloud y Azure.',
      features: [
        'Arquitectura serverless',
        'Contenedores y orquestación',
        'CI/CD pipelines',
        'Monitoreo y logging',
      ],
    },
    {
      icon: FaRobot,
      title: 'AI Integration',
      description:
        'Integración de servicios de inteligencia artificial y machine learning en tus aplicaciones.',
      features: [
        'Chatbots inteligentes',
        'Procesamiento de lenguaje natural',
        'Análisis predictivo',
        'Automatización de procesos',
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
              Nuestros Servicios
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Ofrecemos soluciones tecnológicas integrales para ayudarte a
              transformar tus ideas en realidad, utilizando las últimas
              tecnologías y mejores prácticas.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="bg-black/50 p-8 rounded-lg border border-[#00FF7F]/10 group hover:border-[#00FF7F]/30 transition-colors"
              >
                <div className="relative w-16 h-16 mb-6">
                  <div className="absolute inset-0 bg-[#00FF7F]/20 rounded-lg blur-[20px] group-hover:blur-[25px] transition-all" />
                  <div className="relative w-full h-full rounded-lg bg-black/50 border border-[#00FF7F]/20 flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-[#00FF7F]" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-[#00FF7F]">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={`${service.title}-${feature}`}
                      className="flex items-center text-gray-400"
                    >
                      <span className="w-1.5 h-1.5 bg-[#00FF7F] rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
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
              ¿Listo para empezar tu proyecto?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Contáctanos para discutir cómo podemos ayudarte a alcanzar tus
              objetivos tecnológicos y llevar tu negocio al siguiente nivel.
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
