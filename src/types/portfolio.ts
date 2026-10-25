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
  period: string;
  description: string;
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
}

export interface TechStackCategory {
  category: string;
  colorClass: string;
  items: string[];
}

export interface PortfolioProfile {
  name: string;
  githubUsername: string;
  role: string;
  location: string;
  timezone: string;
  bioTeaser: string;
  fullBio?: string;
  email: string;
  discordHandle?: string;
  isOpenToWork: boolean;
  socials: {
    github: string;
    linkedin: string;
    twitter?: string;
    youtube?: string;
  };
}
