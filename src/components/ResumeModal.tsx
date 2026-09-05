import React, { useState } from 'react';
import { X, Download, Printer, Copy, Check, ExternalLink, MapPin, Mail, Phone, Linkedin, Github, Globe } from 'lucide-react';
import { PERSONAL_INFO, WORK_EXPERIENCE, EDUCATION, SKILL_CATEGORIES, LANGUAGES, INTERESTS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopy = () => {
    const textResume = `SACHIN YADAV
FULL STACK DEVELOPER
Surat, Gujarat, India • +91 7822900241 • yadavsachin7249407392@gmail.com
LinkedIn: linkedin.com/in/sachin-yadav-20a79b231 • GitHub: github.com/SachinYadav2002 • Portfolio: portfolio-six-phi-joylbsgqdg.vercel.app

PROFESSIONAL SUMMARY
Results-driven Full Stack Developer with expertise in building scalable, high-performance web applications using React.js, Next.js, TypeScript, Node.js, Express.js, and MongoDB. Proven track record in transforming Figma UI/UX designs into modular components, engineering RESTful APIs, and optimizing web performance. Skilled in clean code principles, state management, and modern responsive design.

TECHNICAL SKILLS
Frontend: React.js, Next.js, TypeScript, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, SCSS
Backend: Node.js, Express.js, RESTful APIs, Microservices Architecture
Databases: MongoDB, MySQL
Tools & Methods: Git, GitHub, Figma, Webpack, Performance Optimization, Agile/Scrum Methodologies

WORK EXPERIENCE
Front End Developer (02/2025 – 08/2026)
Suvya Web - Surat, Gujarat
• Engineered responsive, cross-browser web interfaces using React.js and Next.js, delivering smooth user experiences across mobile and desktop devices.
• Translated Figma/UI mockups into high-quality, reusable components leveraging Tailwind CSS, SCSS, and semantic HTML5.
• Developed and integrated RESTful APIs using Express.js and MongoDB, streamlining client-server data flow and system responsiveness.
• Optimized frontend performance through lazy loading, code splitting, and bundle size reduction, cutting initial load times by 30%.
• Collaborated with cross-functional design and engineering teams to ensure UI consistency, strict accessibility, and feature alignment.
• Utilized Git and GitHub for version control, conducting peer code reviews and managing structured workflow branching strategies.

KEY PROJECTS
Electro – E-Commerce Platform (Next.js | TypeScript | Tailwind CSS)
• Architected a modern e-commerce application using Next.js server-side rendering for optimal page speed and SEO ranking.
• Implemented strict TypeScript typing across all components, reducing production defects and improving code maintainability.
• Designed fully adaptive layout components for seamlessly consistent user experiences across mobile, tablet, and desktop screens.

Headphone Showcase Application (React.js | CSS3)
• Developed an interactive React.js application featuring dynamic state management, smooth transition animations, and modern UI elements.

EDUCATION
BCA (Bachelor of Computer Applications) - Completed: 02/2024
C D Jain College of Commerce - Shrirampur, Maharashtra
TY BCA: 9.04 CGPA | SY BCA: 8.86 CGPA | FY BCA: 8.33 CGPA

LANGUAGES & INTERESTS
Languages: English (Professional) | Hindi (Native / Full Professional) | Marathi (Working Proficiency)
Interests: Exploring Modern Web Frameworks, Technical Reading, Kabaddi`;

    navigator.clipboard.writeText(textResume);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-sm overflow-y-auto">
      <div 
        id="resume-modal-container"
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-xl shadow-2xl overflow-hidden flex flex-col my-auto max-h-[92vh]"
      >
        {/* Modal Action Header */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-slate-950 border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
            <span className="text-xs sm:text-sm font-semibold text-slate-200">
              Resume – Sachin Yadav
            </span>
            <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono bg-emerald-950 text-emerald-400 border border-emerald-800 rounded">
              Verified PDF Match
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="resume-copy-btn"
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors cursor-pointer"
              title="Copy text version"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copied ? 'Copied!' : 'Copy'}</span>
            </button>

            <button
              id="resume-print-btn"
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors cursor-pointer"
              title="Print / Save PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / PDF</span>
            </button>

            <a
              id="resume-download-btn"
              href="/api/resume/download"
              download="Sachin_Yadav_Full_Stack_Resume.txt"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 shadow-sm transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download File</span>
            </a>

            <button
              id="resume-close-btn"
              onClick={onClose}
              className="p-1.5 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors ml-1 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable/Viewable Resume Sheet */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-white text-slate-900 text-sm leading-relaxed selection:bg-emerald-200">
          {/* Header */}
          <div className="text-center border-b-2 border-slate-900 pb-4 mb-4">
            <h1 className="text-2xl sm:text-3xl font-black tracking-wider text-slate-900 uppercase mb-1">
              SACHIN YADAV
            </h1>
            <p className="text-sm sm:text-base font-bold tracking-widest text-slate-700 uppercase mb-3">
              FULL STACK DEVELOPER
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-1 text-xs text-slate-700 font-medium">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-slate-600" /> {PERSONAL_INFO.location}
              </span>
              <span>•</span>
              <a href={`tel:${PERSONAL_INFO.phone}`} className="flex items-center gap-1 hover:underline">
                <Phone className="w-3 h-3 text-slate-600" /> {PERSONAL_INFO.phone}
              </a>
              <span>•</span>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-1 hover:underline font-semibold">
                <Mail className="w-3 h-3 text-slate-600" /> {PERSONAL_INFO.email}
              </a>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-1 text-xs text-blue-700 font-medium mt-1.5">
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:underline">
                <Linkedin className="w-3 h-3" /> linkedin.com/in/sachin-yadav-20a79b231
              </a>
              <span>•</span>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:underline">
                <Github className="w-3 h-3" /> github.com/SachinYadav2002
              </a>
              <span>•</span>
              <a href={PERSONAL_INFO.portfolioUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:underline">
                <Globe className="w-3 h-3" /> portfolio-six-phi-joylbsgqdg.vercel.app
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mb-4">
            <h2 className="text-xs font-extrabold tracking-wider uppercase text-slate-900 border-b border-slate-300 pb-0.5 mb-1.5">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-xs sm:text-[13px] text-slate-800 text-justify leading-relaxed">
              {PERSONAL_INFO.summary}
            </p>
          </div>

          {/* Technical Skills */}
          <div className="mb-4">
            <h2 className="text-xs font-extrabold tracking-wider uppercase text-slate-900 border-b border-slate-300 pb-0.5 mb-1.5">
              TECHNICAL SKILLS
            </h2>
            <div className="space-y-1 text-xs sm:text-[13px] text-slate-800">
              <p>
                <strong className="font-bold text-slate-900">Frontend:</strong> React.js, Next.js, TypeScript, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, SCSS
              </p>
              <p>
                <strong className="font-bold text-slate-900">Backend:</strong> Node.js, Express.js, RESTful APIs, Microservices Architecture
              </p>
              <p>
                <strong className="font-bold text-slate-900">Databases:</strong> MongoDB, MySQL
              </p>
              <p>
                <strong className="font-bold text-slate-900">Tools & Methods:</strong> Git, GitHub, Figma, Webpack, Performance Optimization, Agile/Scrum Methodologies
              </p>
            </div>
          </div>

          {/* Work Experience */}
          <div className="mb-4">
            <h2 className="text-xs font-extrabold tracking-wider uppercase text-slate-900 border-b border-slate-300 pb-0.5 mb-1.5">
              WORK EXPERIENCE
            </h2>
            {WORK_EXPERIENCE.map((exp, idx) => (
              <div key={idx} className="mb-3">
                <div className="flex justify-between items-baseline font-bold text-xs sm:text-sm text-slate-900">
                  <span>{exp.role}</span>
                  <span className="text-slate-600 font-semibold text-xs">{exp.period}</span>
                </div>
                <div className="flex justify-between items-baseline text-xs text-slate-700 italic mb-1.5">
                  <span className="font-semibold text-slate-800">{exp.company}</span>
                  <span>{exp.location}</span>
                </div>
                <ul className="list-disc list-outside pl-4 space-y-1 text-xs sm:text-[12.5px] text-slate-800">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx}>{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Key Projects */}
          <div className="mb-4">
            <h2 className="text-xs font-extrabold tracking-wider uppercase text-slate-900 border-b border-slate-300 pb-0.5 mb-1.5">
              KEY PROJECTS
            </h2>
            
            {/* Project 1 */}
            <div className="mb-3">
              <div className="flex justify-between items-baseline font-bold text-xs sm:text-sm text-slate-900">
                <span>Electro – E-Commerce Platform</span>
                <span className="text-slate-600 font-semibold text-xs">Next.js | TypeScript | Tailwind CSS</span>
              </div>
              <ul className="list-disc list-outside pl-4 space-y-0.5 text-xs sm:text-[12.5px] text-slate-800 mt-1">
                <li>Architected a modern e-commerce application using Next.js server-side rendering for optimal page speed and SEO ranking.</li>
                <li>Implemented strict TypeScript typing across all components, reducing production defects and improving code maintainability.</li>
                <li>Designed fully adaptive layout components for seamlessly consistent user experiences across mobile, tablet, and desktop screens.</li>
              </ul>
            </div>

            {/* Project 2 */}
            <div className="mb-2">
              <div className="flex justify-between items-baseline font-bold text-xs sm:text-sm text-slate-900">
                <span>Headphone Showcase Application</span>
                <span className="text-slate-600 font-semibold text-xs">React.js | CSS3</span>
              </div>
              <ul className="list-disc list-outside pl-4 space-y-0.5 text-xs sm:text-[12.5px] text-slate-800 mt-1">
                <li>Developed an interactive React.js application featuring dynamic state management, smooth transition animations, and modern UI elements.</li>
              </ul>
            </div>
          </div>

          {/* Education */}
          <div className="mb-4">
            <h2 className="text-xs font-extrabold tracking-wider uppercase text-slate-900 border-b border-slate-300 pb-0.5 mb-1.5">
              EDUCATION
            </h2>
            <div className="flex justify-between items-baseline font-bold text-xs sm:text-sm text-slate-900">
              <span>{EDUCATION.degree}</span>
              <span className="text-slate-600 font-semibold text-xs">{EDUCATION.completion}</span>
            </div>
            <div className="text-xs text-slate-700 italic mb-1">
              <span>{EDUCATION.college} • {EDUCATION.location}</span>
            </div>
            <p className="text-xs text-slate-800 font-medium">
              Academic Performance: <span className="font-bold text-slate-950">TY BCA: 9.04 CGPA</span> | SY BCA: 8.86 CGPA | FY BCA: 8.33 CGPA
            </p>
          </div>

          {/* Languages & Interests */}
          <div>
            <h2 className="text-xs font-extrabold tracking-wider uppercase text-slate-900 border-b border-slate-300 pb-0.5 mb-1.5">
              LANGUAGES & INTERESTS
            </h2>
            <div className="space-y-1 text-xs text-slate-800">
              <p>
                <strong className="font-bold text-slate-900">Languages:</strong> {LANGUAGES.map(l => `${l.name} (${l.level})`).join(' | ')}
              </p>
              <p>
                <strong className="font-bold text-slate-900">Interests:</strong> {INTERESTS.join(', ')}
              </p>
            </div>
          </div>
        </div>

        {/* Footer info in modal */}
        <div className="px-6 py-3 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2 shrink-0">
          <span>Official resume of Sachin Yadav, updated for 2025–2026.</span>
          <div className="flex items-center gap-3">
            <a 
              href="/api/resume/download" 
              download="Sachin_Yadav_Full_Stack_Resume.txt"
              className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1"
            >
              <Download className="w-3.5 h-3.5" /> Download Direct File
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
