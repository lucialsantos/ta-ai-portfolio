import { getBootcampProgress, getTaskStats, getPhaseStats } from "@/lib/bootcamp";
import { PhaseBadge } from "@/components/phase-badge";
import { CourseList } from "@/components/course-list";
import { TaskList } from "@/components/task-list";

export const metadata = {
  title: "Bootcamp — Lucía Lorenzo Santos",
  description: "15-week bootcamp. Web fundamentals, AI APIs, and production patterns.",
};

const PHASE_COLORS = [
  { bg: "#F8B195", text: "#1A1020", sub: "rgba(26,16,32,0.55)", accent: "#355C7D" },
  { bg: "#F67280", text: "#FFFFFF", sub: "rgba(255,255,255,0.65)", accent: "#FFFFFF" },
  { bg: "#C06C84", text: "#FFFFFF", sub: "rgba(255,255,255,0.60)", accent: "#FFFFFF" },
  { bg: "#6C5B7B", text: "#FFFFFF", sub: "rgba(255,255,255,0.60)", accent: "#F8B195" },
  { bg: "#355C7D", text: "#FFFFFF", sub: "rgba(255,255,255,0.60)", accent: "#F8B195" },
  { bg: "#1A1020", text: "#F8B195", sub: "rgba(248,177,149,0.55)", accent: "#F8B195" },
];

export default function BootcampPage() {
  const { phases } = getBootcampProgress();
  const taskStats = getTaskStats(phases);
  const phaseStats = getPhaseStats(phases);

  return (
    <div>
      {/* ── HERO ── */}
      <section className="mx-auto max-w-5xl px-6 pt-20 pb-14">
        <p
          className="font-mono text-xs tracking-[0.18em] uppercase mb-6"
          style={{ color: "#C06C84" }}
        >
          bootcamp progress
        </p>

        <h1
          className="text-fluid-xl font-bold mb-6 max-w-2xl"
          style={{ color: "#1A1020" }}
        >
          15-week program.
          <br />
          Building in public.
        </h1>

        <div className="flex flex-wrap gap-8">
          {[
            { value: `${taskStats.done}/${taskStats.total}`, label: "tasks done" },
            { value: `${phaseStats.completed}/${phaseStats.total}`, label: "phases complete" },
            { value: "Apr 2026", label: "started" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-bold tracking-tight" style={{ color: "#1A1020" }}>
                {s.value}
              </p>
              <p className="font-mono text-xs mt-1" style={{ color: "#6C5B7B" }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── PHASES ── */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="space-y-6">
          {phases.map((phase, index) => {
            const palette = PHASE_COLORS[index % PHASE_COLORS.length];
            const isActive = phase.status === "in_progress";
            const isDone = phase.status === "completed";

            const bodyBg = isActive ? "#FDE8E0" : isDone ? "#EBF5F0" : "#FFFFFF";
            const borderColor = isActive
              ? "rgba(246,114,128,0.35)"
              : isDone
              ? "rgba(61,139,110,0.3)"
              : "#F0D5CC";

            return (
              <div
                key={phase.id}
                id={phase.id}
                className="rounded-2xl overflow-hidden scroll-mt-20"
                style={{ border: `1.5px solid ${borderColor}` }}
              >
                {/* Phase header */}
                <div className="px-7 py-6" style={{ backgroundColor: palette.bg }}>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <span
                        className="font-mono text-sm font-bold mt-0.5 shrink-0 tabular-nums"
                        style={{ color: palette.sub }}
                      >
                        {String(index).padStart(2, "0")}
                      </span>
                      <div>
                        <div className="flex items-center gap-3 flex-wrap mb-1">
                          <h2
                            className="text-xl sm:text-2xl font-bold leading-tight"
                            style={{ color: palette.text }}
                          >
                            {phase.name}
                          </h2>
                          {isActive && (
                            <span
                              className="font-mono text-[10px] px-2.5 py-1 rounded-full"
                              style={{ backgroundColor: palette.accent, color: palette.bg }}
                            >
                              now
                            </span>
                          )}
                          {isDone && (
                            <span
                              className="font-mono text-[10px] px-2.5 py-1 rounded-full"
                              style={{ backgroundColor: "#3D8B6E", color: "#FFFFFF" }}
                            >
                              done
                            </span>
                          )}
                        </div>
                        <p className="text-sm leading-relaxed" style={{ color: palette.sub }}>
                          {phase.theme}
                        </p>
                      </div>
                    </div>
                    <span
                      className="font-mono text-xs shrink-0 mt-1"
                      style={{ color: palette.sub }}
                    >
                      {phase.duration}
                    </span>
                  </div>
                </div>

                {/* Phase body */}
                <div className="px-7 py-6 space-y-8" style={{ backgroundColor: bodyBg }}>
                  {phase.projects.map((project) => (
                    <div key={project.name}>
                      {/* Project header */}
                      <div className="flex items-start justify-between gap-4 mb-6">
                        <div>
                          <div className="flex items-center gap-2 flex-wrap mb-1">
                            <h3
                              className="text-base font-semibold"
                              style={{ color: "#1A1020" }}
                            >
                              {project.name}
                            </h3>
                            {project.url && (
                              <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-mono text-[10px] transition-opacity hover:opacity-60"
                                style={{ color: "#F67280" }}
                              >
                                live ↗
                              </a>
                            )}
                          </div>
                          <p className="text-sm leading-relaxed" style={{ color: "#6C5B7B" }}>
                            {project.description}
                          </p>
                        </div>
                        <PhaseBadge status={project.status as "not_started" | "in_progress" | "completed"} />
                      </div>

                      {/* Courses + Tasks in two columns on larger screens */}
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {project.courses.length > 0 && (
                          <div
                            className="rounded-xl p-5"
                            style={{ backgroundColor: "rgba(248,177,149,0.1)", border: "1px solid #F0D5CC" }}
                          >
                            <CourseList courses={project.courses} />
                          </div>
                        )}
                        {project.tasks.length > 0 && (
                          <div
                            className="rounded-xl p-5"
                            style={{ backgroundColor: "rgba(108,91,123,0.06)", border: "1px solid #F0D5CC" }}
                          >
                            <TaskList tasks={project.tasks} />
                          </div>
                        )}
                      </div>
                    </div>
                  ))}

                  {/* Dates */}
                  {(phase.startedAt || phase.completedAt) && (
                    <div
                      className="pt-4 flex gap-6"
                      style={{ borderTop: "1px solid #F0D5CC" }}
                    >
                      {phase.startedAt && (
                        <p className="font-mono text-xs" style={{ color: "#6C5B7B" }}>
                          started {phase.startedAt}
                        </p>
                      )}
                      {phase.completedAt && (
                        <p className="font-mono text-xs" style={{ color: "#3D8B6E" }}>
                          completed {phase.completedAt}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
