"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import {
  profile,
  kulaposStats,
  kulaposIndustries,
  kulaposCopilot,
} from "@/lib/data";
import { projectDetails } from "@/lib/projectDetails";

const screens = projectDetails.kulapos.tabs.filter((t) => t.images?.length);

export default function KulaposShowcase() {
  const [active, setActive] = useState(screens[0]?.id);
  const screen = screens.find((s) => s.id === active) ?? screens[0];

  return (
    <section id="kulapos" className="relative overflow-hidden bg-ink text-paper">
      <div className="dark-grid pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[48rem] -translate-x-1/2 rounded-full bg-accent/30 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-6xl px-4 py-20 sm:px-8 sm:py-28">
        {/* Heading */}
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <div>
            <p className="mb-4 flex items-center gap-3 font-mono text-xs tracking-wide text-white/50 uppercase">
              <span className="text-accent-bright">02</span>
              <span className="h-px w-6 bg-white/15" />
              Flagship · Kulapos.id
            </p>
            <h2 className="text-3xl leading-[1.08] font-semibold tracking-[-0.03em] sm:text-[2.75rem]">
              Kula OS, an AI business OS and smart POS for{" "}
              <span className="text-accent-bright">Indonesia&apos;s small businesses.</span>
            </h2>
          </div>
          <div>
            <p className="text-base leading-relaxed text-white/65 sm:text-lg">
              Built for retail, F&amp;B, pharmacy and laundry, with automatic controls
              for PS and billiard rentals, pet shops and clinics, and printing and
              craft shops. I designed it, built it with AI-assisted coding, and help
              owners roll it out in their stores.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={profile.kulapos}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 rounded-full bg-paper px-5 py-3 text-sm font-medium text-ink transition-colors hover:bg-accent-bright"
              >
                Try Kula OS free
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
              <Link
                href="/projects/kulapos"
                className="group flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-paper transition-colors hover:border-white/40"
              >
                Read the build story
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Stats */}
        <dl className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 lg:grid-cols-4">
          {kulaposStats.map((s) => (
            <div key={s.label} className="bg-ink px-5 py-5 sm:px-6">
              <dt className="text-xs text-white/50">{s.label}</dt>
              <dd className="mt-1 text-2xl font-semibold tracking-tight sm:text-3xl">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>

        {/* Screen viewer */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
          <div
            role="tablist"
            aria-label="Kulapos screens"
            className="flex gap-1 overflow-x-auto border-b border-white/10 p-2"
          >
            {screens.map((s) => {
              const isActive = s.id === screen?.id;
              return (
                <button
                  key={s.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(s.id)}
                  className={`relative shrink-0 rounded-lg px-3.5 py-2 text-sm transition-colors ${
                    isActive ? "text-paper" : "text-white/50 hover:text-white/80"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="kula-tab"
                      className="absolute inset-0 rounded-lg bg-white/10"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative">{s.label}</span>
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={screen?.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid lg:grid-cols-[1fr_300px]"
            >
              <div className="bg-white p-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={screen?.images?.[0]}
                  alt={`Kulapos ${screen?.label} screen`}
                  className="aspect-[1920/1000] w-full object-cover object-top"
                />
              </div>
              <div className="border-t border-white/10 p-5 sm:p-6 lg:border-t-0 lg:border-l">
                <p className="font-mono text-xs text-accent-bright uppercase">
                  {screen?.label}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  {screen?.description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Copilot + industries */}
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <div className="rounded-2xl border border-white/10 p-6 sm:p-8">
            <p className="flex items-center gap-2 text-sm font-medium text-accent-bright">
              <Sparkles size={15} /> Kula Copilot
            </p>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {kulaposCopilot.map((f) => (
                <div key={f.title}>
                  <h3 className="font-medium">{f.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/55">
                    {f.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 p-6 sm:p-8">
            <p className="text-sm font-medium text-white/80">Built for 10+ industries</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {kulaposIndustries.map((ind) => (
                <li
                  key={ind}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[13px] text-white/75"
                >
                  {ind}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
