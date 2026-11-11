"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Linkedin, Dribbble, Mail } from "lucide-react";
import { profile } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease },
});

type Shelf = {
  name: string;
  tagline: string;
  image: string;
  href: string;
  external?: boolean;
  frame: "browser" | "phone";
  tint: string;
  url: string;
};

const shelf: Shelf[] = [
  {
    name: "Kula OS",
    tagline: "AI business OS & smart POS",
    image: "/projects/kulapos/dashboard.png",
    href: "#kulapos",
    frame: "browser",
    tint: "#e7e3fb",
    url: "kulapos.id",
  },
  {
    name: "Struki",
    tagline: "Offline Android cashier",
    image: "/projects/struki/hero.jpg",
    href: "https://struki.insyntive.com/",
    external: true,
    frame: "browser",
    tint: "#e9e7fb",
    url: "struki.insyntive.com",
  },
  {
    name: "Masak Apa Besok?",
    tagline: "Tomorrow's menu, sorted",
    image: "/projects/masak-apa-besok/hero.jpg",
    href: "https://makanapabesok.insyntive.com/",
    external: true,
    frame: "phone",
    tint: "#efe2cf",
    url: "makanapabesok",
  },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="hero-grid pointer-events-none absolute inset-0" />

      <div className="relative mx-auto w-full max-w-6xl px-4 pt-12 pb-16 sm:px-8 sm:pt-20 sm:pb-24">
        <motion.p
          {...fadeUp(0)}
          className="inline-flex max-w-full items-center gap-2.5 rounded-full border border-line bg-surface py-1.5 pr-3.5 pl-2.5 text-xs text-ink-soft shadow-sm sm:text-[13px]"
        >
          <span className="live-dot shrink-0" />
          <span className="truncate">
            Product Designer at GeoSquare.ai
            <span className="text-muted"> · </span>
            Founder of Kulapos.id
          </span>
        </motion.p>

        <motion.h1
          {...fadeUp(0.05)}
          className="mt-7 max-w-4xl text-[2.6rem] leading-[1.04] font-bold tracking-[-0.035em] text-ink sm:text-6xl lg:text-[5rem]"
        >
          Product designer
          <br />
          <span className="text-accent">&amp; product builder.</span>
        </motion.h1>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <motion.p
            {...fadeUp(0.12)}
            className="max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg"
          >
            I&apos;m {profile.shortName}. Seven years designing products for logistics,
            proptech, edtech and geospatial teams. Now I also build and ship my own,
            from research and UI to AI-assisted code and rollout in real stores.
          </motion.p>

          <motion.div {...fadeUp(0.18)} className="flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="group flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-paper transition-colors hover:bg-accent"
            >
              See what I&apos;ve built
              <ArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href="#services"
              className="rounded-full border border-line bg-surface px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-ink/40"
            >
              Work with me
            </a>
            <div className="ml-1 flex items-center gap-1 text-muted">
              {[
                { href: profile.linkedin, icon: Linkedin, label: "LinkedIn" },
                { href: profile.dribbble, icon: Dribbble, label: "Dribbble" },
                { href: `mailto:${profile.email}`, icon: Mail, label: "Email" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-ink/[0.06] hover:text-ink"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Product shelf: things I've designed and shipped myself */}
        <div className="mt-14 sm:mt-16">
          <motion.p
            {...fadeUp(0.22)}
            className="mb-4 font-mono text-xs tracking-wide text-muted uppercase"
          >
            Designed &amp; built by me
          </motion.p>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-[1.7fr_1.1fr_0.62fr]">
            {shelf.map((item, i) => (
              <motion.a
                key={item.name}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.28 + i * 0.08, ease }}
                className={`group flex flex-col ${i === 0 ? "col-span-2 lg:col-span-1" : ""}`}
              >
                <div
                  className="relative flex h-48 overflow-hidden rounded-2xl border border-line px-4 pt-4 transition-shadow duration-300 group-hover:shadow-[0_24px_60px_-30px_rgba(18,18,20,0.4)] sm:h-64 sm:px-5 sm:pt-5 lg:h-[340px]"
                  style={{ backgroundColor: item.tint }}
                >
                  {item.frame === "browser" ? (
                    <div className="flex w-full flex-col overflow-hidden rounded-t-lg border border-b-0 border-black/10 bg-white shadow-lg transition-transform duration-500 group-hover:-translate-y-1">
                      <div className="flex shrink-0 items-center gap-1.5 border-b border-black/5 px-3 py-2">
                        <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
                        <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
                        <span className="h-2 w-2 rounded-full bg-[#28c840]" />
                        <span className="ml-2 truncate font-mono text-[10px] text-muted">
                          {item.url}
                        </span>
                      </div>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.image}
                        alt={`${item.name} screenshot`}
                        className="min-h-0 w-full flex-1 object-cover object-left-top"
                      />
                    </div>
                  ) : (
                    <div className="mx-auto w-[62%] max-w-[170px] overflow-hidden rounded-t-[1.4rem] border-[5px] border-b-0 border-ink bg-white shadow-lg transition-transform duration-500 group-hover:-translate-y-1 lg:w-full lg:max-w-none">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.image}
                        alt={`${item.name} screenshot`}
                        className="h-full w-full object-cover object-top"
                      />
                    </div>
                  )}
                </div>
                <div className="mt-3 flex items-start justify-between gap-2">
                  <div>
                    <p className="text-sm font-semibold text-ink">{item.name}</p>
                    <p className="text-xs text-muted">{item.tagline}</p>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="mt-0.5 shrink-0 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                  />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
