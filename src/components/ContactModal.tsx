"use client";

import React, { useState } from "react";
import { Mail, MessageSquare, Check, Copy, X, ExternalLink } from "lucide-react";
import { profileData } from "@/data/portfolioData";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const copyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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
          className="absolute top-4 right-4 p-1 rounded-md text-xs transition hover:bg-black/5 dark:hover:bg-white/5"
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
          {/* Email Box */}
          <div
            className="flex items-center justify-between p-3.5 rounded-xl border text-xs"
            style={{ background: "var(--sidebar-bg)", borderColor: "var(--border)" }}
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <Mail className="w-4 h-4 text-blue-500 flex-shrink-0" />
              <span className="font-mono font-medium truncate" style={{ color: "var(--ink)" }}>
                {profileData.email}
              </span>
            </div>
            <button
              onClick={copyEmail}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold text-white transition ${
                copied ? "bg-emerald-600" : "bg-blue-600 hover:bg-blue-500"
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5" /> Copied
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" /> Copy
                </>
              )}
            </button>
          </div>

          {/* Discord Hub */}
          <a
            href="https://discord.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between p-3.5 rounded-xl border text-xs transition hover:border-blue-500 group"
            style={{ background: "var(--sidebar-bg)", borderColor: "var(--border)" }}
          >
            <div className="flex items-center gap-2.5">
              <MessageSquare className="w-4 h-4 text-emerald-500" />
              <div>
                <span className="font-semibold" style={{ color: "var(--ink)" }}>
                  Discord Dev Community
                </span>
                <span className="block text-[11px]" style={{ color: "var(--ink-faint)" }}>
                  Chat directly with Marc & 850+ builders
                </span>
              </div>
            </div>
            <ExternalLink className="w-3.5 h-3.5 text-blue-500 group-hover:translate-x-0.5 transition" />
          </a>
        </div>
      </div>
    </div>
  );
}
