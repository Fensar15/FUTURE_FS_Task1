import React from "react";
import { Mail, Github, Linkedin, FileText, ArrowDown, MapPin, Sparkles, Terminal } from "lucide-react";
import { motion } from "motion/react";
import { developerBio } from "../data";

interface HeroProps {
  onContactClick: () => void;
  onExploreClick: () => void;
  onDashboardClick: () => void;
}

export default function Hero({ onContactClick, onExploreClick, onDashboardClick }: HeroProps) {
  // Mock function for download notification
  const handleDownloadResume = () => {
    alert("Starting download: Saron_Getachew_FullStack_Resume.pdf (Mock File)");
  };

  return (
    <section id="hero-section" className="relative px-6 py-12 md:py-20 bg-zinc-100 dark:bg-zinc-950">
      <div className="mx-auto max-w-5xl">
        
        {/* Bento Grid Header */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 border-b border-zinc-900/10 dark:border-zinc-800 pb-4">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-1">
              SYSTEM PORTFOLIO ENGINE // v2.6.0
            </p>
            <h1 className="text-3xl md:text-4xl font-black tracking-tighter text-zinc-900 dark:text-white uppercase">
              SARON GETACHEW // SYSTEM CORE
            </h1>
          </div>
          <div className="text-left md:text-right mt-3 md:mt-0">
            <p className="text-xs font-mono uppercase text-zinc-500">Candidate Ref:</p>
            <p className="text-base md:text-lg font-bold font-mono text-blue-600 dark:text-blue-400">INT-8809-X</p>
          </div>
        </header>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          
          {/* Card 1: Welcome & Mission (Main bento card) */}
          <div className="md:col-span-8 bg-zinc-900 text-white p-6 md:p-8 rounded-3xl flex flex-col justify-between shadow-sm border border-zinc-800 min-h-[300px]">
            <div>
              <span className="px-2.5 py-1 bg-zinc-800 text-[10px] rounded uppercase font-mono tracking-wider text-zinc-300">
                SYSTEM SUMMARY
              </span>
              <h2 className="text-2xl md:text-3xl font-black mt-4 leading-tight tracking-tight uppercase">
                Bridging Creative Systems & Full-Stack Reliability.
              </h2>
              <p className="mt-3 text-sm text-zinc-400 max-w-xl leading-relaxed">
                {developerBio.tagline}
              </p>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-between sm:items-center">
              <div className="flex gap-4 items-center flex-1 max-w-xs">
                <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full w-4/5 bg-blue-500"></div>
                </div>
                <span className="text-[10px] font-mono whitespace-nowrap text-zinc-400 uppercase tracking-widest">
                  80% PORTFOLIO VERIFICATION
                </span>
              </div>
              
              <div className="flex gap-3 text-zinc-400 text-xs">
                <span className="font-mono text-zinc-500">LOC:</span>
                <span className="font-semibold text-zinc-200">{developerBio.location}</span>
              </div>
            </div>
          </div>

          {/* Card 2: Your Mentor / Quick Contacts */}
          <div className="md:col-span-4 bg-white border border-zinc-200/80 p-6 rounded-3xl shadow-sm flex flex-col justify-between dark:bg-zinc-900 dark:border-zinc-800 min-h-[300px]">
            <div>
              <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-4 font-mono">
                Primary Operator Contact
              </p>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-zinc-900 dark:bg-zinc-800 text-white rounded-full flex items-center justify-center font-black text-sm">
                  SG
                </div>
                <div>
                  <h3 className="font-black text-sm uppercase text-zinc-900 dark:text-zinc-100">{developerBio.name}</h3>
                  <p className="text-xs text-blue-600 dark:text-blue-400 font-mono">Full-Stack Dev</p>
                </div>
              </div>
              <p className="text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                Currently open for collaborative syncs, internships, or high-priority engineering contributions in the 2026 Batch.
              </p>
            </div>

            {/* Social icons row */}
            <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800/60 flex items-center justify-between">
              <div className="flex gap-3.5">
                <a
                  href={developerBio.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 transition-colors hover:text-zinc-900 dark:hover:text-white"
                  title="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href={developerBio.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                  title="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href={`mailto:${developerBio.email}`}
                  className="text-zinc-400 transition-colors hover:text-rose-500"
                  title="Email Direct"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
              <button
                onClick={handleDownloadResume}
                className="flex items-center gap-1 text-[10px] font-mono font-bold uppercase text-blue-600 dark:text-blue-400 hover:opacity-85"
                title="Download CV"
              >
                <FileText className="h-4 w-4" />
                GET CV
              </button>
            </div>
          </div>

          {/* Card 3: Essential Tools & Tech Stack */}
          <div className="md:col-span-4 bg-white border border-zinc-200/80 p-6 rounded-3xl shadow-sm dark:bg-zinc-900 dark:border-zinc-800">
            <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-6 font-mono">
              Core Tech Stack Status
            </p>
            <ul className="space-y-3">
              <li class="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800/40 pb-2">
                <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">React // TypeScript</span>
                <span className="text-[9px] font-mono bg-green-100 text-green-700 dark:bg-green-950/40 dark:text-green-400 px-2 py-0.5 rounded uppercase font-bold">EXCELLENT</span>
              </li>
              <li class="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800/40 pb-2">
                <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">Node.js // Express</span>
                <span className="text-[9px] font-mono bg-green-100 text-green-700 dark:bg-green-950/40 dark:text-green-400 px-2 py-0.5 rounded uppercase font-bold">SECURE</span>
              </li>
              <li class="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800/40 pb-2">
                <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">Gemini SDK Integration</span>
                <span className="text-[9px] font-mono bg-blue-100 text-blue-700 dark:bg-blue-950/40 dark:text-blue-400 px-2 py-0.5 rounded uppercase font-bold">ACTIVE</span>
              </li>
              <li class="flex items-center justify-between">
                <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">SQL // Databases</span>
                <span className="text-[9px] font-mono bg-amber-100 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400 px-2 py-0.5 rounded uppercase font-bold">RELIABLE</span>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-zinc-50 border border-dashed border-zinc-250 dark:bg-zinc-950 dark:border-zinc-800 rounded-2xl">
              <p className="text-[10px] text-zinc-400 font-mono uppercase tracking-wider font-bold">ARCHITECTURE TIP:</p>
              <p className="text-[11px] italic text-zinc-500 dark:text-zinc-400 mt-1">
                Utilize server-side proxy routes to safeguard sensitive credentials from client leakage.
              </p>
            </div>
          </div>

          {/* Card 4: Action Roadmap & Triggers */}
          <div className="md:col-span-4 bg-blue-50 border border-blue-100/80 p-6 rounded-3xl flex flex-col justify-between dark:bg-blue-950/10 dark:border-blue-900/30">
            <div>
              <p className="text-[10px] font-bold text-blue-500 uppercase tracking-widest mb-6 font-mono">
                Roadmap Navigation
              </p>
              <div className="space-y-4">
                <div className="relative pl-5 border-l border-blue-200 dark:border-blue-900">
                  <div className="absolute -left-[3.5px] top-1.5 w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                  <h4 className="text-xs font-bold text-zinc-900 dark:text-white uppercase tracking-tight">EXPLORE CODE</h4>
                  <p className="text-[10px] text-blue-600 dark:text-blue-400 font-mono">Check current portfolio assignments</p>
                </div>
                <div className="relative pl-5 border-l border-blue-200 dark:border-blue-900">
                  <div className="absolute -left-[3.5px] top-1.5 w-1.5 h-1.5 rounded-full bg-blue-300 dark:bg-blue-600"></div>
                  <h4 className="text-xs font-bold text-zinc-900 dark:text-white uppercase tracking-tight">RECRUITER TELEMETRY</h4>
                  <p className="text-[10px] text-blue-600 dark:text-blue-400 font-mono">View interactive D3 metric graphs</p>
                </div>
                <div className="relative pl-5 border-l border-blue-200 dark:border-blue-900">
                  <div className="absolute -left-[3.5px] top-1.5 w-1.5 h-1.5 rounded-full bg-blue-300 dark:bg-blue-600"></div>
                  <h4 className="text-xs font-bold text-zinc-900 dark:text-white uppercase tracking-tight">SECURE SECRETS</h4>
                  <p className="text-[10px] text-blue-600 dark:text-blue-400 font-mono">No API keys exposed client-side</p>
                </div>
              </div>
            </div>
            <div className="mt-8 space-y-2">
              <button
                onClick={onContactClick}
                className="w-full py-2.5 bg-zinc-900 hover:bg-zinc-800 dark:bg-blue-600 dark:hover:bg-blue-700 text-white rounded-xl font-mono text-[11px] font-bold uppercase tracking-wider"
              >
                Inquire Contact Form
              </button>
              <button
                onClick={onExploreClick}
                className="w-full py-2.5 bg-white hover:bg-zinc-50 border border-zinc-250 dark:bg-zinc-900 dark:hover:bg-zinc-850 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 rounded-xl font-mono text-[11px] font-bold uppercase tracking-wider"
              >
                Index of Projects
              </button>
            </div>
          </div>

          {/* Card 5: Core Focus */}
          <div className="md:col-span-4 bg-zinc-100 p-6 rounded-3xl flex flex-col justify-between border border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800">
            <div>
              <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-3 font-mono">
                Focus Alignment
              </p>
              <h3 className="text-lg font-black uppercase text-zinc-900 dark:text-zinc-100">
                Performance & Verification
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-2 leading-relaxed">
                Applying Bento-Grid structural cards to segment portfolio details into optimized, scannable units.
              </p>
            </div>
            
            <div className="mt-6 bg-white dark:bg-zinc-950 p-3 rounded-xl border border-zinc-200/80 dark:border-zinc-800">
              <div className="flex justify-between text-[9px] font-mono mb-1 text-zinc-400 uppercase font-bold">
                <span>RECONSTRUCTION STATUS</span>
                <span>ACTIVE</span>
              </div>
              <p className="text-xs font-black text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                COMPLETED • 2026 BATCH
              </p>
            </div>
          </div>

          {/* Card 6: Company Values / Motto Banner (Wide) */}
          <div className="md:col-span-12 bg-zinc-900 text-white p-6 rounded-3xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border border-zinc-800">
            <div className="flex flex-wrap gap-x-12 gap-y-4">
              <div>
                <p className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest font-bold">Standard 01</p>
                <p className="text-base font-bold uppercase tracking-tight mt-0.5 text-zinc-200">Extreme Ownership</p>
              </div>
              <div>
                <p className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest font-bold">Standard 02</p>
                <p className="text-base font-bold uppercase tracking-tight mt-0.5 text-zinc-200">Radical Candor</p>
              </div>
              <div>
                <p className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest font-bold">Standard 03</p>
                <p className="text-base font-bold uppercase tracking-tight mt-0.5 text-zinc-200">Ship Early, Iterate</p>
              </div>
            </div>
            <div className="text-left md:text-right border-t md:border-t-0 border-zinc-800 pt-4 md:pt-0 w-full md:w-auto">
              <p className="text-sm italic text-zinc-400 font-serif">"Stay hungry. Stay foolish."</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
