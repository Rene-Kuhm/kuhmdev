'use client';

import { useEffect, useState, memo } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

// Dynamically import icons with loading optimization
const Icons = {
  FaCode: dynamic(() => import('react-icons/fa').then(mod => mod.FaCode), { ssr: false }),
  FaPaintBrush: dynamic(() => import('react-icons/fa').then(mod => mod.FaPaintBrush), { ssr: false }),
  FaServer: dynamic(() => import('react-icons/fa').then(mod => mod.FaServer), { ssr: false }),
  FaDatabase: dynamic(() => import('react-icons/fa').then(mod => mod.FaDatabase), { ssr: false }),
  FaCloud: dynamic(() => import('react-icons/fa').then(mod => mod.FaCloud), { ssr: false }),
  FaRobot: dynamic(() => import('react-icons/fa').then(mod => mod.FaRobot), { ssr: false })
};

// Memoize the code background component
const CodeBackground = memo(({ language }: { language: string }) => {
  const [text, setText] = useState('');
  
  useEffect(() => {
    const codeSnippets = {
      javascript: `// Optimized code sample
const stack = ['React', 'Node'];
stack.map(buildAwesome);`,
      python: `# Minimal sample
def analyze():
    return ml_model.predict(data)`,
      java: `class Solution {
    void main() {
        System.out.print("Hi");
    }
}`
    };

    let isMounted = true;
    const snippet = codeSnippets[language as keyof typeof codeSnippets] || codeSnippets.javascript;
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (!isMounted) return;
      
      if (currentIndex < snippet.length) {
        setText(prev => prev + snippet[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          if (!isMounted) return;
          setText('');
          currentIndex = 0;
        }, 3000);
      }
    }, 50);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, [language]);

  return (
    <div className="absolute inset-0 overflow-hidden opacity-10">
      <pre className="text-[#00FF7F] font-mono text-sm whitespace-pre-wrap p-4">
        {text}
      </pre>
    </div>
  );
});

CodeBackground.displayName = 'CodeBackground';

// Move services data outside component
const services = [
  {
    title: 'Desarrollo Web Full Stack',
    description: 'Creo aplicaciones web modernas y escalables utilizando las últimas tecnologías.',
    iconName: 'FaCode',
    language: 'javascript',
    features: ['Aplicaciones web responsivas', 'APIs RESTful', 'Bases de datos', 'Optimización']
  },
  {
    title: 'Desarrollo Frontend',
    description: 'Diseño y desarrollo interfaces de usuario intuitivas y atractivas.',
    iconName: 'FaPaintBrush',
    language: 'javascript',
    features: ['UI/UX moderno', 'Animaciones', 'Optimización', 'Accesibilidad']
  },
  {
    title: 'Desarrollo Backend',
    description: 'Implemento arquitecturas robustas y seguras para tus aplicaciones.',
    iconName: 'FaServer',
    language: 'python',
    features: ['Microservicios', 'Seguridad', 'Optimización DB', 'Escalabilidad']
  },
  {
    title: 'Database Solutions',
    description: 'Diseño e implementación eficiente de bases de datos.',
    iconName: 'FaDatabase',
    language: 'python',
    features: ['SQL/NoSQL', 'Modelado', 'Optimización']
  },
  {
    title: 'Cloud Services',
    description: 'Configuración y gestión de infraestructura en la nube.',
    iconName: 'FaCloud',
    language: 'javascript',
    features: ['AWS/Azure/GCP', 'Serverless', 'DevOps']
  },
  {
    title: 'AI & Machine Learning',
    description: 'Soluciones inteligentes con tecnologías AI y ML.',
    iconName: 'FaRobot',
    language: 'python',
    features: ['Neural Networks', 'Data Analysis', 'Automation']
  }
] as const;

export default function ServicesContent() {
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
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services-section" className="bg-black py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `linear-gradient(#00FF7F 1px, transparent 1px),
          linear-gradient(to right, #00FF7F 1px, transparent 1px)`,
        backgroundSize: '50px 50px',
        mask: 'radial-gradient(circle at center, black 40%, transparent 100%)'
      }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#00FF7F]">
            Servicios
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto text-center">
            Ofrezco soluciones tecnológicas completas para ayudarte a alcanzar tus objetivos
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = Icons[service.iconName as keyof typeof Icons];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="relative group"
              >
                <div className="relative bg-black/50 backdrop-blur-sm border border-[#00FF7F]/20 p-6 rounded-lg overflow-hidden group-hover:border-[#00FF7F]/40 transition-all duration-300">
                  <CodeBackground language={service.language} />
                  <div className="relative z-10">
                    <div className="text-[#00FF7F] mb-4 text-3xl">
                      {IconComponent && <IconComponent />}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00FF7F] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="text-gray-400 flex items-center">
                          <span className="text-[#00FF7F] mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="absolute -inset-1 bg-[#00FF7F]/20 blur-lg group-hover:bg-[#00FF7F]/30 transition-all duration-300 opacity-0 group-hover:opacity-100" />
                  <div className="absolute -inset-px bg-gradient-to-r from-[#00FF7F]/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
