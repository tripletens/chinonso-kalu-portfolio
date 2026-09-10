import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Copy, Check, Send, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Build mailto URL cleanly without backend requirement
    const mailtoSubject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 md:py-24 border-t border-slate-200/80 dark:border-slate-800/80 bg-white/50 dark:bg-slate-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Information & Channels */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400 mb-2">
                <span>Get In Touch</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                Let's build something useful.
              </h2>
            </div>

            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              If you are hiring for a software engineering role, working on a technical project, or need help improving an existing application, feel free to get in touch.
            </p>

            <div className="space-y-4 pt-2">
              {/* Email Card with Copy Action */}
              <div className="p-4 rounded-xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4 shadow-xs">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 rounded-lg bg-primary-50 dark:bg-primary-950/60 text-primary-600 dark:text-primary-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-xs text-slate-400 dark:text-slate-500 font-medium block">Email Address</span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm font-semibold text-slate-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 truncate block transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 text-xs font-medium rounded-md border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors flex items-center gap-1.5 shrink-0"
                  aria-label="Copy email address to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* LinkedIn Card */}
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 flex items-center justify-between gap-4 shadow-xs transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-[#0a66c2]">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 dark:text-slate-500 font-medium block">LinkedIn</span>
                    <span className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      linkedin.com/in/{personalInfo.linkedinUsername}
                    </span>
                  </div>
                </div>
                <span className="text-xs font-medium text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300">
                  Connect →
                </span>
              </a>

              {/* GitHub Card */}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 flex items-center justify-between gap-4 shadow-xs transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 dark:text-slate-500 font-medium block">GitHub</span>
                    <span className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      github.com/{personalInfo.githubUsername}
                    </span>
                  </div>
                </div>
                <span className="text-xs font-medium text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300">
                  Follow →
                </span>
              </a>
            </div>
          </div>

          {/* Recruiter / Direct Message Form */}
          <div className="lg:col-span-6">
            <div className="p-6 sm:p-8 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-xs">
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Send a Direct Message
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Morgan"
                    className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:bg-white dark:focus:bg-slate-900 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:bg-white dark:focus:bg-slate-900 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Engineering Role / Project Collaboration"
                    className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:bg-white dark:focus:bg-slate-900 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe the role, technical requirement, or question..."
                    className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:bg-white dark:focus:bg-slate-900 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-medium text-sm transition-colors flex items-center justify-center gap-2 shadow-xs"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via Email</span>
                </button>
              </form>

              {submitted && (
                <p className="mt-3 text-xs text-emerald-600 dark:text-emerald-400 text-center font-medium">
                  Your email client should open with your prefilled message.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
