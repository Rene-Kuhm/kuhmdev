'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCalendar, FaTag, FaArrowRight, FaSearch } from 'react-icons/fa';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface Post {
  id: number;
  slug: string;
  title: string;
  date: string;
  description: string;
  image: string;
  category: string;
  readTime: string;
  content: string;
}

const categories = ['Todos', 'Frontend', 'Backend', 'Arquitectura', 'Seguridad', 'Testing'];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/posts');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const filteredArticles = posts.filter(post => {
    const matchesCategory = selectedCategory === 'Todos' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (loading) {
    return (
      <>
        <Navbar />
        <main className="bg-black min-h-screen py-20">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-[#00FF7F]"
              >
                Cargando...
              </motion.div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="bg-black min-h-screen">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
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
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-5xl font-bold mb-6">
                Blog <span className="text-[#00FF7F]">Kuhmdev</span>
              </h1>
              <p className="text-gray-400 text-lg mb-8">
                Explora artículos sobre desarrollo, tecnología y mejores prácticas
              </p>

              {/* Search Bar */}
              <div className="relative max-w-xl mx-auto">
                <input
                  type="text"
                  placeholder="Buscar artículos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-3 rounded-full bg-black/50 border-2 border-[#00FF7F]/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#00FF7F] transition-colors"
                />
                <FaSearch className="absolute right-6 top-1/2 transform -translate-y-1/2 text-[#00FF7F]" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Categories */}
        <section className="pb-12">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4"
            >
              {categories.map((category) => (
                <button
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
          </div>
        </section>

        {/* Articles Grid */}
        <section className="pb-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredArticles.map((article) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
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
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
