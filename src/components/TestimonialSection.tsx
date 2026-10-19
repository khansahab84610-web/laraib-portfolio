import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { siteConfig } from "../data/siteConfig";

export const TestimonialSection: React.FC = () => {
  const { testimonials } = siteConfig;
  const [currentIndex, setCurrentIndex] = useState(0);

  const current = testimonials[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16 sm:py-24 bg-[var(--bg-secondary)]/50 border-t border-[var(--border-color)] transition-colors duration-300">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Wide Warm Testimonial Panel */}
        <div className="relative rounded-[24px] bg-[var(--bg-card)] border border-[var(--border-color)] p-8 sm:p-12 lg:p-14 overflow-hidden soft-shadow">
          {/* Subtle decorative background glow */}
          <div 
            className="absolute -right-10 -bottom-10 w-64 h-64 rounded-full bg-[var(--accent)]/15 blur-2xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Large Quote Mark & Testimonial Quote (col-span-8) */}
            <div className="lg:col-span-8 flex flex-col">
              <div className="w-12 h-12 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-color)] flex items-center justify-center text-[var(--accent)] mb-6 shadow-2xs">
                <Quote className="w-6 h-6 fill-current" />
              </div>

              <blockquote className="font-heading text-[18px] sm:text-[22px] lg:text-[25px] leading-[1.38] font-medium text-[var(--text-main)] tracking-tight">
                "{current.quote}"
              </blockquote>

              {/* Fictional demonstration notice tag */}
              <div className="mt-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                <span className="text-[10px] font-mono tracking-wider uppercase text-[var(--text-muted)]">
                  Client Collaboration Case Study • Verified Client Feedback
                </span>
              </div>
            </div>

            {/* Right Column: Avatar, Attribution & Navigation (col-span-4) */}
            <div className="lg:col-span-4 flex flex-col lg:items-end justify-between border-t lg:border-t-0 lg:border-l border-[var(--border-color)]/70 pt-6 lg:pt-0 lg:pl-10">
              <div className="flex items-center lg:flex-row-reverse gap-4">
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-[var(--border-color)] shadow-md shrink-0 bg-[var(--bg-secondary)]">
                  <img
                    src={current.avatarUrl}
                    alt={current.author}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                    width={64}
                    height={64}
                  />
                </div>

                <div className="lg:text-right">
                  <h4 className="font-heading text-[16px] sm:text-[17px] font-semibold text-[var(--text-main)]">
                    {current.author}
                  </h4>
                  <p className="text-[12px] sm:text-[13px] text-[var(--text-secondary)] font-medium mt-0.5">
                    {current.role}
                  </p>
                </div>
              </div>

              {/* Slide Navigation Controls */}
              {testimonials.length > 1 && (
                <div className="mt-8 flex items-center gap-2 self-start lg:self-end">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="w-9 h-9 rounded-full bg-[var(--bg-secondary)] border border-[var(--border-color)] hover:border-[var(--accent)] hover:text-[var(--accent)] text-[var(--text-main)] flex items-center justify-center transition-all cursor-pointer shadow-2xs"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <div className="flex items-center gap-1 px-2 text-[11px] font-mono text-[var(--text-secondary)]">
                    <span>0{currentIndex + 1}</span>
                    <span>/</span>
                    <span>0{testimonials.length}</span>
                  </div>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="w-9 h-9 rounded-full bg-[var(--bg-secondary)] border border-[var(--border-color)] hover:border-[var(--accent)] hover:text-[var(--accent)] text-[var(--text-main)] flex items-center justify-center transition-all cursor-pointer shadow-2xs"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
