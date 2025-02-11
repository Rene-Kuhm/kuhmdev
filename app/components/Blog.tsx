'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaCalendar, FaTag, FaArrowRight } from 'react-icons/fa';

interface Article {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  category: string;
  readTime: string;
  slug: string;
}

const articles: Article[] = [
  {
    id: 1,
    title: 'Construyendo APIs Robustas con Node.js y TypeScript',
    description: 'Una guía completa sobre cómo crear APIs escalables y mantenibles utilizando las mejores prácticas de TypeScript.',
    image: '/blog/api-typescript.png',
    date: '2024-02-10',
    category: 'Backend',
    readTime: '5 min',
    slug: 'construyendo-apis-robustas'
  },
  {
    id: 2,
    title: 'Optimización de Rendimiento en React',
    description: 'Técnicas avanzadas para mejorar el rendimiento de tus aplicaciones React y proporcionar una mejor experiencia de usuario.',
    image: '/blog/react-performance.png',
    date: '2024-02-08',
    category: 'Frontend',
    readTime: '7 min',
    slug: 'optimizacion-rendimiento-react'
  },
  {
    id: 3,
    title: 'Introducción a la Arquitectura de Microservicios',
    description: 'Descubre los fundamentos de la arquitectura de microservicios y cómo implementarla en tus proyectos.',
    image: '/blog/microservices.png',
    date: '2024-02-05',
    category: 'Arquitectura',
    readTime: '6 min',
    slug: 'introduccion-microservicios'
  }
];

const Blog = () => {
  const [isVisible, setIsVisible] = useState(false);

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

    const element = document.getElementById('blog-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section id="blog-section" className="bg-black py-20 relative overflow-hidden">
      {/* Background Grid */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(#00FF7F 1px, transparent 1px),
            linear-gradient(to right, #00FF7F 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          mask: 'radial-gradient(circle at center, black 40%, transparent 100%)'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Latest <span className="text-[#00FF7F]">Articles</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explora nuestros últimos artículos sobre desarrollo, tecnología y mejores prácticas
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {articles.map((article) => (
            <motion.article
              key={article.id}
              variants={itemVariants}
              className="group relative"
            >
              <Link href={`/blog/${article.slug}`}>
                <div className="relative bg-black/50 backdrop-blur-sm border border-[#00FF7F]/20 rounded-lg overflow-hidden group-hover:border-[#00FF7F]/40 transition-all duration-300">
                  {/* Article Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>

                  {/* Article Content */}
                  <div className="p-6">
                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                      <span className="flex items-center gap-2">
                        <FaCalendar className="text-[#00FF7F]" />
                        {new Date(article.date).toLocaleDateString('es-ES', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                      <span className="flex items-center gap-2">
                        <FaTag className="text-[#00FF7F]" />
                        {article.category}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00FF7F] transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-400 mb-4 line-clamp-2">
                      {article.description}
                    </p>

                    {/* Read More */}
                    <div className="flex items-center text-[#00FF7F] group-hover:gap-2 transition-all">
                      <span>Leer más</span>
                      <FaArrowRight className="transform group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>

                  {/* Hover Effects */}
                  <div className="absolute -inset-1 bg-[#00FF7F]/20 blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300" />
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link href="/blog" className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-[#00FF7F] text-[#00FF7F] hover:bg-[#00FF7F]/10 transition-all duration-300">
            Ver todos los artículos
            <FaArrowRight />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
