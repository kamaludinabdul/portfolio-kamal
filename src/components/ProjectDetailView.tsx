"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import type { ProjectDetail } from "@/lib/projectDetails";

export default function ProjectDetailView({
  project,
}: {
  project: ProjectDetail;
}) {
  const [openSection, setOpenSection] = useState<string | undefined>(
    project.sections[0]?.id
  );
  const [activeTab, setActiveTab] = useState<string | undefined>(
    project.tabs[0]?.id
  );

  const activeTabData =
    project.tabs.find((t) => t.id === activeTab) ?? project.tabs[0];

  return (
    <div className="canvas-grid grid min-h-[calc(100vh-72px)] grid-cols-1 lg:grid-cols-[380px_1fr]">
      {/* Sidebar: project detail + accordion */}
      <aside className="border-b border-[#b08d57]/20 bg-white/70 p-6 backdrop-blur-sm lg:sticky lg:top-[72px] lg:h-[calc(100vh-72px)] lg:overflow-y-auto lg:border-b-0 lg:border-r">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#b08d57]">
          {project.eyebrow}
        </p>
        <h1 className="mt-2 text-xl font-semibold leading-snug text-stone-900">
          {project.title}
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-stone-600">
          {project.summary}
        </p>

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-[#b08d57]/30 bg-white px-3.5 py-1.5 text-xs font-medium text-stone-700 transition-colors hover:border-[#b08d57] hover:text-[#b08d57]"
          >
            Visit live site <ArrowUpRight size={13} />
          </a>
        )}

        {project.stats && (
          <div className="mt-6 grid grid-cols-2 gap-3">
            {project.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-[#b08d57]/15 bg-white px-3 py-3 text-center"
              >
                <p className="text-lg font-semibold text-stone-900">
                  {stat.value}
                </p>
                <p className="mt-0.5 text-[11px] leading-tight text-stone-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        )}

        <div className="mt-6 space-y-2">
          {project.sections.map((section) => {
            const isOpen = openSection === section.id;
            return (
              <div
                key={section.id}
                className="overflow-hidden rounded-lg border border-[#b08d57]/15 bg-white"
              >
                <button
                  onClick={() => setOpenSection(isOpen ? undefined : section.id)}
                  className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium text-stone-800 transition-colors hover:bg-[#faf7f2]"
                >
                  {section.title}
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-stone-400"
                  >
                    <ChevronDown size={16} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-2 px-4 pb-4 font-mono text-xs leading-relaxed text-stone-600">
                        {section.content.map((line, i) => (
                          <p key={i} className="flex gap-2">
                            <span className="text-[#b08d57]">▸</span>
                            <span>{line}</span>
                          </p>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </aside>

      {/* Main: tab switcher + stacked screens */}
      <div className="flex flex-col">
        <div className="flex gap-1 overflow-x-auto border-b border-[#b08d57]/20 bg-white/60 px-4 py-2 backdrop-blur-sm">
          {project.tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative shrink-0 rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                  isActive
                    ? "text-stone-900"
                    : "text-stone-500 hover:text-stone-800"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="tab-pill"
                    className="absolute inset-0 rounded-md bg-[#b08d57]/10"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative">{tab.label}</span>
              </button>
            );
          })}
        </div>

        <div className="flex-1 space-y-6 overflow-y-auto p-6 sm:p-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTabData?.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="mx-auto flex w-full max-w-4xl flex-col gap-6"
            >
              {activeTabData?.description && (
                <p className="text-sm leading-relaxed text-stone-600">
                  {activeTabData.description}
                </p>
              )}
              {activeTabData?.images
                ? activeTabData.images.map((src) => (
                    <div
                      key={src}
                      className="flex aspect-video items-center justify-center overflow-hidden rounded-xl bg-white shadow-lg"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={src}
                        alt={activeTabData?.label ?? project.title}
                        className="h-full w-full object-contain"
                      />
                    </div>
                  ))
                : Array.from({ length: activeTabData?.screens ?? 1 }).map(
                    (_, i) => (
                      <PlaceholderScreen
                        key={i}
                        gradient={project.accentGradient}
                        label={activeTabData?.label ?? project.title}
                      />
                    )
                  )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function PlaceholderScreen({
  gradient,
  label,
}: {
  gradient: string;
  label: string;
}) {
  return (
    <div className="frame-corners overflow-hidden rounded-xl border border-[#b08d57]/20 bg-stone-900 shadow-lg">
      {/* fake browser/app top bar */}
      <div className="flex items-center gap-2 border-b border-white/10 bg-stone-950 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#e8a3a3]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#e8d3a3]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#a8cbb7]" />
        <span
          className={`ml-3 rounded bg-gradient-to-r ${gradient} bg-clip-text font-mono text-xs font-medium text-transparent`}
        >
          {label}
        </span>
      </div>

      {/* fake screen body */}
      <div className="relative flex aspect-video items-center justify-center bg-gradient-to-br from-stone-900 via-stone-900 to-stone-800 p-6">
        <div className="w-full max-w-sm space-y-3 opacity-40">
          <div className={`h-2 w-1/3 rounded-full bg-gradient-to-r ${gradient}`} />
          <div className="h-2 w-full rounded-full bg-white/10" />
          <div className="h-2 w-5/6 rounded-full bg-white/10" />
          <div className="mt-4 grid grid-cols-3 gap-2">
            <div className="h-14 rounded-md bg-white/5" />
            <div className="h-14 rounded-md bg-white/5" />
            <div className="h-14 rounded-md bg-white/5" />
          </div>
          <div className="h-2 w-2/3 rounded-full bg-white/10" />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center">
          <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">
            Screenshot coming soon
          </span>
          <span
            className={`bg-gradient-to-r ${gradient} bg-clip-text px-6 font-mono text-sm font-medium text-transparent`}
          >
            {label}
          </span>
        </div>
      </div>
    </div>
  );
}
