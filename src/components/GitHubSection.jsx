import React, { useState, useEffect } from 'react';
import { profile } from '../data/profile';
import { Star, GitFork, ArrowUpRight, FolderGit2 } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function GitHubSection() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function fetchRepos() {
      try {
        const response = await fetch(
          `https://api.github.com/users/${profile.githubUsername}/repos?sort=updated&per_page=6`,
          {
            headers: {
              Accept: 'application/vnd.github.v3+json',
            },
          }
        );

        if (!response.ok) {
          throw new Error(`GitHub API returned status: ${response.status}`);
        }

        const data = await response.json();
        if (isMounted && Array.isArray(data)) {
          setRepos(data.slice(0, 4));
        }
      } catch (err) {
        if (isMounted) {
          setHasError(true);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchRepos();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="py-16 md:py-24 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400 mb-2">
              <GithubIcon className="w-3.5 h-3.5" />
              <span>Open Source & Experiments</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Explore My Code
            </h2>
            <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
              I use GitHub to document software projects, experiments and practical implementations of engineering concepts.
            </p>
          </div>

          <div>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-primary-600 dark:hover:bg-primary-500 rounded-lg shadow-xs transition-colors group"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Visit GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Repositories or Fallback */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[1, 2].map((n) => (
              <div
                key={n}
                className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 animate-pulse space-y-3"
              >
                <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-1/3"></div>
                <div className="h-3 bg-slate-200 dark:bg-slate-800 rounded w-3/4"></div>
                <div className="h-3 bg-slate-200 dark:bg-slate-800 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        ) : !hasError && repos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {repos.map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-xs hover:shadow-sm transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      <FolderGit2 className="w-4 h-4 text-primary-500 shrink-0" />
                      <span className="truncate">{repo.name}</span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-primary-600 transition-colors shrink-0" />
                  </div>

                  <p className="mt-2 text-xs text-slate-600 dark:text-slate-300 line-clamp-2">
                    {repo.description || "Public repository and backend exploration."}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 font-mono">
                  {repo.language && (
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-primary-500"></span>
                      <span>{repo.language}</span>
                    </span>
                  )}
                  <span className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5" />
                    <span>{repo.stargazers_count}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="w-3.5 h-3.5" />
                    <span>{repo.forks_count}</span>
                  </span>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div className="p-8 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 text-center space-y-3">
            <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center mx-auto">
              <FolderGit2 className="w-5 h-5 text-primary-600 dark:text-primary-400" />
            </div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
              Public Repositories on GitHub
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 max-w-md mx-auto">
              Inspect source code, experiments, and technical implementations at <strong>github.com/{profile.githubUsername}</strong>.
            </p>
            <div className="pt-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-600 dark:text-primary-400 hover:underline"
              >
                <span>Visit @{profile.githubUsername}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
