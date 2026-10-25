"use client";

import React, { useState } from "react";
import {
  Menu,
  X,
  Home,
  Briefcase,
  FolderGit2,
  Cpu,
  Activity,
  FileText,
  Wrench,
  Package,
  Sun,
  Moon,
  Mail,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { profileData } from "@/data/portfolioData";
import { useTheme } from "@/context/ThemeContext";

interface MobileBarProps {
  onOpenContact: () => void;
}

export function MobileBar({ onOpenContact }: MobileBarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Sticky Top Mobile Header */}
      <header
        className="sticky top-0 z-40 flex items-center justify-between border-b px-4 py-2.5 md:hidden"
        style={{ background: "var(--bg)", borderColor: "var(--border)" }}
      >
        <div className="flex items-center gap-2.5">
          <button
            onClick={() => setIsOpen(true)}
            className="p-1.5 rounded-lg border flex items-center justify-center transition cursor-pointer"
            style={{ borderColor: "var(--border)", background: "var(--surface)", color: "var(--ink)" }}
            aria-label="Open Navigation Menu"
          >
            <Menu className="w-4 h-4" />
          </button>
          <div className="font-bold text-sm tracking-tight" style={{ color: "var(--ink)" }}>
            {profileData.name}
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Status Badge */}
          <span
            className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium border"
            style={{
              borderColor: "rgba(16,185,129,0.3)",
              background: "rgba(16,185,129,0.1)",
              color: "var(--emerald)",
            }}
          >
            <span className="h-1.5 w-1.5 rounded-full animate-ping" style={{ background: "var(--emerald)" }}></span>
            Available
          </span>

          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-lg border text-xs cursor-pointer transition hover:border-blue-500"
            style={{ borderColor: "var(--border)", background: "var(--surface)", color: "var(--ink)" }}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-blue-500" />}
          </button>

          {/* Contact CTA */}
          <button
            onClick={onOpenContact}
            className="px-2.5 py-1 rounded-lg border text-xs font-semibold text-blue-500 cursor-pointer"
            style={{ borderColor: "var(--border)", background: "var(--surface)" }}
          >
            Contact
          </button>
        </div>
      </header>

      {/* Backdrop Scrim Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs md:hidden animate-in fade-in duration-200"
        />
      )}

      {/* Off-Canvas Slide-In Capsule Drawer */}
      <div
        className={`fixed top-3 left-3 z-50 h-[calc(100dvh-24px)] w-[280px] flex-col p-2 capsule-sidebar md:hidden transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0 flex" : "-translate-x-[110%] hidden"
        }`}
      >
        <div className="capsule-panel flex h-full flex-col justify-between p-3.5 overflow-y-auto">
          <div>
            {/* Drawer Header */}
            <div className="flex items-center justify-between pb-3 border-b" style={{ borderColor: "var(--border-subtle)" }}>
              <div className="flex items-center gap-2">
                <div className="h-7 w-7 rounded-lg flex items-center justify-center font-bold text-xs bg-blue-600 text-white">
                  M
                </div>
                <div>
                  <div className="font-bold text-sm tracking-tight" style={{ color: "var(--ink)" }}>
                    {profileData.name}
                  </div>
                  <div className="text-[11px]" style={{ color: "var(--ink-faint)" }}>
                    Full-Stack & AI
                  </div>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-md border text-xs cursor-pointer"
                style={{ borderColor: "var(--border)", color: "var(--ink-muted)" }}
                aria-label="Close navigation"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Contact Action */}
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenContact();
              }}
              className="mt-3.5 w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl border text-xs font-semibold cursor-pointer shadow-xs"
              style={{ background: "var(--sidebar-bg)", borderColor: "var(--border)", color: "var(--ink)" }}
            >
              <Mail className="w-3.5 h-3.5 text-blue-500" />
              <span>Get in touch</span>
            </button>

            {/* Navigation Links */}
            <nav className="mt-4 space-y-3">
              <div className="space-y-1">
                <a
                  href="#about"
                  onClick={handleLinkClick}
                  className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg text-xs font-medium"
                  style={{ color: "var(--ink)" }}
                >
                  <Home className="w-3.5 h-3.5 text-blue-500" /> Overview
                </a>
                <a
                  href="#experience"
                  onClick={handleLinkClick}
                  className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg text-xs font-medium"
                  style={{ color: "var(--ink-muted)" }}
                >
                  <Briefcase className="w-3.5 h-3.5 text-emerald-500" /> Experience
                </a>
                <a
                  href="#projects"
                  onClick={handleLinkClick}
                  className="flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-medium"
                  style={{ color: "var(--ink-muted)" }}
                >
                  <span className="flex items-center gap-2.5">
                    <FolderGit2 className="w-3.5 h-3.5 text-purple-500" /> Projects
                  </span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded-full border" style={{ borderColor: "var(--border)", color: "var(--ink-faint)" }}>
                    11
                  </span>
                </a>
                <a
                  href="#stack"
                  onClick={handleLinkClick}
                  className="flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-medium"
                  style={{ color: "var(--ink-muted)" }}
                >
                  <span className="flex items-center gap-2.5">
                    <Cpu className="w-3.5 h-3.5 text-amber-500" /> Tech Stack
                  </span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded-full border" style={{ borderColor: "var(--border)", color: "var(--ink-faint)" }}>
                    45
                  </span>
                </a>
                <a
                  href="#github"
                  onClick={handleLinkClick}
                  className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg text-xs font-medium"
                  style={{ color: "var(--ink-muted)" }}
                >
                  <Activity className="w-3.5 h-3.5 text-emerald-400" /> GitHub Activity
                </a>
              </div>

              <div className="space-y-1 pt-2 border-t" style={{ borderColor: "var(--border-subtle)" }}>
                <span className="text-[10px] font-bold tracking-wider uppercase px-2.5" style={{ color: "var(--ink-faint)" }}>
                  Explore
                </span>
                <a
                  href="#writing"
                  onClick={handleLinkClick}
                  className="flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs"
                  style={{ color: "var(--ink-muted)" }}
                >
                  <span className="flex items-center gap-2.5">
                    <FileText className="w-3.5 h-3.5" /> Articles
                  </span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded-full border" style={{ borderColor: "var(--border)", color: "var(--ink-faint)" }}>
                    6
                  </span>
                </a>
                <a
                  href="#gear"
                  onClick={handleLinkClick}
                  className="flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs"
                  style={{ color: "var(--ink-muted)" }}
                >
                  <span className="flex items-center gap-2.5">
                    <Wrench className="w-3.5 h-3.5" /> Gear & Setup
                  </span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded-full border" style={{ borderColor: "var(--border)", color: "var(--ink-faint)" }}>
                    12
                  </span>
                </a>
                <a
                  href="#resources"
                  onClick={handleLinkClick}
                  className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg text-xs"
                  style={{ color: "var(--ink-muted)" }}
                >
                  <Package className="w-3.5 h-3.5" /> Resources
                </a>
              </div>
            </nav>
          </div>

          {/* Footer Socials */}
          <div className="pt-3 border-t flex items-center justify-between text-xs" style={{ borderColor: "var(--border-subtle)", color: "var(--ink-muted)" }}>
            <span className="text-[11px] font-mono">{profileData.timezone} · Manila</span>
            <div className="flex items-center gap-2">
              <a href={profileData.socials.github} target="_blank" rel="noreferrer" title="GitHub">
                <GithubIcon className="w-4 h-4" />
              </a>
              <a href={profileData.socials.linkedin} target="_blank" rel="noreferrer" title="LinkedIn">
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
