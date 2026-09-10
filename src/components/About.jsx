import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Code2, Server, ShieldCheck, Wrench } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 border-t border-slate-200/80 dark:border-slate-800/80 bg-white/50 dark:bg-slate-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400 mb-2">
            <span>About Me</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Engineering with a focus on real-world reliability.
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Narrative Paragraphs */}
          <div className="lg:col-span-8 space-y-4 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            {personalInfo.about.map((paragraph, idx) => (
              <p key={idx}>
                {paragraph}
              </p>
            ))}
          </div>

          {/* Key Perspectives / Pillars */}
          <div className="lg:col-span-4 space-y-3">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/60">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400 mt-0.5">
                  <Server className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Backend Systems</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Structuring clean, maintainable APIs, database queries, and business logic.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/60">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 mt-0.5">
                  <Wrench className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Production Support</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Troubleshooting real-world issues, analyzing logs, and incident recovery.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/60">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Security Remediation</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Addressing vulnerability scanner findings, input hygiene, and access control.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
