import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/data";

const cardClass =
  "group flex flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-ink/20 hover:shadow-[0_24px_60px_-30px_rgba(18,18,20,0.35)]";

export default function CaseStudies({ projects }: { projects: Project[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {projects.map((project) => {
        const body = <CardBody project={project} />;

        // Projects with a case study page open it; the rest go to the live product.
        return project.caseStudy ? (
          <Link key={project.slug} href={`/projects/${project.slug}`} className={cardClass}>
            {body}
          </Link>
        ) : (
          <a
            key={project.slug}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className={cardClass}
          >
            {body}
          </a>
        );
      })}
    </div>
  );
}

function CardBody({ project }: { project: Project }) {
  return (
    <>
      <div className="relative aspect-[16/10] overflow-hidden border-b border-line">
        {project.image ? (
          <div
            className="absolute inset-0"
            style={{ backgroundColor: project.tint ?? "#ebe8fb" }}
          >
            {project.imageFrame === "phone" ? (
              <div className="absolute top-6 left-1/2 h-[140%] w-[42%] -translate-x-1/2 overflow-hidden rounded-[1.75rem] border-[6px] border-ink bg-white shadow-xl transition-transform duration-500 group-hover:-translate-y-2 sm:top-8">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover object-top"
                />
              </div>
            ) : (
              <div className="absolute inset-x-5 top-5 bottom-0 overflow-hidden rounded-t-lg border border-b-0 border-black/10 bg-white shadow-lg transition-transform duration-500 group-hover:scale-[1.02] sm:inset-x-7 sm:top-7">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover object-left-top"
                />
              </div>
            )}
          </div>
        ) : (
          <ScoreVisual />
        )}
        <span className="absolute top-4 left-4 rounded-full bg-ink px-2.5 py-1 font-mono text-[11px] text-paper">
          {project.kind}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <p className="text-sm text-muted">{project.client}</p>
        <h3 className="mt-1 flex items-start justify-between gap-4 text-xl font-semibold tracking-tight text-ink">
          {project.title}
          <ArrowUpRight
            size={20}
            className="mt-0.5 shrink-0 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
          />
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
          {project.description}
        </p>
        <div className="mt-auto flex flex-wrap items-end justify-between gap-4 pt-6">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-line px-2.5 py-1 text-xs text-ink-soft"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="text-right">
            <span className="block text-2xl font-semibold tracking-tight text-ink">
              {project.highlight.value}
            </span>
            <span className="text-xs text-muted">{project.highlight.label}</span>
          </p>
        </div>
      </div>
    </>
  );
}

/** Stylised recreation of the LQS score card, used until real screenshots exist. */
function ScoreVisual() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-[#f6efe3] p-6">
      <div className="w-full max-w-[280px] rounded-xl border border-black/5 bg-white p-5 shadow-lg transition-transform duration-500 group-hover:scale-[1.03]">
        <p className="text-xs text-muted">Skor Kos</p>
        <p className="mt-1 text-3xl font-semibold tracking-tight text-ink">
          50<span className="text-base text-muted">/100</span>
        </p>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-[#f1e6d3]">
          <div className="h-full w-1/2 rounded-full bg-[#e0892f]" />
        </div>
        <p className="mt-2 text-xs font-medium text-[#b8641a]">Kos Kurang Informatif</p>
        <ul className="mt-4 space-y-2 text-xs text-ink-soft">
          {[
            ["Lengkapi deskripsi kos", "+15"],
            ["Tambah foto kamar", "+10"],
            ["Isi peraturan kos", "+5"],
          ].map(([label, pts]) => (
            <li key={label} className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <span className="h-3.5 w-3.5 rounded-full border border-black/15" />
                {label}
              </span>
              <span className="font-mono text-[#b8641a]">{pts}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
