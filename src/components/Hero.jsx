import React from 'react';
import { profile } from '../data/profile';
import { ArrowRight, FileText, MapPin, CheckCircle2, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Copy (Col 1-7) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status / Location Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>{profile.title}</span>
              <span className="text-slate-300 dark:text-slate-600">•</span>
              <span className="inline-flex items-center gap-1 text-slate-500 dark:text-slate-400">
                <MapPin className="w-3 h-3" />
                {profile.location}
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.18]">
                {profile.headline}
              </h1>
              <p className="font-mono text-xs sm:text-sm font-semibold text-primary-600 dark:text-primary-400 tracking-tight">
                {profile.subHeadline}
              </p>
            </div>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-normal">
              {profile.description}
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 dark:bg-primary-600 dark:hover:bg-primary-500 rounded-lg shadow-sm hover:shadow transition-all group"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href={profile.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800/90 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg shadow-xs hover:border-slate-400 dark:hover:border-slate-600 transition-colors"
              >
                <FileText className="w-4 h-4 text-slate-600 dark:text-slate-300" />
                <span>View Resume</span>
              </a>

              <div className="flex items-center gap-2 pl-1">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800/90 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg shadow-xs hover:border-slate-400 dark:hover:border-slate-600 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-[#0a66c2] bg-white dark:bg-slate-800/90 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg shadow-xs hover:border-slate-400 dark:hover:border-slate-600 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Engineering Highlights Pill Bar */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80">
              <p className="text-xs uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500 mb-2.5">
                Core Domains
              </p>
              <div className="flex flex-wrap gap-2">
                {["Fintech & Microfinance", "Logistics & Commerce", "Community Platforms", "Application Support", "System Integration", "CI/CD & Cloud"].map((domain) => (
                  <span
                    key={domain}
                    className="text-xs font-medium px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/40"
                  >
                    {domain}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Minimal Engineering Terminal Panel (Col 8-12) */}
          <div className="lg:col-span-5">
            <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-900 text-slate-200 shadow-md font-mono text-xs sm:text-sm">
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-slate-950/80 border-b border-slate-800 text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#ef4444]/90 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-[#f59e0b]/90 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-[#10b981]/90 inline-block"></span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>bash — 80x24</span>
                </div>
                <span className="text-[10px] text-slate-500 font-sans">v2.0</span>
              </div>

              {/* Terminal Body */}
              <div className="p-4 sm:p-5 space-y-4">
                <div>
                  <div className="flex items-center gap-1 text-slate-400">
                    <span className="text-primary-400">chinonso@engineering</span>
                    <span>:</span>
                    <span className="text-emerald-400">~</span>
                    <span>$ whoami</span>
                  </div>
                  <div className="mt-1 text-slate-100 font-medium pl-2 border-l-2 border-primary-500/50">
                    {profile.name} — {profile.title}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-1 text-slate-400">
                    <span className="text-primary-400">chinonso@engineering</span>
                    <span>:</span>
                    <span className="text-emerald-400">~</span>
                    <span>$ focus</span>
                  </div>
                  <div className="mt-1 text-slate-300 pl-2 border-l-2 border-emerald-500/50">
                    backend APIs architecture integrations cloud reliability
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-1 text-slate-400">
                    <span className="text-primary-400">chinonso@engineering</span>
                    <span>:</span>
                    <span className="text-emerald-400">~</span>
                    <span>$ stack --core</span>
                  </div>
                  <div className="mt-1 text-slate-300 pl-2 border-l-2 border-amber-500/50">
                    PHP/Laravel • MySQL • Docker • AWS • Redis • REST APIs
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-1 text-slate-400">
                    <span className="text-primary-400">chinonso@engineering</span>
                    <span>:</span>
                    <span className="text-emerald-400">~</span>
                    <span>$ status</span>
                  </div>
                  <div className="mt-1 flex items-center gap-2 text-emerald-400 pl-2 border-l-2 border-emerald-500">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>production systems monitored & stable</span>
                  </div>
                </div>

                <div className="pt-1 flex items-center gap-1 text-slate-400">
                  <span className="text-primary-400">chinonso@engineering</span>
                  <span>:</span>
                  <span className="text-emerald-400">~</span>
                  <span className="animate-pulse">▌</span>
                </div>
              </div>
            </div>

            {/* Subtle summary below terminal */}
            <p className="mt-3 text-center text-xs text-slate-500 dark:text-slate-400">
              5+ years hands-on backend development & application support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
