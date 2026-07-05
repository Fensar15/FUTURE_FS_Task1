import React, { useState } from "react";
import { FolderGit2, ExternalLink, Github, X, HelpCircle, UserCheck, Layers, Award } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Project } from "../types";
import { projectsData } from "../data";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<"All" | "Frontend" | "Full-Stack" | "AI & Integration">("All");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ["All", "AI & Integration", "Full-Stack", "Frontend"];

  const filteredProjects = selectedCategory === "All"
    ? projectsData
    : projectsData.filter((proj) => proj.category === selectedCategory);

  return (
    <section id="projects-section" className="border-t border-zinc-200 bg-zinc-100 dark:border-zinc-800/50 dark:bg-zinc-950">
      <div className="mx-auto max-w-5xl">
        
        {/* Section Header */}
        <div className="mb-14 text-center md:text-left">
          <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-1">
            02 // SYSTEM WORKLOAD INDEX
          </p>
          <h2 className="font-display text-3xl font-black tracking-tighter text-zinc-900 dark:text-white sm:text-4xl uppercase">
            Featured Projects
          </h2>
          <p className="mt-2 text-zinc-500 dark:text-zinc-400 max-w-2xl text-sm">
            A scannable index of full-stack engineering work, combining robust UI styling with modern server deployments.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-1.5 mb-10 justify-center md:justify-start bg-white dark:bg-zinc-900 p-1 rounded-2xl border border-zinc-200 dark:border-zinc-800 max-w-max">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat as any)}
              className={`rounded-xl px-4 py-2 text-[10px] font-mono uppercase tracking-wider transition-all ${
                selectedCategory === cat
                  ? "bg-zinc-900 text-white dark:bg-zinc-800"
                  : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col overflow-hidden rounded-3xl border border-zinc-200/80 bg-white shadow-sm hover:shadow-md transition-all dark:border-zinc-800/60 dark:bg-zinc-900"
              >
                {/* Project Image Panel */}
                <div className="relative aspect-video w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800 border-b border-zinc-100 dark:border-zinc-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 rounded-md bg-zinc-900/90 backdrop-blur-md px-2.5 py-1 text-[9px] font-mono font-bold text-white uppercase tracking-wider">
                    {project.category}
                  </div>
                </div>

                {/* Card Content */}
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display font-black text-zinc-900 dark:text-zinc-100 text-sm uppercase tracking-tight">
                    {project.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400 flex-1">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-1">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <span
                        key={i}
                        className="rounded bg-zinc-50 border border-zinc-200/40 px-2 py-0.5 text-[9px] font-mono text-zinc-500 dark:bg-zinc-950 dark:border-zinc-850 dark:text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="rounded bg-blue-50 px-2 py-0.5 text-[9px] font-mono font-bold text-blue-600 dark:bg-blue-950/40 dark:text-blue-400">
                        +{project.tags.length - 3} MORE
                      </span>
                    )}
                  </div>

                  {/* Actions Bar */}
                  <div className="mt-6 flex items-center justify-between border-t border-zinc-100 pt-4 dark:border-zinc-800/40">
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="text-[10px] font-mono font-bold uppercase text-blue-600 hover:opacity-85 dark:text-blue-400"
                    >
                      CASE STUDY INDEX →
                    </button>
                    <div className="flex gap-2.5 text-zinc-400">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-zinc-900 dark:hover:text-white"
                          title="View GitHub repository"
                        >
                          <Github className="h-4.5 w-4.5" />
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-zinc-900 dark:hover:text-white"
                          title="Live demo link"
                        >
                          <ExternalLink className="h-4.5 w-4.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Interactive Case Study Details Modal */}
        <AnimatePresence>
          {activeModalProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Blur backdrop overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveModalProject(null)}
                className="absolute inset-0 bg-zinc-950/70 backdrop-blur-sm"
              />

              {/* Modal Card content wrapper */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white border border-zinc-200 p-6 md:p-8 shadow-2xl dark:bg-zinc-900 dark:border-zinc-800"
              >
                {/* Close Button */}
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="absolute top-5 right-5 rounded-full p-1.5 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>

                {/* Modal Title and Details */}
                <div className="mb-4">
                  <span className="rounded bg-blue-50 px-2.5 py-1 text-[9px] font-mono font-bold text-blue-700 uppercase tracking-wider dark:bg-blue-950/40 dark:text-blue-400">
                    {activeModalProject.category}
                  </span>
                  <h3 className="font-display font-black text-zinc-900 dark:text-white text-xl uppercase mt-2">
                    {activeModalProject.title}
                  </h3>
                </div>

                {/* Image Panel */}
                <div className="aspect-video w-full overflow-hidden rounded-2xl bg-zinc-50 mb-6 dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-800">
                  <img
                    src={activeModalProject.image}
                    alt={activeModalProject.title}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Detail Blocks */}
                <div className="space-y-6 text-zinc-600 dark:text-zinc-300">
                  <div>
                    <h4 className="flex items-center gap-1.5 font-display font-black text-zinc-900 dark:text-zinc-200 text-xs uppercase">
                      <FolderGit2 className="h-4 w-4 text-blue-500" />
                      Executive Summary
                    </h4>
                    <p className="mt-2 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                      {activeModalProject.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="flex items-center gap-1.5 font-display font-black text-zinc-900 dark:text-zinc-200 text-xs uppercase">
                      <Layers className="h-4 w-4 text-indigo-500" />
                      Key Features
                    </h4>
                    <ul className="mt-2 space-y-1.5 pl-4 list-disc text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                      {activeModalProject.features.map((feat, i) => (
                        <li key={i}>{feat}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl bg-zinc-50 p-4 border border-zinc-100 dark:bg-zinc-950 dark:border-zinc-850">
                      <h5 className="flex items-center gap-1 font-display font-black text-zinc-900 dark:text-zinc-200 text-xs uppercase">
                        <UserCheck className="h-4 w-4 text-emerald-500" />
                        My Role
                      </h5>
                      <p className="mt-1.5 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                        {activeModalProject.role}
                      </p>
                    </div>

                    <div className="rounded-2xl bg-zinc-50 p-4 border border-zinc-100 dark:bg-zinc-950 dark:border-zinc-850">
                      <h5 className="flex items-center gap-1 font-display font-black text-zinc-900 dark:text-zinc-200 text-xs uppercase">
                        <HelpCircle className="h-4 w-4 text-rose-500" />
                        Engineering Challenge
                      </h5>
                      <p className="mt-1.5 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                        {activeModalProject.challenges}
                      </p>
                    </div>
                  </div>

                  {/* Actions Footer */}
                  <div className="flex justify-end gap-3 border-t border-zinc-100 pt-5 dark:border-zinc-800/60">
                    {activeModalProject.github && (
                      <a
                        href={activeModalProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 rounded-xl border border-zinc-200 bg-white px-4 py-2 text-[11px] font-mono uppercase font-bold text-zinc-700 transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-850"
                      >
                        <Github className="h-4 w-4" />
                        REPOSITORY
                      </a>
                    )}
                    <button
                      onClick={() => setActiveModalProject(null)}
                      className="rounded-xl bg-zinc-900 dark:bg-zinc-800 px-5 py-2 text-[11px] font-mono uppercase font-bold text-white transition-opacity hover:opacity-90"
                    >
                      CLOSE INDEX
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
