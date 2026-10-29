"use client";

import React from "react";
import { Cpu } from "lucide-react";
import { techStackData } from "@/data/portfolioData";

export function TechStackSection() {
  const totalCount = techStackData.reduce((acc, cat) => acc + cat.items.length, 0);

  return (
    <section id="stack" className="space-y-4 pt-2">
      <div className="flex items-center justify-between border-b pb-2" style={{ borderColor: "var(--border)" }}>
        <div className="flex items-center gap-2">
          <h2 className="text-sm font-bold tracking-wider uppercase" style={{ color: "var(--ink)" }}>
            Tech Stack
          </h2>
          <Cpu className="w-3.5 h-3.5 text-amber-500" />
        </div>
        <span className="text-xs font-mono" style={{ color: "var(--ink-muted)" }}>
          {totalCount} technologies
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        {techStackData.map((group) => (
          <div
            key={group.category}
            className="p-4 rounded-2xl border space-y-2.5 transition hover:border-blue-500/40"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <div className={`text-xs font-bold uppercase tracking-wider ${group.colorClass}`}>
              {group.category}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="px-2.5 py-1 text-xs rounded-lg border font-medium transition hover:border-blue-500/50"
                  style={{ background: "var(--sidebar-bg)", borderColor: "var(--border)", color: "var(--ink)" }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
