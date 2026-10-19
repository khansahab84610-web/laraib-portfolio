import React from "react";
import { siteConfig } from "../data/siteConfig";

export const CapabilitiesStrip: React.FC = () => {
  const { capabilities } = siteConfig;

  return (
    <div className="border-y border-[var(--border-color)] bg-[var(--bg-secondary)]/70 py-5 sm:py-6 transition-colors duration-300">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-8">
          {/* Eyebrow Label */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
            <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[var(--accent)]">
              Built with purpose
            </span>
          </div>

          {/* Capabilities items */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:items-center md:justify-between w-full gap-3 sm:gap-6">
            {capabilities.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 text-[13px] sm:text-[14px] font-medium text-[var(--text-secondary)] hover:text-[var(--text-main)] transition-colors"
              >
                <span className="text-[var(--accent)] text-[10px] font-mono">0{idx + 1}.</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
