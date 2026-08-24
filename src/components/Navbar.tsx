"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { navLinks, profile } from "@/lib/data";

const NAVBAR_OFFSET = 72;

function scrollToHash(hash: string) {
  const target = document.querySelector(hash);
  if (!target) return;
  const top = target.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET;
  window.scrollTo({ top, behavior: "smooth" });
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");
  const router = useRouter();
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // If we land on the homepage with a hash (e.g. navigated from another
  // page), scroll to that section once everything is mounted.
  useEffect(() => {
    if (isHome && window.location.hash) {
      requestAnimationFrame(() => scrollToHash(window.location.hash));
    }
  }, [isHome]);

  useEffect(() => {
    if (!isHome) return;

    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((el): el is Element => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: `-${NAVBAR_OFFSET + 40}px 0px -60% 0px` }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isHome]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();

    if (!isHome) {
      // Navigate back to the homepage first, then scroll once it's loaded.
      router.push(`/${href}`);
      return;
    }

    scrollToHash(href);
    setActive(href);
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (!isHome) {
      router.push("/");
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
    setActive("");
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled
          ? "border-b border-[#b08d57]/15 bg-[#faf7f2]/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4 sm:px-8">
        <a
          href="#top"
          onClick={handleLogoClick}
          className="font-mono text-sm font-medium text-stone-900 transition-transform active:scale-95"
        >
          {profile.shortName}
          <span className="text-[#b08d57]">.ai</span>
        </a>
        <ul className="flex items-center gap-6 text-sm text-stone-600">
          {navLinks.map((link) => (
            <li key={link.href} className="relative">
              <a
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`relative inline-block py-1 transition-colors active:scale-95 ${
                  active === link.href
                    ? "text-stone-900"
                    : "hover:text-[#b08d57]"
                }`}
              >
                {link.label}
                {active === link.href && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-0.5 left-0 h-[2px] w-full bg-[#b08d57]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
