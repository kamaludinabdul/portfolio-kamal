import { ExternalLink, GraduationCap, Palette, Wrench, Globe } from "lucide-react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ExperienceItem from "@/components/ExperienceItem";
import ProjectShowcase from "@/components/ProjectShowcase";
import {
  profile,
  experiences,
  otherExperience,
  education,
  skills,
  portfolioLinks,
  designerProjects,
  vibeCoderProjects,
} from "@/lib/data";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />

        <Section id="about" title="Introduction" tag="whoami" align="left">
          <div className="grid gap-8 lg:grid-cols-[0.35fr_0.65fr]">
            <div className="hidden lg:block">
              <div className="frame-corners relative h-full min-h-[160px] rounded-2xl border border-[#b08d57]/20 bg-gradient-to-br from-[#e8c9a3]/40 to-[#b08d57]/20" />
            </div>
            <div className="space-y-4 text-sm leading-relaxed text-stone-600 sm:text-base">
              {profile.intro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </Section>

        <Section id="projects" title="Selected Work" tag="portfolio --list">
          <ProjectShowcase
            tabs={[
              { key: "designer", label: "As Designer", projects: designerProjects },
              { key: "vibe-coder", label: "As Builder", projects: vibeCoderProjects },
            ]}
          />
        </Section>

        <Section
          id="experience"
          title="Work Experience"
          tag="git log --career"
          align="left"
        >
          <div>
            {experiences.map((exp, i) => (
              <ExperienceItem
                key={`${exp.company}-${i}`}
                experience={exp}
                index={i}
                isLast={i === experiences.length - 1}
              />
            ))}
          </div>
        </Section>

        <Section id="other" title="Other Experience" tag="side-quests">
          <div className="grid gap-6 sm:grid-cols-3">
            {otherExperience.map((group) => (
              <div
                key={group.role}
                className="rounded-xl border border-[#b08d57]/15 bg-white p-5 text-center shadow-sm"
              >
                <h3 className="text-base font-semibold text-stone-900">
                  {group.role}
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-stone-600">
                  {group.items.map((item) => (
                    <li key={item.title}>
                      {item.title}
                      {item.period && (
                        <span className="block font-mono text-xs text-stone-500">
                          {item.period}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="skills" title="Skills & Education" tag="stack.json">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-[#b08d57]/15 bg-white p-5 shadow-sm">
              <Palette size={20} className="text-[#b08d57]" />
              <h3 className="mt-3 font-semibold text-stone-900">
                Visual Design
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {skills.visualDesign.map((s) => (
                  <span
                    key={s}
                    className="rounded-md border border-[#b08d57]/25 bg-[#faf7f2] px-2.5 py-1 font-mono text-xs text-stone-700"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-[#b08d57]/15 bg-white p-5 shadow-sm">
              <Wrench size={20} className="text-[#b08d57]" />
              <h3 className="mt-3 font-semibold text-stone-900">Tools</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {skills.tools.map((s) => (
                  <span
                    key={s}
                    className="rounded-md border border-[#b08d57]/25 bg-[#faf7f2] px-2.5 py-1 font-mono text-xs text-stone-700"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-[#b08d57]/15 bg-white p-5 shadow-sm">
              <Globe size={20} className="text-[#b08d57]" />
              <h3 className="mt-3 font-semibold text-stone-900">Languages</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {skills.languages.map((s) => (
                  <span
                    key={s}
                    className="rounded-md border border-[#b08d57]/25 bg-[#faf7f2] px-2.5 py-1 font-mono text-xs text-stone-700"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-[#b08d57]/15 bg-white p-5 shadow-sm">
              <GraduationCap size={20} className="text-[#b08d57]" />
              <h3 className="mt-3 font-semibold text-stone-900">Education</h3>
              <p className="mt-3 text-sm font-medium text-stone-800">
                {education.school}
              </p>
              <p className="text-sm text-stone-600">
                {education.degree}, {education.year}
              </p>
            </div>
          </div>
        </Section>

        <Section id="portfolio" title="Portfolio" tag="external-links">
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            {portfolioLinks.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-[#b08d57]/30 bg-white px-5 py-3 text-sm font-medium text-stone-800 shadow-sm transition-colors hover:border-[#b08d57] hover:bg-[#fdf9f0]"
              >
                {link.label}
                <ExternalLink size={14} className="text-[#b08d57]" />
              </a>
            ))}
          </div>
        </Section>

        <footer className="border-t border-[#b08d57]/20 px-6 py-10 text-center sm:px-8">
          <div className="ornament mb-3 max-w-xs mx-auto">
            <span className="text-xs">&#10022;</span>
          </div>
          <p className="text-xs text-stone-500">
            © {new Date().getFullYear()} {profile.name}. Built with Next.js.
          </p>
        </footer>
      </main>
    </>
  );
}
