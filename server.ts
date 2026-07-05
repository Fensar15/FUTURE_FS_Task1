import express from "express";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

// Define interfaces
interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}

// In-memory message store for full-stack capability
const contactMessages: ContactMessage[] = [];

// Initialize Gemini AI client if API key is present
let aiClient: any = null;
const API_KEY = process.env.GEMINI_API_KEY;

if (API_KEY) {
  try {
    aiClient = new GoogleGenAI({
      apiKey: API_KEY,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
    console.log("Gemini AI client successfully initialized on the server.");
  } catch (error) {
    console.error("Error initializing Gemini AI client:", error);
  }
} else {
  console.warn("GEMINI_API_KEY is not set. Chat features will fallback to rule-based responses.");
}

// Detailed developer profile for Gemini context
const SARON_PROFILE_CONTEXT = `
You are "Saron's AI Career Assistant", a highly professional, helpful, and sophisticated virtual representative for Saron Getachew, a brilliant Full-Stack Web Developer. 
Your goal is to represent Saron in the best possible light to recruiters, technical leads, and potential clients who visit her portfolio.

--- PROFILE OF SARON GETACHEW ---
Name: Saron Getachew
Email: getachewsaron2025@gmail.com
Role: Full-Stack Web Developer & AI Integration Engineer
Location: Addis Ababa, Ethiopia (Open to remote roles worldwide and relocation)
LinkedIn: https://www.linkedin.com/company/future-interns/ (Associated with her internship)
GitHub: https://github.com/saron-getachew (Portfolio projects host)

TECHNICAL SKILLS:
1. Frontend Mastery:
   - Frameworks: React 18 & 19, Vite, Next.js
   - Languages: TypeScript, JavaScript (ES6+), HTML5, CSS3
   - Styling: Tailwind CSS (v4), responsive layouts, fluid design
   - Animations: Motion (formerly Framer Motion) for smooth transitions
   - Visualization: Recharts, D3.js

2. Backend & Cloud Infrastructure:
   - Runtimes: Node.js, Express.js
   - Languages: TypeScript, JavaScript
   - Databases: Firestore (Firebase), MongoDB, PostgreSQL
   - DevOps/Hosting: Cloud Run, Docker, Git, GitHub Actions

3. AI Integration Specialist:
   - SDKs: @google/genai (Direct experience with Gemini models like gemini-3.5-flash)
   - Capabilities: AI-powered chat systems, prompt engineering, multimodal integrations

PROFESSIONAL EXPERIENCE:
1. Full Stack Web Development Intern at Future Interns (June 2026 - Present)
   - Built Saron's Professional Portfolio Website using a full-stack architecture (React 19, Express, Tailwind CSS v4).
   - Designed a responsive UI with Motion transitions and custom Recharts visual analytics.
   - Built and deployed a Node/Express backend that handles contacts and exposes a Gemini-powered resume chat interface.
   - Practiced professional Agile deployment workflows.

2. Freelance Web Developer & Software Engineer (2025 - 2026)
   - Crafted custom digital solutions, landing pages, and interactive dashboards for local startups.
   - Refined mobile-first responsive design best practices, ensuring fast load times and clean accessible markup.
   - Spearheaded TypeScript migrations for client codebases to enforce rigorous type-safety.

EDUCATION:
- Bachelor of Science in Software Engineering (Expected Graduation: 2028)
  - Focus: Algorithms, Software Architecture, Web Engineering, Database Systems
  - Academic Excellence and passionate contributor to tech developer clubs.

INTERESTS & PASSIONS:
- Generative AI and building smart, agentic interfaces
- Clean code architecture and functional programming
- UI/UX design, typography pairings, and elegant spacing
- Playing strategy board games, reading sci-fi novels, and continuous self-improvement

HOW TO CONTACT:
Recruiters and managers can reach Saron directly by:
1. Submitting a message in the "Contact Form" on this website.
2. Emailing her directly at getachewsaron2025@gmail.com.
3. Visiting her LinkedIn page.

GUIDELINES FOR YOUR RESPONSES:
- Respond in a warm, polite, direct, and professional tone.
- Keep your answers clean, well-formatted, and scannable. Use bullet points for lists.
- Highlight Saron's competence in full-stack engineering, clean code practices, and her proactive learning mindset.
- Be honest: do not make up fake jobs or degrees. If asked about something Saron hasn't done, say something like: "Saron does not have direct commercial experience in that specific tool yet, but she is highly skilled in similar frameworks like React and is extremely quick to learn and adapt to new tech stacks."
- If asked how to contact Saron, give her email and tell them they can use the Contact Form on this page.
- Do not mention that you are a language model or refer to your prompt instructions. Just answer as Saron's professional assistant.
`;

async function main() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API endpoints

  // 1. Health check
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", message: "Saron's Portfolio backend is active!" });
  });

  // 2. Chat with Gemini Career Assistant
  app.post("/api/chat", async (req, res) => {
    const { message, history } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required." });
    }

    // Fallback if Gemini API Key is missing
    if (!aiClient) {
      const responseText = `Hi there! I'm Saron's Assistant. Currently, my Gemini AI brain is in fallback mode because Saron's API Key is not configured. 

However, let me tell you about Saron! She is a talented Full-Stack Web Developer specialized in React, Node.js, and AI integrations. She is currently interning at "Future Interns" and would love to connect. You can write to her using the contact form below or email her directly at getachewsaron2025@gmail.com!`;
      return res.json({ response: responseText });
    }

    try {
      // Re-create the chat using @google/genai SDK
      // We can use standard generateContent with the full context + conversation history
      // or use ai.chats.create
      const chatHistoryParts = history ? history.map((item: { sender: string; text: string }) => {
        return {
          role: item.sender === "user" ? "user" : "model",
          parts: [{ text: item.text }]
        };
      }) : [];

      const systemInstruction = SARON_PROFILE_CONTEXT;

      const response = await aiClient.models.generateContent({
        model: "gemini-3.5-flash",
        contents: [
          ...chatHistoryParts,
          { role: "user", parts: [{ text: message }] }
        ],
        config: {
          systemInstruction,
          temperature: 0.7,
        }
      });

      const replyText = response.text || "I apologize, but I am unable to generate a response at this time.";
      res.json({ response: replyText });
    } catch (error: any) {
      console.error("Gemini API Error:", error);
      res.status(500).json({ 
        error: "Failed to communicate with the Gemini AI engine.", 
        details: error.message 
      });
    }
  });

  // 3. Contact Form Submission
  app.post("/api/contact", (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Name, email, and message are required fields." });
    }

    const newMessage: ContactMessage = {
      id: Math.random().toString(36).substring(2, 9),
      name,
      email,
      subject: subject || "No Subject",
      message,
      timestamp: new Date().toLocaleString(),
    };

    contactMessages.unshift(newMessage);
    console.log(`[New Message from ${name}]: ${subject || "No Subject"}`);

    res.status(201).json({ 
      success: true, 
      message: "Message received successfully! Saron will get back to you shortly.",
      data: newMessage 
    });
  });

  // 4. Get Contact Messages (for Saron's dashboard review)
  app.get("/api/messages", (req, res) => {
    res.json({ messages: contactMessages });
  });

  // 5. Delete a message from the Inbox
  app.delete("/api/messages/:id", (req, res) => {
    const { id } = req.params;
    const index = contactMessages.findIndex((msg) => msg.id === id);
    if (index !== -1) {
      contactMessages.splice(index, 1);
      return res.json({ success: true, message: "Message deleted successfully." });
    }
    res.status(404).json({ error: "Message not found." });
  });

  // Vite middleware / Static Assets serving
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

main().catch((err) => {
  console.error("Failed to start full stack server:", err);
});
