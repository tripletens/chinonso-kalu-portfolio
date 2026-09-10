import React from 'react';
import { profile } from '../data/profile';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#080b13] py-12 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand / Title */}
          <div className="text-center md:text-left">
            <span className="font-bold text-base text-slate-900 dark:text-white">
              {profile.name}
            </span>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              {profile.title}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 text-sm">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              GitHub
            </a>
            <span className="text-slate-300 dark:text-slate-700">•</span>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-slate-300 dark:text-slate-700">•</span>
            <a
              href={`mailto:${profile.email}`}
              className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Email
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Copyright Line */}
        <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800/60 text-center text-xs text-slate-400 dark:text-slate-500">
          <p>© 2026 {profile.name}</p>
        </div>
      </div>
    </footer>
  );
}
