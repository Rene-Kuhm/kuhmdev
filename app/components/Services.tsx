'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaReact, FaMobile, FaDatabase, FaCloud, FaRobot } from 'react-icons/fa';

const CodeBackground = ({ language }: { language: string }) => {
  const [text, setText] = useState('');
  
  useEffect(() => {
    const codeSnippets = {
      javascript: `function develop() {
  const stack = ['React', 'Node'];
  return stack.map(tech => 
    buildAwesome(tech));
}`,
      python: `def analyze_data():
    import pandas as pd
    data = process_input()
    return ml_model.predict(data)`,
      java: `public class Solution {
    public static void main() {
        System.out.println("Hello");
    }
}`,
    };

    let currentText = '';
    const snippet = codeSnippets[language as keyof typeof codeSnippets] || codeSnippets.javascript;
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex < snippet.length) {
        currentText += snippet[currentIndex];
        setText(currentText);
        currentIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setText('');
          currentIndex = 0;
        }, 3000);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [language, text]);

  return (
    <div className="absolute inset-0 overflow-hidden opacity-10">
      <pre className="text-[#00FF7F] font-mono text-sm whitespace-pre-wrap p-4">
        {text}
      </pre>
    </div>
  );
};

const Services = () => {
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

    const element = document.getElementById('services-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: 'Web Development',
      description: 'Modern and responsive web applications using React, Next.js, and other cutting-edge technologies.',
      icon: FaReact,
      language: 'javascript',
      features: ['React/Next.js', 'Responsive Design', 'Performance Optimization'],
    },
    {
      title: 'Backend Development',
      description: 'Robust and scalable server solutions with Node.js, Python, and Java.',
      icon: FaCode,
      language: 'python',
      features: ['API Development', 'Database Design', 'Security'],
    },
    {
      title: 'Mobile Development',
      description: 'Cross-platform mobile applications that work seamlessly on iOS and Android.',
      icon: FaMobile,
      language: 'javascript',
      features: ['React Native', 'Native APIs', 'App Store Deploy'],
    },
    {
      title: 'Database Solutions',
      description: 'Efficient database design and implementation for optimal data management.',
      icon: FaDatabase,
      language: 'python',
      features: ['SQL/NoSQL', 'Data Modeling', 'Optimization'],
    },
    {
      title: 'Cloud Services',
      description: 'Cloud infrastructure setup and management with AWS, Azure, or GCP.',
      icon: FaCloud,
      language: 'javascript',
      features: ['AWS/Azure/GCP', 'Serverless', 'DevOps'],
    },
    {
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions using cutting-edge AI and ML technologies.',
      icon: FaRobot,
      language: 'python',
      features: ['Neural Networks', 'Data Analysis', 'Automation'],
    },
  ];

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
    <section id="services-section" className="bg-black py-20 relative overflow-hidden">
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
            Our <span className="text-[#00FF7F]">Services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Delivering cutting-edge solutions with modern technologies and best practices
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group"
            >
              <div className="relative bg-black/50 backdrop-blur-sm border border-[#00FF7F]/20 p-6 rounded-lg overflow-hidden group-hover:border-[#00FF7F]/40 transition-all duration-300">
                {/* Animated Code Background */}
                <CodeBackground language={service.language} />

                {/* Content */}
                <div className="relative z-10">
                  <div className="text-[#00FF7F] mb-4 text-3xl">
                    <service.icon />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00FF7F] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-400 flex items-center">
                        <span className="text-[#00FF7F] mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hover Effects */}
                <div className="absolute -inset-1 bg-[#00FF7F]/20 blur-lg group-hover:bg-[#00FF7F]/30 transition-all duration-300 opacity-0 group-hover:opacity-100" />
                <div className="absolute -inset-px bg-gradient-to-r from-[#00FF7F]/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
