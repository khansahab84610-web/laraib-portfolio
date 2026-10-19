import React, { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { siteConfig } from "../data/siteConfig";
import { ThemeToggle } from "./ThemeToggle";

interface SiteHeaderProps {
  onOpenAbout: () => void;
}

export const SiteHeader: React.FC<SiteHeaderProps> = ({ onOpenAbout }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[var(--bg-primary)]/85 backdrop-blur-md border-b border-[var(--border-color)] py-3.5 shadow-sm"
          : "bg-transparent py-5 sm:py-6"
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Left: Brand Wordmark */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="group flex items-center font-heading text-[21px] font-semibold tracking-tight text-[var(--text-main)]"
          aria-label={`${siteConfig.brand.brandName} - Home`}
        >
          <span>{siteConfig.brand.wordmark.replace(".", "")}</span>
          <span className="text-[var(--accent)] inline-block transition-transform group-hover:scale-125">
            .
          </span>
        </a>

        {/* Center: Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-7 lg:gap-8 text-[13px] font-medium text-[var(--text-secondary)]"
          aria-label="Main Navigation"
        >
          <button
            onClick={() => scrollToSection("skills")}
            className="hover:text-[var(--text-main)] transition-colors cursor-pointer"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="hover:text-[var(--text-main)] transition-colors cursor-pointer"
          >
            Work
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="hover:text-[var(--text-main)] transition-colors cursor-pointer"
          >
            Services
          </button>
          <button
            onClick={onOpenAbout}
            className="hover:text-[var(--text-main)] transition-colors cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="hover:text-[var(--text-main)] transition-colors cursor-pointer"
          >
            Contact
          </button>
        </nav>

        {/* Right: Theme Switcher & CTA Pill */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Quick 1-click Theme Toggle */}
          <ThemeToggle />

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
            className="group hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-[13px] font-medium text-[var(--text-main)] bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--accent)] hover:bg-[var(--accent-subtle)] transition-all shadow-xs"
          >
            <span>Let's talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[var(--accent)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          {/* Mobile hamburger toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[var(--text-main)] hover:bg-[var(--accent-subtle)] transition-colors cursor-pointer"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[var(--border-color)] bg-[var(--bg-primary)] px-6 py-6 shadow-lg animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-4 text-[16px] font-medium text-[var(--text-main)]">
            <button
              onClick={() => scrollToSection("skills")}
              className="text-left py-2 border-b border-[var(--border-color)] hover:text-[var(--accent)] transition-colors"
            >
              Core Skills
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-left py-2 border-b border-[var(--border-color)] hover:text-[var(--accent)] transition-colors"
            >
              Selected Work
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-left py-2 border-b border-[var(--border-color)] hover:text-[var(--accent)] transition-colors"
            >
              Services & Capabilities
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAbout();
              }}
              className="text-left py-2 border-b border-[var(--border-color)] hover:text-[var(--accent)] transition-colors"
            >
              About {siteConfig.brand.designerName}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-left py-2 border-b border-[var(--border-color)] hover:text-[var(--accent)] transition-colors"
            >
              Get in Touch
            </button>
          </nav>

          <div className="mt-6 pt-4">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-full text-[14px] font-medium text-white bg-[var(--accent)] hover:bg-[var(--accent-hover)] transition-colors shadow-sm"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
