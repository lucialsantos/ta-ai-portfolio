import type { Course } from "@/lib/bootcamp";

export function CourseList({ courses }: { courses: Course[] }) {
  if (courses.length === 0) return null;

  return (
    <div>
      <p
        className="font-mono text-xs font-semibold tracking-widest uppercase mb-3"
        style={{ color: "inherit", opacity: 0.5 }}
      >
        Courses
      </p>
      <ul className="space-y-2">
        {courses.map((course) => (
          <li key={course.url} className="flex items-start gap-2.5">
            <span
              className="font-mono text-sm mt-0.5 flex-shrink-0"
              style={{ color: course.completed ? "#3D8B6E" : "inherit", opacity: course.completed ? 1 : 0.4 }}
            >
              {course.completed ? "✓" : "○"}
            </span>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
              <a
                href={course.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm underline underline-offset-2 decoration-current/30 hover:decoration-current/80 transition-all"
                style={{ color: "inherit" }}
              >
                {course.name}
              </a>
              <span
                className="font-mono text-xs"
                style={{ color: "inherit", opacity: 0.55 }}
              >
                — {course.provider}
              </span>
              {course.free && (
                <span
                  className="font-mono text-xs px-1.5 py-0.5 rounded"
                  style={{
                    background: "rgba(255,255,255,0.2)",
                    color: "inherit",
                    border: "1px solid rgba(255,255,255,0.25)",
                  }}
                >
                  free
                </span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
