# Saron Getachew | Full-Stack AI-Integrated Portfolio Enginehttps:

Welcome to my professional software engineering portfolio! This is a state-of-the-art, high-fidelity, full-stack application designed to showcase my experience, projects, and technical capabilities, while demonstrating real-time interactive engineering.

🚀 **Live Preview:** [Explore the Interactive App](https://personal-portfolio-694828975515.europe-west2.run.app)

---

## 🎨 Overview & Design Concept

This portfolio is built with a minimalist, high-contrast, professional "Cosmic Zinc" theme. It focuses on beautiful typography pairings (Space Grotesk & Inter paired with JetBrains Mono), visual grid hierarchies, and modular interactive bento cards.

Instead of a static brochure, this application operates as a **live full-stack demonstration system**, serving an Express backend server coupled with Vite-managed React frontend routes.

---

## ⚡ Key Architectural Modules

### 1. 🤖 Agentic Gemini Career Assistant
* **Secure Backend Proxy:** Built to prevent API key exposure in client browsers, a dedicated Express API route proxies client messages directly to Google Gemini.
* **Modern Integration:** Powered by the official, modern `@google/genai` TypeScript SDK.
* **Resume-Trained System Prompt:** Configured with specific systemic instructions, enabling the chatbot to act as my professional representative and answer recruiter inquiries regarding my skills, projects, and work history.

### 2. 📈 Recruiter Metric Pipeline (Interactive Telemetry)
* **D3-Powered Recharts Dashboard:** Visualizes portfolio performance metrics, monthly page views, and inquiry distributions.
* **State Synchronization:** Fully dynamic telemetry toggles allowing prospective recruiters to toggle open full graph visualizations.

### 3. 📥 Interactive Server Message Inbox
* **Node.js Message Broker:** Implemented a backend system that processes incoming recruiter contact form submissions securely in memory.
* **Dynamic Client Sync:** Contact entries are transmitted to the server and instantly populate Saron's live "Server Message Inbox" panel, complete with real-time refresh triggers and memory deletion controls.

### 4. 💫 Tailwind CSS v4 & Fluid Transitions
* **CSS-First Theme Engine:** Leverages Tailwind v4's CSS configuration architecture for ultra-fast styling compilation.
* **Micro-Animations:** Fluid, elegant entry transitions and hover states utilizing the standard modern `motion` package.

---

## 🛠️ Technical Stack

* **Frontend:** React 19, TypeScript, Tailwind CSS v4, Motion (Animations), Recharts, Lucide Icons
* **Backend:** Node.js, Express.js (static server + secure API gateway)
* **AI Integration:** Google GenAI SDK (`@google/genai`)
* **Build System:** Vite, esbuild, tsx (dev loader)

---

## ⚙️ Quick Start & Local Setup

Get the application up and running on your local workstation in three simple steps:

### 1. Clone & Install Dependencies
```bash
# Clone the repository
git clone https://github.com/saron-getachew/portfolio-ai-assistant.git
cd portfolio-ai-assistant

# Install Node modules
npm install
```

### 2. Configure Environment Secrets
Create a `.env` file in the root directory and add your Google Gemini API key:
```env
# Root .env configuration
GEMINI_API_KEY=your_actual_gemini_api_key_here
```

### 3. Launch Development Server
```bash
# Start the Express & Vite dev server
npm run dev
```
The server will boot on `http://localhost:3000`. Open your browser to explore the live interactive app!

---

## 📦 Production Bundling

To compile and package the app for cloud container deployment:
```bash
# Build Vite client files & bundle the Express backend with esbuild
npm run build

# Start the optimized production server
npm run start
```

---

## 🤝 Let's Connect!

I am actively searching for software engineering internships, remote positions, and full-stack project collaborations! 

* **Email:** [getachewsaron2025@gmail.com](mailto:getachewsaron2025@gmail.com)
* **GitHub:** [@saron-getachew](https://github.com/Fensar15)
* **LinkedIn:** [Saron Getachew on LinkedIn](https://www.linkedin.com/in/saron-chala-7a7207380?utm_source=share_via&utm_content=profile&utm_medium=member_android)

---
*Created as part of the Future Interns program, showcasing modern web engineering, security best practices, and elegant system visuals.*
