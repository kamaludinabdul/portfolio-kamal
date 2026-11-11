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
    <div className="grid min-h-[calc(100vh-64px)] grid-cols-1 lg:grid-cols-[400px_1fr]">
      {/* Sidebar: project detail + accordion */}
      <aside className="border-b border-line bg-surface p-5 sm:p-8 lg:sticky lg:top-[64px] lg:h-[calc(100vh-64px)] lg:overflow-y-auto lg:border-r lg:border-b-0">
        <p className="font-mono text-xs tracking-wide text-accent uppercase">
          {project.eyebrow}
        </p>
        <h1 className="mt-3 text-2xl leading-tight font-semibold tracking-tight text-ink">
          {project.title}
        </h1>
        <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
          {project.summary}
        </p>

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-sm font-medium text-paper transition-colors hover:bg-accent"
          >
            Visit live site <ArrowUpRight size={13} />
          </a>
        )}

        {project.stats && (
          <div className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line">
            {project.stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-surface px-4 py-3"
              >
                <p className="text-xl font-semibold tracking-tight text-ink">
                  {stat.value}
                </p>
                <p className="mt-0.5 text-xs leading-tight text-muted">
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
                className="overflow-hidden rounded-xl border border-line bg-surface"
              >
                <button
                  onClick={() => setOpenSection(isOpen ? undefined : section.id)}
                  className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium text-ink transition-colors hover:bg-paper"
                >
                  {section.title}
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-muted"
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
                      <div className="space-y-2.5 px-4 pb-4 text-sm leading-relaxed text-ink-soft">
                        {section.content.map((line, i) => (
                          <p key={i} className="flex gap-2">
                            <span className="mt-[0.65em] h-px w-3 shrink-0 bg-ink/30" />
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
        <div className="flex gap-1 overflow-x-auto border-b border-line bg-paper/90 px-3 py-2 backdrop-blur-sm lg:sticky lg:top-[64px] lg:z-10">
          {project.tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative shrink-0 rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                  isActive
                    ? "text-ink"
                    : "text-muted hover:text-ink"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="tab-pill"
                    className="absolute inset-0 rounded-md bg-ink/[0.06]"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative">{tab.label}</span>
              </button>
            );
          })}
        </div>

        <div className="flex-1 space-y-6 p-4 sm:p-10">
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
                <p className="max-w-2xl text-[15px] leading-relaxed text-ink-soft">
                  {activeTabData.description}
                </p>
              )}
              {activeTabData?.images
                ? activeTabData.images.map((src) => (
                    <div
                      key={src}
                      className="overflow-hidden rounded-xl border border-line bg-surface shadow-[0_24px_60px_-30px_rgba(18,18,20,0.35)]"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={src}
                        alt={activeTabData?.label ?? project.title}
                        className="w-full"
                      />
                    </div>
                  ))
                : (
                    <div className="flex aspect-video flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-ink/15 bg-surface text-center">
                      <span className="font-mono text-xs tracking-wide text-muted uppercase">
                        Screen coming soon
                      </span>
                      <span className="text-lg font-semibold tracking-tight text-ink">
                        {activeTabData?.label ?? project.title}
                      </span>
                    </div>
                  )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
