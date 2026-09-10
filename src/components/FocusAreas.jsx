import React from 'react';
import { profile } from '../data/profile';
import { Server, Network, Coins, Activity, Terminal, Database } from 'lucide-react';

const iconMap = {
  Server,
  Network,
  Coins,
  Activity,
  Terminal,
  Database,
};

export default function FocusAreas() {
  return (
    <section id="focus" className="py-16 md:py-24 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400 mb-2">
            <span>Specialisations</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            What I Do
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
            Core engineering areas where I build, integrate, troubleshoot, and support production systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {profile.specialisations.map((area) => {
            const IconComponent = iconMap[area.icon] || Server;
            return (
              <div
                key={area.id}
                className="group p-6 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-xs hover:shadow-sm transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 flex items-center justify-center mb-4 group-hover:bg-primary-50 dark:group-hover:bg-primary-950/60 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {area.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
