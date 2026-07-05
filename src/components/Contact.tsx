import React, { useState, useEffect } from "react";
import { Mail, Send, CheckCircle2, AlertCircle, Inbox, Trash2, Calendar, User, FileClock, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { developerBio } from "../data";
import { ContactMessage } from "../types";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<{
    type: "idle" | "loading" | "success" | "error";
    message: string;
  }>({ type: "idle", message: "" });

  const [serverMessages, setServerMessages] = useState<ContactMessage[]>([]);
  const [showInbox, setShowInbox] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Fetch saved messages from backend
  const fetchMessages = async () => {
    setIsRefreshing(true);
    try {
      const res = await fetch("/api/messages");
      if (res.ok) {
        const data = await res.json();
        setServerMessages(data.messages || []);
      }
    } catch (err) {
      console.error("Error fetching messages:", err);
    } finally {
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    if (showInbox) {
      fetchMessages();
    }
  }, [showInbox]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: "error", message: "Please fill out all required fields." });
      return;
    }

    setStatus({ type: "loading", message: "Transmitting message to Saron's server..." });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: "success",
          message: data.message || "Your message was transmitted successfully! Thanks for connecting.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
        // Refresh inbox if visible
        if (showInbox) {
          fetchMessages();
        }
      } else {
        throw new Error(data.error || "Server processing failed.");
      }
    } catch (error: any) {
      setStatus({
        type: "error",
        message: error.message || "Failed to reach server. Please email getachewsaron2025@gmail.com directly.",
      });
    }
  };

  const handleDeleteMessage = async (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      const res = await fetch(`/api/messages/${id}`, { method: "DELETE" });
      if (res.ok) {
        setServerMessages((prev) => prev.filter((msg) => msg.id !== id));
      }
    } catch (err) {
      console.error("Failed to delete message:", err);
    }
  };

  return (
    <section id="contact-section" className="border-t border-zinc-200 bg-zinc-100 dark:border-zinc-800/50 dark:bg-zinc-950">
      <div className="mx-auto max-w-5xl">
        
        {/* Section Header */}
        <div className="mb-14 text-center md:text-left">
          <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-1">
            04 // DATABASE DISPATCH & INBOX
          </p>
          <h2 className="font-display text-3xl font-black tracking-tighter text-zinc-900 dark:text-white sm:text-4xl uppercase">
            Get In Touch
          </h2>
          <p className="mt-2 text-zinc-500 dark:text-zinc-400 max-w-2xl text-sm">
            Have a question, feedback, or a role open? Write a message below to save it directly into the server database.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-12">
          
          {/* Quick Contact Info */}
          <div className="md:col-span-5 space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="font-display text-sm font-black text-zinc-900 dark:text-zinc-200 uppercase tracking-wider">
                Direct Channels
              </h3>
              <p className="text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                I am actively looking for internship positions, part-time assignments, or collaborative full-stack opportunities. Feel free to contact me directly or use the automated contact pipeline.
              </p>

              {/* Email card */}
              <div className="flex items-center gap-4 rounded-3xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-blue-400">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-[9px] font-mono font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                    Email Me Direct
                  </span>
                  <a
                    href={`mailto:${developerBio.email}`}
                    className="font-mono text-xs font-bold text-zinc-700 hover:text-blue-600 dark:text-zinc-300 dark:hover:text-blue-400 uppercase"
                  >
                    {developerBio.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Simulated Server Info card */}
            <div className="rounded-3xl border border-dashed border-zinc-300 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900 shadow-sm">
              <div className="flex gap-3">
                <div className="mt-0.5 text-blue-600 dark:text-blue-400">
                  <Inbox className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display font-black text-zinc-900 dark:text-zinc-200 text-xs uppercase tracking-tight">
                    Interactive Server States
                  </h4>
                  <p className="mt-1.5 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                    Your contact form submissions are processed securely in memory on Saron's active Express server node. You can click "Show Server Message Inbox" below to view saved messages.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form and Inbox area */}
          <div className="md:col-span-7">
            <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono font-bold uppercase text-zinc-400 dark:text-zinc-500">
                      Your Name <span className="text-blue-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alice Smith"
                      required
                      className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-xs text-zinc-800 focus:border-zinc-900 focus:outline-none dark:border-zinc-750 dark:bg-zinc-950 dark:text-zinc-200"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono font-bold uppercase text-zinc-400 dark:text-zinc-500">
                      Email Address <span className="text-blue-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. alice@company.com"
                      required
                      className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-xs text-zinc-800 focus:border-zinc-900 focus:outline-none dark:border-zinc-750 dark:bg-zinc-950 dark:text-zinc-200"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono font-bold uppercase text-zinc-400 dark:text-zinc-500">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Project Consultation / Job Inquiry"
                    className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-xs text-zinc-800 focus:border-zinc-900 focus:outline-none dark:border-zinc-750 dark:bg-zinc-950 dark:text-zinc-200"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono font-bold uppercase text-zinc-400 dark:text-zinc-500">
                    Message <span className="text-blue-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your project overview, query, or feedback here..."
                    required
                    rows={4}
                    className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-xs text-zinc-800 focus:border-zinc-900 focus:outline-none dark:border-zinc-750 dark:bg-zinc-950 dark:text-zinc-200"
                  />
                </div>

                {/* Status indicators */}
                <AnimatePresence mode="wait">
                  {status.type !== "idle" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className={`flex items-start gap-2.5 rounded-xl p-3 text-xs leading-relaxed ${
                        status.type === "success"
                          ? "bg-emerald-50 text-emerald-800 dark:bg-emerald-950/20 dark:text-emerald-400 animate-pulse"
                          : status.type === "error"
                          ? "bg-rose-50 text-rose-800 dark:bg-rose-950/20 dark:text-rose-400"
                          : "bg-zinc-50 text-zinc-800 dark:bg-zinc-950 dark:text-zinc-400"
                      }`}
                    >
                      {status.type === "success" ? (
                        <CheckCircle2 className="h-4.5 w-4.5 shrink-0 text-emerald-500" />
                      ) : (
                        <AlertCircle className="h-4.5 w-4.5 shrink-0 text-rose-500 animate-pulse" />
                      )}
                      <span>{status.message}</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status.type === "loading"}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-zinc-900 py-3 text-xs font-semibold text-white hover:bg-zinc-800 dark:bg-blue-600 dark:hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50 uppercase tracking-wider font-mono"
                >
                  <Send className="h-3.5 w-3.5" />
                  {status.type === "loading" ? "Transmitting..." : "Send Secure Message"}
                </button>
              </form>
            </div>
          </div>

        </div>

        {/* Collapsible server message inbox drawer (Awesome Full-Stack showcase!) */}
        <div className="mt-14">
          <button
            onClick={() => setShowInbox(!showInbox)}
            className="mx-auto flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-4 py-2 text-[10px] font-mono uppercase font-bold text-zinc-600 transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400"
          >
            <Inbox className="h-4 w-4 text-blue-500" />
            {showInbox ? "Hide Server Message Inbox" : "Show Server Message Inbox (Live Demo)"}
            {showInbox ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
          </button>

          <AnimatePresence>
            {showInbox && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div className="mt-6 rounded-3xl border border-zinc-200 bg-white p-6 dark:border-zinc-850 dark:bg-zinc-900/40">
                  <div className="mb-4 flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800 pb-3">
                    <h3 className="flex items-center gap-1.5 font-display text-xs font-black text-zinc-900 dark:text-zinc-200 uppercase">
                      <Inbox className="h-4 w-4 text-blue-500" />
                      Node Server Message Inbox
                    </h3>
                    <button
                      onClick={fetchMessages}
                      disabled={isRefreshing}
                      className="text-[10px] font-mono font-bold uppercase text-blue-600 hover:opacity-85 dark:text-blue-400"
                    >
                      {isRefreshing ? "Refreshing..." : "Refresh Messages"}
                    </button>
                  </div>

                  {serverMessages.length === 0 ? (
                    <div className="rounded-2xl border border-dashed border-zinc-200 p-8 text-center text-xs text-zinc-400 dark:border-zinc-800">
                      <FileClock className="mx-auto mb-2 h-6 w-6 text-zinc-300" />
                      There are currently no messages stored in the server memory. Submit a form above to see it populate here instantly!
                    </div>
                  ) : (
                    <div className="grid gap-4 sm:grid-cols-2">
                      {serverMessages.map((msg) => (
                        <div
                          key={msg.id}
                          className="relative rounded-2xl border border-zinc-200 bg-zinc-50 p-4.5 dark:border-zinc-850 dark:bg-zinc-900 shadow-sm"
                        >
                          <button
                            onClick={(e) => handleDeleteMessage(msg.id, e)}
                            className="absolute top-4 right-4 text-zinc-300 hover:text-rose-500"
                            title="Delete from server memory"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </button>

                          <div className="flex items-center gap-1.5 text-xs text-blue-600 font-semibold dark:text-blue-400">
                            <User className="h-3.5 w-3.5" />
                            <span>{msg.name}</span>
                          </div>
                          
                          <span className="block text-[10px] font-mono text-zinc-400 mt-0.5">
                            {msg.email}
                          </span>

                          <h4 className="font-display font-black text-zinc-900 dark:text-zinc-100 text-xs mt-2 uppercase">
                            Subject: {msg.subject}
                          </h4>

                          <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed whitespace-pre-wrap">
                            {msg.message}
                          </p>

                          <div className="mt-3.5 flex items-center gap-1 text-[9px] font-mono font-semibold text-zinc-450 dark:text-zinc-500 uppercase">
                            <Calendar className="h-3 w-3" />
                            <span>{msg.timestamp}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
