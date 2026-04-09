import Link from "next/link";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-sm">
      <div className="mx-auto max-w-4xl px-6 flex items-center justify-between h-14">
        <Link
          href="/"
          className="font-[family-name:var(--font-geist-mono)] text-sm font-medium text-zinc-100 hover:text-violet-400 transition-colors"
        >
          lucía santos
        </Link>
        <nav className="flex items-center gap-6 text-sm text-zinc-400">
          <Link
            href="/bootcamp"
            className="hover:text-zinc-100 transition-colors"
          >
            bootcamp
          </Link>
          <Link
            href="/projects"
            className="hover:text-zinc-100 transition-colors"
          >
            projects
          </Link>
          <Link
            href="/about"
            className="hover:text-zinc-100 transition-colors"
          >
            about
          </Link>
          <a
            href="https://github.com/lucialsantos"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-100 transition-colors"
          >
            github ↗
          </a>
        </nav>
      </div>
    </header>
  );
}
