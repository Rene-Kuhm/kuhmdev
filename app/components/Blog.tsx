'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaCalendar, FaTag, FaArrowRight, FaClock, FaSearch } from 'react-icons/fa';

interface Article {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  category: string;
  readTime: string;
  slug: string;
  author?: {
    name: string;
    avatar: string;
  };
  tags?: string[];
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
    slug: 'construyendo-apis-robustas',
    author: {
      name: 'René Kuhm',
      avatar: '/avatar.jpg'
    },
    tags: ['Node.js', 'TypeScript', 'API', 'Backend']
  },
  {
    id: 2,
    title: 'Optimización de Rendimiento en React',
    description: 'Técnicas avanzadas para mejorar el rendimiento de tus aplicaciones React y proporcionar una mejor experiencia de usuario.',
    image: '/blog/react-performance.png',
    date: '2024-02-08',
    category: 'Frontend',
    readTime: '7 min',
    slug: 'optimizacion-rendimiento-react',
    author: {
      name: 'René Kuhm',
      avatar: '/avatar.jpg'
    },
    tags: ['React', 'Performance', 'Frontend', 'JavaScript']
  },
  {
    id: 3,
    title: 'Introducción a la Arquitectura de Microservicios',
    description: 'Descubre los fundamentos de la arquitectura de microservicios y cómo implementarla en tus proyectos.',
    image: '/blog/microservices.png',
    date: '2024-02-05',
    category: 'Arquitectura',
    readTime: '6 min',
    slug: 'introduccion-microservicios',
    author: {
      name: 'René Kuhm',
      avatar: '/avatar.jpg'
    },
    tags: ['Microservicios', 'Arquitectura', 'Backend', 'Cloud']
  }
];

interface BlogProps {
  isHomePage?: boolean;
}

const Blog = ({ isHomePage = false }: BlogProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [filteredArticles, setFilteredArticles] = useState(articles);
  const [displayedArticles, setDisplayedArticles] = useState(articles);

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

  useEffect(() => {
    // Sort articles by date in descending order
    const sortedArticles = [...articles].sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    // If on home page, only show the latest 2 articles
    const articlesToShow = isHomePage ? sortedArticles.slice(0, 2) : sortedArticles;

    const filtered = articlesToShow.filter(article => {
      const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          article.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          article.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'Todos' || article.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
    
    setFilteredArticles(filtered);
    setDisplayedArticles(filtered);
  }, [searchTerm, selectedCategory, isHomePage]);

  const categories = ['Todos', ...new Set(articles.map(article => article.category))];

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
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(#00FF7F 1px, transparent 1px),
            linear-gradient(to right, #00FF7F 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          mask: 'radial-gradient(circle at center, transparent 0%, black 100%)'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#00FF7F]">
            {isHomePage ? 'Últimos Artículos' : 'Blog'}
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            {isHomePage 
              ? 'Descubre mis últimos artículos sobre desarrollo y tecnología'
              : 'Explora artículos técnicos sobre desarrollo web, mejores prácticas y las últimas tendencias en tecnología.'
            }
          </p>
        </motion.div>

        {/* Search and Filter Section - Only show on blog page */}
        {!isHomePage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative w-full md:w-96">
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar artículos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-black/50 border border-[#00FF7F]/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#00FF7F]/50"
                />
              </div>

              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedCategory === category
                        ? 'bg-[#00FF7F] text-black'
                        : 'bg-black/50 text-[#00FF7F] border border-[#00FF7F]/20 hover:border-[#00FF7F]/50'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Articles Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className={`grid ${isHomePage ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3'} gap-8`}
        >
          {displayedArticles.map((article) => (
            <motion.article
              key={article.id}
              variants={itemVariants}
              className="bg-black/50 rounded-lg border border-[#00FF7F]/10 overflow-hidden group hover:border-[#00FF7F]/30 transition-all"
            >
              <Link href={`/blog/${article.slug}`}>
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                    <Image
                      src={article.author?.avatar || ''}
                      alt={article.author?.name || ''}
                      width={32}
                      height={32}
                      className="rounded-full border-2 border-[#00FF7F]"
                    />
                    <span className="text-white text-sm">{article.author?.name}</span>
                  </div>
                </div>
              </Link>

              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                  <span className="flex items-center gap-1">
                    <FaCalendar className="text-[#00FF7F]" />
                    {new Date(article.date).toLocaleDateString('es-ES', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaClock className="text-[#00FF7F]" />
                    {article.readTime}
                  </span>
                </div>

                <Link href={`/blog/${article.slug}`}>
                  <h3 className="text-xl font-semibold mb-3 text-[#00FF7F] hover:text-[#00FF7F]/80 transition-colors">
                    {article.title}
                  </h3>
                </Link>

                <p className="text-gray-300 mb-4 line-clamp-2">
                  {article.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs bg-[#00FF7F]/10 text-[#00FF7F] rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/blog/${article.slug}`}
                  className="inline-flex items-center text-[#00FF7F] hover:text-[#00FF7F]/80 transition-colors"
                >
                  Leer más
                  <FaArrowRight className="ml-2" />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Empty State */}
        {displayedArticles.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-400 text-lg">
              No se encontraron artículos que coincidan con tu búsqueda.
            </p>
          </motion.div>
        )}

        {/* View All Button - Only show on home page */}
        {isHomePage && displayedArticles.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-[#00FF7F] text-[#00FF7F] hover:bg-[#00FF7F]/10 transition-all duration-300"
            >
              Ver todos los artículos
              <FaArrowRight />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Blog;
