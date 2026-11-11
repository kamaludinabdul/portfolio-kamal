import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import ProjectDetailView from "@/components/ProjectDetailView";
import { projects } from "@/lib/data";
import { projectDetails } from "@/lib/projectDetails";

export function generateStaticParams() {
  return projects
    .filter((project) => project.caseStudy)
    .map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectDetails[slug];

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <div className="border-b border-line bg-paper px-4 py-3 sm:px-8">
        <Link
          href="/#work"
          className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-ink"
        >
          <ArrowLeft size={14} /> Back to case studies
        </Link>
      </div>
      <ProjectDetailView project={project} />
    </>
  );
}
