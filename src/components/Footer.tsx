import React from 'react';
import { Code2, Download, FileText, ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { downloadResumePdf } from '../utils/downloadResume';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 text-xs py-12 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200 dark:border-slate-800/80">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500 to-cyan-500 flex items-center justify-center text-slate-950 font-black text-sm tracking-tight shadow-sm shrink-0">
              SY
            </div>
            <div>
              <span className="font-bold text-slate-900 dark:text-white text-sm">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 block">
                {PERSONAL_INFO.title} • Surat, Gujarat
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-5 text-slate-600 dark:text-slate-300 font-medium">
            <a href="#projects" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Experience</a>
            <a href="#skills" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Skills</a>
            <a href="#education" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Education</a>
            <a href="#contact" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Contact</a>
            <button
              onClick={onOpenResume}
              className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <FileText className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
              <span>Resume</span>
            </button>
            <a
              href="/api/resume/download"
              download="Sachin_Yadav_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={downloadResumePdf}
              className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-semibold cursor-pointer"
              title="Download Official Resume (PDF)"
            >
              <Download className="w-3 h-3" />
              <span>Download CV</span>
            </a>
          </div>

          {/* Socials & Top */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white border border-slate-200 dark:border-slate-800 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white border border-slate-200 dark:border-slate-800 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4 text-blue-500" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white border border-slate-200 dark:border-slate-800 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white border border-slate-200 dark:border-slate-800 transition-colors ml-2 cursor-pointer"
              aria-label="Scroll to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-slate-400 dark:text-slate-500 text-[11px] gap-3">
          <p>© {new Date().getFullYear()} Sachin Yadav. All rights reserved.</p>
          <div className="flex items-center gap-2 font-mono">
            <span>Built with MERN Stack (MongoDB • Express • React 19 • Node.js)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
