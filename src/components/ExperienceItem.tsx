"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { formatDuration, type Experience } from "@/lib/data";
import ExperienceGallery from "@/components/ExperienceGallery";

const VISIBLE_BULLETS = 2;

export default function ExperienceItem({ experience }: { experience: Experience }) {
  const [expanded, setExpanded] = useState(false);
  const { role, company, period, start, end, current, description, bullets, images } =
    experience;

  const hiddenCount = bullets ? bullets.length - VISIBLE_BULLETS : 0;
  const shownBullets =
    bullets && !expanded ? bullets.slice(0, VISIBLE_BULLETS) : bullets;

  return (
    <li className="grid gap-2 border-t border-line py-7 sm:grid-cols-[200px_1fr] sm:gap-8 lg:grid-cols-[260px_1fr]">
      <div className="flex items-baseline gap-3 sm:flex-col sm:gap-1">
        <span className="font-mono text-xs text-ink-soft">{period}</span>
        {start && end && (
          <span className="font-mono text-xs text-muted">
            {formatDuration(start, end)}
          </span>
        )}
      </div>

      <div>
        <h3 className="flex flex-wrap items-center gap-x-2 gap-y-1 text-lg font-semibold tracking-tight text-ink">
          {company}
          {current && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-2 py-0.5 text-[11px] font-medium text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Now
            </span>
          )}
        </h3>
        <p className="text-sm text-muted">{role}</p>

        {description && (
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
            {description}
          </p>
        )}

        {shownBullets && (
          <ul className="mt-3 max-w-2xl space-y-1.5 text-[15px] leading-relaxed text-ink-soft">
            {shownBullets.map((b, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-[0.7em] h-px w-3 shrink-0 bg-ink/30" />
                {b}
              </li>
            ))}
          </ul>
        )}

        {hiddenCount > 0 && (
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
          >
            {expanded ? <Minus size={14} /> : <Plus size={14} />}
            {expanded ? "Show less" : `${hiddenCount} more`}
          </button>
        )}

        {images && images.length > 0 && (
          <ExperienceGallery images={images} company={company} />
        )}
      </div>
    </li>
  );
}
