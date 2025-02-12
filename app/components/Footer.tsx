'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import Logo from './Logo';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    {
      title: 'Enlaces',
      links: [
        { name: 'Inicio', href: '/' },
        { name: 'Sobre Mí', href: '/about' },
        { name: 'Servicios', href: '/services' },
        { name: 'Portafolio', href: '/portfolio' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contacto', href: '/contact' }
      ]
    },
    {
      title: 'Servicios',
      links: [
        { name: 'Desarrollo Web', href: '/services#web' },
        { name: 'Desarrollo Frontend', href: '/services#frontend' },
        { name: 'Desarrollo Backend', href: '/services#backend' },
        { name: 'Consultoría', href: '/services#consulting' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Política de Privacidad', href: '/privacy' },
        { name: 'Términos de Servicio', href: '/terms' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/Rene-Kuhm', icon: FaGithub },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/ren%C3%A9-kuhm-1aa88818a/', icon: FaLinkedin },
    { name: 'Twitter', href: 'https://x.com/REPARO22', icon: FaTwitter }
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
      >
        <FaArrowUp size={20} />
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
                Transformando ideas en experiencias digitales excepcionales. Innovación y excelencia en cada línea de código.
              </p>
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-400 hover:text-[#00FF7F] transition-colors"
                    whileHover={{ scale: 1.2 }}
                    aria-label={social.name}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Links Columns */}
            {footerLinks.map((link, index) => (
              <div key={index}>
                <h3 className="text-white font-semibold uppercase mb-6">
                  {link.title}
                </h3>
                <ul className="space-y-4">
                  {link.links.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
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
              <Link href="#" className="text-gray-400 hover:text-[#00FF7F] transition-colors">
                Política de Privacidad
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#00FF7F] transition-colors">
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
