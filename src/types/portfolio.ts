export interface MetricItem {
  id: string;
  value: string;
  label: string;
  sublabel?: string;
  popoverTarget?: 'reach' | 'community' | 'projects';
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location?: string;
  period: string;
  description: string;
  highlights?: string[];
  tags: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  tag: string;
  emojiIcon?: string;
  image?: string;
  link?: string;
  isClient?: boolean;
  featured?: boolean;
}

export interface TechStackCategory {
  category: string;
  colorClass: string;
  items: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface ToolItem {
  id: string;
  name: string;
  subtitle: string;
  link?: string;
  icon: "antigravity" | "claude-design" | "claude-code";
}

export interface ExploreLinkItem {
  title: string;
  description: string;
  category: string;
  url?: string;
}

export interface PortfolioProfile {
  name: string;
  githubUsername: string;
  role: string;
  heading: string;
  location: string;
  timezone: string;
  bioTeaser: string;
  aboutBlurb: string;
  email: string;
  contactEmail: string;
  phone?: string;
  discordHandle?: string;
  isOpenToWork: boolean;
  socials: {
    github: string;
    linkedin: string;
    twitter?: string;
    youtube?: string;
  };
}
