import { projects } from '../data/portfolioData';
import { ExternalLink, Clock, CheckCircle, Layers, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400 mb-2">
            <span>Engineering Showcase</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Selected Projects
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
            A selection of software systems, web platforms, APIs, and integrations demonstrating practical engineering problem-solving and architectural judgment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col justify-between rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-xs hover:shadow-md transition-all duration-200 overflow-hidden"
            >
              <div className="p-6 sm:p-8 space-y-6">
                {/* Header with Title & Badge */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 mb-2 text-xs font-medium rounded-md bg-primary-50 dark:bg-primary-950/60 text-primary-700 dark:text-primary-300 border border-primary-200/70 dark:border-primary-800/60">
                      {project.badge}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Short Description */}
                <p className="text-sm font-medium text-slate-700 dark:text-slate-200">
                  {project.description}
                </p>

                {/* Problem / Solution Breakdown */}
                <div className="space-y-3 bg-slate-50 dark:bg-slate-800/40 p-4 rounded-lg border border-slate-200/60 dark:border-slate-800/60 text-xs sm:text-sm">
                  <div>
                    <span className="font-semibold text-slate-900 dark:text-white uppercase tracking-wider text-[11px] block text-slate-500 dark:text-slate-400 mb-1">
                      Problem Context
                    </span>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      {project.problem}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-200/60 dark:border-slate-700/50">
                    <span className="font-semibold text-slate-900 dark:text-white uppercase tracking-wider text-[11px] block text-slate-500 dark:text-slate-400 mb-1">
                      Engineering Solution
                    </span>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                </div>

                {/* Key Features List */}
                {project.features && (
                  <div className="space-y-2">
                    <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500 block">
                      Core System Capabilities
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-600 dark:text-slate-300">
                      {project.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-1.5">
                          <CheckCircle className="w-3.5 h-3.5 text-primary-600 dark:text-primary-400 shrink-0" />
                          <span className="truncate">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies */}
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500 block mb-2">
                    Technologies
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 py-4 bg-slate-50 dark:bg-slate-900/90 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3 text-xs">
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-medium text-slate-800 dark:text-slate-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>View Repository</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <div className="inline-flex items-center gap-1.5 text-slate-500 dark:text-slate-400 font-medium">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Repository coming soon</span>
                  </div>
                )}

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-medium text-primary-600 dark:text-primary-400 hover:underline"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
