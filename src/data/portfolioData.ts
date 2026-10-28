import {
  PortfolioProfile,
  MetricItem,
  ExperienceItem,
  ProjectItem,
  TechStackCategory,
  ServiceItem,
  ToolItem,
  ExploreLinkItem,
} from "@/types/portfolio";

export const profileData: PortfolioProfile = {
  name: "Marc Dalangin",
  githubUsername: "marcdalangin",
  role: "Software Developer",
  heading: "Marc Dalangin | Software Developer",
  location: "Manila, Philippines",
  timezone: "GMT+8",
  bioTeaser:
    "Remote web developer with 2+ years of async client and team work, building full-stack apps and automation tools in Python, TypeScript, React, and Node.js. Based in the Philippines (UTC+8), available for US/AU/EU overlap.",
  aboutBlurb:
    "I'm a full-stack developer with 2+ years of experience building reliable web applications and automation tools in Python, TypeScript, React, and Node.js. Based in Manila (UTC+8) with full availability for US, AU, and EU overlap, I specialize in eliminating operational bottlenecks—from crafting performant Next.js user interfaces to engineering custom Chrome extensions and automated data pipelines that turn manual tasks into seamless software.",
  email: "marcdarryl.work@gmail.com",
  contactEmail: "marcdarryl.dev@gmail.com",
  phone: "+639605699245",
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
    value: "2+ yrs",
    label: "Shipping in prod",
    sublabel: "Async team & client work",
  },
];

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-xietech",
    role: "Junior Software Engineer (Part-time)",
    company: "Confidential", // Displayed as Confidential as requested
    location: "Remote",
    period: "Jun 2026 - Oct 2026",
    description:
      "Built 14 responsive UI components for a Next.js/React 19 landing page using Shadcn and Tailwind CSS v4. Managed state with Zustand and shipped via static export to Cloudflare Pages.",
    highlights: [
      "Built 14 responsive UI components for a Next.js/React 19 landing page using Shadcn and Tailwind CSS v4.",
      "Managed state with Zustand and shipped via static export to Cloudflare Pages.",
    ],
    tags: ["Next.js", "React 19", "Shadcn", "Tailwind CSS v4", "Zustand", "Cloudflare Pages"],
  },
  {
    id: "exp-datacentric",
    role: "Data Analyst",
    company: "DataCentric Corporation",
    location: "Muntinlupa, PH",
    period: "Jul 2024 - Present",
    description:
      "Built a Chrome extension (JavaScript/TypeScript) that auto-creates data alerts, adopted by 55 teammates and cutting response time to data issues from 5 minutes to under 1 minute. Wrote Python scripts to validate 10,000+ live data points daily across multiple feeds, cutting manual QA effort. Partnered with 5+ teams to re-architect a data pipeline handoff process, reducing processing delays by ~20%. Prototyped a Manifest V3 Chrome extension that syncs fixtures every 30 minutes and exports CSV/HTML diff reports.",
    highlights: [
      "Built a Chrome extension (JavaScript/TypeScript) that auto-creates data alerts, adopted by 55 teammates and cutting response time to data issues from 5 minutes to under 1 minute.",
      "Wrote Python scripts to validate 10,000+ live data points daily across multiple feeds, cutting manual QA effort.",
      "Partnered with 5+ teams to re-architect a data pipeline handoff process, reducing processing delays by ~20%.",
      "Prototyped a Manifest V3 Chrome extension that syncs fixtures every 30 minutes and exports CSV/HTML diff reports.",
    ],
    tags: ["JavaScript", "TypeScript", "Python", "Chrome Extensions (Manifest V3)", "Data Pipelines"],
  },
  {
    id: "exp-knowles",
    role: "Software Developer Intern (Part-time)",
    company: "Knowles Training Institute",
    location: "Remote",
    period: "Feb 2024 - Jul 2024",
    description:
      "Streamlined cloud provisioning with Python Infrastructure-as-Code scripts, cutting provisioning time by 60%. Resolved incidents 40% faster by automating monitoring and alerting. Maintained legacy migration logic by refactoring it for better performance and PEP 8 compliance.",
    highlights: [
      "Streamlined cloud provisioning with Python Infrastructure-as-Code scripts, cutting provisioning time by 60%.",
      "Resolved incidents 40% faster by automating monitoring and alerting.",
      "Maintained legacy migration logic by refactoring it for better performance and PEP 8 compliance.",
    ],
    tags: ["Python", "Infrastructure as Code", "Cloud Provisioning", "Alerting & Monitoring", "PEP 8"],
  },
  {
    id: "exp-freelance",
    role: "Software Developer",
    company: "Freelance",
    location: "Remote",
    period: "Feb 2023 - Jun 2024",
    description:
      "Developed responsive full stack web applications for 5 student clients' capstone projects, from requirements to deployment. Built booking and scheduling features for 2 projects using Node.js and Google Calendar API. Automated AWS and Docker deployments, improving release reliability and reducing setup time by 70%.",
    highlights: [
      "Developed responsive full stack web applications for 5 student clients' capstone projects, from requirements to deployment.",
      "Built booking and scheduling features for 2 projects using Node.js and Google Calendar API.",
      "Automated AWS and Docker deployments, improving release reliability and reducing setup time by 70%.",
    ],
    tags: ["Full Stack", "Node.js", "Google Calendar API", "AWS", "Docker"],
  },
];

