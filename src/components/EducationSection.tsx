import React from 'react';
import { GraduationCap, Globe, Heart } from 'lucide-react';
import { EDUCATION, LANGUAGES, INTERESTS } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 border-b border-slate-200 dark:border-slate-800/80 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              Academic Background
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Education & Qualifications
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2 max-w-2xl">
            Strong foundational computer science training with consistent high-academic standing and lifelong technical curiosity.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Degree Card */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-md dark:shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800/60 text-amber-600 dark:text-amber-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-slate-100 dark:bg-slate-950 text-emerald-700 dark:text-emerald-400 border border-slate-200 dark:border-slate-800">
                  {EDUCATION.completion}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                {EDUCATION.degree}
              </h3>
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mt-1">
                {EDUCATION.college}
              </p>
              <p className="text-xs text-slate-500 mb-6">
                {EDUCATION.location}
              </p>

              {/* CGPA Performance Breakdown */}
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-2">
                  Academic Performance by Year:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {EDUCATION.scores.map((score, sIdx) => (
                    <div
                      key={sIdx}
                      className={`p-3 rounded-xl border text-center ${
                        sIdx === 0
                          ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-500/40 text-emerald-800 dark:text-emerald-300 shadow-xs'
                          : 'bg-slate-50 dark:bg-slate-950/70 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      <span className="text-lg font-black font-mono block">
                        {score.cgpa}
                      </span>
                      <span className="text-[11px] text-slate-500 dark:text-slate-400 block mt-0.5">
                        {score.year}
                      </span>
                      {sIdx === 0 && (
                        <span className="inline-block mt-1 text-[9px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                          Top Distinction
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Languages & Interests Column */}
          <div className="lg:col-span-5 space-y-6">
            {/* Languages Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center gap-2.5 pb-3 mb-4 border-b border-slate-200 dark:border-slate-800">
                <Globe className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">Languages</h4>
              </div>
              <div className="space-y-2.5">
                {LANGUAGES.map((lang) => (
                  <div key={lang.name} className="flex items-center justify-between text-xs p-2 rounded-lg bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80">
                    <span className="font-semibold text-slate-800 dark:text-slate-200">{lang.name}</span>
                    <span className="text-slate-500 dark:text-slate-400 font-mono text-[11px]">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Interests Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center gap-2.5 pb-3 mb-4 border-b border-slate-200 dark:border-slate-800">
                <Heart className="w-4 h-4 text-rose-500 dark:text-rose-400" />
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">Interests & Pursuits</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {INTERESTS.map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-50 dark:bg-slate-950 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
