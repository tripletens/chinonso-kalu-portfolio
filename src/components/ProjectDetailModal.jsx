import React, { useEffect } from 'react';
import { X, CheckCircle2, Shield, Lock, ExternalLink, Layers } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectDetailModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] flex flex-col bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/80">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-md text-xs font-semibold bg-primary-50 dark:bg-primary-950/60 text-primary-700 dark:text-primary-300 border border-primary-200/60 dark:border-primary-800/60">
                {project.category}
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60">
                {project.confidential ? (
                  <>
                    <Lock className="w-3 h-3 text-slate-400" />
                    <span>{project.availability}</span>
                  </>
                ) : (
                  <span>{project.availability}</span>
                )}
              </span>
            </div>
            <h2 id="modal-project-title" className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              {project.title}
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Industry: <span className="text-slate-700 dark:text-slate-300 font-medium">{project.industry}</span>
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 text-slate-700 dark:text-slate-300 text-sm">
          {/* Overview */}
          <div>
            <h3 className="text-xs uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500 mb-2">
              Application Overview
            </h3>
            <p className="leading-relaxed text-slate-700 dark:text-slate-200 text-base">
              {project.overview}
            </p>
          </div>

          {/* My Contribution */}
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-800/70">
            <h3 className="text-xs uppercase tracking-wider font-semibold text-primary-600 dark:text-primary-400 mb-1.5 flex items-center gap-1.5">
              <Layers className="w-4 h-4" />
              <span>Engineering Contribution</span>
            </h3>
            <p className="leading-relaxed text-slate-600 dark:text-slate-300">
              {project.contribution}
            </p>
          </div>

          {/* Challenges & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800/60 space-y-1.5">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-900 dark:text-white">
                Technical Challenges
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {project.challenges}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800/60 space-y-1.5">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-900 dark:text-white">
                Engineering Solution
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Core Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div>
              <h3 className="text-xs uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500 mb-3">
                Key Architectural & Functional Highlights
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technology Stack */}
          <div>
            <h3 className="text-xs uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500 mb-2.5">
              Technology Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700/60"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Confidentiality Notice */}
          {project.confidential && (
            <div className="flex items-center gap-2 p-3 rounded-lg bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border border-amber-200/60 dark:border-amber-900/60 text-xs">
              <Shield className="w-4 h-4 shrink-0 text-amber-600 dark:text-amber-400" />
              <span>
                Internal implementation details, server credentials, and proprietary source code are withheld in compliance with non-disclosure and privacy standards.
              </span>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 border-t border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/90 flex items-center justify-between gap-4">
          <div className="text-xs text-slate-500 dark:text-slate-400">
            {project.availability}
          </div>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-medium text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View Source</span>
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-medium text-white bg-primary-600 hover:bg-primary-700 transition-colors"
              >
                <span>Live Site</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
