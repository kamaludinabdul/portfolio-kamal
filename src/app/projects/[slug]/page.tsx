import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import ProjectDetailView from "@/components/ProjectDetailView";
import { allProjects } from "@/lib/data";
import { projectDetails } from "@/lib/projectDetails";

export function generateStaticParams() {
  return allProjects.map((project) => ({ slug: project.slug }));
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
      <div className="border-b border-[#b08d57]/15 bg-white/60 px-6 py-3 sm:px-8">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-1.5 text-sm text-stone-600 transition-colors hover:text-[#b08d57]"
        >
          <ArrowLeft size={14} /> Back to Selected Work
        </Link>
      </div>
      <ProjectDetailView project={project} />
    </>
  );
}
