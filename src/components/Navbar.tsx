'use client';

import { useState, useEffect } from 'react';

interface NavbarProps {
  activeSection: string;
  isScrolled: boolean;
  scrollToSection: (id: string) => void;
}

export default function Navbar({ activeSection, isScrolled, scrollToSection }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleMenuClick = (id: string) => {
    scrollToSection(id);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              KK
            </div>
            <div className="hidden md:flex gap-8">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${
                    activeSection === item ? 'text-blue-600 dark:text-blue-400 font-semibold' : 'text-slate-700 dark:text-slate-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <button 
              onClick={toggleMenu}
              className="md:hidden text-slate-700 dark:text-slate-300 text-2xl focus:outline-none z-50"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <span className="text-3xl">✕</span>
              ) : (
                <span className="text-3xl">☰</span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      </div>

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-slate-900 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-20 px-6">
          <div className="flex flex-col gap-6">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleMenuClick(item)}
                className={`text-left capitalize py-3 px-4 rounded-lg transition-all duration-200 ${
                  activeSection === item
                    ? 'bg-blue-600 text-white dark:bg-blue-500'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-slate-800'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="mt-auto pb-8 text-center">
            <div className="text-sm text-slate-500 dark:text-slate-400">
              © 2024 Kinjal Khunt
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

