"use client";

import React, { useState } from "react";
import { ArrowUpRight, ChevronDown, ChevronUp, Puzzle } from "lucide-react";
import { clientProjectsData, personalProjectsData } from "@/data/portfolioData";
import { sectionFlags } from "@/data/config";
import { ProjectItem } from "@/types/portfolio";

export function ProjectsSection() {
  const [showAllClients, setShowAllClients] = useState(false);
  const [showAllPersonal, setShowAllPersonal] = useState(false);

  const displayedClients = showAllClients ? clientProjectsData : clientProjectsData.slice(0, 3);
  const displayedPersonal = showAllPersonal ? personalProjectsData : personalProjectsData.slice(0, 3);

  const renderProjectRow = (project: ProjectItem) => (
    <a
      key={project.id}
      href={project.link || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="project-row flex items-center justify-between gap-3 p-3 rounded-2xl cursor-pointer group"
    >
      <div className="flex items-center gap-3 min-w-0 flex-1">
        <div
          className="h-10 w-10 sm:h-11 sm:w-11 rounded-xl flex-shrink-0 flex items-center justify-center text-lg border shadow-xs transition group-hover:scale-105"
          style={{ background: "var(--sidebar-bg)", borderColor: "var(--border)" }}
        >
          {project.emojiIcon === "🧩" || project.emojiIcon === "puzzle" ? (
            <Puzzle className="w-5 h-5 text-blue-500" />
          ) : (
            project.emojiIcon || "💻"
          )}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <span className="font-bold text-xs sm:text-sm" style={{ color: "var(--ink)" }}>
              {project.title}
            </span>
            {project.featured && (
              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded-md bg-blue-500/10 text-blue-500 border border-blue-500/20 font-semibold">
                Featured
              </span>
            )}
          </div>
          <p className="text-[11px] sm:text-xs leading-relaxed mt-0.5" style={{ color: "var(--ink-muted)" }}>
            {project.description}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 flex-shrink-0 self-center">
        <span
          className="text-[11px] px-2.5 py-0.5 rounded-full border hidden sm:inline-block font-medium"
          style={{ borderColor: "var(--border)", color: "var(--ink-faint)" }}
        >
          {project.tag}
        </span>
        <ArrowUpRight className="w-4 h-4 text-blue-500 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
      </div>
    </a>
  );

  return (
    <div id="projects" className="space-y-10">
      
      {/* Client Projects Section (Gated by sectionFlags.clientProjects) */}
      {sectionFlags.clientProjects && (
        <section className="space-y-4 pt-2">
          <div className="flex items-center justify-between border-b pb-2" style={{ borderColor: "var(--border)" }}>
            <div className="flex items-center gap-2">
              <h2 className="text-sm font-bold tracking-wider uppercase" style={{ color: "var(--ink)" }}>
                Client Projects
              </h2>
              <span
                className="text-xs font-mono px-2 py-0.5 rounded-full border"
                style={{ borderColor: "var(--border)", color: "var(--ink-faint)" }}
              >
                {String(clientProjectsData.length).padStart(2, "0")}
              </span>
            </div>
            <span className="text-xs" style={{ color: "var(--ink-muted)" }}>
              Commercial systems & CRMs
            </span>
          </div>

          <div className="space-y-1.5">
            {displayedClients.map(renderProjectRow)}
          </div>

          {clientProjectsData.length > 3 && (
            <button
              onClick={() => setShowAllClients(!showAllClients)}
              className="w-full py-2 rounded-xl border text-xs font-semibold text-center transition hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer flex items-center justify-center gap-1.5"
              style={{ borderColor: "var(--border)", color: "var(--ink-muted)" }}
            >
              {showAllClients ? (
                <>
                  Show less <ChevronUp className="w-3.5 h-3.5" />
                </>
              ) : (
                <>
                  + {clientProjectsData.length - 3} more project{clientProjectsData.length - 3 > 1 ? "s" : ""}
                  <ChevronDown className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          )}
        </section>
      )}

      {/* Personal Projects Section */}
      <section className="space-y-4 pt-2">
        <div className="flex items-center justify-between border-b pb-2" style={{ borderColor: "var(--border)" }}>
          <div className="flex items-center gap-2">
            <h2 className="text-sm font-bold tracking-wider uppercase" style={{ color: "var(--ink)" }}>
              Personal Projects
            </h2>
            <span
              className="text-xs font-mono px-2 py-0.5 rounded-full border"
              style={{ borderColor: "var(--border)", color: "var(--ink-faint)" }}
            >
              {String(personalProjectsData.length).padStart(2, "0")}
            </span>
          </div>
          <span className="text-xs" style={{ color: "var(--ink-muted)" }}>
            Tools & Chrome Extensions
          </span>
        </div>

        <div className="space-y-1.5">
          {displayedPersonal.map(renderProjectRow)}
        </div>

        {personalProjectsData.length > 3 && (
          <button
            onClick={() => setShowAllPersonal(!showAllPersonal)}
            className="w-full py-2 rounded-xl border text-xs font-semibold text-center transition hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer flex items-center justify-center gap-1.5"
            style={{ borderColor: "var(--border)", color: "var(--ink-muted)" }}
          >
            {showAllPersonal ? (
              <>
                Show less <ChevronUp className="w-3.5 h-3.5" />
              </>
            ) : (
              <>
                + {personalProjectsData.length - 3} more <ChevronDown className="w-3.5 h-3.5" />
              </>
            )}
          </button>
        )}
      </section>

    </div>
  );
}
