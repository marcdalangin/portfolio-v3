"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Briefcase,
  FolderGit2,
  Cpu,
  Activity,
  FileText,
  Wrench,
  PanelLeftClose,
  PanelLeft,
  Sun,
  Moon,
  Mail,
  Compass,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/Icons";
import { profileData } from "@/data/portfolioData";
import { sectionFlags } from "@/data/config";
import { useTheme } from "@/context/ThemeContext";

interface SidebarProps {
  onOpenContact: () => void;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

export function Sidebar({ onOpenContact, isCollapsed, onToggleCollapse }: SidebarProps) {
  const pathname = usePathname();
  const isExplore = pathname === "/explore";
  const { theme, toggleTheme } = useTheme();
  const [pokes, setPokes] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("portfolio_pokes");
      if (stored) return parseInt(stored, 10);
    }
    return 2481;
  });
  const [isPoking, setIsPoking] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          timeZone: "Asia/Manila",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  const handlePoke = () => {
    const updated = pokes + 1;
    setPokes(updated);
    localStorage.setItem("portfolio_pokes", updated.toString());
    setIsPoking(true);
    setTimeout(() => setIsPoking(false), 300);
  };

  return (
    <>
      {/* Minimal Square Collapse/Expand Button (Matches reference screenshot) */}
      {isCollapsed && (
        <button
          onClick={onToggleCollapse}
          className="fixed top-3 left-3 z-40 hidden md:flex items-center justify-center w-9 h-9 rounded-lg border text-xs cursor-pointer transition hover:bg-black/5 dark:hover:bg-white/5 shadow-xs"
          style={{
            background: "var(--surface)",
            borderColor: "var(--border)",
            color: "var(--ink)",
          }}
          title="Expand sidebar"
          aria-label="Expand sidebar"
        >
          <PanelLeft className="w-4 h-4 text-neutral-400 dark:text-neutral-300" />
        </button>
      )}

      {/* Main Sticky Capsule Sidebar - Anchored to Left */}
      <aside
        id="desktop-sidebar"
        className={`capsule-sidebar sticky top-3 hidden md:flex h-[calc(100vh-24px)] w-[260px] flex-shrink-0 flex-col p-[5px] z-30 transition-all duration-300 ${
          isCollapsed
            ? "opacity-0 -translate-x-full pointer-events-none !w-0 !p-0 !m-0 !border-0 overflow-hidden"
            : "m-3"
        }`}
      >
        <div className="capsule-panel flex h-full flex-col justify-between p-3.5 overflow-y-auto">
          
          {/* Header: Identity & Collapse Button */}
          <div>
            <div className="flex items-center justify-between pb-3 border-b" style={{ borderColor: "var(--border-subtle)" }}>
              <Link href="/" className="flex items-center gap-2.5 group">
                <div className="h-7 w-7 rounded-lg flex items-center justify-center font-bold text-xs bg-blue-600 text-white shadow-xs group-hover:scale-105 transition">
                  M
                </div>
                <div>
                  <div className="font-bold text-sm tracking-tight" style={{ color: "var(--ink)" }}>
                    {profileData.name}
                  </div>
                  <div className="text-[11px]" style={{ color: "var(--ink-faint)" }}>
                    {profileData.role}
                  </div>
                </div>
              </Link>

              <button
                onClick={onToggleCollapse}
                title="Collapse sidebar"
                aria-label="Collapse sidebar"
                className="w-7 h-7 flex items-center justify-center rounded-lg border text-xs cursor-pointer transition hover:bg-black/5 dark:hover:bg-white/5"
                style={{ borderColor: "var(--border)", color: "var(--ink-muted)" }}
              >
                <PanelLeftClose className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Contact Action (Pill style matching reference .sidebar-cta) */}
            <button
              onClick={onOpenContact}
              className="mt-3.5 w-full flex items-center justify-between py-2 px-3.5 rounded-full border text-xs font-semibold transition hover:border-blue-500 group shadow-xs cursor-pointer"
              style={{ background: "var(--sidebar-bg)", borderColor: "var(--border)", color: "var(--ink)" }}
            >
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-500 group-hover:scale-110 transition" />
                <span>Get in touch</span>
              </div>
              <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_0_2px_rgba(16,185,129,0.2)]" title="Available for work" />
            </button>

            {/* Navigation Groups */}
            <nav className="mt-4 space-y-4">
              <div className="space-y-1">
                <Link
                  href={isExplore ? "/#about" : "#about"}
                  className={`flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition ${
                    !isExplore ? "bg-black/5 dark:bg-white/5 font-semibold" : "hover:bg-black/5 dark:hover:bg-white/5"
                  }`}
                  style={{ color: "var(--ink)" }}
                >
                  <Home className="w-3.5 h-3.5 text-blue-500" /> Overview
                </Link>

                <Link
                  href={isExplore ? "/#experience" : "#experience"}
                  className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition hover:bg-black/5 dark:hover:bg-white/5"
                  style={{ color: "var(--ink-muted)" }}
                >
                  <Briefcase className="w-3.5 h-3.5 text-emerald-500" /> Experience
                </Link>

                <Link
                  href={isExplore ? "/#projects" : "#projects"}
                  className="flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-medium transition hover:bg-black/5 dark:hover:bg-white/5"
                  style={{ color: "var(--ink-muted)" }}
                >
                  <span className="flex items-center gap-2.5">
                    <FolderGit2 className="w-3.5 h-3.5 text-purple-500" /> Projects
                  </span>
                </Link>

                <Link
                  href={isExplore ? "/#stack" : "#stack"}
                  className="flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-medium transition hover:bg-black/5 dark:hover:bg-white/5"
                  style={{ color: "var(--ink-muted)" }}
                >
                  <span className="flex items-center gap-2.5">
                    <Cpu className="w-3.5 h-3.5 text-amber-500" /> Tech Stack
                  </span>
                </Link>

                <Link
                  href={isExplore ? "/#github" : "#github"}
                  className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition hover:bg-black/5 dark:hover:bg-white/5"
                  style={{ color: "var(--ink-muted)" }}
                >
                  <Activity className="w-3.5 h-3.5 text-emerald-400" /> GitHub Activity
                </Link>
              </div>

              {/* Secondary Navigation: Explore */}
              <div className="space-y-1 pt-2 border-t" style={{ borderColor: "var(--border-subtle)" }}>
                <span className="text-[10px] font-bold tracking-wider uppercase px-2.5" style={{ color: "var(--ink-faint)" }}>
                  Explore
                </span>

                <Link
                  href="/explore"
                  className={`flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs transition ${
                    isExplore ? "bg-blue-500/10 text-blue-500 font-semibold border border-blue-500/20" : "hover:bg-black/5 dark:hover:bg-white/5"
                  }`}
                  style={{ color: isExplore ? "var(--accent)" : "var(--ink)" }}
                >
                  <span className="flex items-center gap-2.5">
                    <Compass className="w-3.5 h-3.5 text-blue-500" /> Explore & Services
                  </span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded-full border" style={{ borderColor: "var(--border)", color: "var(--ink-faint)" }}>
                    New
                  </span>
                </Link>

                {sectionFlags.blog && (
                  <a
                    href="#writing"
                    className="flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs transition hover:bg-black/5 dark:hover:bg-white/5"
                    style={{ color: "var(--ink-muted)" }}
                  >
                    <span className="flex items-center gap-2.5">
                      <FileText className="w-3.5 h-3.5" /> Articles
                    </span>
                  </a>
                )}

                {sectionFlags.gear && (
                  <a
                    href="#gear"
                    className="flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs transition hover:bg-black/5 dark:hover:bg-white/5"
                    style={{ color: "var(--ink-muted)" }}
                  >
                    <span className="flex items-center gap-2.5">
                      <Wrench className="w-3.5 h-3.5" /> Setup & Gear
                    </span>
                  </a>
                )}
              </div>
            </nav>
          </div>

          {/* Bottom Area: Poke Counter, Timezone, Socials, Theme Toggle */}
          <div className="space-y-3 pt-3 border-t" style={{ borderColor: "var(--border-subtle)" }}>
            
            {/* Interactive Poke Widget (Gated behind sectionFlags.pokesThisMonth) */}
            {sectionFlags.pokesThisMonth && (
              <div
                className="p-2.5 rounded-xl border flex items-center justify-between"
                style={{ background: "var(--sidebar-bg)", borderColor: "var(--border)" }}
              >
                <div>
                  <div className="text-[10px] uppercase font-bold tracking-wider" style={{ color: "var(--ink-faint)" }}>
                    Pokes this month
                  </div>
                  <div
                    className={`text-xs font-extrabold transition-transform duration-200 ${
                      isPoking ? "scale-125 text-amber-400" : "text-blue-500"
                    }`}
                  >
                    {pokes.toLocaleString()}
                  </div>
                </div>
                <button
                  onClick={handlePoke}
                  className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white transition active:scale-95 shadow-xs cursor-pointer"
                >
                  <span>👉</span> Poke
                </button>
              </div>
            )}

            {/* Timezone & Footer Controls */}
            <div className="flex items-center justify-between text-xs pt-1" style={{ color: "var(--ink-muted)" }}>
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                <span className="text-[11px] font-mono">
                  {profileData.timezone} {currentTime ? `· ${currentTime}` : ""}
                </span>
              </div>

              <div className="flex items-center gap-1.5">
                {/* Theme Switcher Button */}
                <button
                  onClick={toggleTheme}
                  title={`Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`}
                  aria-label={`Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`}
                  className="w-7 h-7 flex items-center justify-center rounded-lg border text-xs cursor-pointer transition hover:bg-black/5 dark:hover:bg-white/5"
                  style={{ borderColor: "var(--border)", background: "var(--surface)", color: "var(--ink)" }}
                >
                  {theme === "dark" ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-blue-500" />}
                </button>

                <a
                  href={profileData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 flex items-center justify-center rounded-lg border text-xs cursor-pointer transition hover:bg-black/5 dark:hover:bg-white/5"
                  style={{ borderColor: "var(--border)", color: "var(--ink)" }}
                  title="GitHub"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                </a>
                <a
                  href={profileData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 flex items-center justify-center rounded-lg border text-xs cursor-pointer transition hover:bg-black/5 dark:hover:bg-white/5"
                  style={{ borderColor: "var(--border)", color: "var(--ink)" }}
                  title="LinkedIn"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                </a>
                {profileData.socials.twitter && (
                  <a
                    href={profileData.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 flex items-center justify-center rounded-lg border text-xs cursor-pointer transition hover:bg-black/5 dark:hover:bg-white/5"
                    style={{ borderColor: "var(--border)", color: "var(--ink)" }}
                    title="X"
                  >
                    <TwitterIcon className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>

          </div>

        </div>
      </aside>
    </>
  );
}
