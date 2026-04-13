import Link from "next/link";
import { getBootcampProgress, getTaskStats } from "@/lib/bootcamp";

const PHASE_COLORS = [
  { bg: "#F8B195", text: "#1A1020", sub: "rgba(26,16,32,0.55)" },
  { bg: "#F67280", text: "#FFFFFF", sub: "rgba(255,255,255,0.65)" },
  { bg: "#C06C84", text: "#FFFFFF", sub: "rgba(255,255,255,0.60)" },
  { bg: "#6C5B7B", text: "#FFFFFF", sub: "rgba(255,255,255,0.60)" },
  { bg: "#355C7D", text: "#FFFFFF", sub: "rgba(255,255,255,0.60)" },
  { bg: "#1A1020", text: "#F8B195", sub: "rgba(248,177,149,0.55)" },
];

export default function Home() {
  const { phases } = getBootcampProgress();
  const taskStats = getTaskStats(phases);

  return (
    <div>
      {/* ── HERO ── */}
      <section className="mx-auto max-w-5xl px-6 pt-20 pb-16">
        <p
          className="font-mono text-xs tracking-[0.18em] uppercase mb-8"
          style={{ color: "#C06C84" }}
        >
          Barcelona · Factorial · TA Operations
        </p>

        <h1
          className="text-fluid-xl font-bold mb-6 max-w-2xl"
          style={{ color: "#1A1020" }}
        >
          Learning to build AI tools
          <br />
          that actually work
          <br />
          <span style={{ color: "#F67280" }}>in production.</span>
        </h1>

        <p
          className="text-lg leading-relaxed mb-10 max-w-xl"
          style={{ color: "#6C5B7B" }}
        >
          TA professional at Factorial. Working through a 15-week bootcamp covering
          web fundamentals, AI APIs, and production patterns. {taskStats.done}/{taskStats.total} tasks done.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/bootcamp"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-opacity hover:opacity-80"
            style={{ backgroundColor: "#355C7D", color: "#FFFFFF" }}
          >
            view bootcamp progress →
          </Link>
          <a
            href="https://github.com/lucialsantos"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-colors"
            style={{ border: "1.5px solid #F0D5CC", color: "#6C5B7B" }}
          >
            github ↗
          </a>
        </div>
      </section>

      {/* ── PHASE GRID ── */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <p
          className="font-mono text-xs tracking-[0.18em] uppercase mb-6"
          style={{ color: "#C06C84" }}
        >
          the program
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {phases.map((phase, index) => {
            const palette = PHASE_COLORS[index % PHASE_COLORS.length];
            const isActive = phase.status === "in_progress";
            const isDone = phase.status === "completed";
            const totalTasks = phase.projects.flatMap((p) => p.tasks).length;
            const doneTasks = phase.projects
              .flatMap((p) => p.tasks)
              .filter((t) => t.status === "done").length;
            const totalCourses = phase.projects.flatMap((p) => p.courses).length;

            return (
              <Link
                key={phase.id}
                href={`/bootcamp#${phase.id}`}
                className="lift rounded-2xl overflow-hidden flex flex-col"
                style={{ minHeight: "200px", textDecoration: "none" }}
              >
                {/* Card header — colored */}
                <div
                  className="px-6 pt-6 pb-5 flex-1"
                  style={{ backgroundColor: palette.bg }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <span
                      className="font-mono text-xs font-bold tabular-nums"
                      style={{ color: palette.sub }}
                    >
                      {String(index).padStart(2, "0")}
                    </span>
                    <span
                      className="font-mono text-xs"
                      style={{ color: palette.sub }}
                    >
                      {phase.duration}
                    </span>
                  </div>
                  <h2
                    className="text-xl font-bold leading-tight mb-2"
                    style={{ color: palette.text }}
                  >
                    {phase.name}
                  </h2>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: palette.sub }}
                  >
                    {phase.theme}
                  </p>
                </div>

                {/* Card footer */}
                <div
                  className="px-6 py-3 flex items-center justify-between"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.95)",
                    borderTop: "1px solid rgba(240,213,204,0.6)",
                  }}
                >
                  {isActive ? (
                    <span
                      className="font-mono text-[10px] px-2.5 py-1 rounded-full"
                      style={{ backgroundColor: "#FDE8E0", color: "#F67280", border: "1px solid rgba(246,114,128,0.3)" }}
                    >
                      in progress
                    </span>
                  ) : isDone ? (
                    <span
                      className="font-mono text-[10px] px-2.5 py-1 rounded-full"
                      style={{ backgroundColor: "#EBF5F0", color: "#3D8B6E", border: "1px solid rgba(61,139,110,0.3)" }}
                    >
                      done
                    </span>
                  ) : (
                    <span
                      className="font-mono text-[10px]"
                      style={{ color: "#C06C84", opacity: 0.6 }}
                    >
                      not started
                    </span>
                  )}
                  <span
                    className="font-mono text-[10px]"
                    style={{ color: "#6C5B7B", opacity: 0.7 }}
                  >
                    {totalCourses > 0 && `${totalCourses} course${totalCourses !== 1 ? "s" : ""} · `}{doneTasks}/{totalTasks} tasks
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ── STACK ── */}
      <section className="py-14" style={{ borderTop: "1px solid #F0D5CC" }}>
        <div className="mx-auto max-w-5xl px-6">
          <p
            className="font-mono text-xs tracking-[0.18em] uppercase mb-5"
            style={{ color: "#C06C84" }}
          >
            stack
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "Claude API",
              "Gemini API",
              "React",
              "Next.js",
              "TypeScript",
              "Supabase",
              "n8n",
              "Vercel",
              "Notion API",
              "Cursor",
            ].map((tool) => (
              <span
                key={tool}
                className="font-mono text-xs px-3 py-1.5 rounded-full"
                style={{ border: "1.5px solid #F0D5CC", color: "#6C5B7B" }}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
