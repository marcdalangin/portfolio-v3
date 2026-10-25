import { PortfolioProfile, MetricItem, ExperienceItem, ProjectItem, TechStackCategory } from "@/types/portfolio";

export const profileData: PortfolioProfile = {
  name: "Marc Dalangin",
  githubUsername: "marcdalangin",
  role: "Full-Stack Developer & AI Systems Builder",
  location: "Manila, Philippines",
  timezone: "GMT+8",
  bioTeaser:
    "I integrate custom systems where a business needs them most, turning manual grunt work into seamless automations built around how each firm actually runs. I dropped out of college to focus on building projects and growing my skills the non-traditional way.",
  fullBio:
    "I believe that to keep up in this fast-moving tech space, you have to step out of your comfort zone: learn, explore, and build things yourself. Beyond freelance consulting, I run a developer community teaching AI-native engineering and open-source tooling.",
  email: "hello@marcdalangin.com",
  discordHandle: "@marcdalangin",
  isOpenToWork: true,
  socials: {
    github: "https://github.com/marcdalangin",
    linkedin: "https://linkedin.com/in/marcdalangin",
    twitter: "https://x.com/marcdalangin",
    youtube: "https://youtube.com",
  },
};

export const metricsData: MetricItem[] = [
  {
    id: "reach",
    value: "12k+",
    label: "Community Reach",
    sublabel: "Details ↗",
    popoverTarget: "reach",
  },
  {
    id: "discord",
    value: "850+",
    label: "Private dev hub",
    sublabel: "Discord members",
  },
  {
    id: "shipping",
    value: "3+ yrs",
    label: "Shipping in prod",
    sublabel: "Active clients",
  },
];

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Full-Stack & AI Systems Builder",
    company: "Freelance Consulting",
    period: "2024 to Present",
    description:
      "Build custom CRMs, internal intake workflows, and automated LLM agents for US law firms and solar enterprises, owning implementation from database architecture to production deployment and handoff.",
    tags: ["Next.js", "TypeScript", "Convex", "PostgreSQL", "Vercel AI SDK", "Claude Code"],
  },
  {
    id: "exp-2",
    role: "Full-Stack Engineer",
    company: "Dev Community & SaaS Lab",
    period: "2023 to 2024",
    description:
      "Developed collaborative kanban engines, automated lead-capture web applications, and educational platforms serving hundreds of active software developers.",
    tags: ["React", "Node.js", "Express", "Tailwind CSS", "Zustand", "SQLite"],
  },
];

export const clientProjectsData: ProjectItem[] = [
  {
    id: "shlf",
    title: "SHLF Legal Intake & Workflow CRM",
    description: "Custom CRM that consolidates a law firm's intake, document workflows, and client scoring in one portal.",
    tag: "US Law Firm",
    emojiIcon: "⚖️",
    link: "https://github.com/marcdalangin",
    isClient: true,
  },
  {
    id: "solar-crm",
    title: "Salinas Solar Sales & Messenger Bot",
    description: "Sales CRM with an autonomous AI Messenger bot that qualifies incoming residential solar leads.",
    tag: "Solar Tech",
    emojiIcon: "☀️",
    link: "https://github.com/marcdalangin",
    isClient: true,
  },
  {
    id: "ipad-form",
    title: "JL iPad Consultation & Audio Sync",
    description: "Offline-first iPad consultation recording and interview site synced straight to law firm intake pipelines.",
    tag: "Legal Tech",
    emojiIcon: "📋",
    link: "https://github.com/marcdalangin",
    isClient: true,
  },
  {
    id: "contract-analyzer",
    title: "Automated Contract Redlining Engine",
    description: "LLM pipeline auditing commercial contract discrepancies against client playbook definitions.",
    tag: "Fintech",
    emojiIcon: "📑",
    link: "https://github.com/marcdalangin",
    isClient: true,
  },
];

export const personalProjectsData: ProjectItem[] = [
  {
    id: "voogle-edit",
    title: "Voogle Video AI Studio",
    description: "Automated short-form video generation & smart captions with Claude Code and FFmpeg hooks.",
    tag: "AI Creator Tool",
    emojiIcon: "🎬",
    link: "https://github.com/marcdalangin",
  },
  {
    id: "taskflow",
    title: "TaskFlow Collaborative Engine",
    description: "Zero-latency collaborative kanban board with optimistic UI updates and SQLite local sync.",
    tag: "Productivity",
    emojiIcon: "⚡",
    link: "https://github.com/marcdalangin",
  },
  {
    id: "devph-hub",
    title: "AI Dev PH Community Platform",
    description: "Free interactive courseware and project repository for Filipino AI engineers.",
    tag: "Community",
    emojiIcon: "🇵🇭",
    link: "https://github.com/marcdalangin",
  },
];

export const techStackData: TechStackCategory[] = [
  {
    category: "Frontend & UI",
    colorClass: "text-blue-500",
    items: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "shadcn/ui", "TanStack Query", "Zustand", "Framer Motion"],
  },
  {
    category: "Backend & Cloud",
    colorClass: "text-emerald-500",
    items: ["Convex", "Convex Auth", "Node.js", "PostgreSQL", "Supabase", "SQLite", "Express", "Python", "Vercel"],
  },
  {
    category: "AI & LLM Workflows",
    colorClass: "text-purple-500",
    items: ["Vercel AI SDK", "Claude Code", "Gemini API", "OpenRouter", "Tool Calling", "Prompt Architecture", "Embeddings"],
  },
  {
    category: "DevOps & Engineering",
    colorClass: "text-amber-500",
    items: ["Git", "GitHub Actions", "Turbopack", "Docker", "Vitest", "Playwright", "Linux / Bash"],
  },
];
