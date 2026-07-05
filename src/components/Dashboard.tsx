import React, { useState } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Cell, PieChart, Pie, Legend } from "recharts";
import { Users, Eye, EyeOff, MessageSquare, TrendingUp, Cpu, Award, RefreshCw, BarChart3, PieChartIcon, ShieldAlert } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// Mock Traffic Data for Portfolio Views
const trafficData = [
  { month: "Jan", views: 180, inquiries: 12 },
  { month: "Feb", views: 240, inquiries: 15 },
  { month: "Mar", views: 310, inquiries: 22 },
  { month: "Apr", views: 420, inquiries: 28 },
  { month: "May", views: 590, inquiries: 45 },
  { month: "Jun", views: 820, inquiries: 64 },
  { month: "Jul", views: 950, inquiries: 78 },
];

// Skill Proficiency Aggregations (D3 Recharts input)
const skillAggregates = [
  { name: "Frontend", level: 92, fill: "#3b82f6" },
  { name: "Backend", level: 85, fill: "#1d4ed8" },
  { name: "Databases", level: 80, fill: "#10b981" },
  { name: "AI Integration", level: 95, fill: "#f59e0b" },
];

// Recruiter Inquiries Distribution
const inquiryDistribution = [
  { name: "Full-Time Offers", value: 40, color: "#3b82f6" },
  { name: "Internship Queries", value: 30, color: "#10b981" },
  { name: "Freelance/Contract", value: 20, color: "#1d4ed8" },
  { name: "General Inquiries", value: 10, color: "#f59e0b" },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<"views" | "skills" | "inquiries">("views");
  const [showRealTelemetry, setShowRealTelemetry] = useState(false);

  return (
    <section id="dashboard-section" className="border-t border-zinc-200 bg-zinc-50/50 px-6 py-20 dark:border-zinc-800/50 dark:bg-zinc-950/20">
      <div className="mx-auto max-w-5xl">
        
        {/* Section Header */}
        <div className="mb-14 text-center md:text-left">
          <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-1">
            03 // RECRUITER METRIC PIPELINE
          </p>
          <h2 className="font-display text-3xl font-black tracking-tighter text-zinc-900 dark:text-white sm:text-4xl uppercase">
            Recruiter & Analytics Panel
          </h2>
          <p className="mt-2 text-zinc-500 dark:text-zinc-400 max-w-2xl text-sm">
            An interactive data visualization board monitoring portfolio engagement engagement rates, professional skill competency, and target-market inquiry categories.
          </p>
        </div>

        {/* Telemetry Indicator Bar */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 animate-pulse items-center justify-center rounded-2xl bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-blue-400">
              <Cpu className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-display font-black text-zinc-900 dark:text-zinc-200 text-xs uppercase tracking-wider">
                Active Analytical Telemetry
              </h4>
              <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
                Connected with React state listeners to log recruiter interaction.
              </p>
            </div>
          </div>
          <button
            onClick={() => setShowRealTelemetry(!showRealTelemetry)}
            className="flex items-center gap-1.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-zinc-800 dark:hover:bg-zinc-700 px-4 py-2 text-[10px] font-mono uppercase font-bold tracking-wider"
          >
            {showRealTelemetry ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            {showRealTelemetry ? "Hide Dashboard" : "Show Dashboard"}
          </button>
        </div>

        {/* Quick KPI stats grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          <div className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-zinc-400">Monthly Traffic</span>
              <div className="rounded-xl bg-zinc-50 p-2 text-blue-600 dark:bg-zinc-950 dark:text-blue-400 border border-zinc-100 dark:border-zinc-855">
                <Users className="h-4 w-4" />
              </div>
            </div>
            <span className="mt-3 block font-display text-2xl font-black text-zinc-900 dark:text-white">950</span>
            <div className="mt-1 flex items-center gap-1 text-[9px] font-mono font-bold text-emerald-600">
              <TrendingUp className="h-3 w-3" />
              <span>+15.8% VS PREV MONTH</span>
            </div>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-zinc-400">Session Time</span>
              <div className="rounded-xl bg-zinc-50 p-2 text-blue-600 dark:bg-zinc-950 dark:text-blue-400 border border-zinc-100 dark:border-zinc-855">
                <RefreshCw className="h-4 w-4" />
              </div>
            </div>
            <span className="mt-3 block font-display text-2xl font-black text-zinc-900 dark:text-white">3m 45s</span>
            <div className="mt-1 flex items-center gap-1 text-[9px] font-mono font-bold text-emerald-600">
              <TrendingUp className="h-3 w-3" />
              <span>+12.4% AVG DURATION</span>
            </div>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-zinc-400">Inquiry Leads</span>
              <div className="rounded-xl bg-zinc-50 p-2 text-blue-600 dark:bg-zinc-950 dark:text-blue-400 border border-zinc-100 dark:border-zinc-855">
                <MessageSquare className="h-4 w-4" />
              </div>
            </div>
            <span className="mt-3 block font-display text-2xl font-black text-zinc-900 dark:text-white">78</span>
            <div className="mt-1 flex items-center gap-1 text-[9px] font-mono font-bold text-emerald-600">
              <TrendingUp className="h-3 w-3" />
              <span>+21.8% CONVERSION</span>
            </div>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-zinc-400">AI Chat Queries</span>
              <div className="rounded-xl bg-zinc-50 p-2 text-blue-600 dark:bg-zinc-950 dark:text-blue-400 border border-zinc-100 dark:border-zinc-855">
                <Award className="h-4 w-4" />
              </div>
            </div>
            <span className="mt-3 block font-display text-2xl font-black text-zinc-900 dark:text-white">142</span>
            <div className="mt-1 flex items-center gap-1 text-[9px] font-mono font-bold text-emerald-600">
              <TrendingUp className="h-3 w-3" />
              <span>98.4% HELPFUL RATE</span>
            </div>
          </div>
        </div>

        {/* Recharts Charts Layout */}
        <AnimatePresence>
          {showRealTelemetry && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden space-y-6"
            >
              {/* Tab Toggles */}
              <div className="flex flex-wrap gap-1 bg-white p-1 rounded-2xl border border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800 max-w-max">
                <button
                  onClick={() => setActiveTab("views")}
                  className={`flex items-center gap-1.5 rounded-xl px-4 py-2 text-[10px] font-mono uppercase tracking-wider transition-all ${
                    activeTab === "views"
                      ? "bg-zinc-900 text-white dark:bg-zinc-800"
                      : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                  }`}
                >
                  <TrendingUp className="h-3.5 w-3.5" />
                  Traffic & Leads
                </button>
                <button
                  onClick={() => setActiveTab("skills")}
                  className={`flex items-center gap-1.5 rounded-xl px-4 py-2 text-[10px] font-mono uppercase tracking-wider transition-all ${
                    activeTab === "skills"
                      ? "bg-zinc-900 text-white dark:bg-zinc-800"
                      : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                  }`}
                >
                  <BarChart3 className="h-3.5 w-3.5" />
                  Skill-Stack Level
                </button>
                <button
                  onClick={() => setActiveTab("inquiries")}
                  className={`flex items-center gap-1.5 rounded-xl px-4 py-2 text-[10px] font-mono uppercase tracking-wider transition-all ${
                    activeTab === "inquiries"
                      ? "bg-zinc-900 text-white dark:bg-zinc-800"
                      : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                  }`}
                >
                  <PieChartIcon className="h-3.5 w-3.5" />
                  Lead Demographics
                </button>
              </div>

              {/* Chart Stage Card */}
              <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                <div className="h-[320px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    {activeTab === "views" ? (
                      <AreaChart data={trafficData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                        <defs>
                          <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.2} />
                            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                          </linearGradient>
                          <linearGradient id="colorInquiries" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#10b981" stopOpacity={0.2} />
                            <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e4e4e7" className="dark:stroke-zinc-800" />
                        <XAxis dataKey="month" tickLine={false} axisLine={false} tick={{ fill: "#a1a1aa", fontSize: 10, fontFamily: "monospace" }} />
                        <YAxis tickLine={false} axisLine={false} tick={{ fill: "#a1a1aa", fontSize: 10, fontFamily: "monospace" }} />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "#18181b",
                            borderColor: "#27272a",
                            borderRadius: "16px",
                            color: "#fff",
                            fontSize: "11px",
                            fontFamily: "monospace"
                          }}
                        />
                        <Area type="monotone" dataKey="views" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorViews)" name="Page Views" />
                        <Area type="monotone" dataKey="inquiries" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorInquiries)" name="Lead Inquiries" />
                        <Legend wrapperStyle={{ fontSize: '10px', fontFamily: 'monospace', color: '#71717a' }} />
                      </AreaChart>
                    ) : activeTab === "skills" ? (
                      <BarChart data={skillAggregates} barSize={40} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e4e4e7" className="dark:stroke-zinc-800" />
                        <XAxis dataKey="name" tickLine={false} axisLine={false} tick={{ fill: "#a1a1aa", fontSize: 10, fontFamily: "monospace" }} />
                        <YAxis tickLine={false} axisLine={false} tick={{ fill: "#a1a1aa", fontSize: 10, fontFamily: "monospace" }} domain={[0, 100]} />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "#18181b",
                            borderColor: "#27272a",
                            borderRadius: "16px",
                            color: "#fff",
                            fontSize: "11px",
                            fontFamily: "monospace"
                          }}
                        />
                        <Bar dataKey="level" radius={[8, 8, 0, 0]} name="Proficiency Level (%)">
                          {skillAggregates.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.fill} />
                          ))}
                        </Bar>
                        <Legend wrapperStyle={{ fontSize: '10px', fontFamily: 'monospace', color: '#71717a' }} />
                      </BarChart>
                    ) : (
                      <PieChart>
                        <Pie
                          data={inquiryDistribution}
                          cx="50%"
                          cy="45%"
                          innerRadius={65}
                          outerRadius={90}
                          paddingAngle={3}
                          dataKey="value"
                        >
                          {inquiryDistribution.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "#18181b",
                            borderColor: "#27272a",
                            borderRadius: "16px",
                            color: "#fff",
                            fontSize: "11px",
                            fontFamily: "monospace"
                          }}
                        />
                        <Legend iconType="circle" wrapperStyle={{ fontSize: '10px', fontFamily: 'monospace', color: '#71717a' }} />
                      </PieChart>
                    )}
                  </ResponsiveContainer>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Locked security notice */}
        {!showRealTelemetry && (
          <div className="rounded-3xl border border-zinc-200 p-8 text-center bg-white dark:bg-zinc-900 dark:border-zinc-800 shadow-sm">
            <ShieldAlert className="mx-auto mb-2 h-8 w-8 text-blue-500" />
            <h4 className="font-display font-black text-zinc-900 dark:text-zinc-200 text-xs uppercase tracking-wider">Dashboard Telemetry Minimized</h4>
            <p className="mt-1.5 text-xs text-zinc-500 dark:text-zinc-400 max-w-md mx-auto leading-relaxed">
              Click the "Show Dashboard" trigger above to open full Recharts graphs displaying Saron's skill metrics and monthly recruitment acquisition funnel views.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}
