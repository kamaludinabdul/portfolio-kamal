"use client";

import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import type { ExperienceImage } from "@/lib/data";

/** Thumbnail strip of product shots that opens a full-size lightbox on click. */
export default function ExperienceGallery({
  images,
  company,
}: {
  images: ExperienceImage[];
  company: string;
}) {
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (dir: 1 | -1) =>
      setOpen((i) => (i === null ? i : (i + dir + images.length) % images.length)),
    [images.length]
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close, step]);

  const current = open === null ? null : images[open];

  return (
    <>
      <ul
        className={`mt-5 grid max-w-2xl grid-cols-2 gap-3 ${
          images.length > 2 ? "sm:grid-cols-3" : ""
        }`}
      >
        {images.map((img, i) => (
          <li key={img.src}>
            <button
              type="button"
              onClick={() => setOpen(i)}
              aria-label={`Open ${company}: ${img.caption}`}
              className="group block w-full text-left"
            >
              <span
                className={`relative block aspect-[16/10] overflow-hidden rounded-lg border border-line ${
                  img.mobile ? "bg-[#ecebe7] px-2 pt-2" : "bg-surface"
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt={`${company}: ${img.caption}`}
                  loading="lazy"
                  className={`h-full transition-transform duration-500 group-hover:scale-[1.03] ${
                    img.mobile
                      ? "mx-auto block w-[48%] rounded-t-md object-cover object-top shadow-md"
                      : "w-full object-cover object-top"
                  }`}
                />
                <span className="absolute right-2 bottom-2 flex h-7 w-7 items-center justify-center rounded-full bg-ink/70 text-paper opacity-0 transition-opacity group-hover:opacity-100">
                  <Maximize2 size={13} />
                </span>
              </span>
              <span className="mt-1.5 block text-xs leading-snug text-muted">
                {img.caption}
              </span>
            </button>
          </li>
        ))}
      </ul>

      {/* Only portal while open: the server never renders it, so hydration stays clean */}
      {current &&
        createPortal(
          <AnimatePresence>
            {current && (
              <motion.div
                key="lightbox"
                role="dialog"
                aria-modal="true"
                aria-label={`${company}: ${current.caption}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={close}
                className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink/85 p-4 backdrop-blur-sm sm:p-10"
              >
                <button
                  type="button"
                  onClick={close}
                  aria-label="Close"
                  className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                >
                  <X size={18} />
                </button>

                <motion.figure
                  key={current.src}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                  onClick={(e) => e.stopPropagation()}
                  className="flex max-h-full flex-col items-center"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={current.src}
                    alt={`${company}: ${current.caption}`}
                    className="max-h-[80vh] max-w-full rounded-lg bg-white object-contain shadow-2xl"
                  />
                  <figcaption className="mt-4 text-center text-sm text-white/80">
                    <span className="font-semibold text-white">{company}</span> ·{" "}
                    {current.caption}
                    {images.length > 1 && (
                      <span className="ml-2 font-mono text-xs text-white/50">
                        {open! + 1}/{images.length}
                      </span>
                    )}
                  </figcaption>
                </motion.figure>

                {images.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        step(-1);
                      }}
                      aria-label="Previous image"
                      className="absolute top-1/2 left-3 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-6"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        step(1);
                      }}
                      aria-label="Next image"
                      className="absolute top-1/2 right-3 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}
