import React from 'react';
import { 
  Download, FileText, ArrowRight, MapPin, Mail, Phone, 
  Linkedin, Github
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
  onExploreProjects: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onExploreProjects, onContactClick }) => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-slate-200 dark:border-slate-800/80 transition-colors duration-200">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-emerald-500/10 dark:bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[300px] bg-cyan-500/10 dark:bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300 shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Full Stack / MERN Roles</span>
              <span className="text-slate-400 dark:text-slate-600">•</span>
              <span className="flex items-center gap-1 text-slate-600 dark:text-slate-400">
                <MapPin className="w-3 h-3 text-emerald-600 dark:text-emerald-400" /> {PERSONAL_INFO.location}
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-600 dark:from-emerald-400 dark:via-teal-300 dark:to-cyan-400">{PERSONAL_INFO.name}</span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-200">
                {PERSONAL_INFO.title} & MERN Stack Specialist
              </p>
            </div>

            {/* Summary Text */}
            <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
              {PERSONAL_INFO.summary}
            </p>

            {/* Quick Contact & Social Links */}
            <div className="flex flex-wrap items-center gap-3 pt-1 text-xs">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-900/90 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-xs"
              >
                <Mail className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>{PERSONAL_INFO.email}</span>
              </a>

              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-900/90 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-xs"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>{PERSONAL_INFO.phone}</span>
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-900/90 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-xs"
              >
                <Github className="w-3.5 h-3.5 text-slate-600 dark:text-slate-400" />
                <span>GitHub</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-900/90 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-xs"
              >
                <Linkedin className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span>LinkedIn</span>
              </a>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                id="hero-explore-projects-btn"
                onClick={onExploreProjects}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/20 transition-all cursor-pointer"
              >
                <ArrowRight className="w-4 h-4" />
                <span>Explore Projects</span>
              </button>

              <button
                id="hero-view-resume-btn"
                onClick={onOpenResume}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-white font-semibold text-sm border border-slate-300 dark:border-slate-700 transition-all cursor-pointer shadow-xs"
              >
                <FileText className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>View Full Resume</span>
              </button>

              <a
                id="hero-download-resume-btn"
                href="/api/resume/download"
                download="Sachin_Yadav_Full_Stack_Resume.txt"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-sm border border-slate-300 dark:border-slate-700 transition-all cursor-pointer shadow-xs"
              >
                <Download className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Download CV</span>
              </a>
            </div>
          </div>

          {/* Profile Photo Card with Background Adapting to Theme */}
          <div className="lg:col-span-5">
            <div 
              id="hero-profile-photo-card"
              className="relative rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl dark:shadow-2xl p-5 overflow-hidden transition-all duration-300"
            >
              {/* Window Controls & Status */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse"></span>
                  <span>Full Stack Developer</span>
                </div>
              </div>

              {/* Photo Display with Theme-Adaptive Background */}
              <div className="relative w-full aspect-square max-w-[340px] mx-auto rounded-xl overflow-hidden bg-slate-100 dark:bg-black border border-slate-200 dark:border-slate-800 shadow-md dark:shadow-2xl flex items-center justify-center group transition-colors duration-200">
                <img
                  id="hero-profile-img"
                  src="/sachin-photo.png"
                  alt="Sachin Yadav - Full Stack MERN Developer"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />

                {/* Bottom theme-adaptive studio gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-200/60 dark:from-black/80 via-transparent to-transparent opacity-60 pointer-events-none transition-colors duration-200" />

                {/* Permanent Photo Identification Badge */}
                <div className="absolute bottom-2.5 inset-x-2.5 flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md bg-white/90 dark:bg-black/80 text-[11px] font-mono font-semibold text-emerald-700 dark:text-emerald-400 border border-slate-200 dark:border-slate-800 backdrop-blur-md shadow-xs">
                    Sachin Yadav
                  </span>
                  <span className="px-2 py-1 rounded-md bg-white/90 dark:bg-black/80 text-[10px] font-mono text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 backdrop-blur-md shadow-xs">
                    Surat, India
                  </span>
                </div>
              </div>

              {/* Title & Distinction */}
              <div className="mt-4 text-center">
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  {PERSONAL_INFO.name}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-mono mt-0.5">
                  Full Stack MERN Developer • Surat, Gujarat
                </p>
              </div>

              {/* Verified Metrics Grid */}
              <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800 grid grid-cols-2 gap-2.5">
                {PERSONAL_INFO.stats.map((stat, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-950/90 border border-slate-200 dark:border-slate-800 text-center transition-colors duration-200">
                    <span className="text-base font-bold text-slate-900 dark:text-white font-mono block">
                      {stat.value}
                    </span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 block truncate">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
