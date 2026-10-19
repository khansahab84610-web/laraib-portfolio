import React, { useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { SiteHeader } from "./components/SiteHeader";
import { HeroSection } from "./components/HeroSection";
import { CapabilitiesStrip } from "./components/CapabilitiesStrip";
import { SkillsSection } from "./components/SkillsSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ServicesSection } from "./components/ServicesSection";
import { TestimonialSection } from "./components/TestimonialSection";
import { ContactSection } from "./components/ContactSection";
import { SiteFooter } from "./components/SiteFooter";
import { AboutModal } from "./components/AboutModal";

function AppContent() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [projectInterest, setProjectInterest] = useState<string>("");

  const handleInquireWithProject = (projectName: string) => {
    setProjectInterest(projectName);
    const contactEl = document.getElementById("contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContactClickFromAbout = () => {
    setIsAboutOpen(false);
    const contactEl = document.getElementById("contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="top" className="min-h-screen flex flex-col bg-[var(--bg-primary)] text-[var(--text-main)] transition-colors duration-300">
      {/* Global Navigation Header */}
      <SiteHeader onOpenAbout={() => setIsAboutOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection onOpenAbout={() => setIsAboutOpen(true)} />

        {/* 2. Capabilities & Focus Strip */}
        <CapabilitiesStrip />

        {/* 3. Core Competencies & Skills Grid */}
        <SkillsSection />

        {/* 4. Selected Projects Portfolio */}
        <ProjectsSection onInquireWithProject={handleInquireWithProject} />

        {/* 5. Services & Approach */}
        <ServicesSection />

        {/* 6. Client Testimonial */}
        <TestimonialSection />

        {/* 7. Contact & Conversion */}
        <ContactSection initialProjectInterest={projectInterest} />
      </main>

      {/* Global Footer */}
      <SiteFooter />

      {/* About Modal */}
      <AboutModal
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
        onContactClick={handleContactClickFromAbout}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
