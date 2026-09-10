import React from 'react';
import { experience } from '../data/portfolioData';
import { Briefcase, Building2, CheckCircle2, ShieldCheck, Users } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24 border-t border-slate-200/80 dark:border-slate-800/80 bg-white/50 dark:bg-slate-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400 mb-2">
            <span>Career & Production Systems</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Professional Experience
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
            Demonstrated track record of supporting business-critical web applications, diagnosing incidents, and maintaining system reliability.
          </p>
        </div>

        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 sm:ml-6 space-y-12">
          {experience.map((exp, index) => (
            <div key={index} className="relative pl-6 sm:pl-8 group">
              {/* Timeline Marker */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-primary-600 dark:bg-primary-500 border-4 border-white dark:border-[#0b0f19] group-hover:scale-110 transition-transform"></div>

              {/* Experience Card */}
              <div className="p-6 sm:p-8 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-xs">
                {/* Header Info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100 dark:border-slate-800">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 mt-1 text-sm font-medium text-primary-600 dark:text-primary-400">
                      <Building2 className="w-4 h-4" />
                      <span>{exp.organization}</span>
                    </div>
                  </div>

                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/60 self-start sm:self-center">
                    {exp.type}
                  </span>
                </div>

                {/* Key Responsibilities */}
                <div className="mt-6 space-y-3">
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500">
                    Core Engineering Responsibilities
                  </h4>
                  <ul className="space-y-3">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-1 shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Operational Highlights Box */}
                <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                    <span>Security remediation & vulnerability triage</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                    <span>Cross-team collaboration (Unix, DB, InfoSec, Dev)</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
