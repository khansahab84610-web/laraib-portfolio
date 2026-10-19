import React from "react";
import { ArrowUpRight } from "lucide-react";
import { ProjectItem } from "../data/siteConfig";

interface ProjectCardProps {
  project: ProjectItem;
  onSelect: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  return (
    <article
      onClick={() => onSelect(project)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect(project);
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`View case study: ${project.title} - ${project.category}`}
      className="group flex flex-col rounded-[20px] bg-[var(--bg-card)] border border-[var(--border-color)] overflow-hidden soft-shadow card-lift cursor-pointer focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:outline-none transition-all duration-300"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[var(--bg-secondary)]">
        <img
          src={project.imageUrl}
          alt={project.altText}
          referrerPolicy="no-referrer"
          loading="lazy"
          className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.035]"
        />

        {/* Category Badge Overlaid Top-Right */}
        <div className="absolute top-3.5 right-3.5">
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-medium tracking-wide text-[var(--text-main)] bg-[var(--bg-card)]/90 backdrop-blur-md border border-[var(--border-color)] shadow-xs">
            {project.category}
          </span>
        </div>
      </div>

      {/* Info Panel Below Image */}
      <div className="p-4 sm:p-5 flex items-center justify-between gap-3 bg-[var(--bg-card)]">
        <div>
          <h3 className="font-heading text-[15px] sm:text-[16px] font-semibold text-[var(--text-main)] group-hover:text-[var(--accent)] transition-colors">
            {project.title}
          </h3>
          <p className="text-[12px] sm:text-[13px] text-[var(--text-secondary)] mt-0.5">
            {project.description}
          </p>
        </div>

        {/* Circular Arrow Button */}
        <div
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)] group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)] transition-all duration-200 flex items-center justify-center shrink-0 shadow-2xs"
          aria-hidden="true"
        >
          <ArrowUpRight className="w-4 h-4 text-[var(--text-main)] group-hover:text-white transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </article>
  );
};
