import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot, Sparkles, CornerDownLeft, ArrowRight, User } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ChatMessage } from "../types";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "initial-1",
      sender: "bot",
      text: "Hi there! 👋 I am Saron's AI Career Assistant, powered by Google Gemini. Ask me anything about Saron's full-stack capabilities, her projects, her internship at Future Interns, or how to contact her!",
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const quickPrompts = [
    "What are Saron's top skills?",
    "Tell me about her Future Interns role",
    "How do I get in touch with her?",
    "What databases does she use?"
  ];

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: textToSend,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputMessage("");
    setIsLoading(true);

    try {
      // Clean up messages for the backend (just sender and text)
      const chatHistory = messages.map((m) => ({
        sender: m.sender,
        text: m.text,
      }));

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: textToSend, history: chatHistory }),
      });

      if (!response.ok) {
        throw new Error("Failed to connect to the assistant server");
      }

      const data = await response.json();

      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: "bot",
        text: data.response || "I parsed the input, but got an empty response.",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (error) {
      console.error("Chat error:", error);
      const errorMsg: ChatMessage = {
        id: `err-${Date.now()}`,
        sender: "bot",
        text: "I'm having trouble connecting to my server brain right now. You can reach Saron directly at getachewsaron2025@gmail.com!",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* Floating Button */}
      <motion.button
        id="chatbot-trigger"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-zinc-900 text-white border border-zinc-800 dark:bg-zinc-800 dark:border-zinc-700 shadow-xl hover:shadow-2xl focus:outline-none"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <X key="close" className="h-6 w-6" />
          ) : (
            <div key="open" className="relative">
              <MessageSquare className="h-6 w-6 text-white dark:text-zinc-200" />
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-blue-500"></span>
              </span>
            </div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="chatbot-window"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 right-0 w-[360px] sm:w-[400px] overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-2xl dark:border-zinc-800 dark:bg-zinc-900"
          >
            {/* Header */}
            <div className="bg-zinc-900 p-4 text-white border-b border-zinc-800 dark:bg-zinc-950">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-zinc-800 text-white border border-zinc-700">
                  <Bot className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-display font-black tracking-wide text-xs uppercase">Saron's AI Career Assistant</h3>
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-zinc-400 uppercase">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    Online • Powered by Gemini
                  </div>
                </div>
              </div>
            </div>

            {/* Messages Body */}
            <div className="h-[340px] overflow-y-auto bg-zinc-50/50 p-4 dark:bg-zinc-950/30">
              <div className="space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex items-start gap-2.5 ${
                      msg.sender === "user" ? "flex-row-reverse" : "flex-row"
                    }`}
                  >
                    <div
                      className={`flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-xl text-xs font-bold ${
                        msg.sender === "user"
                          ? "bg-zinc-900 text-white dark:bg-zinc-800"
                          : "bg-white text-zinc-700 border border-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:border-zinc-700"
                      }`}
                    >
                      {msg.sender === "user" ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4 text-blue-600 dark:text-blue-400" />}
                    </div>
                    <div
                      className={`rounded-2xl px-4 py-2.5 text-xs leading-relaxed max-w-[80%] ${
                        msg.sender === "user"
                          ? "bg-zinc-900 text-white rounded-tr-none"
                          : "bg-white text-zinc-850 shadow-sm dark:bg-zinc-800 dark:text-zinc-100 rounded-tl-none border border-zinc-200 dark:border-zinc-700"
                      }`}
                    >
                      <p className="whitespace-pre-wrap">{msg.text}</p>
                      <span
                        className={`mt-1.5 block text-[9px] font-mono uppercase ${
                          msg.sender === "user" ? "text-zinc-400 text-right" : "text-zinc-400"
                        }`}
                      >
                        {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex items-start gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white border border-zinc-200 dark:bg-zinc-800 dark:border-zinc-700">
                      <Bot className="h-4 w-4 text-blue-500" />
                    </div>
                    <div className="rounded-2xl rounded-tl-none border border-zinc-200 bg-white px-4 py-3 text-sm shadow-sm dark:border-zinc-700 dark:bg-zinc-800">
                      <div className="flex gap-1.5 py-1">
                        <span className="h-2 w-2 animate-bounce rounded-full bg-blue-500" style={{ animationDelay: '0ms' }}></span>
                        <span className="h-2 w-2 animate-bounce rounded-full bg-blue-500" style={{ animationDelay: '150ms' }}></span>
                        <span className="h-2 w-2 animate-bounce rounded-full bg-blue-500" style={{ animationDelay: '300ms' }}></span>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={chatEndRef} />
              </div>
            </div>

            {/* Quick Prompts */}
            {messages.length === 1 && (
              <div className="border-t border-zinc-200 bg-zinc-50 p-3 dark:border-zinc-800/80 dark:bg-zinc-900/60">
                <span className="mb-2 block text-[9px] font-mono font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                  SUGGESTED DISPATCH
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {quickPrompts.map((p, i) => (
                    <button
                      key={i}
                      onClick={() => handleSendMessage(p)}
                      className="flex items-center gap-1 rounded-xl border border-zinc-200 bg-white px-2.5 py-1 text-[10px] font-mono uppercase font-bold text-zinc-700 transition-colors hover:bg-zinc-50 dark:border-zinc-750 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
                    >
                      {p}
                      <ArrowRight className="h-3 w-3" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Footer Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(inputMessage);
              }}
              className="flex items-center gap-2 border-t border-zinc-200 bg-white p-3.5 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Ask Saron's AI..."
                disabled={isLoading}
                className="flex-1 rounded-xl border border-zinc-200 px-3.5 py-2 text-xs focus:border-zinc-900 focus:outline-none dark:border-zinc-750 dark:bg-zinc-800 dark:text-zinc-200"
              />
              <button
                type="submit"
                disabled={!inputMessage.trim() || isLoading}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-blue-600 dark:hover:bg-blue-700 transition-opacity disabled:cursor-not-allowed disabled:opacity-40"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
