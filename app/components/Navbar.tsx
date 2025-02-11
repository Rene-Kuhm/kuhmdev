'use client';

import Link from 'next/link';
import { useState } from 'react';
import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="bg-black/80 backdrop-blur-md border-b border-[#00FF7F]/10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="text-[#00FF7F] hover:text-[#00FF7F]/90 transition-colors">
              <Logo className="w-auto h-8" />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-white hover:text-[#00FF7F] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <button className="bg-[#00FF7F] text-black px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-all">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
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
                    className="block text-white hover:text-[#00FF7F] transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <button className="w-full bg-[#00FF7F] text-black px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-all mt-4">
                  Get Started
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
