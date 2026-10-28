"use client";

import React from "react";
import { Lock } from "lucide-react";
import { exploreLinksData } from "@/data/portfolioData";
import { sectionFlags } from "@/data/config";

export function LinksSection() {
  if (!sectionFlags.exploreLinks) return null;

  return (
    <section id="links" className="space-y-3 pt-2">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-medium" style={{ color: "var(--ink-muted)" }}>
          Links & References
        </h2>
        <span className="text-[11px] font-mono px-2 py-0.5 rounded border" style={{ borderColor: "var(--border)", color: "var(--ink-faint)" }}>
          Directory coming soon
        </span>
      </div>

      <div className="flex flex-col">
        {exploreLinksData.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between py-4 select-none cursor-default"
            style={{ borderTop: "1px solid var(--border)" }}
          >
            <div className="space-y-0.5 min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-medium text-sm sm:text-base tracking-tight" style={{ color: "var(--ink)" }}>
                  {item.title}
                </span>
                <span
                  className="text-[10px] font-mono px-1.5 py-0.2 rounded border"
                  style={{ borderColor: "var(--border-subtle)", color: "var(--ink-faint)" }}
                >
                  {item.category}
                </span>
              </div>
              <p className="text-xs sm:text-sm font-normal" style={{ color: "var(--ink-muted)" }}>
                {item.description}
              </p>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-muted-foreground flex-shrink-0 pl-2">
              <span className="text-[10px] font-mono" style={{ color: "var(--ink-faint)" }}>Unlinked</span>
              <Lock className="w-3 h-3 text-muted-foreground/50" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
