import Link from "next/link";
import { getBootcampProgress } from "@/lib/bootcamp";
import { PhaseBadge } from "@/components/phase-badge";

export const metadata = {
  title: "Projects — Lucía Lorenzo Santos",
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

  // suppress unused var lint
  void completedProjects;

  return (
    <div className="mx-auto max-w-4xl px-6 py-20">

      {/* Header */}
      <section className="mb-16">
        <p
          className="font-[family-name:var(--font-geist-mono)] text-xs mb-4 tracking-wider uppercase"
          style={{ color: "#E8421A" }}
        >
          real tools · real problems · free to use
        </p>
        <h1 className="text-4xl font-bold mb-4" style={{ color: "#2D0810" }}>
          Projects
        </h1>
        <p className="max-w-2xl leading-relaxed" style={{ color: "#7B3045" }}>
          Everything I build during the depth program lives here once it&apos;s
          deployed. No toy examples — each project solves an actual problem in
          TA Operations.
        </p>
      </section>

      {/* Live projects */}
      {liveProjects.length > 0 ? (
        <section className="mb-16">
          <h2
            className="text-xs font-[family-name:var(--font-geist-mono)] tracking-wider uppercase mb-6"
            style={{ color: "#B98D97" }}
          >
            live
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {liveProjects.map((project) => (
              <a
                key={project.name}
                href={project.url!}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl p-5 transition-all group"
                style={{ border: "1px solid #DECCBF", backgroundColor: "#FFFFFF" }}
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-sm font-semibold" style={{ color: "#2D0810" }}>
                    {project.name}
                  </h3>
                  <span className="text-sm transition-colors" style={{ color: "#E8421A" }}>
                    ↗
                  </span>
                </div>
                <p className="text-xs leading-relaxed mb-3" style={{ color: "#9E5A6A" }}>
                  {project.description}
                </p>
                <span
                  className="font-[family-name:var(--font-geist-mono)] text-xs"
                  style={{ color: "#C9A0A8" }}
                >
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
          <h2
            className="text-xs font-[family-name:var(--font-geist-mono)] tracking-wider uppercase mb-6"
            style={{ color: "#B98D97" }}
          >
            in progress
          </h2>
          <div className="space-y-3">
            {inProgressProjects.map((project) => (
              <div
                key={project.name}
                className="rounded-xl p-4"
                style={{
                  border: "1px solid rgba(232, 66, 26, 0.25)",
                  backgroundColor: "#FDE9E3",
                }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span style={{ color: "#E8421A", fontSize: "0.75rem" }}>◎</span>
                  <h3 className="text-sm font-medium" style={{ color: "#2D0810" }}>
                    {project.name}
                  </h3>
                </div>
                <p className="text-xs leading-relaxed ml-4" style={{ color: "#9E5A6A" }}>
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Empty state */}
      {liveProjects.length === 0 && inProgressProjects.length === 0 && (
        <section
          className="mb-16 rounded-xl p-12 text-center"
          style={{ border: "1px solid #DECCBF" }}
        >
          <p
            className="text-sm font-[family-name:var(--font-geist-mono)] mb-2"
            style={{ color: "#C9A0A8" }}
          >
            nothing deployed yet
          </p>
          <p className="text-sm max-w-sm mx-auto" style={{ color: "#9E5A6A" }}>
            The first tools go live in Phase 3. Check back then — or follow
            along on{" "}
            <a
              href="https://github.com/lucialsantos"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
              style={{ color: "#E8421A" }}
            >
              GitHub
            </a>
            .
          </p>
          <Link
            href="/bootcamp"
            className="inline-flex items-center gap-2 mt-6 text-xs font-[family-name:var(--font-geist-mono)] transition-colors"
            style={{ color: "#9E5A6A" }}
          >
            see what&apos;s being built →
          </Link>
        </section>
      )}

      {/* Coming soon */}
      <section>
        <h2
          className="text-xs font-[family-name:var(--font-geist-mono)] tracking-wider uppercase mb-6"
          style={{ color: "#B98D97" }}
        >
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
                className="flex items-center justify-between py-3 px-4 rounded-lg"
                style={{ border: "1px solid #EDE0CC" }}
              >
                <div>
                  <span className="text-sm" style={{ color: "#7B3045" }}>
                    {phase.name}
                  </span>
                  <span style={{ color: "#C9A0A8", margin: "0 0.5rem" }}>·</span>
                  <span className="text-xs" style={{ color: "#C9A0A8" }}>
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
