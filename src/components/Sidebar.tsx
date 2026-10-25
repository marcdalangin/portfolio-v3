"use client";

import React, { useState, useEffect } from "react";
import {
  Home,
  Briefcase,
  FolderGit2,
  Cpu,
  Activity,
  FileText,
  Wrench,
  Package,
  PanelLeftClose,
  Menu,
  Sun,
  Moon,
  Mail,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/Icons";
import { profileData } from "@/data/portfolioData";
import { useTheme } from "@/context/ThemeContext";

interface SidebarProps {
  onOpenContact: () => void;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

export function Sidebar({ onOpenContact, isCollapsed, onToggleCollapse }: SidebarProps) {
  const { theme, toggleTheme } = useTheme();
  const [pokes, setPokes] = useState(2481);
  const [isPoking, setIsPoking] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const storedPokes = localStorage.getItem("portfolio_pokes");
    if (storedPokes) {
      setPokes(parseInt(storedPokes, 10));
    }

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
      {/* Floating Expand Button when sidebar is collapsed on desktop */}
      {isCollapsed && (
        <button
          onClick={onToggleCollapse}
          className="sidebar-expand-btn hidden md:flex items-center gap-2 px-3 py-2 text-xs font-semibold cursor-pointer animate-in fade-in zoom-in-95 duration-200"
          style={{ color: "var(--ink)" }}
          title="Expand sidebar"
        >
          <Menu className="w-4 h-4 text-blue-500" />
          <span>Expand Sidebar</span>
        </button>
      )}

      {/* Main Sticky Capsule Sidebar */}
      <aside
        id="desktop-sidebar"
        className={`capsule-sidebar sticky top-4 hidden md:flex h-[calc(100vh-2rem)] w-64 flex-col p-2 z-30 transition-all duration-300 ${
          isCollapsed ? "opacity-0 -translate-x-full pointer-events-none !w-0 !p-0 !border-0 overflow-hidden" : ""
        }`}
      >
        <div className="capsule-panel flex h-full flex-col justify-between p-3.5 overflow-y-auto">
          
          {/* Header: Identity & Collapse Button */}
          <div>
            <div className="flex items-center justify-between pb-3 border-b" style={{ borderColor: "var(--border-subtle)" }}>
              <a href="#" className="flex items-center gap-2.5 group">
                <div className="h-7 w-7 rounded-lg flex items-center justify-center font-bold text-xs bg-blue-600 text-white shadow-xs group-hover:scale-105 transition">
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
              </a>

              <button
                onClick={onToggleCollapse}
                title="Collapse sidebar"
                className="p-1.5 rounded-lg border text-xs cursor-pointer transition hover:bg-black/5 dark:hover:bg-white/5"
                style={{ borderColor: "var(--border)", color: "var(--ink-muted)" }}
              >
                <PanelLeftClose className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Contact Action */}
            <button
              onClick={onOpenContact}
              className="mt-3.5 w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl border text-xs font-semibold transition hover:border-blue-500 group shadow-xs cursor-pointer"
              style={{ background: "var(--sidebar-bg)", borderColor: "var(--border)", color: "var(--ink)" }}
            >
              <Mail className="w-3.5 h-3.5 text-blue-500 group-hover:scale-110 transition" />
              <span>Get in touch</span>
            </button>

            {/* Navigation Groups */}
            <nav className="mt-4 space-y-4">
              <div className="space-y-1">
                <a
                  href="#about"
                  className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition hover:bg-black/5 dark:hover:bg-white/5"
                  style={{ color: "var(--ink)" }}
                >
                  <Home className="w-3.5 h-3.5 text-blue-500" /> Overview
                </a>
                <a
                  href="#experience"
                  className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition hover:bg-black/5 dark:hover:bg-white/5"
                  style={{ color: "var(--ink-muted)" }}
                >
                  <Briefcase className="w-3.5 h-3.5 text-emerald-500" /> Experience
                </a>
                <a
                  href="#projects"
                  className="flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-medium transition hover:bg-black/5 dark:hover:bg-white/5"
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
                  className="flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-medium transition hover:bg-black/5 dark:hover:bg-white/5"
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
                  className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition hover:bg-black/5 dark:hover:bg-white/5"
                  style={{ color: "var(--ink-muted)" }}
                >
                  <Activity className="w-3.5 h-3.5 text-emerald-400" /> GitHub Activity
                </a>
              </div>

              {/* Secondary Navigation */}
              <div className="space-y-1 pt-2 border-t" style={{ borderColor: "var(--border-subtle)" }}>
                <span className="text-[10px] font-bold tracking-wider uppercase px-2.5" style={{ color: "var(--ink-faint)" }}>
                  Explore
                </span>
                <a
                  href="#writing"
                  className="flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs transition hover:bg-black/5 dark:hover:bg-white/5"
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
                  className="flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs transition hover:bg-black/5 dark:hover:bg-white/5"
                  style={{ color: "var(--ink-muted)" }}
                >
                  <span className="flex items-center gap-2.5">
                    <Wrench className="w-3.5 h-3.5" /> Setup & Gear
                  </span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded-full border" style={{ borderColor: "var(--border)", color: "var(--ink-faint)" }}>
                    12
                  </span>
                </a>
                <a
                  href="#resources"
                  className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg text-xs transition hover:bg-black/5 dark:hover:bg-white/5"
                  style={{ color: "var(--ink-muted)" }}
                >
                  <Package className="w-3.5 h-3.5" /> Free Resources
                </a>
              </div>
            </nav>
          </div>

          {/* Bottom Area: Poke Counter, Timezone, Socials, Theme Toggle */}
          <div className="space-y-3 pt-3 border-t" style={{ borderColor: "var(--border-subtle)" }}>
            
            {/* Interactive Poke Widget */}
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

            {/* Timezone & Footer Controls */}
            <div className="flex items-center justify-between text-xs pt-1" style={{ color: "var(--ink-muted)" }}>
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                <span className="text-[11px] font-mono">
                  {profileData.timezone} {currentTime ? `· ${currentTime}` : ""}
                </span>
              </div>

              <div className="flex items-center gap-1">
                {/* Theme Switcher Button */}
                <button
                  onClick={toggleTheme}
                  title={`Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`}
                  className="p-1 rounded-md border text-xs cursor-pointer transition hover:border-blue-500"
                  style={{ borderColor: "var(--border)", background: "var(--surface)", color: "var(--ink)" }}
                >
                  {theme === "dark" ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-blue-500" />}
                </button>

                <a
                  href={profileData.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-1 rounded hover:opacity-75 transition"
                  title="GitHub"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                </a>
                <a
                  href={profileData.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-1 rounded hover:opacity-75 transition"
                  title="LinkedIn"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                </a>
                {profileData.socials.twitter && (
                  <a
                    href={profileData.socials.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1 rounded hover:opacity-75 transition"
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
