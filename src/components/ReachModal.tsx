"use client";

import React from "react";
import { X, Users, MessageSquare, Video } from "lucide-react";

interface ReachModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ReachModal({ isOpen, onClose }: ReachModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-2xl border p-6 shadow-2xl transition-all"
        style={{ background: "var(--card)", borderColor: "var(--border)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-md text-xs transition hover:bg-black/5 dark:hover:bg-white/5"
          style={{ color: "var(--ink-muted)" }}
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        <h3 className="text-base font-bold tracking-tight" style={{ color: "var(--ink)" }}>
          Community & Reach Breakdown
        </h3>
        <p className="text-xs mt-1 leading-relaxed" style={{ color: "var(--ink-muted)" }}>
          Real-time metrics across creator channels and builder hubs.
        </p>

        <div className="mt-5 space-y-2.5">
          <div
            className="flex items-center justify-between p-3.5 rounded-xl border text-xs"
            style={{ background: "var(--sidebar-bg)", borderColor: "var(--border)" }}
          >
            <div className="flex items-center gap-2.5">
              <Video className="w-4 h-4 text-blue-500" />
              <span className="font-medium" style={{ color: "var(--ink)" }}>
                TikTok / Tech Workflow Shorts
              </span>
            </div>
            <span className="font-mono font-bold text-blue-500">8.2k+</span>
          </div>

          <div
            className="flex items-center justify-between p-3.5 rounded-xl border text-xs"
            style={{ background: "var(--sidebar-bg)", borderColor: "var(--border)" }}
          >
            <div className="flex items-center gap-2.5">
              <MessageSquare className="w-4 h-4 text-emerald-500" />
              <span className="font-medium" style={{ color: "var(--ink)" }}>
                Discord Private Dev Hub
              </span>
            </div>
            <span className="font-mono font-bold text-emerald-500">850+ devs</span>
          </div>

          <div
            className="flex items-center justify-between p-3.5 rounded-xl border text-xs"
            style={{ background: "var(--sidebar-bg)", borderColor: "var(--border)" }}
          >
            <div className="flex items-center gap-2.5">
              <Users className="w-4 h-4 text-purple-500" />
              <span className="font-medium" style={{ color: "var(--ink)" }}>
                YouTube AI Coding Tutorials
              </span>
            </div>
            <span className="font-mono font-bold text-purple-500">3.1k</span>
          </div>
        </div>
      </div>
    </div>
  );
}
