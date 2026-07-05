import React, { useState } from "react";
import { User, Briefcase, GraduationCap, Code2, Award, ArrowRight, Layers, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { developerBio, skillsData, experienceData, educationData } from "../data";

export default function About() {
  const [selectedCategory, setSelectedCategory] = useState<"All" | "Frontend" | "Backend" | "Databases" | "AI & Tools">("All");

  const categories = ["All", "Frontend", "Backend", "Databases", "AI & Tools"];

  const filteredSkills = selectedCategory === "All"
    ? skillsData
    : skillsData.filter((skill) => skill.category === selectedCategory);

  return (
    <section id="about-section" className="border-t border-zinc-200 bg-zinc-50/50 px-6 py-20 dark:border-zinc-800/50 dark:bg-zinc-950/20">
      <div className="mx-auto max-w-5xl">
        
        {/* Section Header */}
        <div className="mb-14 text-center md:text-left">
          <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-1">
            01 // RECONNAISSANCE & DOSSIER
          </p>
          <h2 className="font-display text-3xl font-black tracking-tighter text-zinc-900 dark:text-white sm:text-4xl uppercase">
            About & Resume
          </h2>
          <p className="mt-2 text-zinc-500 dark:text-zinc-400 max-w-2xl text-sm">
            My background, credentials, professional timeline, and specialized engineering skill levels.
          </p>
        </div>

        {/* Biography Block */}
        <div className="grid gap-8 md:grid-cols-12">
          
          <div className="md:col-span-7 bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 p-6 md:p-8 rounded-3xl flex flex-col justify-between shadow-sm">
            <div>
              <span className="px-2.5 py-1 bg-zinc-100 dark:bg-zinc-800 text-[10px] rounded uppercase font-mono tracking-wider text-zinc-600 dark:text-zinc-300">
                BIOGRAPHY INDEX
              </span>
              <h3 className="flex items-center gap-2 font-display text-lg font-black text-zinc-900 dark:text-zinc-200 uppercase mt-4">
                <User className="h-5 w-5 text-blue-500" />
                Saron's Biography
              </h3>
              <p className="mt-4 text-xs leading-relaxed text-zinc-600 dark:text-zinc-300">
                {developerBio.aboutMe}
              </p>
              <p className="mt-4 text-xs leading-relaxed text-zinc-600 dark:text-zinc-300">
                I believe in design accuracy and engineering precision. Each of my projects is treated as an integrated full-stack ecosystem where frontend interactions feed backend databases cleanly, secured behind proxy tunnels.
              </p>
            </div>

            {/* Quick stats grid */}
            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-zinc-100 dark:border-zinc-800/50 pt-6">
              <div className="rounded-2xl bg-zinc-50 p-4 text-center dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-850">
                <span className="block font-display text-xl font-black text-blue-600 dark:text-blue-400">1+</span>
                <span className="text-[9px] text-zinc-400 dark:text-zinc-500 uppercase font-mono tracking-wider font-bold">Years Exp</span>
              </div>
              <div className="rounded-2xl bg-zinc-50 p-4 text-center dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-850">
                <span className="block font-display text-xl font-black text-indigo-600 dark:text-indigo-400">5+</span>
                <span className="text-[9px] text-zinc-400 dark:text-zinc-500 uppercase font-mono tracking-wider font-bold">Projects</span>
              </div>
              <div className="rounded-2xl bg-zinc-50 p-4 text-center dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-850">
                <span className="block font-display text-xl font-black text-emerald-600 dark:text-emerald-400">100%</span>
                <span className="text-[9px] text-zinc-400 dark:text-zinc-500 uppercase font-mono tracking-wider font-bold">Task Rate</span>
              </div>
            </div>
          </div>

          {/* Core Focus Cards */}
          <div className="space-y-4 md:col-span-5 flex flex-col justify-between">
            <h3 className="flex items-center gap-2 font-display text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
              <Layers className="h-4 w-4 text-blue-500" />
              Core Competence Fields
            </h3>
            
            <div className="rounded-3xl border border-zinc-200/80 bg-white p-5 dark:border-zinc-800/80 dark:bg-zinc-900 shadow-sm flex-1">
              <div className="flex items-start gap-3.5">
                <div className="rounded-xl bg-blue-50 p-2.5 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400">
                  <Code2 className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display font-black text-zinc-900 dark:text-zinc-200 text-xs uppercase tracking-tight">Full-Stack Engineering</h4>
                  <p className="mt-1.5 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">Creating scalable APIs and responsive React SPAs with strong type constraints.</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-zinc-200/80 bg-white p-5 dark:border-zinc-800/80 dark:bg-zinc-900 shadow-sm flex-1">
              <div className="flex items-start gap-3.5">
                <div className="rounded-xl bg-indigo-50 p-2.5 text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-400">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display font-black text-zinc-900 dark:text-zinc-200 text-xs uppercase tracking-tight">AI Integrations</h4>
                  <p className="mt-1.5 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">Leveraging Gemini and modern SDKs to build server-side chatbot automation.</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-zinc-200/80 bg-white p-5 dark:border-zinc-800/80 dark:bg-zinc-900 shadow-sm flex-1">
              <div className="flex items-start gap-3.5">
                <div className="rounded-xl bg-emerald-50 p-2.5 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display font-black text-zinc-900 dark:text-zinc-200 text-xs uppercase tracking-tight">Professional Internship</h4>
                  <p className="mt-1.5 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">Active participant at Future Interns, mastering enterprise developer pipelines.</p>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Skill Matrix and Timeline */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          
          {/* Skill Matrix panel */}
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 p-6 md:p-8 rounded-3xl shadow-sm">
            <div className="mb-6">
              <span className="px-2.5 py-1 bg-zinc-100 dark:bg-zinc-800 text-[10px] rounded uppercase font-mono tracking-wider text-zinc-600 dark:text-zinc-300">
                TECHNICAL MATRIX
              </span>
              <h3 className="flex items-center gap-2 font-display text-base font-black text-zinc-900 dark:text-zinc-200 uppercase mt-4">
                <Code2 className="h-5 w-5 text-blue-500" />
                Engineering Skills
              </h3>
            </div>

            {/* Category tabs */}
            <div className="flex flex-wrap gap-1 mb-6 bg-zinc-50 dark:bg-zinc-950 p-1 rounded-2xl border border-zinc-100 dark:border-zinc-850">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat as any)}
                  className={`rounded-xl px-3 py-1.5 text-[10px] font-mono uppercase tracking-wider transition-all ${
                    selectedCategory === cat
                      ? "bg-zinc-900 text-white dark:bg-zinc-800"
                      : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Skills Progress lists */}
            <div className="space-y-4.5">
              {filteredSkills.map((skill, index) => (
                <div key={index} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-zinc-700 dark:text-zinc-300 font-mono text-[11px] uppercase">{skill.name}</span>
                    <span className="text-[10px] font-mono uppercase text-blue-600 dark:text-blue-400 font-bold">
                      {skill.level === 5 ? "Expert // 100%" : skill.level >= 4 ? "Advanced // 80%" : "Intermediate // 60%"}
                    </span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(skill.level / 5) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="h-full rounded-full bg-blue-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Experience and Education Timeline */}
          <div className="space-y-8">
            
            {/* Experience timeline */}
            <div className="bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 p-6 md:p-8 rounded-3xl shadow-sm">
              <span className="px-2.5 py-1 bg-zinc-100 dark:bg-zinc-800 text-[10px] rounded uppercase font-mono tracking-wider text-zinc-600 dark:text-zinc-300">
                ACTIVE ASSIGNMENTS
              </span>
              <h3 className="mb-6 flex items-center gap-2 font-display text-base font-black text-zinc-900 dark:text-zinc-200 uppercase mt-4">
                <Briefcase className="h-5 w-5 text-blue-500" />
                Work History
              </h3>

              <div className="relative border-l border-zinc-200 pl-5 space-y-6 dark:border-zinc-800">
                {experienceData.map((exp) => (
                  <div key={exp.id} className="relative">
                    {/* Bullet marker */}
                    <span className="absolute -left-[24.5px] top-1 flex h-2 w-2 items-center justify-center rounded-full bg-blue-500">
                    </span>

                    <div className="flex flex-wrap items-baseline justify-between gap-1">
                      <h4 className="font-display font-black text-zinc-900 dark:text-zinc-100 text-xs uppercase tracking-tight">{exp.role}</h4>
                      <span className="text-[9px] font-mono font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">{exp.period}</span>
                    </div>
                    <span className="block text-[10px] font-mono uppercase text-zinc-400 mt-0.5">{exp.company}</span>
                    <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">{exp.description}</p>
                    
                    <ul className="mt-2 space-y-1 pl-4 list-disc text-[11px] text-zinc-500 dark:text-zinc-400 leading-relaxed">
                      {exp.points.map((pt, i) => (
                        <li key={i}>{pt}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education timeline */}
            <div className="bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 p-6 md:p-8 rounded-3xl shadow-sm">
              <span className="px-2.5 py-1 bg-zinc-100 dark:bg-zinc-800 text-[10px] rounded uppercase font-mono tracking-wider text-zinc-600 dark:text-zinc-300">
                CREDENTIAL RECORD
              </span>
              <h3 className="mb-6 flex items-center gap-2 font-display text-base font-black text-zinc-900 dark:text-zinc-200 uppercase mt-4">
                <GraduationCap className="h-5 w-5 text-blue-500" />
                Education
              </h3>

              <div className="relative border-l border-zinc-200 pl-5 space-y-6 dark:border-zinc-800">
                {educationData.map((edu, index) => (
                  <div key={index} className="relative">
                    {/* Bullet marker */}
                    <span className="absolute -left-[24.5px] top-1 flex h-2 w-2 items-center justify-center rounded-full bg-blue-500">
                    </span>

                    <div className="flex flex-wrap items-baseline justify-between gap-1">
                      <h4 className="font-display font-black text-zinc-900 dark:text-zinc-100 text-xs uppercase tracking-tight">{edu.school}</h4>
                      <span className="text-[9px] font-mono font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">{edu.period}</span>
                    </div>
                    <span className="block text-[10px] font-mono uppercase text-zinc-400 mt-0.5">{edu.degree}</span>
                    
                    <ul className="mt-2 space-y-1 pl-4 list-disc text-[11px] text-zinc-500 dark:text-zinc-400 leading-relaxed">
                      {edu.achievements.map((ach, i) => (
                        <li key={i}>{ach}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
