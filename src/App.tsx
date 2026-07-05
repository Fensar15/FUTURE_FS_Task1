import React, { useState, useEffect } from "react";
import { Sun, Moon, Briefcase, Code, User, MessageSquare, Menu, X, ArrowUpRight, ShieldCheck, Heart } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Dashboard from "./components/Dashboard";
import Chatbot from "./components/Chatbot";
import { developerBio } from "./data";

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check initial user preference or cache
    const saved = localStorage.getItem("theme");
    return saved === "dark" || (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches);
  });

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // Handle setting dark mode classes on root HTML element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Setup active section indicator on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero-section", "about-section", "projects-section", "dashboard-section", "contact-section"];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId.replace("-section", ""));
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-100 text-zinc-900 transition-colors duration-200 dark:bg-zinc-950 dark:text-zinc-100 font-sans">
      
      {/* Navigation Header */}
      <header className="sticky top-0 z-40 w-full border-b border-zinc-900/10 bg-zinc-50/80 backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/80">
        <div className="mx-auto flex max-w-5xl h-16 items-center justify-between px-6">
          
          {/* Logo / Personal Branding */}
          <button
            onClick={() => scrollTo("hero-section")}
            className="flex items-center gap-2 font-display font-black text-zinc-900 dark:text-white hover:opacity-90 tracking-tight"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-black text-sm">
              SG
            </div>
            <span className="hidden sm:inline text-xs font-mono uppercase tracking-wider">{developerBio.name}</span>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6">
            <button
              id="nav-about"
              onClick={() => scrollTo("about-section")}
              className={`text-xs font-mono uppercase tracking-wider transition-colors ${
                activeSection === "about"
                  ? "text-blue-600 dark:text-blue-400 font-bold"
                  : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
              }`}
            >
              Resume
            </button>
            <button
              id="nav-projects"
              onClick={() => scrollTo("projects-section")}
              className={`text-xs font-mono uppercase tracking-wider transition-colors ${
                activeSection === "projects"
                  ? "text-blue-600 dark:text-blue-400 font-bold"
                  : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
              }`}
            >
              Projects
            </button>
            <button
              id="nav-dashboard"
              onClick={() => scrollTo("dashboard-section")}
              className={`text-xs font-mono uppercase tracking-wider transition-colors ${
                activeSection === "dashboard"
                  ? "text-blue-600 dark:text-blue-400 font-bold"
                  : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
              }`}
            >
              Analytics
            </button>
            <button
              id="nav-contact"
              onClick={() => scrollTo("contact-section")}
              className={`text-xs font-mono uppercase tracking-wider transition-colors ${
                activeSection === "contact"
                  ? "text-blue-600 dark:text-blue-400 font-bold"
                  : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Action Tools (Dark/Light Mode & Mobile Hamburger) */}
          <div className="flex items-center gap-3">
            
            {/* Dark Mode Toggle Button */}
            <button
              id="theme-toggle-btn"
              onClick={() => setDarkMode(!darkMode)}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-500 shadow-sm transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-850"
              title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {darkMode ? <Sun className="h-4 w-4 text-amber-500" /> : <Moon className="h-4 w-4 text-blue-500" />}
            </button>

            {/* Let's Collaborate Trigger */}
            <button
              onClick={() => scrollTo("contact-section")}
              className="hidden sm:inline-flex items-center gap-1.5 rounded-xl bg-zinc-900 dark:bg-white px-4 py-2 text-xs font-mono uppercase tracking-wider text-white dark:text-zinc-950"
            >
              Hire Me
              <ArrowUpRight className="h-3.5 w-3.5" />
            </button>

            {/* Mobile Menu Button */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-500 dark:border-zinc-800 dark:bg-zinc-900"
            >
              {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>

          </div>
        </div>

        {/* Mobile menu panel */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-zinc-200 bg-zinc-50 px-6 py-4 dark:border-zinc-800 dark:bg-zinc-950/95"
            >
              <nav className="flex flex-col gap-4">
                <button
                  onClick={() => scrollTo("about-section")}
                  className="text-left text-xs font-mono uppercase tracking-wider text-zinc-600 dark:text-zinc-300"
                >
                  Resume Details
                </button>
                <button
                  onClick={() => scrollTo("projects-section")}
                  className="text-left text-xs font-mono uppercase tracking-wider text-zinc-600 dark:text-zinc-300"
                >
                  Featured Projects
                </button>
                <button
                  onClick={() => scrollTo("dashboard-section")}
                  className="text-left text-xs font-mono uppercase tracking-wider text-zinc-600 dark:text-zinc-300"
                >
                  Recruiter Analytics
                </button>
                <button
                  onClick={() => scrollTo("contact-section")}
                  className="text-left text-xs font-mono uppercase tracking-wider text-zinc-600 dark:text-zinc-300"
                >
                  Get In Touch
                </button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>

      </header>

      {/* Main Sections Body */}
      <main>
        {/* 1. Hero / Intro Screen */}
        <Hero
          onContactClick={() => scrollTo("contact-section")}
          onExploreClick={() => scrollTo("projects-section")}
          onDashboardClick={() => {
            const el = document.getElementById("dashboard-section");
            if (el) {
              el.scrollIntoView({ behavior: "smooth" });
              // Automatically reveal the stats dashboard charts
              const showBtn = document.querySelector("#dashboard-section button");
              if (showBtn && showBtn.textContent?.includes("Show")) {
                (showBtn as HTMLButtonElement).click();
              }
            }
          }}
        />

        {/* 2. Resume / About Section */}
        <About />

        {/* 3. Projects Showcase Section */}
        <Projects />

        {/* 4. Telemetry Visualization Panel */}
        <Dashboard />

        {/* 5. Contact Form / Inbox Module */}
        <Contact />
      </main>

      {/* Embedded Chatbot AI Representative */}
      <Chatbot />

      {/* Sticky Bottom Frame Credit / Footer */}
      <footer className="border-t border-zinc-200 bg-zinc-50 dark:bg-zinc-900 py-12 px-6 text-center text-zinc-500 dark:border-zinc-800/60 dark:bg-zinc-950">
        <div className="mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold text-xs">
              SG
            </div>
            <span className="font-mono text-xs uppercase tracking-wider text-zinc-900 dark:text-white">
              Saron Getachew • Full-Stack Dev
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-xs font-mono">
            <ShieldCheck className="h-4 w-4 text-blue-500" />
            <span className="uppercase tracking-wider text-[10px]">Future Interns Batch // 2026</span>
          </div>

          <div className="flex items-center justify-center gap-1.5 text-xs font-mono text-[10px] uppercase tracking-wider">
            <span>React 19 & Express</span>
            <Heart className="h-3.5 w-3.5 text-rose-500 fill-rose-500" />
            <span>Core Ecosystem</span>
          </div>

        </div>
        <span className="mt-8 block text-[10px] font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-600">
          © {new Date().getFullYear()} Saron Getachew // Candidate Ref: INT-8809-X
        </span>
      </footer>

    </div>
  );
}
