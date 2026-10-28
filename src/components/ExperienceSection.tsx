"use client";

import React from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { experienceData, profileData } from "@/data/portfolioData";

interface ExperienceSectionProps {
  onOpenContact: () => void;
}

export function ExperienceSection({ onOpenContact }: ExperienceSectionProps) {
  return (
    <section id="experience" className="space-y-4 pt-2">
      <div className="flex flex-wrap items-center justify-between border-b pb-2 gap-2" style={{ borderColor: "var(--border)" }}>
        <h2 className="text-sm font-bold tracking-wider uppercase" style={{ color: "var(--ink)" }}>
          Experience
        </h2>
        
        <div className="flex items-center gap-2.5">
          {profileData.isOpenToWork && (
            <span
              className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border"
              style={{
                borderColor: "rgba(16,185,129,0.3)",
                background: "rgba(16,185,129,0.08)",
                color: "var(--emerald)",
              }}
            >
              <span className="h-1.5 w-1.5 rounded-full animate-ping" style={{ background: "var(--emerald)" }}></span>
              Open to new work
            </span>
          )}
          <button
            onClick={onOpenContact}
            className="text-xs font-semibold text-blue-500 hover:underline flex items-center gap-0.5 cursor-pointer"
          >
            Contact me <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {experienceData.map((exp) => (
          <div
            key={exp.id}
            className="p-4 sm:p-5 rounded-2xl border space-y-3 transition hover:border-blue-500/40"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <div>
                <h3 className="font-bold text-sm sm:text-base tracking-tight" style={{ color: "var(--ink)" }}>
                  {exp.role}
                </h3>
                <div className="text-xs font-semibold text-blue-500">
                  {exp.company}
                  {exp.location && (
                    <span className="text-[11px] font-normal" style={{ color: "var(--ink-faint)" }}>
                      {" "}· {exp.location}
                    </span>
                  )}
                </div>
              </div>
              <span
                className="text-xs font-mono px-2 py-0.5 rounded border self-start sm:self-auto"
                style={{ borderColor: "var(--border)", color: "var(--ink-faint)" }}
              >
                {exp.period}
              </span>
            </div>

            {exp.highlights && exp.highlights.length > 0 ? (
              <ul className="space-y-1.5 pt-0.5">
                {exp.highlights.map((bullet, i) => (
                  <li key={i} className="text-xs leading-relaxed flex items-start gap-2" style={{ color: "var(--ink-muted)" }}>
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-xs leading-relaxed" style={{ color: "var(--ink-muted)" }}>
                {exp.description}
              </p>
            )}

            <div className="flex flex-wrap gap-1.5 pt-1">
              {exp.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-[11px] rounded-md border font-medium"
                  style={{ borderColor: "var(--border-subtle)", color: "var(--ink-faint)" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
