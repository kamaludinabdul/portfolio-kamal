"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/data";

type Tab = {
  key: string;
  label: string;
  projects: Project[];
};

export default function ProjectShowcase({ tabs }: { tabs: Tab[] }) {
  const [active, setActive] = useState(tabs[0]?.key);
  const activeTab = tabs.find((t) => t.key === active) ?? tabs[0];

  return (
    <div>
      <div className="mb-10 flex items-center justify-center gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActive(tab.key)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
              activeTab?.key === tab.key
                ? "bg-stone-900 text-white"
                : "border border-[#b08d57]/30 bg-white text-stone-600 hover:border-[#b08d57] hover:text-stone-900"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab?.key}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="grid gap-6 sm:grid-cols-2"
        >
          {activeTab?.projects.map((project, i) => (
            <Link
              key={project.title}
              href={`/projects/${project.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-[#b08d57]/20 bg-white shadow-sm transition-all hover:-translate-y-1 hover:border-[#b08d57]/50 hover:shadow-lg"
            >
              <div
                className={`relative flex aspect-video items-center justify-center overflow-hidden bg-gradient-to-br ${project.gradient}`}
              >
                {project.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span className="font-mono text-5xl font-bold text-white/25">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                )}
                <span className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-stone-700 opacity-0 transition-opacity group-hover:opacity-100">
                  <ArrowUpRight size={15} />
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-semibold text-stone-900">{project.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#b08d57]/10 px-3 py-1 text-xs text-[#8a6d3f]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
