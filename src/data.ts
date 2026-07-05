import { Project, Skill, ExperienceItem, EducationItem, BlogItem } from "./types";

export const developerBio = {
  name: "Saron Getachew",
  title: "Full-Stack Web Developer & AI Specialist",
  subTitle: "Building the next generation of intelligent, responsive web experiences.",
  email: "getachewsaron2025@gmail.com",
  location: "Addis Ababa, Ethiopia (Open to Remote Worldwide)",
  github: "https://github.com/saron-getachew",
  linkedin: "https://www.linkedin.com/company/future-interns/",
  aboutMe: "I am a passionate Full-Stack Developer specializing in React, Node.js, and modern AI implementations. As an engineer, I focus on the intersection of clean structural code, fluid visual aesthetics, and intelligent workflows. I love building web applications that are not only highly optimized but also delightful for users. Currently, I am expanding my skills through real-world projects, including my work at Future Interns, where I design production-ready, highly interactive full-stack applications.",
  tagline: "I write clean, type-safe code, deploy scalable backends, and build agentic AI integrations that elevate web applications.",
};

export const skillsData: Skill[] = [
  // Frontend
  { name: "React 18 & 19", category: "Frontend", level: 5 },
  { name: "TypeScript", category: "Frontend", level: 5 },
  { name: "Tailwind CSS v4", category: "Frontend", level: 5 },
  { name: "Vite", category: "Frontend", level: 5 },
  { name: "Next.js", category: "Frontend", level: 4 },
  { name: "Motion (Animations)", category: "Frontend", level: 4.5 },
  
  // Backend
  { name: "Node.js", category: "Backend", level: 4.5 },
  { name: "Express.js", category: "Backend", level: 4.5 },
  { name: "REST APIs", category: "Backend", level: 5 },
  { name: "GraphQL", category: "Backend", level: 3.5 },
  
  // Databases
  { name: "PostgreSQL", category: "Databases", level: 4 },
  { name: "MongoDB", category: "Databases", level: 4.5 },
  { name: "Firestore (Firebase)", category: "Databases", level: 4.5 },
  { name: "Cloud SQL", category: "Databases", level: 3.5 },

  // AI & Tools
  { name: "Gemini API (@google/genai)", category: "AI & Tools", level: 5 },
  { name: "Prompt Engineering", category: "AI & Tools", level: 5 },
  { name: "Git & GitHub", category: "AI & Tools", level: 4.5 },
  { name: "Docker", category: "AI & Tools", level: 3.5 },
];

export const experienceData: ExperienceItem[] = [
  {
    id: "exp1",
    role: "Full Stack Web Development Intern",
    company: "Future Interns",
    period: "June 2026 - Present",
    description: "Developing robust, elegant, and modern web applications as part of the Future Interns program.",
    points: [
      "Built and launched this fully-functional professional portfolio, complete with an Express backend, Recharts visualization panel, and floating Gemini AI chatbot.",
      "Engineered type-safe interfaces using TypeScript and integrated smooth motion animations via the Motion library.",
      "Developed robust API proxy routes to securely access LLM capabilities without exposing API keys to the client side.",
      "Created dynamic dashboards showcasing local message analytics and traffic statistics.",
    ],
  },
  {
    id: "exp2",
    role: "Freelance Full-Stack Developer",
    company: "DigitalCraft Studios",
    period: "2025 - 2026",
    description: "Crafted customized digital web solutions for early-stage startups and small businesses.",
    points: [
      "Designed and implemented 10+ pixel-perfect responsive websites with elegant dark/light theme options.",
      "Optimized client-side bundles and image assets, boosting Lighthouse performance scores by over 30%.",
      "Deployed relational and non-relational database schemas, creating fully functional e-commerce dashboards and secure checkout pipelines.",
    ],
  },
];

export const educationData: EducationItem[] = [
  {
    school: "Addis Ababa Institute of Technology (AAiT)",
    degree: "Bachelor of Science in Software Engineering",
    period: "2024 - 2028 (Expected)",
    achievements: [
      "Top 10% in Software Architecture and Advanced Database Management modules.",
      "Active team leader at the AAiT Developer Club, guiding workshops on React and TypeScript.",
      "Spearheaded a group project that built an automated campus roommate matcher algorithm using Node.js.",
    ],
  },
];

