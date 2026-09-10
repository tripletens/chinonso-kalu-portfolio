import React from 'react';
import { education, currentlyExploring } from '../data/portfolioData';
import { GraduationCap, Award, Compass, ArrowUpRight } from 'lucide-react';

export default function Education() {
  return (
    <section className="py-16 md:py-24 border-t border-slate-200/80 dark:border-slate-800/80 bg-white/50 dark:bg-slate-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Education Column */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400 mb-2">
                <span>Academic Foundation</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                Education
              </h2>
            </div>

            <div className="p-6 sm:p-7 rounded-xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary-50 dark:bg-primary-950/60 text-primary-600 dark:text-primary-400 border border-primary-100 dark:border-primary-900/50">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {education.degree}
                  </h3>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    {education.institution}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Class of {education.year}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-4 text-xs font-medium">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/60">
                  <Award className="w-3.5 h-3.5" />
                  <span>{education.classification}</span>
                </div>
                <div className="text-slate-600 dark:text-slate-300">
                  CGPA: <span className="font-semibold text-slate-900 dark:text-white">{education.cgpa}</span>
                </div>
              </div>

              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed pt-2">
                Coursework focused on Computer Science fundamentals, algorithm design, relational database systems, and operating system principles.
              </p>
            </div>
          </div>

          {/* Currently Exploring Column */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400 mb-2">
                <span>Continuous Growth</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                Currently Exploring
              </h2>
            </div>

            <div className="p-6 sm:p-7 rounded-xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
              <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                <Compass className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                <span>Active topics of study and technical advancement</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {currentlyExploring.map((topic, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-700/50 text-xs font-medium text-slate-700 dark:text-slate-300 flex items-center justify-between"
                  >
                    <span>{topic}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
                  </div>
                ))}
              </div>

              <p className="text-xs text-slate-400 dark:text-slate-500 pt-2 italic">
                * Dedicated to continuous self-study, system design fundamentals, and scalable architectural patterns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
