'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Dark mode kontrolü
  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Scroll kontrolü
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDark(true);
    }
  };

  const navItems = [
    { name: 'Ana Sayfa', path: '/' },
    { name: 'Projeler', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'Hakkımda', path: '/about' },
    { name: 'İletişim', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg' 
          : 'bg-white dark:bg-gray-900'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link 
            href="/" 
            className="text-2xl font-bold text-gray-800 dark:text-white hover:text-primary transition-colors"
          >
            AhmetCALİSKAN
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors ${
                  pathname === item.path 
                    ? 'font-bold text-primary dark:text-primary' 
                    : ''
                }`}
              >
                {item.name}
              </Link>
            ))}

          </div>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className={`w-6 h-0.5 bg-gray-600 dark:bg-gray-300 transition-all duration-300 ${
              isOpen ? 'transform rotate-45 translate-y-1.5' : 'mb-1'
            }`}></div>
            <div className={`w-6 h-0.5 bg-gray-600 dark:bg-gray-300 transition-all duration-300 ${
              isOpen ? 'opacity-0' : 'mb-1'
            }`}></div>
            <div className={`w-6 h-0.5 bg-gray-600 dark:bg-gray-300 transition-all duration-300 ${
              isOpen ? 'transform -rotate-45 -translate-y-1.5' : ''
            }`}></div>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div 
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="pt-4 pb-2 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`block text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors ${
                  pathname === item.path 
                    ? 'font-bold text-primary dark:text-primary' 
                    : ''
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}

          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header; 