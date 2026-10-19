import React from "react";
import { ArrowRight, Check } from "lucide-react";
import { siteConfig } from "../data/siteConfig";

export const ServicesSection: React.FC = () => {
  const { services } = siteConfig;

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-[var(--bg-primary)] border-t border-[var(--border-color)] transition-colors duration-300">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-[520px]">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
              <span className="text-[11px] sm:text-[12px] font-semibold tracking-[0.16em] uppercase text-[var(--accent)]">
                Services & Approach
              </span>
            </div>
            <h2 className="font-heading text-[32px] sm:text-[40px] leading-[1.08] font-medium tracking-tight text-[var(--text-main)]">
              Full-spectrum execution that scales digital businesses.
            </h2>
          </div>
          <p className="text-[14px] sm:text-[15px] text-[var(--text-secondary)] max-w-[380px] leading-relaxed">
            Every engagement combines engineering rigor, commercial e-commerce strategy, and high-impact visual design to drive measurable revenue.
          </p>
        </div>

        {/* 4 Service Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between p-6 sm:p-7 rounded-[22px] bg-[var(--bg-card)] border border-[var(--border-color)] soft-shadow transition-all duration-300 hover:border-[var(--accent)] hover:-translate-y-1"
            >
              <div>
                <span className="text-[11px] font-mono tracking-wider text-[var(--accent)] font-medium block mb-3">
                  {service.eyebrow}
                </span>
                <h3 className="font-heading text-[18px] font-semibold text-[var(--text-main)] mb-3">
                  {service.title}
                </h3>
                <p className="text-[13px] text-[var(--text-secondary)] leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="pt-4 border-t border-[var(--border-color)]/70 space-y-2.5">
                  {service.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-[12px] sm:text-[13px] text-[var(--text-main)]">
                      <span className="w-3.5 h-3.5 rounded-full bg-[var(--accent-subtle)] text-[var(--accent)] flex items-center justify-center shrink-0">
                        <Check className="w-2 h-2" />
                      </span>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[var(--border-color)]/50">
                <button
                  type="button"
                  onClick={scrollToContact}
                  className="text-[12px] font-semibold text-[var(--text-main)] hover:text-[var(--accent)] inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Discuss this service</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[var(--accent)]" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
