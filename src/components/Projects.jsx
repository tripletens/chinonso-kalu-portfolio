import React, { useState } from 'react';
import { projects } from '../data/projects';
import ProjectDetailModal from './ProjectDetailModal';
import { Lock, ArrowRight, Layers, Shield, Sparkles, ExternalLink } from 'lucide-react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const featuredProject = projects.find((p) => p.tier === 1);
  const majorProjects = projects.filter((p) => p.tier === 2);
  const additionalProjects = projects.filter((p) => p.tier === 3);

  return (
    <section id="projects" className="py-16 md:py-24 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400 mb-2">
            <span>Portfolio of Systems</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Selected Work
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
            A selection of applications and systems I have built, supported or contributed to across fintech, logistics, education, and enterprise environments.
          </p>
        </div>

        {/* --- TIER 1: FEATURED PROJECT (RETRUST) --- */}
        {featuredProject && (
          <div className="mb-14">
            <div className="rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-white border border-slate-800 p-6 sm:p-10 shadow-xl relative overflow-hidden">
              {/* Subtle ambient accent */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>

              <div className="relative z-10 space-y-6">
                {/* Header row */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-400/10 text-amber-300 border border-amber-400/30">
                      <Sparkles className="w-3.5 h-3.5" />
                      {featuredProject.badge}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      {featuredProject.industry}
                    </span>
                  </div>

                  <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-400 bg-slate-800/80 px-3 py-1 rounded-md border border-slate-700/60">
                    <Lock className="w-3 h-3 text-slate-400" />
                    {featuredProject.availability}
                  </span>
                </div>

                {/* Title & Description */}
                <div className="space-y-3 max-w-3xl">
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                    {featuredProject.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                    {featuredProject.shortDescription}
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2">
                  {featuredProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-3 py-1 rounded-md bg-slate-800 text-slate-200 border border-slate-700/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Engineering Focus Box */}
                <div className="pt-6 border-t border-slate-800 space-y-3">
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-primary-400">
                    Core Engineering Focus
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                    {featuredProject.engineeringFocus?.map((focus, idx) => (
                      <div
                        key={idx}
                        className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/50 text-xs text-slate-300 flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-400 shrink-0"></span>
                        <span className="truncate">{focus}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action CTA */}
                <div className="pt-2 flex items-center justify-between gap-4">
                  <button
                    onClick={() => setSelectedProject(featuredProject)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold rounded-lg bg-primary-600 hover:bg-primary-500 text-white transition-colors shadow-xs"
                  >
                    <span>View Project Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <span className="text-[11px] text-slate-400 hidden sm:inline">
                    Confidential banking architecture & transaction boundaries
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* --- TIER 2: MAJOR PROFESSIONAL APPLICATIONS --- */}
        <div className="space-y-6 mb-14">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary-600"></span>
            <h3 className="text-base font-bold text-slate-900 dark:text-white uppercase tracking-wider text-xs">
              Major Applications & Platforms
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {majorProjects.map((project) => (
              <div
                key={project.id}
                className="flex flex-col justify-between rounded-xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-xs hover:shadow-sm transition-all p-6 sm:p-7 space-y-6"
              >
                <div className="space-y-4">
                  {/* Category & Availability */}
                  <div className="flex items-start justify-between gap-2">
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/60">
                      {project.category}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-400">
                      <Lock className="w-3 h-3" />
                      {project.availability}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                      {project.title}
                    </h4>
                    <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {project.shortDescription}
                    </p>
                  </div>

                  {/* Contribution Snippet */}
                  <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800/60 text-xs text-slate-600 dark:text-slate-300">
                    <span className="font-semibold text-slate-800 dark:text-slate-200 block mb-0.5">
                      Engineering Contribution:
                    </span>
                    {project.contribution}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/70 dark:border-slate-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="text-xs font-mono px-2 py-1 rounded text-slate-400">
                        +{project.technologies.length - 5}
                      </span>
                    )}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors group"
                  >
                    <span>Project Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>

                  <span className="text-[11px] text-slate-400">
                    {project.industry}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- TIER 3: ADDITIONAL PROFESSIONAL WORK --- */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-slate-400"></span>
            <h3 className="text-base font-bold text-slate-900 dark:text-white uppercase tracking-wider text-xs">
              Additional Professional & Community Work
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {additionalProjects.map((project) => (
              <div
                key={project.id}
                className="flex flex-col justify-between rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 p-5 space-y-4 shadow-xs"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-500 dark:text-slate-400">
                      {project.category}
                    </span>
                    <span className="text-[11px] text-slate-400">
                      {project.availability}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-slate-900 dark:text-white">
                    {project.title}
                  </h4>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {project.shortDescription}
                  </p>

                  <div className="flex flex-wrap gap-1 pt-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1 text-xs font-medium text-primary-600 dark:text-primary-400 hover:underline"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Modal */}
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
