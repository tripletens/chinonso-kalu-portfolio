import React from 'react';
import { experience } from '../data/experience';
import { Building2, Calendar, MapPin, CheckCircle2, ShieldAlert, Star } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24 border-t border-slate-200/80 dark:border-slate-800/80 bg-white/50 dark:bg-slate-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400 mb-2">
            <span>Career History</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Professional Experience
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
            A track record of engineering backend architectures, leading financial integrations, and maintaining mission-critical enterprise systems.
          </p>
        </div>

        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 sm:ml-6 space-y-12">
          {experience.map((exp) => (
            <div key={exp.id} className="relative pl-6 sm:pl-8 group">
              {/* Timeline Marker */}
              <div
                className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-4 border-white dark:border-[#0b0f19] transition-transform group-hover:scale-110 ${
                  exp.isProminent
                    ? 'bg-amber-500 ring-4 ring-amber-400/20'
                    : 'bg-primary-600 dark:bg-primary-500'
                }`}
              ></div>

              {/* Experience Card */}
              <div
                className={`p-6 sm:p-8 rounded-xl bg-white dark:bg-slate-900/80 border transition-all ${
                  exp.isProminent
                    ? 'border-amber-300/80 dark:border-amber-800/60 shadow-xs'
                    : 'border-slate-200 dark:border-slate-800 shadow-xs'
                }`}
              >
                {/* Header with Role, Company, Period */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-5 border-b border-slate-100 dark:border-slate-800">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                        {exp.role}
                      </h3>
                      {exp.isProminent && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-[11px] font-semibold bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                          <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                          Key Architectural Leadership
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 text-sm font-medium text-slate-600 dark:text-slate-300">
                      <span className="flex items-center gap-1 text-primary-600 dark:text-primary-400 font-semibold">
                        <Building2 className="w-4 h-4" />
                        {exp.company}
                      </span>
                      <span className="text-slate-300 dark:text-slate-700">•</span>
                      <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400 text-xs">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1.5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/60">
                      <Calendar className="w-3 h-3 text-slate-400" />
                      {exp.period}
                    </span>
                    <span className="text-[11px] text-slate-400 dark:text-slate-500 font-medium">
                      {exp.type}
                    </span>
                  </div>
                </div>

                {/* Summary */}
                <p className="mt-4 text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
                  {exp.summary}
                </p>

                {/* Core Responsibilities */}
                <div className="mt-5 space-y-2.5">
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500">
                    Key Responsibilities & Deliverables
                  </h4>
                  <ul className="space-y-2.5">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Badges */}
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-1.5">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2.5 py-1 rounded bg-slate-50 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 border border-slate-200/70 dark:border-slate-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
