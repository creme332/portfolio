export interface Project {
  name: string;
  description: string;
  color?: string;
  repository: string;
  live_url?: string;
  languages: string[];
  tools: string[];
  screenshots: string[];
  shape: "octagon" | "parallelogram" | "test";
}

export interface SocialLink {
  name: string;
  url: string;
}
