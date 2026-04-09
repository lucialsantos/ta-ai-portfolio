import { Badge } from "@/components/ui/badge";
import type { PhaseStatus, ProjectStatus } from "@/lib/bootcamp";

const phaseConfig: Record<
  PhaseStatus,
  { label: string; className: string }
> = {
  not_started: {
    label: "not started",
    className:
      "border-zinc-700 text-zinc-500 bg-transparent font-[family-name:var(--font-geist-mono)]",
  },
  in_progress: {
    label: "in progress",
    className:
      "border-violet-500/50 text-violet-400 bg-violet-500/10 font-[family-name:var(--font-geist-mono)]",
  },
  completed: {
    label: "completed",
    className:
      "border-emerald-500/50 text-emerald-400 bg-emerald-500/10 font-[family-name:var(--font-geist-mono)]",
  },
};

const projectConfig: Record<
  ProjectStatus,
  { label: string; className: string }
> = {
  not_started: {
    label: "·",
    className: "text-zinc-600",
  },
  in_progress: {
    label: "◎",
    className: "text-violet-400",
  },
  completed: {
    label: "✓",
    className: "text-emerald-400",
  },
};

export function PhaseBadge({ status }: { status: PhaseStatus }) {
  const config = phaseConfig[status];
  return (
    <Badge variant="outline" className={config.className}>
      {config.label}
    </Badge>
  );
}

export function ProjectDot({ status }: { status: ProjectStatus }) {
  const config = projectConfig[status];
  return <span className={`text-sm ${config.className}`}>{config.label}</span>;
}
