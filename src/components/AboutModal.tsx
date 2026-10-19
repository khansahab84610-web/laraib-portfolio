import React, { useEffect } from "react";
import { X, MapPin, Sparkles, Compass, Layers, HeartHandshake, ArrowRight } from "lucide-react";
import { siteConfig } from "../data/siteConfig";

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onContactClick: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({
  isOpen,
  onClose,
  onContactClick,
}) => {
  const { brand, images } = siteConfig;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-black/75 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="about-modal-title"
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-[24px] bg-[var(--bg-card)] border border-[var(--border-color)] shadow-2xl animate-in zoom-in-95 duration-200 p-6 sm:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[var(--bg-secondary)] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-main)] hover:bg-[var(--accent)] hover:text-white hover:border-[var(--accent)] transition-colors cursor-pointer"
          aria-label="Close about modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header with mini portrait */}
        <div className="flex items-center gap-5 pb-6 border-b border-[var(--border-color)]">
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-[var(--border-color)] shadow-md shrink-0 bg-[var(--bg-secondary)]">
            <img
              src={images.portrait}
              alt={brand.designerName}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <span className="text-[11px] font-semibold tracking-widest uppercase text-[var(--accent)]">
              {brand.eyebrow}
            </span>
            <h2
              id="about-modal-title"
              className="font-heading text-[24px] sm:text-[28px] font-semibold text-[var(--text-main)]"
            >
              {brand.designerName}
            </h2>
            <div className="flex items-center gap-1.5 text-[13px] text-[var(--text-secondary)] mt-0.5">
              <MapPin className="w-3.5 h-3.5 text-[var(--accent)]" />
              <span>{brand.location}</span>
            </div>
          </div>
        </div>

        {/* Narrative */}
        <div className="py-6 space-y-4 text-[14px] sm:text-[15px] text-[var(--text-secondary)] leading-relaxed">
          {brand.aboutParagraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        {/* Core Principles */}
        <div className="pt-4 pb-6 border-t border-[var(--border-color)]">
          <h3 className="font-heading text-[15px] font-semibold text-[var(--text-main)] mb-4 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[var(--accent)]" />
            Studio Working Principles
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3.5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)]">
              <Compass className="w-4 h-4 text-[var(--accent)] mb-1.5" />
              <div className="text-[13px] font-semibold text-[var(--text-main)]">Strategic Intent</div>
              <p className="text-[11px] text-[var(--text-secondary)] mt-1">Design & code driven by purpose and ROI, not fleeting trends.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)]">
              <Layers className="w-4 h-4 text-[var(--accent)] mb-1.5" />
              <div className="text-[13px] font-semibold text-[var(--text-main)]">Execution Rigor</div>
              <p className="text-[11px] text-[var(--text-secondary)] mt-1">Obsessive care for conversion funnels, code speed, and visual impact.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)]">
              <HeartHandshake className="w-4 h-4 text-[var(--accent)] mb-1.5" />
              <div className="text-[13px] font-semibold text-[var(--text-main)]">Direct Partnership</div>
              <p className="text-[11px] text-[var(--text-secondary)] mt-1">You work directly with {brand.designerName} — no agency middlemen.</p>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-6 border-t border-[var(--border-color)] flex items-center justify-between">
          <span className="text-[12px] text-[var(--text-muted)]">
            Verified Digital Professional • Worldwide Remote
          </span>
          <button
            type="button"
            onClick={() => {
              onClose();
              onContactClick();
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-medium text-white bg-[var(--accent)] hover:bg-[var(--accent-hover)] transition-colors cursor-pointer shadow-xs"
          >
            <span>Let's collaborate</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
