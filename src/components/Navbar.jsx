import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { personalInfo } from '../data/portfolioData';
import { Sun, Moon, Menu, X, FileText, ExternalLink } from 'lucide-react';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Focus', href: '#focus' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Approach', href: '#approach' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/90 dark:bg-[#0b0f19]/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo / Name */}
          <a
            href="#"
            className="flex items-center gap-2 group text-slate-900 dark:text-white font-semibold text-lg tracking-tight focus-visible:ring-2 focus-visible:ring-primary-500 rounded-md p-1"
          >
            <span className="w-8 h-8 rounded-lg bg-primary-600 text-white flex items-center justify-center font-mono text-sm font-bold shadow-sm group-hover:bg-primary-700 transition-colors">
              CK
            </span>
            <span className="hidden sm:inline font-medium">Chinonso Kalu</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-md transition-colors hover:bg-slate-100 dark:hover:bg-slate-800/60"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions (Resume + Theme Toggle) */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              className="p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <a
              href={personalInfo.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-sm font-medium text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-950/60 hover:bg-primary-100 dark:hover:bg-primary-900/60 border border-primary-200 dark:border-primary-800 rounded-md transition-colors shadow-xs"
            >
              <FileText className="w-4 h-4" />
              <span>View Resume</span>
              <ExternalLink className="w-3 h-3 opacity-70" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-lg"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-lg"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-[#0f1422] border-b border-slate-200 dark:border-slate-800 px-4 pt-2 pb-6 space-y-2 shadow-lg animate-in fade-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-200 dark:border-slate-800">
            <a
              href={personalInfo.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-md transition-colors shadow-xs"
            >
              <FileText className="w-4 h-4" />
              <span>View Resume</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
