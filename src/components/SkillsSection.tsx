import React from 'react';
import { Code, Database, Server, Wrench, Layers } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const categoryIcons = [
    <Code className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    <Server className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />,
    <Database className="w-5 h-5 text-amber-600 dark:text-amber-400" />,
    <Wrench className="w-5 h-5 text-purple-600 dark:text-purple-400" />
  ];

  return (
    <section id="skills" className="py-20 border-b border-slate-200 dark:border-slate-800/80 bg-slate-50/70 dark:bg-slate-950/40 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Core Capabilities
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Technical Skills & Architecture
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2 max-w-2xl">
            A comprehensive suite of modern full-stack development tools, specializing in the MERN stack ecosystem, performant TypeScript, and responsive UI engineering.
          </p>
        </div>

        {/* MERN Stack Highlight Architecture Box */}
        <div className="p-6 rounded-2xl bg-white dark:bg-gradient-to-r dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 border border-slate-200 dark:border-slate-800 shadow-md dark:shadow-xl mb-10">
          <div className="flex items-center gap-2 mb-4">
            <Layers className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span className="text-xs font-mono font-bold text-slate-800 dark:text-white uppercase tracking-wider">
              The MERN Stack Core Paradigm
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-emerald-200 dark:border-emerald-900/40">
              <span className="text-2xl font-black text-emerald-600 dark:text-emerald-400 font-mono block mb-1">M</span>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">MongoDB</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Flexible JSON-like document modeling, indexing, and complex aggregation pipelines for real-time data.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-cyan-200 dark:border-cyan-900/40">
              <span className="text-2xl font-black text-cyan-600 dark:text-cyan-400 font-mono block mb-1">E</span>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">Express.js</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Lightweight RESTful API routing, JWT authentication, and secure modular middleware architecture.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-blue-200 dark:border-blue-900/40">
              <span className="text-2xl font-black text-blue-600 dark:text-blue-400 font-mono block mb-1">R</span>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">React & Next.js</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Component-driven interfaces, custom hooks, SSR for optimal page speed, and responsive Tailwind layouts.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-purple-200 dark:border-purple-900/40">
              <span className="text-2xl font-black text-purple-600 dark:text-purple-400 font-mono block mb-1">N</span>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">Node.js</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                High-concurrency asynchronous runtime powering fast I/O microservices and API integrations.
              </p>
            </div>
          </div>
        </div>

        {/* Technical Skills Categorized Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_CATEGORIES.map((category, idx) => (
            <div
              key={category.title}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm"
            >
              <div className="flex items-center gap-3 pb-4 mb-4 border-b border-slate-200 dark:border-slate-800">
                <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                  {categoryIcons[idx % categoryIcons.length]}
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80"
                  >
                    <span className="text-xs font-medium text-slate-800 dark:text-slate-200 truncate pr-2">
                      {skill.name}
                    </span>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-900 text-emerald-700 dark:text-emerald-400 border border-slate-200 dark:border-slate-800 shrink-0">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
