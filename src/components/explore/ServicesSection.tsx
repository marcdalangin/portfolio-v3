"use client";

import React from "react";
import { ArrowUpRight, Mail } from "lucide-react";
import { servicesData } from "@/data/portfolioData";
import { sectionFlags } from "@/data/config";

export function ServicesSection() {
  if (!sectionFlags.services) return null;

  return (
    <section id="services" className="space-y-8 pt-2">
      {/* Niche / Currently working with (Exact layout from portfolio-skill) */}
      <div
        className="flex items-center gap-3 flex-wrap py-4"
        style={{
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <span className="text-sm font-medium" style={{ color: "var(--ink-muted)" }}>
          Currently working with
        </span>
        <div
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium"
          style={{ background: "var(--ink)", color: "var(--bg)" }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Fintech Startup (Philippines)</span>
        </div>
        <p className="w-full text-xs sm:text-sm leading-relaxed pt-1" style={{ color: "var(--ink-muted)" }}>
          {servicesData.currentlyWorkingWith}
        </p>
      </div>

      {/* What I Build (card-grid from portfolio-skill) */}
      <div className="space-y-4">
        <h2 className="text-sm font-medium" style={{ color: "var(--ink-muted)" }}>
          What I build
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {servicesData.whatIBuild.map((item) => (
            <div
              key={item.id}
              className="p-5 rounded-2xl border flex flex-col gap-2 transition hover:border-blue-500/30"
              style={{ background: "var(--surface)", borderColor: "var(--border)" }}
            >
              <div className="flex items-center justify-between">
                <span className="font-medium text-sm sm:text-base tracking-tight" style={{ color: "var(--ink)" }}>
                  {item.title}
                </span>
                <span className="text-base">{item.icon}</span>
              </div>
              <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "var(--ink-muted)" }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Button (pill from portfolio-skill) */}
      <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <span className="text-xs sm:text-sm" style={{ color: "var(--ink-muted)" }}>
          Have a project or integration in mind?
        </span>

        <a
          href={`mailto:${servicesData.ctaEmail}?subject=${encodeURIComponent("Project Inquiry / Custom Automation")}`}
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition active:scale-95 shadow-xs flex-shrink-0"
          style={{ background: "var(--ink)", color: "var(--bg)" }}
        >
          <Mail className="w-4 h-4" />
          <span>Start a project</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </section>
  );
}
