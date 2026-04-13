import type { Task } from "@/lib/bootcamp";

export function TaskList({ tasks }: { tasks: Task[] }) {
  if (tasks.length === 0) return null;

  return (
    <div>
      <p
        className="font-mono text-xs font-semibold tracking-widest uppercase mb-3"
        style={{ color: "inherit", opacity: 0.5 }}
      >
        Tasks
      </p>
      <ul className="space-y-3">
        {tasks.map((task) => {
          const isDone = task.status === "done";
          const isActive = task.status === "in_progress";
          const glyph = isDone ? "✓" : isActive ? "◎" : "·";
          const glyphOpacity = isDone || isActive ? 1 : 0.35;

          return (
            <li key={task.id} className="flex items-start gap-2.5">
              <span
                className="font-mono text-sm mt-0.5 flex-shrink-0"
                style={{ color: "inherit", opacity: glyphOpacity }}
              >
                {glyph}
              </span>
              <div>
                <p
                  className="text-sm font-medium"
                  style={{
                    color: "inherit",
                    opacity: isDone ? 0.5 : 1,
                    textDecoration: isDone ? "line-through" : "none",
                  }}
                >
                  {task.name}
                </p>
                <p
                  className="font-mono text-xs mt-0.5"
                  style={{ color: "inherit", opacity: 0.45 }}
                >
                  {task.description}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
