import React from "react";
import { ArrowRight, User, Sparkles, ArrowUpRight } from "lucide-react";
import { siteConfig } from "../data/siteConfig";

interface HeroSectionProps {
  onOpenAbout: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenAbout }) => {
  const { brand, images } = siteConfig;

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28 hero-glow-bg overflow-hidden transition-colors duration-300">
      {/* Background ambient lighting orbs */}
      <div 
        className="pointer-events-none absolute top-1/4 right-[5%] w-[480px] h-[480px] rounded-full bg-[var(--accent)]/15 blur-[100px] -z-10"
        aria-hidden="true"
      />
      <div 
        className="pointer-events-none absolute bottom-10 left-[10%] w-[360px] h-[360px] rounded-full bg-[var(--accent-secondary)]/15 blur-[90px] -z-10"
        aria-hidden="true"
      />

      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column (52% on desktop -> col-span-7) */}
          <div className="lg:col-span-7 flex flex-col justify-center max-w-[620px]">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
              <span className="text-[11px] sm:text-[12px] font-semibold tracking-[0.16em] uppercase text-[var(--accent)]">
                {brand.eyebrow}
              </span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="font-heading text-[44px] sm:text-[58px] lg:text-[70px] leading-[1.02] font-medium tracking-[-0.045em] text-[var(--text-main)] mb-6">
              <span>{brand.headlineStart} </span>
              <br className="hidden sm:inline" />
              <span className="text-[var(--accent)] font-semibold">{brand.headlineAccent}</span>
            </h1>

            {/* Sub-titles */}
            <div className="flex flex-wrap items-center gap-2 text-[15px] sm:text-[16px] text-[var(--text-main)] font-medium mb-3">
              <span>{brand.title}</span>
              <span className="text-[var(--border-color)]">•</span>
              <span className="text-[var(--text-secondary)]">{brand.location}</span>
            </div>

            {/* Supporting paragraph */}
            <p className="text-[15px] sm:text-[16px] text-[var(--text-secondary)] leading-[1.7] max-w-[500px] mb-8 font-normal">
              {brand.supportingBio}
            </p>

            {/* Side-by-side CTA buttons */}
            <div className="flex flex-wrap items-center gap-3.5">
              {/* Primary CTA */}
              <button
                type="button"
                onClick={() => scrollToSection("projects")}
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:py-4 rounded-full text-[14px] font-medium text-white bg-[var(--accent)] hover:bg-[var(--accent-hover)] transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Explore my work</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              {/* Secondary CTA */}
              <button
                type="button"
                onClick={onOpenAbout}
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 rounded-full text-[14px] font-medium text-[var(--text-main)] bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--accent)] hover:bg-[var(--accent-subtle)] transition-all duration-200 cursor-pointer shadow-xs"
              >
                <User className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors" />
                <span>More about me</span>
              </button>
            </div>
          </div>

          {/* Right Column: Circular Portrait & Floating Availability Card (48% on desktop -> col-span-5) */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center relative">
            <div className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-square flex items-center justify-center">
              {/* Outer decorative subtle halo */}
              <div 
                className="absolute inset-[-14px] rounded-full border border-[var(--border-color)] opacity-80"
                aria-hidden="true"
              />
              <div 
                className="absolute inset-[-28px] rounded-full border border-[var(--border-subtle)] opacity-50"
                aria-hidden="true"
              />

              {/* Main Circular Portrait */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-[4px] border-[var(--border-color)] shadow-2xl bg-[var(--bg-card)]">
                <img
                  src={images.portrait}
                  alt={`${brand.designerName}, independent brand and digital designer`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center scale-[1.03] transition-transform duration-700 hover:scale-105"
                  loading="eager"
                  width={420}
                  height={420}
                />
              </div>

              {/* Floating Translucent Availability Card */}
              <div 
                className="absolute -bottom-6 right-0 sm:-right-4 lg:-right-6 w-[230px] sm:w-[250px] p-4 sm:p-5 rounded-[22px] bg-[var(--bg-card)]/95 backdrop-blur-md border border-[var(--border-color)] floating-card-shadow z-20 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Status indicator */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent)]"></span>
                  </span>
                  <span className="text-[10px] font-semibold tracking-wider uppercase text-[var(--accent)]">
                    {brand.availability.status}
                  </span>
                </div>

                {/* Supporting availability copy */}
                <p className="text-[12px] text-[var(--text-main)] font-medium leading-[1.4] mb-3">
                  {brand.availability.detail}
                </p>

                {/* Divider & Action */}
                <div className="pt-2.5 border-t border-[var(--border-color)] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => scrollToSection("contact")}
                    className="text-[11px] font-semibold text-[var(--accent)] hover:underline transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <span>{brand.availability.ctaText}</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </button>
                  <Sparkles className="w-3.5 h-3.5 text-[var(--accent)]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
