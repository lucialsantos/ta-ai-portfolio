import { Badge } from "@/components/ui/badge";
import type { PhaseStatus, ProjectStatus, TaskStatus } from "@/lib/bootcamp";

const phaseConfig: Record<
  PhaseStatus,
  { label: string; style: React.CSSProperties }
> = {
  not_started: {
    label: "not started",
    style: {
      border: "1px solid #F0D5CC",
      color: "#C06C84",
      background: "transparent",
      fontFamily: "var(--font-geist-mono)",
    },
  },
  in_progress: {
    label: "in progress",
    style: {
      border: "1px solid rgba(246, 114, 128, 0.4)",
      color: "#F67280",
      background: "#FDE8E0",
      fontFamily: "var(--font-geist-mono)",
    },
  },
  completed: {
    label: "completed",
    style: {
      border: "1px solid rgba(61, 139, 110, 0.4)",
      color: "#3D8B6E",
      background: "#EBF5F0",
      fontFamily: "var(--font-geist-mono)",
    },
  },
};

const projectConfig: Record<
  ProjectStatus,
  { label: string; style: React.CSSProperties }
> = {
  not_started: {
    label: "·",
    style: { color: "#C06C84", opacity: 0.5 },
  },
  in_progress: {
    label: "◎",
    style: { color: "#F67280" },
  },
  completed: {
    label: "✓",
    style: { color: "#3D8B6E" },
  },
};

const taskConfig: Record<
  TaskStatus,
  { label: string; style: React.CSSProperties }
> = {
  not_started: {
    label: "·",
    style: { color: "#C06C84", opacity: 0.5 },
  },
  in_progress: {
    label: "◎",
    style: { color: "#F67280" },
  },
  done: {
    label: "✓",
    style: { color: "#3D8B6E" },
  },
};

export function PhaseBadge({ status }: { status: PhaseStatus }) {
  const config = phaseConfig[status];
  return (
    <Badge variant="outline" className="text-xs" style={config.style}>
      {config.label}
    </Badge>
  );
}

export function ProjectDot({ status }: { status: ProjectStatus }) {
  const config = projectConfig[status];
  return (
    <span className="text-sm" style={config.style}>
      {config.label}
    </span>
  );
}

export function TaskDot({ status }: { status: TaskStatus }) {
  const config = taskConfig[status];
  return (
    <span className="text-sm font-mono" style={config.style}>
      {config.label}
    </span>
  );
}
