"use client";

import React, { useState } from "react";
import { Download, ArrowRight, ExternalLink, FileText } from "lucide-react";
import { profileData, metricsData } from "@/data/portfolioData";
import { sectionFlags } from "@/data/config";
import { AboutModal } from "@/components/AboutModal";

interface HeroProps {
  onOpenReach: () => void;
}

export function Hero({ onOpenReach }: HeroProps) {
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  // Filter metrics based on section flags
  const visibleMetrics = metricsData.filter((m) => {
    if (m.id === "reach") return sectionFlags.communityReach;
    if (m.id === "discord") return sectionFlags.privateDevHub;
    if (m.id === "shipping") return sectionFlags.shippingInProd;
    return true;
  });

  return (
    <>
      <section id="about" className="space-y-6 pt-2">
        <div className="flex flex-col sm:flex-row items-start gap-5">
          {/* Dual-State Avatar */}
          <div
            className="group relative h-20 w-20 flex-shrink-0 cursor-pointer overflow-hidden rounded-2xl border shadow-xs transition duration-300 hover:scale-105"
            style={{ borderColor: "var(--border)", background: "var(--surface)" }}
          >
            <div
              className="absolute inset-0 flex items-center justify-center font-bold text-3xl filter grayscale group-hover:grayscale-0 transition duration-300 select-none"
              style={{
                background: "linear-gradient(135deg, rgba(37,99,235,0.1), rgba(16,185,129,0.1))",
              }}
            >
              👨‍💻
            </div>
            <span
              className="absolute bottom-1 right-1 h-3.5 w-3.5 rounded-full border-2"
              style={{ background: "var(--emerald)", borderColor: "var(--surface)" }}
              title="Available for projects"
            />
          </div>

          {/* Identity & Teaser */}
          <div className="space-y-2 flex-1 min-w-0">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight" style={{ color: "var(--ink)" }}>
                  {profileData.name}
                </h1>
                <p className="text-xs sm:text-sm font-medium" style={{ color: "var(--ink-muted)" }}>
                  {profileData.role}
                </p>
              </div>

              {/* CV Actions: View (primary) & Download (secondary) */}
              <div className="flex items-center gap-1.5 flex-shrink-0">
                <a
                  href="/assets/cv/Marc-Dalangin-CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-semibold transition hover:border-blue-500 shadow-xs"
                  style={{ background: "var(--surface)", borderColor: "var(--border)", color: "var(--ink)" }}
                  title="Open CV in new tab"
                >
                  <FileText className="w-3.5 h-3.5 text-blue-500" />
                  <span>View CV</span>
                </a>

                <a
                  href="/assets/cv/Marc-Dalangin-CV.pdf"
                  download="Marc-Dalangin-CV.pdf"
                  className="p-1.5 rounded-xl border text-xs font-semibold transition hover:border-blue-500 shadow-xs"
                  style={{ background: "var(--surface)", borderColor: "var(--border)", color: "var(--ink-muted)" }}
                  title="Download CV (PDF)"
                  aria-label="Download Marc Dalangin CV"
                >
                  <Download className="w-3.5 h-3.5 text-emerald-500" />
                </a>
              </div>
            </div>

            <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "var(--ink-muted)" }}>
              {profileData.bioTeaser}
            </p>

            <div className="pt-1">
              <button
                type="button"
                onClick={() => setIsAboutOpen(true)}
                className="inline-flex items-center gap-1 text-xs font-semibold text-blue-500 hover:underline cursor-pointer"
              >
                More about me <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>

        {/* Responsive Metrics Row (Only rendered if at least one metric is enabled) */}
        {visibleMetrics.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {visibleMetrics.map((m) => {
              const isClickable = !!m.popoverTarget;
              return (
                <div
                  key={m.id}
                  onClick={m.popoverTarget === "reach" ? onOpenReach : undefined}
                  className={`p-3.5 rounded-2xl border transition group ${
                    isClickable ? "cursor-pointer hover:border-blue-500/50 hover:shadow-xs" : ""
                  }`}
                  style={{ background: "var(--surface)", borderColor: "var(--border)" }}
                >
                  <div className="text-lg sm:text-xl font-extrabold tracking-tight" style={{ color: "var(--ink)" }}>
                    {m.value}
                  </div>
                  <div className="text-[11px] font-medium" style={{ color: "var(--ink-muted)" }}>
                    {m.label}
                  </div>
                  <div className="text-[10px] mt-1 flex items-center gap-0.5" style={{ color: isClickable ? "var(--accent)" : "var(--ink-faint)" }}>
                    {m.sublabel} {isClickable && <ExternalLink className="w-2.5 h-2.5" />}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      <AboutModal isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
    </>
  );
}
