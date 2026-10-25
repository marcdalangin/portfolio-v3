"use client";

import React, { useEffect, useState } from "react";
import { Activity, ArrowUpRight, Loader2 } from "lucide-react";
import { profileData } from "@/data/portfolioData";
import { ContributionDay } from "@/app/api/github/route";

interface GitHubHeatmapProps {
  username?: string;
}

export function GitHubHeatmap({ username = profileData.githubUsername }: GitHubHeatmapProps) {
  const [weeks, setWeeks] = useState<ContributionDay[][]>([]);
  const [total, setTotal] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function fetchGitHubData() {
      try {
        setLoading(true);
        setError(false);
        const res = await fetch(`/api/github?username=${encodeURIComponent(username)}`);
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        if (isMounted) {
          setWeeks(data.weeks || []);
          setTotal(data.total ?? 0);
          setLoading(false);
        }
      } catch (err) {
        console.error("Failed to load GitHub activity:", err);
        if (isMounted) {
          setError(true);
          setLoading(false);
        }
      }
    }

    if (username) {
      fetchGitHubData();
    }

    return () => {
      isMounted = false;
    };
  }, [username]);

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

        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noreferrer"
          className="text-xs font-mono font-bold hover:underline flex items-center gap-1 transition"
          style={{ color: "var(--emerald)" }}
          title={`View @${username} on GitHub`}
        >
          {loading ? (
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Loader2 className="w-3 h-3 animate-spin text-emerald-500" /> Loading live GitHub activity...
            </span>
          ) : (
            <>
              <span>{total !== null ? total.toLocaleString() : "–"} contributions in the last year</span>
              <ArrowUpRight className="w-3 h-3" />
            </>
          )}
        </a>
      </div>

      <div
        className="p-4 rounded-2xl border space-y-3 overflow-x-auto shadow-xs"
        style={{ background: "var(--surface)", borderColor: "var(--border)" }}
      >
        {loading && weeks.length === 0 ? (
          <div className="flex items-center justify-center py-8 text-xs gap-2" style={{ color: "var(--ink-muted)" }}>
            <Loader2 className="w-4 h-4 animate-spin text-emerald-500" />
            <span>Fetching live contributions from @{username}...</span>
          </div>
        ) : error && weeks.length === 0 ? (
          <div className="text-center py-6 text-xs" style={{ color: "var(--ink-muted)" }}>
            Could not fetch GitHub activity for <code className="text-blue-500">@{username}</code>. Verify your username in <code className="text-xs">src/data/portfolioData.ts</code>.
          </div>
        ) : (
          <>
            <div className="flex gap-1 min-w-[580px] justify-between">
              {weeks.map((week, wIdx) => (
                <div key={wIdx} className="flex flex-col gap-1 flex-1">
                  {week.map((day, dIdx) => (
                    <div
                      key={dIdx}
                      className="h-2 w-full rounded-xs transition hover:scale-125 hover:z-10 cursor-pointer"
                      style={{ background: getCellColor(day.level) }}
                      title={`${day.count} contribution${day.count === 1 ? "" : "s"} on ${day.date}`}
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
          </>
        )}
      </div>
    </section>
  );
}