// Preserved in data source but gated behind sectionFlags.clientProjects
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
];

export const personalProjectsData: ProjectItem[] = [
  {
    id: "fixture-checker",
    title: "Fixture Checker",
    description: "Manifest V3 Chrome extension that syncs fixtures every 30 minutes and exports CSV/HTML diff reports.",
    tag: "Chrome Extension",
    emojiIcon: "🔄",
    link: "https://github.com/marcdalangin/fixture-checker-v1",
    featured: true,
  },
];

// CV Tech Stack - Shared single source of truth
export const techStackData: TechStackCategory[] = [
  {
    category: "Languages",
    colorClass: "text-blue-500",
    items: ["Python", "JavaScript", "TypeScript"],
  },
  {
    category: "Frontend",
    colorClass: "text-emerald-500",
    items: ["React", "Next.js", "Tailwind CSS", "Zustand"],
  },
  {
    category: "Backend and Cloud",
    colorClass: "text-purple-500",
    items: ["AWS", "Docker", "Infrastructure as Code", "Cloudflare Pages"],
  },
  {
    category: "Tools",
    colorClass: "text-amber-500",
    items: ["Git", "Slack", "Notion", "Jira", "Chrome Extensions (Manifest V3)", "Web Scraping"],
  },
];

// Explore > Services Data
export const servicesData = {
  currentlyWorkingWith:
    "Currently collaborating with an emerging fintech startup in the Philippines, developing automated data pipelines and mission-critical internal tooling.",
  whatIBuild: [
    {
      id: "workflow-automation",
      title: "Workflow Automation",
      description:
        "Custom automation scripts and bots that eliminate repetitive manual data entry, accelerate turnaround times, and streamline operational handoffs.",
      icon: "⚡",
    },
    {
      id: "ai-assistants",
      title: "AI Assistants",
      description:
        "Targeted LLM-powered tools and intelligent intake assistants designed to parse documents, extract key insights, and automate routine inquiries.",
      icon: "🤖",
    },
    {
      id: "integrations",
      title: "Integrations",
      description:
        "Robust API bridges connecting third-party platforms, scheduling services, cloud providers, and internal databases into cohesive, automated data flows.",
      icon: "🔌",
    },
    {
      id: "custom-crms",
      title: "Custom CRMs",
      description:
        "Tailored client intake and pipeline management dashboards built specifically around how your team operates, without the complexity of off-the-shelf software.",
      icon: "📊",
    },
  ] as ServiceItem[],
  ctaEmail: "marcdarryl.dev@gmail.com",
};

// Explore > Resources > Tools I Use (Styled matching reference list design)
export const toolsIUseData: ToolItem[] = [
  {
    id: "antigravity",
    name: "Antigravity",
    subtitle: "Google AI Pro",
    link: "https://antigravity.google",
    icon: "antigravity",
  },
  {
    id: "claude-design",
    name: "Claude Design",
    subtitle: "For designing",
    link: "https://claude.ai",
    icon: "claude-design",
  },
];

// Explore > Links (Structured for future URLs, rendered non-clickable for now)
export const exploreLinksData: ExploreLinkItem[] = [
  {
    title: "Next.js & Turbopack Patterns",
    description: "Curated performance techniques and component architectures for React 19 web applications.",
    category: "Engineering",
  },
  {
    title: "Manifest V3 Extension Playbook",
    description: "Architectural guidelines for service workers, fixture synchronization, and DOM injection.",
    category: "Extensions",
  },
  {
    title: "Python Data Pipeline Automation",
    description: "Idempotent batch processing, automated validation checks, and data alert architectures.",
    category: "Automation",
  },
];
