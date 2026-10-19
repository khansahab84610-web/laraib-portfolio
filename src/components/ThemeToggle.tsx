import React from "react";
import { Palette } from "lucide-react";
import { useTheme, ThemeType } from "../context/ThemeContext";

export const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const themes: { id: ThemeType; name: string; color: string }[] = [
    { id: "emerald", name: "Emerald Obsidian", color: "#10B981" },
    { id: "cobalt", name: "Electric Cobalt", color: "#2563EB" },
    { id: "amber", name: "Warm Amber", color: "#F59E0B" },
  ];

  return (
    <div className="flex items-center gap-1.5 p-1 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] shadow-2xs">
      {themes.map((t) => (
        <button
          key={t.id}
          type="button"
          onClick={() => setTheme(t.id)}
          className={`relative flex items-center justify-center w-6 h-6 rounded-full transition-all cursor-pointer ${
            theme === t.id
              ? "scale-110 ring-2 ring-[var(--accent)] shadow-xs"
              : "opacity-60 hover:opacity-100 hover:scale-105"
          }`}
          title={`Switch to ${t.name}`}
          aria-label={`Switch to ${t.name}`}
        >
          <span
            className="w-3.5 h-3.5 rounded-full"
            style={{ backgroundColor: t.color }}
          />
        </button>
      ))}
    </div>
  );
};