export const projectsData: Project[] = [
  {
    id: "proj-portfolio-ai",
    title: "AI-Integrated Full-Stack Portfolio",
    description: "A professional developer portfolio featuring a secure Express proxy, interactive message inbox, and a customized Gemini AI chatbot trained on my resume.",
    category: "AI & Integration",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80",
    tags: ["React 19", "Express", "Tailwind CSS v4", "Gemini API", "TypeScript", "Motion"],
    github: "https://github.com/saron-getachew/portfolio-ai-assistant",
    features: [
      "Express.js backend server serving Vite SPA static bundles and handling secured API proxies",
      "Dynamic chatbot interface built using the official modern @google/genai TypeScript SDK",
      "Full-stack contact form pipeline saving messages into a server inbox dashboard",
      "Custom responsive design using Tailwind v4 theme configurations",
    ],
    role: "Lead Full-Stack & AI Engineer",
    challenges: "Configuring the official Google GenAI SDK to safely parse custom systemic context instructions on the Express backend, ensuring the chatbot maintains its specialized persona even under long conversational histories.",
  },
  {
    id: "proj-future-dash",
    title: "Analytics & Traffic Visualization Panel",
    description: "A beautiful telemetry dashboard designed to measure recruiter engagement, portfolio views, and contact submissions using D3-based Recharts analytics.",
    category: "Full-Stack",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "TypeScript", "Recharts", "Lucide Icons", "Flexbox/Grid"],
    github: "https://github.com/saron-getachew/recharts-telemetry",
    features: [
      "Responsive layout integrating multiple scannable metric cards (Views, Conversions, Duration)",
      "AreaChart, BarChart, and PieChart components modeling realistic engagement flows",
      "Syncing in-real-time with incoming contact form entries to update statistics dynamically",
      "Optimized modular rendering patterns avoiding re-render bottlenecks during animation loops",
    ],
    role: "Frontend Visualization Engineer",
    challenges: "Ensuring chart containers dynamically resize perfectly across mobile and ultra-wide displays without overflowing their parents or causing browser page reflow issues.",
  },
  {
    id: "proj-realtime-collab",
    title: "EcoSphere Collaborative Environment",
    description: "An elegant ecological-themed project workspace where teams map clean-energy milestones, complete with persistent card drawers and mock task trackers.",
    category: "Frontend",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    tags: ["React 19", "Tailwind CSS v4", "LocalStorage Persistence", "SVG Icons"],
    github: "https://github.com/saron-getachew/ecosphere-collab",
    features: [
      "Custom draggable task Kanban board designed purely using tailwind flex utilities",
      "Local state syncing to prevent any data loss when closing or reloading browsers",
      "Polished dark mode toggle showing an immersive green neon futuristic styling",
      "Custom micro-animations utilizing responsive SVG vectors for interactive feedback",
    ],
    role: "UI/UX & Frontend Developer",
    challenges: "Architecting standard drag-and-drop feedback loops using pure HTML5 handlers and React state, eliminating the dependency on massive, slow external libraries.",
  },
];

export const blogsData: BlogItem[] = [
  {
    id: "blog1",
    title: "Building Secure AI Applications with Node.js and Gemini",
    excerpt: "Why you should never call LLM APIs directly from the browser, and how to design a lightweight Express proxy to secure your credentials.",
    date: "July 2, 2026",
    readTime: "4 min read",
    content: "The golden rule of integrating artificial intelligence into frontend web applications is: **Keep your API keys in the backend**. When importing packages like `@google/genai` directly into React code, you are shipping your critical credential keys to every user's browser DevTools.\n\nTo prevent key leaks, always build an intermediate Express backend routing. When the user inputs text on the frontend, standard client-side `fetch` transfers it to a backend endpoint like `/api/chat`. The backend, loaded safely with process.env.GEMINI_API_KEY, processes the query and returns the structured response back.\n\nNot only is this pattern safe, but it also allows developers to inject robust system instructions (like custom resume details, restricting malicious instructions, or formatting JSON response schemas) without letting users manipulate the original prompts.",
    category: "AI & Security",
    likes: 24,
  },
  {
    id: "blog2",
    title: "Mastering Fluid Layouts with Tailwind CSS v4",
    excerpt: "Diving deep into Tailwind v4's new CSS-driven theme configuration, improved performance, and elegant container layouts.",
    date: "June 18, 2026",
    readTime: "5 min read",
    content: "Tailwind CSS v4 is a game-changer for modern front-end engineers. By shifting configurations from Javascript (`tailwind.config.js`) into native CSS stylesheet directives (`@theme`), the compiler achieves incredible compilation speed and integrates seamlessly with modern build systems like Vite.\n\nIn this article, we cover how to declare custom fonts, leverage fluid container layouts (`max-w-7xl mx-auto`), and build cohesive interactive styling using nested responsive selectors. Spacing rhythm, font pairings, and color contrast are the core pillars of modern high-fidelity portfolios.",
    category: "CSS & Design",
    likes: 18,
  },
];
