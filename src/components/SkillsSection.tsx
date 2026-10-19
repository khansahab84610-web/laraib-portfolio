import React from "react";
import { Code, ShoppingBag, Palette, TrendingUp, CheckCircle, ArrowRight } from "lucide-react";
import { siteConfig } from "../data/siteConfig";

export const SkillsSection: React.FC = () => {
  const { skillCategories } = siteConfig;

  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Code className="w-5 h-5 text-[var(--accent)]" />;
      case 1:
        return <ShoppingBag className="w-5 h-5 text-[var(--accent)]" />;
      case 2:
        return <Palette className="w-5 h-5 text-[var(--accent)]" />;
      case 3:
      default:
        return <TrendingUp className="w-5 h-5 text-[var(--accent)]" />;
    }
  };

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="skills" className="py-20 sm:py-28 bg-[var(--bg-primary)] border-t border-[var(--border-color)] transition-colors duration-300">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-[560px]">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
              <span className="text-[11px] sm:text-[12px] font-semibold tracking-[0.16em] uppercase text-[var(--accent)]">
                Core Competencies & Skills
              </span>
            </div>
            <h2 className="font-heading text-[32px] sm:text-[42px] leading-[1.08] font-medium tracking-tight text-[var(--text-main)]">
              Four high-impact skillsets, <br />
              <span className="text-[var(--accent)]">one versatile digital partner.</span>
            </h2>
          </div>
          <p className="text-[14px] sm:text-[15px] text-[var(--text-secondary)] max-w-[420px] leading-relaxed">
            Eliminate the headache of managing separate freelancers. From custom code and Amazon FBA store growth to eye-catching graphics and profitable ads, I handle the full conversion journey.
          </p>
        </div>

        {/* 4 Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="group flex flex-col justify-between p-6 sm:p-7 rounded-[22px] bg-[var(--bg-card)] border border-[var(--border-color)] soft-shadow transition-all duration-300 hover:border-[var(--accent)] hover:-translate-y-1.5 hover:shadow-lg"
            >
              <div>
                {/* Header Icon + Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] flex items-center justify-center shadow-2xs group-hover:bg-[var(--accent)] group-hover:text-white transition-colors">
                    {getIcon(idx)}
                  </div>
                  <span className="text-[9px] font-mono font-semibold tracking-wider uppercase text-[var(--accent)] px-2.5 py-1 rounded-full bg-[var(--accent-subtle)] border border-[var(--border-color)]">
                    {category.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-heading text-[18px] font-semibold text-[var(--text-main)] mb-4">
                  {category.title}
                </h3>

                {/* Skills Bullet Checklist */}
                <ul className="space-y-2.5">
                  {category.skills.map((skill, sIdx) => (
                    <li
                      key={sIdx}
                      className="flex items-center gap-2 text-[13px] text-[var(--text-secondary)] group-hover:text-[var(--text-main)] transition-colors"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-[var(--accent)] shrink-0" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer Action */}
              <div className="mt-8 pt-4 border-t border-[var(--border-color)] flex items-center justify-between">
                <span className="text-[11px] font-medium text-[var(--text-muted)]">
                  Available for Hire
                </span>
                <button
                  type="button"
                  onClick={scrollToContact}
                  className="text-[12px] font-semibold text-[var(--accent)] group-hover:text-[var(--accent-hover)] inline-flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <span>Hire for this</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
