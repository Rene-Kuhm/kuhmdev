'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import Logo from './Logo';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    services: [
      { name: 'Web Development', href: '#' },
      { name: 'Mobile Apps', href: '#' },
      { name: 'Cloud Solutions', href: '#' },
      { name: 'AI & Machine Learning', href: '#' },
    ],
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Blog', href: '/blog' },
      { name: 'Portfolio', href: '#' },
      { name: 'Contact', href: '#' },
    ],
    resources: [
      { name: 'Documentation', href: '#' },
      { name: 'Tutorials', href: '#' },
      { name: 'Case Studies', href: '#' },
      { name: 'Open Source', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/Rene-Kuhm', label: 'GitHub' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:contact@example.com', label: 'Email' },
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
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Links Columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-white font-semibold uppercase mb-6">
                  {title}
                </h3>
                <ul className="space-y-4">
                  {links.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-[#00FF7F] transition-colors inline-flex items-center group"
                      >
                        <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          →
                        </span>
                        {link.name}
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
            <p className="text-gray-400 text-sm">
              {new Date().getFullYear()} kuhmdev. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="#" className="text-gray-400 hover:text-[#00FF7F] transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#00FF7F] transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#00FF7F] transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
