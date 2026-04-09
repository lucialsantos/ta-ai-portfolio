import Link from "next/link";
import { getBootcampProgress, getPhaseStats } from "@/lib/bootcamp";
import { PhaseBadge, ProjectDot } from "@/components/phase-badge";

export default function Home() {
  const { phases } = getBootcampProgress();
  const stats = getPhaseStats(phases);
  const currentPhase = phases.find((p) => p.status === "in_progress");

  return (
    <div className="mx-auto max-w-4xl px-6 py-20">

      {/* Hero */}
      <section className="mb-20">
        <p className="font-[family-name:var(--font-geist-mono)] text-violet-400 text-sm mb-4 tracking-wider">
          hello, I&apos;m
        </p>
        <h1 className="text-5xl font-bold text-zinc-100 mb-4 leading-tight">
          Lucía Santos
        </h1>
        <p className="text-xl text-zinc-300 mb-6 max-w-xl">
          TA Operations Partner (AI &amp; Product){" "}
          <span className="text-zinc-500">in progress.</span>
        </p>
        <p className="text-zinc-400 max-w-2xl leading-relaxed text-base">
          I&apos;m a Tech Talent Acquisition professional at Factorial building
          the bridge between our TA team&apos;s operational needs and the
          engineering team that builds our ATS. This portfolio documents
          everything I build along the way — specs, tools, automations, and AI
          systems. All real. All in public.
        </p>
        <div className="flex items-center gap-4 mt-8">
          <Link
            href="/bootcamp"
            className="inline-flex items-center gap-2 bg-violet-500/20 border border-violet-500/40 text-violet-300 px-4 py-2 rounded-lg text-sm font-medium hover:bg-violet-500/30 transition-colors"
          >
            view bootcamp →
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-zinc-400 px-4 py-2 rounded-lg text-sm font-medium hover:text-zinc-100 transition-colors"
          >
            see projects
          </Link>
        </div>
      </section>

      {/* Current phase callout */}
      {currentPhase && (
        <section className="mb-20 border border-violet-500/20 rounded-xl p-6 bg-violet-500/5">
          <p className="font-[family-name:var(--font-geist-mono)] text-violet-400 text-xs mb-3 tracking-wider uppercase">
            currently working on
          </p>
          <h2 className="text-lg font-semibold text-zinc-100 mb-1">
            {currentPhase.name}
          </h2>
          <p className="text-zinc-400 text-sm mb-4">{currentPhase.theme}</p>
          <div className="flex flex-col gap-2">
            {currentPhase.projects.map((project) => (
              <div key={project.name} className="flex items-start gap-3 text-sm">
                <ProjectDot status={project.status} />
                <span
                  className={
                    project.status === "completed"
                      ? "text-zinc-500 line-through"
                      : project.status === "in_progress"
                      ? "text-zinc-200"
                      : "text-zinc-500"
                  }
                >
                  {project.name}
                </span>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-violet-400 hover:underline ml-1"
                  >
                    ↗
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Phase tracker */}
      <section className="mb-20">
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="text-xs font-[family-name:var(--font-geist-mono)] text-zinc-500 tracking-wider uppercase">
            bootcamp progress
          </h2>
          <span className="font-[family-name:var(--font-geist-mono)] text-xs text-zinc-600">
            {stats.completedProjects}/{stats.totalProjects} projects
          </span>
        </div>

        <div className="space-y-1">
          {phases.map((phase, index) => (
            <Link
              key={phase.id}
              href={`/bootcamp#${phase.id}`}
              className="flex items-center gap-4 group py-3 px-4 rounded-lg hover:bg-zinc-900 transition-colors"
            >
              <span className="font-[family-name:var(--font-geist-mono)] text-xs text-zinc-700 w-5 shrink-0">
                {String(index).padStart(2, "0")}
              </span>
              <div className="flex-1 min-w-0">
                <span
                  className={`text-sm font-medium ${
                    phase.status === "not_started"
                      ? "text-zinc-500"
                      : phase.status === "in_progress"
                      ? "text-zinc-100"
                      : "text-zinc-300"
                  }`}
                >
                  {phase.name}
                </span>
                <p className="text-xs text-zinc-600 mt-0.5 truncate">
                  {phase.theme}
                </p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <span className="font-[family-name:var(--font-geist-mono)] text-xs text-zinc-700">
                  {phase.duration}
                </span>
                <PhaseBadge status={phase.status} />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Stack */}
      <section>
        <h2 className="text-xs font-[family-name:var(--font-geist-mono)] text-zinc-500 tracking-wider uppercase mb-4">
          built with
        </h2>
        <div className="flex flex-wrap gap-2">
          {[
            "Next.js", "TypeScript", "Tailwind CSS", "Vercel",
            "Gemini API", "Supabase", "n8n", "Cursor", "Claude",
          ].map((tool) => (
            <span
              key={tool}
              className="font-[family-name:var(--font-geist-mono)] text-xs border border-zinc-800 text-zinc-500 px-3 py-1 rounded-full"
            >
              {tool}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
