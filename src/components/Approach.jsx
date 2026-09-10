import React from 'react';
import { engineeringPrinciples } from '../data/principles';

export default function Approach() {
  return (
    <section id="approach" className="py-16 md:py-24 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400 mb-2">
            <span>Engineering Discipline</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            How I Build Software
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
            Core principles guiding architectural decisions, transaction handling, system integrations, and code maintainability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {engineeringPrinciples.map((principle) => (
            <div
              key={principle.number}
              className="p-6 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-xs transition-all flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs font-bold text-primary-600 dark:text-primary-400 block mb-2">
                  // {principle.number}
                </span>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {principle.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  {principle.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
