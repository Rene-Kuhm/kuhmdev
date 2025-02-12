'use client';

import { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';

const Stats = () => {
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

    const element = document.getElementById('stats-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const stats = [
    {
      id: 1,
      number: 50,
      suffix: '+',
      title: 'Proyectos Completados',
      description: 'Soluciones exitosas entregadas a clientes satisfechos'
    },
    {
      id: 2,
      number: 5,
      suffix: '+',
      title: 'Años de Experiencia',
      description: 'Desarrollando software de alta calidad'
    },
    {
      id: 3,
      number: 20,
      suffix: '+',
      title: 'Tecnologías Dominadas',
      description: 'Herramientas y frameworks modernos'
    },
    {
      id: 4,
      number: 100,
      suffix: '%',
      title: 'Satisfacción del Cliente',
      description: 'Comprometido con la excelencia'
    }
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
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section id="stats-section" className="bg-black py-16 relative overflow-hidden">
      {/* Background Grid Effect */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `linear-gradient(#00FF7F 1px, transparent 1px),
            linear-gradient(to right, #00FF7F 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          mask: 'radial-gradient(circle at center, black 40%, transparent 100%)'
        }}
      />
      
      <motion.div 
        className="container mx-auto px-4 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              variants={itemVariants}
              className="relative group"
            >
              <div className="text-center relative">
                {/* Hexagonal Background */}
                <div className="absolute inset-0 bg-[#00FF7F]/5 transform -skew-x-12 group-hover:bg-[#00FF7F]/10 transition-all duration-300" />
                
                {/* Glowing Border */}
                <div className="relative p-6 border border-[#00FF7F]/20 backdrop-blur-sm bg-black/50 group-hover:border-[#00FF7F]/40 transition-all duration-300">
                  {/* Number */}
                  <motion.div
                    className="text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#00FF7F] to-[#00FF7F]/80"
                    initial={{ scale: 0 }}
                    animate={isVisible ? { scale: 1 } : { scale: 0 }}
                    transition={{ type: "spring", stiffness: 200, delay: index * 0.1 }}
                  >
                    {isVisible && (
                      <CountUp
                        end={stat.number}
                        duration={2.5}
                        suffix={stat.suffix}
                        useEasing={true}
                      />
                    )}
                  </motion.div>
                  
                  {/* Label */}
                  <motion.p
                    className="text-white/90 text-lg font-medium group-hover:text-[#00FF7F] transition-colors duration-300"
                    initial={{ opacity: 0 }}
                    animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    {stat.title}
                  </motion.p>

                  {/* Decorative Elements */}
                  <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-[#00FF7F]/40 group-hover:border-[#00FF7F] transition-all duration-300" />
                  <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-[#00FF7F]/40 group-hover:border-[#00FF7F] transition-all duration-300" />
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-[#00FF7F]/20 blur-lg group-hover:bg-[#00FF7F]/30 transition-all duration-300 opacity-0 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Stats;
