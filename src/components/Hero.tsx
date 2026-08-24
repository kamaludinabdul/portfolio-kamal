"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail, ArrowRight, Dribbble } from "lucide-react";
import { profile, stats } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="top"
      className="paper-texture canvas-grid relative overflow-hidden border-b border-[#b08d57]/15 px-6 pt-16 pb-20 sm:px-8"
    >
      <div className="mx-auto grid w-full max-w-5xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left: text */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#b08d57]/30 bg-white px-3 py-1 font-mono text-xs text-[#8a6d3f]">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Open for select projects
          </div>

          <h1 className="text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl">
            Hi, I&apos;m {profile.shortName}.
            <br />
            <span className="text-[#b08d57]">{profile.role}</span> &amp;
            builder.
          </h1>

          <p className="mt-5 max-w-md text-base leading-relaxed text-stone-600">
            {profile.tagline} 7+ years turning research and business goals
            into interfaces people actually enjoy using — then prototyping
            them fast with AI-assisted tools.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group flex items-center gap-2 rounded-full bg-stone-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-stone-700"
            >
              See my work{" "}
              <ArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-1"
              />
            </motion.a>
            <motion.a
              href={`mailto:${profile.email}`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 rounded-full border border-[#b08d57]/30 bg-white px-5 py-2.5 text-sm font-medium text-stone-700 transition-colors hover:border-[#b08d57]"
            >
              <Mail size={15} /> Get in touch
            </motion.a>
          </div>

          <div className="mt-6 flex items-center gap-4 text-stone-500">
            <motion.a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, rotate: -6 }}
              whileTap={{ scale: 0.95 }}
              className="transition-colors hover:text-[#b08d57]"
            >
              <Linkedin size={18} />
            </motion.a>
            <motion.a
              href={profile.dribbble}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, rotate: 6 }}
              whileTap={{ scale: 0.95 }}
              className="transition-colors hover:text-[#b08d57]"
            >
              <Dribbble size={18} />
            </motion.a>
          </div>
        </motion.div>

        {/* Right: visual card */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          <div className="frame-corners relative rounded-2xl border border-[#b08d57]/25 bg-white p-6 shadow-lg shadow-[#b08d57]/5">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#e8a3a3]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#e8d3a3]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#a8cbb7]" />
              <span className="ml-2 font-mono text-xs text-stone-400">
                portfolio.tsx
              </span>
            </div>

            <div className="mt-4 space-y-2 font-mono text-xs leading-relaxed text-stone-600">
              <p>
                <span className="text-[#8a6dab]">const</span>{" "}
                <span className="text-[#4f7cab]">designer</span> = {"{"}
              </p>
              <p className="pl-4">
                role:{" "}
                <span className="text-[#5c8a70]">&quot;{profile.role}&quot;</span>,
              </p>
              <p className="pl-4">
                experience:{" "}
                <span className="text-[#ab4f4f]">7</span>,
              </p>
              <p className="pl-4">
                superpower:{" "}
                <span className="text-[#5c8a70]">
                  &quot;design + AI code&quot;
                </span>
                ,
              </p>
              <p>{"}"}</p>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-3 border-t border-[#b08d57]/15 pt-5">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-xl font-semibold text-stone-900">
                    {s.value}
                  </p>
                  <p className="mt-0.5 text-[10px] leading-tight text-stone-500">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* floating accent chip */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 -right-4 rounded-xl border border-[#b08d57]/25 bg-white px-3 py-2 text-xs font-medium text-stone-700 shadow-md sm:-right-8"
          >
            ✦ Figma &rarr; Code
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
