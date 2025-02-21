'use client';

import Link from 'next/link';
import { useState } from 'react';
import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    {
      label: 'Inicio',
      href: '/',
      ariaLabel: 'Página principal de René Kuhm, desarrollador web full stack',
    },
    {
      label: 'Sobre Mí',
      href: '/about',
      ariaLabel: 'Información sobre René Kuhm, desarrollador web full stack',
    },
    {
      label: 'Servicios',
      href: '/services',
      ariaLabel: 'Servicios profesionales de desarrollo web y tecnología',
    },
    {
      label: 'Portafolio',
      href: '/portfolio',
      ariaLabel:
        'Portafolio de proyectos tecnológicos desarrollados por René Kuhm',
    },
    {
      label: 'Contacto',
      href: '/contact',
      ariaLabel:
        'Formulario de contacto para contratar servicios de desarrollo web',
    },
  ];

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith('/')) {
      // Let Next.js handle regular navigation
      return;
    }

    e.preventDefault();
    const element = document.getElementById(href.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="bg-black/80 backdrop-blur-md border-b border-[#00FF7F]/10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-24">
            {/* Logo */}
            <Link
              href="/"
              className="text-[#00FF7F] hover:text-[#00FF7F]/90 transition-colors flex-shrink-0 flex items-center justify-center"
            >
              <Logo className="w-auto h-12" />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-label={item.ariaLabel}
                  className="text-white hover:text-[#00FF7F] transition-colors"
                  onClick={(e) => handleClick(e, item.href)}
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/contact">
                <button
                  type="button"
                  className="bg-[#00FF7F] text-black px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-all"
                >
                  Empezamos
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="md:hidden text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                role="img"
                aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
              >
                <title>{isOpen ? 'Cerrar menú' : 'Abrir menú'}</title>
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden absolute left-0 right-0 bg-black/95 backdrop-blur-md border-b border-[#00FF7F]/10">
              <div className="px-4 py-4 space-y-3">
                {menuItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    aria-label={item.ariaLabel}
                    className="block text-white hover:text-[#00FF7F] transition-colors"
                    onClick={(e) => handleClick(e, item.href)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link href="/contact">
                  <button
                    type="button"
                    className="w-full bg-[#00FF7F] text-black px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-all mt-4"
                  >
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
