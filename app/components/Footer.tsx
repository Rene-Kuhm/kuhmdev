'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaArrowUp, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import Logo from './Logo';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    {
      title: 'Enlaces',
      links: [
        {
          name: 'Inicio',
          href: '/',
          ariaLabel:
            'Página principal de René Kuhm, desarrollador web full stack',
        },
        {
          name: 'Sobre Mí',
          href: '/about',
          ariaLabel:
            'Información sobre René Kuhm, desarrollador web full stack',
        },
        {
          name: 'Servicios',
          href: '/services',
          ariaLabel: 'Servicios profesionales de desarrollo web y tecnología',
        },
        {
          name: 'Portafolio',
          href: '/portfolio',
          ariaLabel:
            'Portafolio de proyectos tecnológicos desarrollados por René Kuhm',
        },
        {
          name: 'Contacto',
          href: '/contact',
          ariaLabel:
            'Formulario de contacto para contratar servicios de desarrollo web',
        },
      ],
    },
    {
      title: 'Servicios',
      links: [
        {
          name: 'Desarrollo Web',
          href: '/services#web',
          ariaLabel: 'Servicios de desarrollo web para empresas y proyectos',
        },
        {
          name: 'Desarrollo Frontend',
          href: '/services#frontend',
          ariaLabel: 'Servicios de desarrollo frontend para aplicaciones web',
        },
        {
          name: 'Desarrollo Backend',
          href: '/services#backend',
          ariaLabel: 'Servicios de desarrollo backend para aplicaciones web',
        },
        {
          name: 'Consultoría',
          href: '/services#consulting',
          ariaLabel:
            'Servicios de consultoría para proyectos de desarrollo web',
        },
      ],
    },
    {
      title: 'Legal',
      links: [
        {
          name: 'Política de Privacidad',
          href: '/privacy',
          ariaLabel:
            'Política de privacidad de René Kuhm, desarrollador web full stack',
        },
        {
          name: 'Términos de Servicio',
          href: '/terms',
          ariaLabel:
            'Términos de servicio de René Kuhm, desarrollador web full stack',
        },
      ],
    },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/Rene-Kuhm',
      icon: FaGithub,
      label: 'Perfil de GitHub de René Kuhm - Proyectos de Desarrollo Web',
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/ren%C3%A9-kuhm-1aa88818a/',
      icon: FaLinkedin,
      label: 'Perfil de LinkedIn de René Kuhm - Desarrollador Web Full Stack',
    },
    {
      name: 'Correo Electrónico',
      href: 'mailto:renekuhm@gmail.com',
      icon: FaEnvelope,
      label:
        'Enviar correo electrónico a René Kuhm para consultas de desarrollo web',
    },
  ];

  return (
    <footer className="bg-black/80 backdrop-blur-sm border-t border-[#00FF7F]/10">
      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="absolute right-8 -top-6 p-4 bg-[#00FF7F] rounded-full text-black hover:scale-110 transition-transform"
        whileHover={{ y: -5 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        aria-label="Volver al inicio de la página"
      >
        <FaArrowUp size={20} aria-hidden="true" />
      </motion.button>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="pt-20 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Column */}
            <div className="space-y-6">
              <Link href="/" className="block">
                <Logo className="w-32 h-auto" />
              </Link>
              <p className="text-gray-400 mt-4">
                Transformando ideas en experiencias digitales excepcionales.
                Innovación y excelencia en cada línea de código.
              </p>
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-400 hover:text-[#00FF7F] transition-colors"
                    whileHover={{ scale: 1.2 }}
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Links Columns */}
            {footerLinks.map((link) => (
              <div key={link.title}>
                <h3 className="text-white font-semibold uppercase mb-6">
                  {link.title}
                </h3>
                <ul className="space-y-4">
                  {link.links.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        aria-label={item.ariaLabel}
                        className="text-gray-400 hover:text-[#00FF7F] transition-colors inline-flex items-center group"
                      >
                        <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          →
                        </span>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#00FF7F]/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center text-gray-400 mt-8">
              <p> René Kuhm. Todos los derechos reservados.</p>
            </div>
            <div className="flex space-x-6 text-sm">
              <Link
                href="#"
                aria-label="Política de privacidad de René Kuhm, desarrollador web full stack"
                className="text-gray-400 hover:text-[#00FF7F] transition-colors"
              >
                Política de Privacidad
              </Link>
              <Link
                href="#"
                aria-label="Términos de servicio de René Kuhm, desarrollador web full stack"
                className="text-gray-400 hover:text-[#00FF7F] transition-colors"
              >
                Términos de Servicio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
