import { ReactNode } from "react";

export default function Section({
  id,
  index,
  eyebrow,
  title,
  intro,
  aside,
  className = "",
  children,
}: {
  id?: string;
  /** Two-digit section number shown before the eyebrow, e.g. "01" */
  index?: string;
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  /** Optional element aligned to the right of the heading on wide screens */
  aside?: ReactNode;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`mx-auto w-full max-w-6xl px-4 py-20 sm:px-8 sm:py-28 ${className}`}
    >
      <div className="mb-10 flex flex-col gap-6 sm:mb-14 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          {(index || eyebrow) && (
            <p className="mb-4 flex items-center gap-3 font-mono text-xs tracking-wide text-muted uppercase">
              {index && <span className="text-accent">{index}</span>}
              {index && eyebrow && <span className="h-px w-6 bg-line" />}
              {eyebrow}
            </p>
          )}
          <h2 className="text-3xl leading-[1.08] font-semibold tracking-[-0.03em] text-ink sm:text-[2.75rem]">
            {title}
          </h2>
          {intro && (
            <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
              {intro}
            </p>
          )}
        </div>
        {aside}
      </div>
      {children}
    </section>
  );
}
