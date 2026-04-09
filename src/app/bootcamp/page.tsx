import { getBootcampProgress } from "@/lib/bootcamp";
import { PhaseBadge, ProjectDot } from "@/components/phase-badge";

export const metadata = {
  title: "Bootcamp — Lucía Santos",
  description: "A 14-week hands-on bootcamp building real AI tools for TA Operations.",
};

export default function BootcampPage() {
  const { phases } = getBootcampProgress();

  return (
    <div className="mx-auto max-w-4xl px-6 py-20">

      {/* Header */}
      <section className="mb-16">
        <p className="font-[family-name:var(--font-geist-mono)] text-violet-400 text-xs mb-4 tracking-wider uppercase">
          14 weeks · 1–2 hrs/day · all free tools
        </p>
        <h1 className="text-4xl font-bold text-zinc-100 mb-4">The Bootcamp</h1>
        <p className="text-zinc-400 max-w-2xl leading-relaxed">
          A self-directed curriculum that takes me from accidental explorer to
          systems builder. Every phase ends with something real and deployed.
          This page updates as I progress — it&apos;s the bootcamp and the
          portfolio at the same time.
        </p>
      </section>

      {/* Philosophy */}
      <section className="mb-16 border border-zinc-800 rounded-xl p-6">
        <h2 className="text-xs font-[family-name:var(--font-geist-mono)] text-zinc-500 tracking-wider uppercase mb-4">
          the rules
        </h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {[
            "Ship imperfect things — nothing waits until it's ready",
            "Read it aloud before it goes to the portfolio — if you flinch, it's not done",
            "Name the block before asking for help",
            "Every session ends with a git commit — even WIP counts",
            "End each phase with a Level Up reflection",
            "The goal is not to become an engineer — it's to become a systems thinker",
          ].map((rule) => (
            <div key={rule} className="flex items-start gap-2 text-sm text-zinc-400">
              <span className="text-violet-400 mt-0.5 shrink-0">·</span>
              {rule}
            </div>
          ))}
        </div>
      </section>

      {/* Phases */}
      <div className="space-y-8">
        {phases.map((phase, index) => (
          <section
            key={phase.id}
            id={phase.id}
            className={`border rounded-xl p-6 scroll-mt-20 ${
              phase.status === "in_progress"
                ? "border-violet-500/30 bg-violet-500/5"
                : phase.status === "completed"
                ? "border-emerald-500/20 bg-emerald-500/5"
                : "border-zinc-800 bg-zinc-900/20"
            }`}
          >
            {/* Phase header */}
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="font-[family-name:var(--font-geist-mono)] text-xs text-zinc-600">
                    {String(index).padStart(2, "0")}
                  </span>
                  <h2 className="text-lg font-semibold text-zinc-100">
                    {phase.name}
                  </h2>
                  <PhaseBadge status={phase.status} />
                </div>
                <p className="text-zinc-400 text-sm">{phase.theme}</p>
              </div>
              <span className="font-[family-name:var(--font-geist-mono)] text-xs text-zinc-600 shrink-0">
                {phase.duration}
              </span>
            </div>

            {/* Mindset shift */}
            <blockquote className="border-l-2 border-violet-500/40 pl-4 my-4">
              <p className="text-zinc-400 text-sm italic leading-relaxed">
                &ldquo;{phase.mindsetShift}&rdquo;
              </p>
            </blockquote>

            {/* Projects */}
            <div className="mt-4">
              <p className="font-[family-name:var(--font-geist-mono)] text-xs text-zinc-600 tracking-wider uppercase mb-3">
                projects
              </p>
              <div className="space-y-3">
                {phase.projects.map((project) => (
                  <div key={project.name} className="flex items-start gap-3">
                    <ProjectDot status={project.status} />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-sm font-medium ${
                            project.status === "completed"
                              ? "text-zinc-500 line-through"
                              : project.status === "in_progress"
                              ? "text-zinc-100"
                              : "text-zinc-500"
                          }`}
                        >
                          {project.name}
                        </span>
                        {project.url && (
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-violet-400 text-xs hover:underline"
                          >
                            live ↗
                          </a>
                        )}
                      </div>
                      <p className="text-xs text-zinc-600 mt-0.5 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dates */}
            {(phase.startedAt || phase.completedAt) && (
              <div className="mt-4 pt-4 border-t border-zinc-800 flex gap-6">
                {phase.startedAt && (
                  <p className="font-[family-name:var(--font-geist-mono)] text-xs text-zinc-600">
                    started {phase.startedAt}
                  </p>
                )}
                {phase.completedAt && (
                  <p className="font-[family-name:var(--font-geist-mono)] text-xs text-emerald-600">
                    completed {phase.completedAt}
                  </p>
                )}
              </div>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}
