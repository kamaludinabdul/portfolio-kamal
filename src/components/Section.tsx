import { ReactNode } from "react";

export default function Section({
  id,
  title,
  tag,
  align = "center",
  children,
}: {
  id?: string;
  title: string;
  tag?: string;
  align?: "center" | "left";
  children: ReactNode;
}) {
  const isCenter = align === "center";

  return (
    <section id={id} className="mx-auto w-full max-w-5xl px-6 py-16 sm:px-8">
      <div className={`mb-10 ${isCenter ? "text-center" : "text-left"}`}>
        {tag && (
          <p className="mb-2 font-mono text-xs text-[#b08d57]">// {tag}</p>
        )}
        <h2 className="text-3xl font-semibold tracking-tight text-stone-900">
          {title}
        </h2>
        {isCenter ? (
          <div className="ornament mt-4">
            <span className="text-xs uppercase tracking-[0.3em]">
              &#10022;
            </span>
          </div>
        ) : (
          <div className="mt-3 h-px w-16 bg-gradient-to-r from-[#b08d57] to-transparent" />
        )}
      </div>
      {children}
    </section>
  );
}
