import {
  ArrowUpRight,
  ArrowRight,
  MessageCircle,
  Mail,
  Linkedin,
  Dribbble,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import KulaposShowcase from "@/components/KulaposShowcase";
import CaseStudies from "@/components/CaseStudies";
import ExperienceItem from "@/components/ExperienceItem";
import {
  profile,
  whatsappLink,
  nowItems,
  services,
  projects,
  portfolioLinks,
  experiences,
  otherExperience,
  education,
  skills,
} from "@/lib/data";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />

        {/* 01 — Now */}
        <Section
          id="now"
          index="01"
          eyebrow="Now · Nov 2026"
          title={
            <>
              Three things I&apos;m doing <span className="text-muted">right now.</span>
            </>
          }
        >
          <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
            {nowItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="group flex flex-col bg-surface p-6 transition-colors hover:bg-[#fbfaf8] sm:p-8"
              >
                <span className="font-mono text-xs tracking-wide text-accent uppercase">
                  {item.verb}
                </span>
                <h3 className="mt-6 text-2xl font-semibold tracking-tight text-ink">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-muted">{item.role}</p>
                <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
                  {item.description}
                </p>
                <span className="mt-auto flex items-center gap-1.5 pt-8 text-sm font-medium text-ink">
                  More
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
              </a>
            ))}
          </div>
        </Section>

        {/* 02 — Kulapos */}
        <KulaposShowcase />

        {/* 03 — Services */}
        <Section
          id="services"
          index="03"
          eyebrow="Services"
          title={
            <>
              The toolkit behind Kulapos, <span className="text-muted">for your business.</span>
            </>
          }
          intro="Whether you're validating an idea or digitizing a store that already runs, I come in hands-on: design, build, setup, and training."
        >
          <div className="grid gap-5 md:grid-cols-2">
            {services.map((service, i) => (
              <article
                key={service.title}
                className="flex flex-col rounded-2xl border border-line bg-surface p-6 sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent">
                    {service.audience}
                  </span>
                  <span className="font-mono text-xs text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-6 text-2xl font-semibold tracking-tight text-ink">
                  {service.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                  {service.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-line bg-paper px-2.5 py-1 text-[13px] text-ink-soft"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href={whatsappLink(
                    `Hi Kamaludin, saya tertarik dengan layanan "${service.title}".`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-auto flex items-center gap-1.5 pt-8 text-sm font-medium text-ink hover:text-accent"
                >
                  Ask about this on WhatsApp
                  <ArrowUpRight
                    size={14}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </article>
            ))}
          </div>
        </Section>

        {/* 04 — Work */}
        <Section
          id="work"
          index="04"
          eyebrow="Case studies"
          title={
            <>
              Selected work, <span className="text-muted">built and designed.</span>
            </>
          }
          aside={
            <div className="flex flex-wrap gap-2">
              {portfolioLinks.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-1.5 rounded-full border border-line bg-surface px-4 py-2 text-sm text-ink transition-colors hover:border-ink/40"
                >
                  {link.label}
                  <ArrowUpRight size={14} className="text-muted group-hover:text-accent" />
                </a>
              ))}
            </div>
          }
        >
          <CaseStudies projects={projects} />
        </Section>

        {/* 05 — Experience */}
        <Section
          id="experience"
          index="05"
          eyebrow="Experience"
          title={
            <>
              Ten years from support desk <span className="text-muted">to product builder.</span>
            </>
          }
          intro="Logistics, proptech, edtech, fintech and geospatial. Every role added a piece of what I now use to build Kulapos."
        >
          <ol className="border-b border-line">
            {experiences.map((exp) => (
              <ExperienceItem key={`${exp.company}-${exp.role}`} experience={exp} />
            ))}
          </ol>
        </Section>

        {/* 06 — Beyond */}
        <Section
          id="beyond"
          index="06"
          eyebrow="Beyond the day job"
          title={
            <>
              Teaching, toolkit, <span className="text-muted">and roots.</span>
            </>
          }
        >
          <div className="grid gap-5 lg:grid-cols-3">
            <div className="rounded-2xl border border-line bg-surface p-6 sm:p-8">
              <h3 className="text-sm font-medium text-muted">Mentoring</h3>
              <ul className="mt-5 space-y-5">
                {otherExperience.map((group) => (
                  <li key={group.role}>
                    <p className="font-semibold text-ink">{group.role}</p>
                    <ul className="mt-1.5 space-y-1">
                      {group.items.map((item) => (
                        <li key={item.title} className="text-sm text-ink-soft">
                          {item.title}
                          {item.period && (
                            <span className="ml-2 font-mono text-xs text-muted">
                              {item.period}
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-line bg-surface p-6 sm:p-8">
              <h3 className="text-sm font-medium text-muted">Toolkit</h3>
              <div className="mt-5 space-y-5">
                {skills.map((group) => (
                  <div key={group.group}>
                    <p className="font-semibold text-ink">{group.group}</p>
                    <ul className="mt-2 flex flex-wrap gap-1.5">
                      {group.items.map((s) => (
                        <li
                          key={s}
                          className="rounded-md border border-line bg-paper px-2.5 py-1 text-[13px] text-ink-soft"
                        >
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col rounded-2xl border border-line bg-surface p-6 sm:p-8">
              <h3 className="text-sm font-medium text-muted">Education</h3>
              <p className="mt-5 font-semibold text-ink">{education.school}</p>
              <p className="mt-1 text-sm text-ink-soft">
                {education.degree}, {education.year}
              </p>
              <p className="mt-auto pt-10 text-xl leading-snug font-semibold tracking-tight text-ink">
                Started on a support desk fixing other people&apos;s software. Now I
                build my own.
              </p>
            </div>
          </div>
        </Section>

        {/* Contact */}
        <section id="contact" className="px-4 pb-6 sm:px-8">
          <div className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-3xl bg-ink px-6 py-16 text-white sm:px-14 sm:py-20">
            <div className="pointer-events-none absolute -right-24 -bottom-24 h-80 w-80 rounded-full bg-accent/30 blur-3xl" />
            <p className="font-mono text-xs tracking-wide text-accent-bright uppercase">
              Let&apos;s talk
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl leading-[1.08] font-semibold tracking-[-0.03em] sm:text-5xl">
              Got a store to digitize or an idea to prototype?{" "}
              <span className="text-white/55">Let&apos;s build it.</span>
            </h2>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={whatsappLink("Hi Kamaludin, saya tertarik dengan layanan kamu.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-ink transition-colors hover:bg-paper"
              >
                <MessageCircle size={16} /> Chat on WhatsApp
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 text-sm font-medium text-white transition-colors hover:border-white"
              >
                <Mail size={16} /> {profile.email}
              </a>
            </div>
            <div className="mt-8 flex gap-4 text-sm text-white/80">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white"
              >
                <Linkedin size={15} /> LinkedIn
              </a>
              <a
                href={profile.dribbble}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white"
              >
                <Dribbble size={15} /> Dribbble
              </a>
            </div>
          </div>
        </section>

        <footer className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-8 text-xs text-muted sm:flex-row sm:justify-between sm:px-8">
          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>
          <p>Designed and built by me, with AI pair-programming.</p>
        </footer>
      </main>
    </>
  );
}
