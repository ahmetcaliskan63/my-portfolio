'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [, setIsDark] = useState(false);
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


  const navItems = [
    { name: 'Projeler', path: '/projects' },
    { name: 'Hakkımda', path: '/about' },
    { name: 'İletişim', path: '/contact' },
  ];

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-500`}
    >
      <nav
        className={`w-full transition-all duration-500 ${isScrolled
          ? 'bg-space-900/80 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
          : 'bg-transparent border-b border-transparent'
          }`}
      >
        <div className="container mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-electric via-cyber to-electric bg-[length:200%_auto] text-transparent bg-clip-text animate-gradient-x hover:scale-105 transition-transform duration-300"
          >
            Ahmet
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`relative text-sm font-medium tracking-wider transition-all duration-300 group ${pathname === item.path
                  ? 'text-electric'
                  : 'text-gray-400 hover:text-white'
                  }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-electric transition-transform duration-300 ${pathname === item.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`} />
              </Link>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className={`w-6 h-0.5 bg-electric transition-all duration-300 ${isOpen ? 'transform rotate-45 translate-y-1.5' : 'mb-1.5'
              }`}></div>
            <div className={`w-6 h-0.5 bg-electric transition-all duration-300 ${isOpen ? 'opacity-0' : 'mb-1.5'
              }`}></div>
            <div className={`w-6 h-0.5 bg-electric transition-all duration-300 ${isOpen ? 'transform -rotate-45 -translate-y-1.5' : ''
              }`}></div>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
        >
          <div className="px-6 pb-6 space-y-4 border-t border-white/5 pt-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`block text-lg transition-colors ${pathname === item.path
                  ? 'text-electric font-bold'
                  : 'text-gray-400'
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