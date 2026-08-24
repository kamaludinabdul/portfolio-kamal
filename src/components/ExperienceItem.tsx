"use client";

import { motion } from "framer-motion";
import type { Experience } from "@/lib/data";

export default function ExperienceItem({
  experience,
  index,
  isLast,
}: {
  experience: Experience;
  index: number;
  isLast: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.03, 0.3) }}
      className="relative flex gap-5 pb-10 last:pb-0"
    >
      {/* timeline rail */}
      <div className="relative flex flex-col items-center">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#b08d57]/40 bg-white font-mono text-xs font-medium text-[#8a6d3f]">
          {String(index + 1).padStart(2, "0")}
        </span>
        {!isLast && (
          <span className="mt-2 w-px flex-1 bg-gradient-to-b from-[#b08d57]/40 to-transparent" />
        )}
      </div>

      {/* content */}
      <div className="flex-1 rounded-xl border border-[#b08d57]/15 bg-white p-5 shadow-sm">
        <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
          <h3 className="text-base font-semibold text-stone-900">
            {experience.role}{" "}
            <span className="text-[#b08d57]">@ {experience.company}</span>
          </h3>
          <span className="shrink-0 font-mono text-xs text-stone-500">
            {experience.period}
          </span>
        </div>
        {experience.description && (
          <p className="mt-2 text-sm leading-relaxed text-stone-600">
            {experience.description}
          </p>
        )}
        {experience.bullets && (
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-stone-600 marker:text-[#b08d57]">
            {experience.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
}
