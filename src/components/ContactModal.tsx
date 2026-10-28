"use client";

import React, { useState } from "react";
import { Mail, Check, Copy, X, ArrowUpRight, Send } from "lucide-react";
import { profileData } from "@/data/portfolioData";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [copiedWork, setCopiedWork] = useState(false);
  const [copiedDev, setCopiedDev] = useState(false);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, type: "work" | "dev") => {
    navigator.clipboard.writeText(text);
    if (type === "work") {
      setCopiedWork(true);
      setTimeout(() => setCopiedWork(false), 2000);
    } else {
      setCopiedDev(true);
      setTimeout(() => setCopiedDev(false), 2000);
    }
  };

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
          className="absolute top-4 right-4 p-1 rounded-md text-xs transition hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer"
          style={{ color: "var(--ink-muted)" }}
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        <h3 className="text-base font-bold tracking-tight" style={{ color: "var(--ink)" }}>
          Get in Touch
        </h3>
        <p className="text-xs mt-1 leading-relaxed" style={{ color: "var(--ink-muted)" }}>
          Have a project in mind, need custom workflows built, or want to consult? Reach out directly.
        </p>

        <div className="mt-5 space-y-3">
          {/* Project & Client Inquiries */}
          <div
            className="p-3.5 rounded-xl border text-xs space-y-2"
            style={{ background: "var(--sidebar-bg)", borderColor: "var(--border)" }}
          >
            <div className="flex items-center justify-between">
              <span className="font-semibold text-blue-500 text-[11px] uppercase tracking-wider">
                Project & Contract Inquiries
              </span>
              <a
                href={`mailto:${profileData.contactEmail}?subject=Project%20Inquiry`}
                className="text-blue-500 hover:underline flex items-center gap-0.5 text-[11px] font-semibold"
              >
                Send mail <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>

            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 min-w-0">
                <Send className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                <span className="font-mono font-medium truncate" style={{ color: "var(--ink)" }}>
                  {profileData.contactEmail}
                </span>
              </div>
              <button
                onClick={() => copyToClipboard(profileData.contactEmail, "dev")}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold text-white transition cursor-pointer flex-shrink-0 ${
                  copiedDev ? "bg-emerald-600" : "bg-blue-600 hover:bg-blue-500"
                }`}
              >
                {copiedDev ? (
                  <>
                    <Check className="w-3 h-3" /> Copied
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" /> Copy
                  </>
                )}
              </button>
            </div>
          </div>

          {/* General & Professional Email */}
          <div
            className="p-3.5 rounded-xl border text-xs space-y-2"
            style={{ background: "var(--sidebar-bg)", borderColor: "var(--border)" }}
          >
            <div className="flex items-center justify-between">
              <span className="font-semibold text-[11px] uppercase tracking-wider" style={{ color: "var(--ink-muted)" }}>
                Direct Work Email
              </span>
              <a
                href={`mailto:${profileData.email}`}
                className="text-blue-500 hover:underline flex items-center gap-0.5 text-[11px] font-semibold"
              >
                Send mail <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>

            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 min-w-0">
                <Mail className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                <span className="font-mono font-medium truncate" style={{ color: "var(--ink)" }}>
                  {profileData.email}
                </span>
              </div>
              <button
                onClick={() => copyToClipboard(profileData.email, "work")}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold text-white transition cursor-pointer flex-shrink-0 ${
                  copiedWork ? "bg-emerald-600" : "bg-blue-600 hover:bg-blue-500"
                }`}
              >
                {copiedWork ? (
                  <>
                    <Check className="w-3 h-3" /> Copied
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" /> Copy
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
