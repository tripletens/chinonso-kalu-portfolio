import React from 'react';
import { skillCategories } from '../data/skills';
import { Boxes, Server, CreditCard, Database, Terminal, CheckSquare } from 'lucide-react';

const iconMap = {
  Boxes,
  Server,
  CreditCard,
  Database,
  Terminal,
  CheckSquare
};

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 border-t border-slate-200/80 dark:border-slate-800/80 bg-white/50 dark:bg-slate-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400 mb-2">
            <span>Competencies</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Engineering Capabilities
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
            Structured architectural patterns, server-side languages, database engineering, financial integrations, and DevOps pipelines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => {
            const IconComponent = iconMap[category.icon] || Server;
            return (
              <div
                key={category.name}
                className="p-6 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3 pb-3 border-b border-slate-100 dark:border-slate-800">
                    <div className="p-2 rounded-lg bg-primary-50 dark:bg-primary-950/60 text-primary-600 dark:text-primary-400">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white leading-tight">
                        {category.name}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 font-normal">
                    {category.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-50 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300 border border-slate-200/70 dark:border-slate-700/50"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
