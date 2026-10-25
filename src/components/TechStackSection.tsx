"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { techStackData } from "@/data/portfolioData";

export function TechStackSection() {
  const totalCount = techStackData.reduce((acc, cat) => acc + cat.items.length, 0);

  return (
    <section id="stack" className="space-y-4 pt-2">
      <div className="flex items-center justify-between border-b pb-2" style={{ borderColor: "var(--border)" }}>
        <h2 className="text-sm font-bold tracking-wider uppercase" style={{ color: "var(--ink)" }}>
          Tech Stack
        </h2>
        <a
          href="#stack-full"
          className="text-xs font-semibold text-blue-500 hover:underline flex items-center gap-0.5"
        >
          View all ({totalCount}) <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {techStackData.map((group) => (
          <div
            key={group.category}
            className="p-3.5 rounded-2xl border space-y-2 transition hover:border-blue-500/40"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <div className={`text-xs font-bold uppercase tracking-wider ${group.colorClass}`}>
              {group.category}
            </div>
            <p className="text-xs leading-relaxed" style={{ color: "var(--ink-muted)" }}>
              {group.items.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
