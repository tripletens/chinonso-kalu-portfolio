import React from 'react';
import { skillCategories } from '../data/portfolioData';
import { Server, Layout, Database, Terminal, ShieldAlert, Cpu } from 'lucide-react';

const categoryIcons = {
  Backend: Server,
  Frontend: Layout,
  Databases: Database,
  "DevOps / Infrastructure": Terminal,
  Testing: Cpu,
  "Engineering Practices": ShieldAlert
};

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 border-t border-slate-200/80 dark:border-slate-800/80 bg-white/50 dark:bg-slate-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400 mb-2">
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Technical Skills
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
            A practical inventory of programming languages, frameworks, database systems, infrastructure, and engineering workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => {
            const IconComponent = categoryIcons[category.name] || Server;
            return (
              <div
                key={category.name}
                className="p-6 rounded-xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 shadow-xs"
              >
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
                  <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    <IconComponent className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                    {category.name}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-medium px-2.5 py-1.5 rounded-md bg-slate-50 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 border border-slate-200/70 dark:border-slate-700/50 hover:border-primary-300 dark:hover:border-primary-700 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
