import React, { useEffect } from "react";
import { X, Check, ArrowRight, Sparkles } from "lucide-react";
import { ProjectItem } from "../data/siteConfig";

interface ProjectDetailDialogProps {
  project: ProjectItem | null;
  onClose: () => void;
  onInquire: (projectName: string) => void;
}

export const ProjectDetailDialog: React.FC<ProjectDetailDialogProps> = ({
  project,
  onClose,
  onInquire,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-black/75 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-dialog-title"
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-[24px] bg-[var(--bg-card)] border border-[var(--border-color)] shadow-2xl animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Floating Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-[var(--bg-card)]/90 border border-[var(--border-color)] flex items-center justify-center text-[var(--text-main)] hover:bg-[var(--accent)] hover:text-white hover:border-[var(--accent)] transition-all cursor-pointer shadow-sm"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-[var(--bg-secondary)] rounded-t-[24px]">
          <img
            src={project.imageUrl}
            alt={project.altText}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute bottom-4 left-4">
            <span className="px-3.5 py-1.5 rounded-full text-[12px] font-medium bg-[var(--bg-card)]/95 text-[var(--text-main)] border border-[var(--border-color)] shadow-sm">
              {project.category}
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 lg:p-10">
          {/* Header Row */}
          <div className="border-b border-[var(--border-color)] pb-6 mb-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-[12px] font-mono uppercase tracking-wider text-[var(--accent)]">
                  Case Study • {project.year}
                </span>
                <h2
                  id="project-dialog-title"
                  className="font-heading text-[28px] sm:text-[34px] font-semibold text-[var(--text-main)] mt-1"
                >
                  {project.title}
                </h2>
                <p className="text-[15px] text-[var(--text-secondary)] mt-1">
                  {project.description}
                </p>
              </div>

              {project.metrics && (
                <div className="px-4 py-2.5 rounded-xl bg-[var(--accent-subtle)] border border-[var(--accent)]/30 max-w-[280px]">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--text-secondary)] block">
                    Key Result
                  </span>
                  <span className="text-[13px] font-medium text-[var(--accent)]">
                    {project.metrics}
                  </span>
                </div>
              )}
            </div>

            {/* Client info bar */}
            <div className="mt-4 pt-4 border-t border-[var(--border-color)]/60 flex flex-wrap gap-y-2 gap-x-6 text-[13px] text-[var(--text-secondary)]">
              <div>
                <span className="font-semibold text-[var(--text-main)]">Client Focus:</span>{" "}
                {project.clientType}
              </div>
              <div>
                <span className="font-semibold text-[var(--text-main)]">Studio Role:</span>{" "}
                Lead Developer & Strategist
              </div>
            </div>
          </div>

          {/* Case Narrative Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="font-heading text-[16px] font-semibold text-[var(--text-main)] mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                Project Overview
              </h3>
              <p className="text-[14px] text-[var(--text-secondary)] leading-relaxed">
                {project.overview}
              </p>

              <h3 className="font-heading text-[16px] font-semibold text-[var(--text-main)] mt-6 mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                Design & Tech Objectives
              </h3>
              <p className="text-[14px] text-[var(--text-secondary)] leading-relaxed">
                {project.objectives}
              </p>
            </div>

            <div>
              <h3 className="font-heading text-[16px] font-semibold text-[var(--text-main)] mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                Strategic Approach
              </h3>
              <p className="text-[14px] text-[var(--text-secondary)] leading-relaxed mb-6">
                {project.approach}
              </p>

              <h3 className="font-heading text-[16px] font-semibold text-[var(--text-main)] mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[var(--accent)]" />
                Key Deliverables
              </h3>
              <ul className="space-y-2 text-[13px] text-[var(--text-secondary)]">
                {project.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-4 h-4 rounded-full bg-[var(--accent-subtle)] text-[var(--accent)] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tools & CTA Footer */}
          <div className="pt-6 border-t border-[var(--border-color)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-1.5 text-[12px] text-[var(--text-secondary)]">
              <span className="font-medium text-[var(--text-main)]">Tools:</span>
              {project.toolsUsed.map((tool, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-main)] text-[11px]"
                >
                  {tool}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => {
                  onInquire(project.title);
                  onClose();
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-[13px] font-medium text-white bg-[var(--accent)] hover:bg-[var(--accent-hover)] transition-colors cursor-pointer shadow-sm"
              >
                <span>Inquire about a similar project</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
