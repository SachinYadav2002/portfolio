import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

function MainApp() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleOpenResume = () => {
    setIsResumeOpen(true);
  };

  const handleCloseResume = () => {
    setIsResumeOpen(false);
  };

  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-emerald-500/30 selection:text-emerald-500 dark:selection:text-emerald-300 transition-colors duration-200">
      {/* Navigation */}
      <Navbar
        onOpenResume={handleOpenResume}
        onOpenContact={handleScrollToContact}
      />

      {/* Main Content */}
      <main>
        <Hero
          onOpenResume={handleOpenResume}
          onExploreProjects={handleExploreProjects}
          onContactClick={handleScrollToContact}
        />

        <ProjectsSection />

        <ExperienceSection />

        <SkillsSection />

        <EducationSection />

        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenResume={handleOpenResume} />

      {/* Downloadable / Printable Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={handleCloseResume}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
}
