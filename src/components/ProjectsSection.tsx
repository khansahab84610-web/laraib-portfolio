import React, { useState } from "react";
import { siteConfig, ProjectItem } from "../data/siteConfig";
import { ProjectCard } from "./ProjectCard";
import { ProjectDetailDialog } from "./ProjectDetailDialog";

interface ProjectsSectionProps {
  onInquireWithProject: (projectName: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onInquireWithProject,
}) => {
  const { projects } = siteConfig;
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 sm:py-28 lg:py-32 bg-[var(--bg-secondary)]/50 border-t border-[var(--border-color)] relative transition-colors duration-300">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Introduction */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-[560px]">
            {/* Small coral eyebrow */}
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
              <span className="text-[11px] sm:text-[12px] font-semibold tracking-[0.16em] uppercase text-[var(--accent)]">
                Selected Work & Case Studies
              </span>
            </div>

            {/* Large editorial heading */}
            <h2 className="font-heading text-[32px] sm:text-[40px] lg:text-[44px] leading-[1.08] font-medium tracking-tight text-[var(--text-main)]">
              Real digital solutions that generate real business growth.
            </h2>
          </div>

          {/* Right Action: Filter / View All */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-[12px] font-medium transition-all cursor-pointer ${
                  activeFilter === cat
                    ? "bg-[var(--accent)] text-white shadow-xs"
                    : "bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--text-main)]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid: 2-column or 4-column */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-7">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

        {/* Interactive Case Study Modal */}
        <ProjectDetailDialog
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onInquire={onInquireWithProject}
        />
      </div>
    </section>
  );
};
