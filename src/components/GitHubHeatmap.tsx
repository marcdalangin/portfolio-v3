"use client";

import React, { useMemo } from "react";
import { Activity } from "lucide-react";

export function GitHubHeatmap() {
  // Generate deterministic 52-week contribution distribution
  const weeks = useMemo(() => {
    const list: number[][] = [];
    for (let w = 0; w < 48; w++) {
      const days: number[] = [];
      for (let d = 0; d < 7; d++) {
        // pseudo-random with higher activity weighting
        const seed = Math.sin(w * 7 + d + 42) * 10000;
        const val = seed - Math.floor(seed);
        let level = 0;
        if (val > 0.85) level = 4;
        else if (val > 0.65) level = 3;
        else if (val > 0.45) level = 2;
        else if (val > 0.25) level = 1;
        days.push(level);
      }
      list.push(days);
    }
    return list;
  }, []);

  const getCellColor = (level: number) => {
    switch (level) {
      case 4:
        return "#10b981"; // emerald-500
      case 3:
        return "#059669"; // emerald-600
      case 2:
        return "#047857"; // emerald-700
      case 1:
        return "#064e3b"; // emerald-900
      default:
        return "var(--border)";
    }
  };

  return (
    <section id="github" className="space-y-4 pt-2">
      <div className="flex flex-wrap items-center justify-between border-b pb-2 gap-2" style={{ borderColor: "var(--border)" }}>
        <div className="flex items-center gap-2">
          <h2 className="text-sm font-bold tracking-wider uppercase" style={{ color: "var(--ink)" }}>
            GitHub Activity
          </h2>
          <Activity className="w-3.5 h-3.5 text-emerald-500" />
        </div>
        <span className="text-xs font-mono font-bold" style={{ color: "var(--emerald)" }}>
          4,892 contributions in the last year
        </span>
      </div>

      <div
        className="p-4 rounded-2xl border space-y-3 overflow-x-auto shadow-xs"
        style={{ background: "var(--surface)", borderColor: "var(--border)" }}
      >
        <div className="flex gap-1 min-w-[580px] justify-between">
          {weeks.map((week, wIdx) => (
            <div key={wIdx} className="flex flex-col gap-1 flex-1">
              {week.map((level, dIdx) => (
                <div
                  key={dIdx}
                  className="h-2 w-full rounded-xs transition hover:scale-125 hover:z-10 cursor-pointer"
                  style={{ background: getCellColor(level) }}
                  title={`${level > 0 ? level * 3 + " contributions" : "No contributions"}`}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Legend & Month Labels */}
        <div className="flex items-center justify-between text-[11px] pt-1" style={{ color: "var(--ink-faint)" }}>
          <span>Jan</span>
          <span>Mar</span>
          <span>May</span>
          <span>Jul</span>
          <span>Sep</span>
          <span>Nov</span>
          <div className="flex items-center gap-1 font-mono">
            <span>Less</span>
            <span className="h-2 w-2 rounded-xs" style={{ background: "var(--border)" }} />
            <span className="h-2 w-2 rounded-xs" style={{ background: "#064e3b" }} />
            <span className="h-2 w-2 rounded-xs" style={{ background: "#047857" }} />
            <span className="h-2 w-2 rounded-xs" style={{ background: "#059669" }} />
            <span className="h-2 w-2 rounded-xs" style={{ background: "#10b981" }} />
            <span>More</span>
          </div>
        </div>
      </div>
    </section>
  );
}
