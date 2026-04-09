import Link from "next/link";
import { getBootcampProgress } from "@/lib/bootcamp";
import { PhaseBadge } from "@/components/phase-badge";

export const metadata = {
  title: "Projects — Lucía Santos",
  description: "Real AI tools built for TA Operations. All deployed. All in public.",
};

export default function ProjectsPage() {
  const { phases } = getBootcampProgress();

  const liveProjects = phases
    .flatMap((phase) =>
      phase.projects
        .filter((p) => p.url !== null)
        .map((p) => ({ ...p, phaseName: phase.name, phaseId: phase.id }))
    );

  const allProjects = phases.flatMap((phase) =>
    phase.projects.map((p) => ({ ...p, phaseName: phase.name, phaseId: phase.id, phaseStatus: phase.status }))
  );

  const completedProjects = allProjects.filter((p) => p.status === "completed");
  const inProgressProjects = allProjects.filter((p) => p.status === "in_progress");

  return (
    <div className="mx-auto max-w-4xl px-6 py-20">

      {/* Header */}
      <section className="mb-16">
        <p className="font-[family-name:var(--font-geist-mono)] text-violet-400 text-xs mb-4 tracking-wider uppercase">
          real tools · real problems · free to use
        </p>
        <h1 className="text-4xl font-bold text-zinc-100 mb-4">Projects</h1>
        <p className="text-zinc-400 max-w-2xl leading-relaxed">
          Everything I build during the bootcamp lives here once it&apos;s
          deployed. No toy examples — each project solves an actual problem in
          TA Operations.
        </p>
      </section>

      {/* Live projects */}
      {liveProjects.length > 0 ? (
        <section className="mb-16">
          <h2 className="text-xs font-[family-name:var(--font-geist-mono)] text-zinc-500 tracking-wider uppercase mb-6">
            live
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {liveProjects.map((project) => (
              <a
                key={project.name}
                href={project.url!}
                target="_blank"
                rel="noopener noreferrer"
                className="block border border-zinc-800 rounded-xl p-5 hover:border-violet-500/40 hover:bg-violet-500/5 transition-all group"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-sm font-semibold text-zinc-100 group-hover:text-violet-300 transition-colors">
                    {project.name}
                  </h3>
                  <span className="text-zinc-500 group-hover:text-violet-400 transition-colors text-sm">
                    ↗
                  </span>
                </div>
                <p className="text-xs text-zinc-500 leading-relaxed mb-3">
                  {project.description}
                </p>
                <span className="font-[family-name:var(--font-geist-mono)] text-xs text-zinc-600">
                  {project.phaseName}
                </span>
              </a>
            ))}
          </div>
        </section>
      ) : null}

      {/* In progress */}
      {inProgressProjects.length > 0 && (
        <section className="mb-16">
          <h2 className="text-xs font-[family-name:var(--font-geist-mono)] text-zinc-500 tracking-wider uppercase mb-6">
            in progress
          </h2>
          <div className="space-y-3">
            {inProgressProjects.map((project) => (
              <div
                key={project.name}
                className="border border-violet-500/20 rounded-xl p-4 bg-violet-500/5"
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-violet-400 text-xs">◎</span>
                  <h3 className="text-sm font-medium text-zinc-200">
                    {project.name}
                  </h3>
                </div>
                <p className="text-xs text-zinc-500 leading-relaxed ml-4">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Empty state */}
      {liveProjects.length === 0 && inProgressProjects.length === 0 && (
        <section className="mb-16 border border-zinc-800 rounded-xl p-12 text-center">
          <p className="text-zinc-600 text-sm font-[family-name:var(--font-geist-mono)] mb-2">
            nothing deployed yet
          </p>
          <p className="text-zinc-500 text-sm max-w-sm mx-auto">
            Phase 2 is where the first tools go live. Check back then — or
            follow along on{" "}
            <a
              href="https://github.com/lucialsantos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-400 hover:underline"
            >
              GitHub
            </a>
            .
          </p>
          <Link
            href="/bootcamp"
            className="inline-flex items-center gap-2 mt-6 text-xs font-[family-name:var(--font-geist-mono)] text-zinc-500 hover:text-violet-400 transition-colors"
          >
            see what&apos;s being built →
          </Link>
        </section>
      )}

      {/* Coming soon — phases not started */}
      <section>
        <h2 className="text-xs font-[family-name:var(--font-geist-mono)] text-zinc-500 tracking-wider uppercase mb-6">
          coming
        </h2>
        <div className="space-y-2">
          {phases
            .filter((phase) =>
              phase.projects.some((p) => p.status === "not_started")
            )
            .map((phase) => (
              <div
                key={phase.id}
                className="flex items-center justify-between py-3 px-4 rounded-lg border border-zinc-900"
              >
                <div>
                  <span className="text-sm text-zinc-500">{phase.name}</span>
                  <span className="text-zinc-700 mx-2">·</span>
                  <span className="text-xs text-zinc-700">
                    {phase.projects.filter((p) => p.status === "not_started").length} projects
                  </span>
                </div>
                <PhaseBadge status={phase.status} />
              </div>
            ))}
        </div>
      </section>
    </div>
  );
}
