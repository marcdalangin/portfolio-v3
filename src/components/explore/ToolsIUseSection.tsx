"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { toolsIUseData } from "@/data/portfolioData";
import { sectionFlags } from "@/data/config";
import { AntigravityIcon, ClaudeDesignIcon, ClaudeCodeIcon } from "@/components/Icons";

export function ToolsIUseSection() {
  if (!sectionFlags.toolsIUse) return null;

  const renderIcon = (icon: "antigravity" | "claude-design" | "claude-code") => {
    switch (icon) {
      case "antigravity":
        return <AntigravityIcon className="w-8 h-8 flex-shrink-0" />;
      case "claude-design":
        return <ClaudeDesignIcon className="w-8 h-8 flex-shrink-0" />;
      case "claude-code":
        return <ClaudeCodeIcon className="w-8 h-8 flex-shrink-0" />;
      default:
        return null;
    }
  };

  return (
    <section id="tools" className="space-y-3 pt-2">
      {/* Label heading from portfolio-skill design rules */}
      <h2 className="text-sm font-medium" style={{ color: "var(--ink-muted)" }}>
        Tools I use
      </h2>

      {/* Hairline rows: 1px top border, flat, zero curved outlines */}
      <div className="flex flex-col">
        {toolsIUseData.map((tool) => {
          const body = (
            <>
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="flex items-center justify-center flex-shrink-0">
                  {renderIcon(tool.icon)}
                </div>
                <div className="min-w-0 flex flex-col gap-0.5">
                  <span
                    className="font-medium text-sm sm:text-base tracking-tight group-hover:underline transition"
                    style={{
                      color: "var(--ink)",
                      textUnderlineOffset: "3px",
                    }}
                  >
                    {tool.name}
                  </span>
                  <span className="text-xs sm:text-sm font-normal" style={{ color: "var(--ink-muted)" }}>
                    {tool.subtitle}
                  </span>
                </div>
              </div>

              <span className="flex items-center flex-shrink-0 pl-2">
                <ArrowUpRight
                  className="w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition"
                  style={{ color: "var(--ink-muted)" }}
                />
              </span>
            </>
          );

          if (tool.link) {
            return (
              <a
                key={tool.id}
                href={tool.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-4 transition cursor-pointer"
                style={{ borderTop: "1px solid var(--border)" }}
              >
                {body}
              </a>
            );
          }

          return (
            <div
              key={tool.id}
              className="group flex items-center justify-between py-4"
              style={{ borderTop: "1px solid var(--border)" }}
            >
              {body}
            </div>
          );
        })}
      </div>
    </section>
  );
}
