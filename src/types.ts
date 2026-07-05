export interface Project {
  id: string;
  title: string;
  description: string;
  category: "Frontend" | "Backend" | "Full-Stack" | "AI & Integration";
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
  features: string[];
  role: string;
  challenges: string;
}

export interface Skill {
  name: string;
  category: "Frontend" | "Backend" | "Databases" | "AI & Tools";
  level: number; // 1 to 5 (or percentage 100)
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  points: string[];
}

export interface EducationItem {
  school: string;
  degree: string;
  period: string;
  achievements: string[];
}

export interface ChatMessage {
  id: string;
  sender: "user" | "bot";
  text: string;
  timestamp: Date;
}

export interface BlogItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  content: string;
  category: string;
  likes: number;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}
