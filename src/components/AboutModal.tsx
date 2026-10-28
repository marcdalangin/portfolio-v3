"use client";

import React from "react";
import { X, GraduationCap, MapPin, Mail, Clock } from "lucide-react";
import { profileData } from "@/data/portfolioData";

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AboutModal({ isOpen, onClose }: AboutModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-2xl border p-6 sm:p-7 shadow-2xl transition-all max-h-[90vh] overflow-y-auto"
        style={{ background: "var(--card)", borderColor: "var(--border)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-md text-xs transition hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer"
          style={{ color: "var(--ink-muted)" }}
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Heading */}
        <div className="space-y-1">
          <span className="text-[11px] font-mono uppercase tracking-wider text-blue-500 font-semibold">
            About Me
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight" style={{ color: "var(--ink)" }}>
            {profileData.heading}
          </h2>
          <div className="flex flex-wrap items-center gap-3 text-xs pt-1" style={{ color: "var(--ink-muted)" }}>
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-blue-500" /> {profileData.location}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-emerald-500" /> UTC+8 (US/AU/EU overlap)
            </span>
          </div>
        </div>

        {/* About Blurb */}
        <div className="mt-5 space-y-4 text-xs sm:text-sm leading-relaxed" style={{ color: "var(--ink-muted)" }}>
          <p>{profileData.aboutBlurb}</p>
        </div>

        {/* Education Section */}
        <div className="mt-6 pt-5 border-t space-y-3" style={{ borderColor: "var(--border-subtle)" }}>
          <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase" style={{ color: "var(--ink)" }}>
            <GraduationCap className="w-4 h-4 text-purple-500" /> Education
          </div>

          <div
            className="p-3.5 rounded-xl border text-xs space-y-1"
            style={{ background: "var(--sidebar-bg)", borderColor: "var(--border)" }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <span className="font-bold text-sm" style={{ color: "var(--ink)" }}>
                Pamantasan ng Lungsod ng Muntinlupa
              </span>
              <span className="font-mono text-[11px]" style={{ color: "var(--ink-faint)" }}>
                Jun 2020 – Jul 2024
              </span>
            </div>
            <div className="text-xs font-medium" style={{ color: "var(--ink-muted)" }}>
              Bachelor of Science in Computer Science
            </div>
            <div className="text-[11px]" style={{ color: "var(--ink-faint)" }}>
              Muntinlupa, MNL · Cumulative GPA: 3.30 / 4.0
            </div>
          </div>
        </div>

        {/* Quick Contact Footer */}
        <div className="mt-6 pt-4 border-t flex items-center justify-between" style={{ borderColor: "var(--border-subtle)" }}>
          <span className="text-xs" style={{ color: "var(--ink-faint)" }}>
            Available for remote contracts
          </span>
          <a
            href={`mailto:${profileData.contactEmail}`}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition shadow-xs"
          >
            <Mail className="w-3.5 h-3.5" /> Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}
