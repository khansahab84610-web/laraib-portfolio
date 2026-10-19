import React from "react";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { siteConfig } from "../data/siteConfig";

export const SiteFooter: React.FC = () => {
  const { brand, contact } = siteConfig;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[var(--bg-primary)] border-t border-[var(--border-color)] py-12 sm:py-16 transition-colors duration-300">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Top Row: Wordmark, Tagline & Back-to-Top */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-10 border-b border-[var(--border-color)]">
          <div>
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="group inline-flex items-center font-heading text-[22px] font-semibold tracking-tight text-[var(--text-main)]"
              aria-label="Laraib Studio"
            >
              <span>{brand.wordmark.replace(".", "")}</span>
              <span className="text-[var(--accent)]">.</span>
            </a>
            <p className="text-[13px] text-[var(--text-secondary)] mt-1">
              Website Developer • Amazon VA • Graphic Designer • Paid Ads
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-[13px] font-medium text-[var(--text-secondary)]">
            {contact.socials.map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noreferrer noopener"
                className="hover:text-[var(--accent)] transition-colors inline-flex items-center gap-1 group"
              >
                <span>{social.name}</span>
                <ArrowUpRight className="w-3 h-3 text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors" />
              </a>
            ))}
          </div>

          {/* Back to top button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--accent)] text-[12px] font-medium text-[var(--text-main)] transition-all cursor-pointer shadow-2xs"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[var(--accent)] transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Bottom Row: Copyright & Legal/Demo Note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-[var(--text-muted)]">
          <p>© {currentYear} {brand.brandName}. All rights reserved.</p>
          <p className="text-center sm:text-right">
            Engineered with modern web standards, performance optimization & intentional design.
          </p>
        </div>
      </div>
    </footer>
  );
};
