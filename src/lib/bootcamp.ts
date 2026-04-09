import fs from "fs";
import path from "path";

export type ProjectStatus = "not_started" | "in_progress" | "completed";
export type PhaseStatus = "not_started" | "in_progress" | "completed";

export interface Project {
  name: string;
  description: string;
  status: ProjectStatus;
  url: string | null;
}

export interface Phase {
  id: string;
  name: string;
  theme: string;
  status: PhaseStatus;
  duration: string;
  startedAt: string | null;
  completedAt: string | null;
  mindsetShift: string;
  projects: Project[];
}

export interface BootcampProgress {
  phases: Phase[];
}

export function getBootcampProgress(): BootcampProgress {
  const filePath = path.join(process.cwd(), "bootcamp-progress.json");
  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw) as BootcampProgress;
}

export function getPhaseStats(phases: Phase[]) {
  const total = phases.length;
  const completed = phases.filter((p) => p.status === "completed").length;
  const inProgress = phases.filter((p) => p.status === "in_progress").length;
  const totalProjects = phases.flatMap((p) => p.projects).length;
  const completedProjects = phases
    .flatMap((p) => p.projects)
    .filter((p) => p.status === "completed").length;
  return { total, completed, inProgress, totalProjects, completedProjects };
}
