import React from 'react';
import { education } from '../data/education';
import { certifications } from '../data/certifications';
import { community } from '../data/community';
import { GraduationCap, Award, Users, HeartHandshake, Calendar } from 'lucide-react';

export default function Education() {
  return (
    <section className="py-16 md:py-24 border-t border-slate-200/80 dark:border-slate-800/80 bg-white/50 dark:bg-slate-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Row 1: Education & Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Education (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400 mb-2">
                <span>Academic Foundation</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                Education
              </h2>
            </div>

            <div className="p-6 sm:p-7 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
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

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-3 text-xs font-medium">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/60">
                  <Award className="w-3.5 h-3.5" />
                  <span>{education.classification}</span>
                </span>
                <span className="text-slate-600 dark:text-slate-300">
                  CGPA: <strong className="text-slate-900 dark:text-white">{education.cgpa}</strong>
                </span>
              </div>

              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed pt-1">
                Foundational study in Data Structures, Relational Database Systems, Operating Systems, Algorithm Complexity, and Software Engineering principles.
              </p>
            </div>
          </div>

          {/* Certifications & Programs (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400 mb-2">
                <span>Technical Credentials</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                Certifications & Programs
              </h2>
            </div>

            <div className="space-y-3">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                        {cert.title}
                      </h4>
                      <span className="text-[11px] font-mono text-slate-400">
                        ({cert.year})
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {cert.description}
                    </p>
                    <div className="flex flex-wrap gap-1 pt-1">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <span className="text-xs font-medium text-primary-600 dark:text-primary-400 shrink-0 self-start sm:self-center">
                    {cert.issuer}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Row 2: Community & Volunteering */}
        <div className="pt-10 border-t border-slate-200/80 dark:border-slate-800/80">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400 mb-2">
              <HeartHandshake className="w-3.5 h-3.5" />
              <span>Civic Impact</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              Community & Volunteering
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Pro-bono engineering initiatives, youth mentoring, and technology empowerment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {community.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3"
              >
                <div className="flex items-center justify-between gap-2">
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h4>
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    {item.location}
                  </span>
                </div>

                <div className="text-xs font-semibold text-primary-600 dark:text-primary-400">
                  {item.role}
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.description}
                </p>

                <div className="pt-2 text-xs font-medium text-slate-700 dark:text-slate-200 border-t border-slate-100 dark:border-slate-800">
                  Impact: <span className="text-slate-500 dark:text-slate-400">{item.impact}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
