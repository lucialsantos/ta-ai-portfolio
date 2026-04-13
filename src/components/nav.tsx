import Link from "next/link";

export function Nav() {
  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-sm"
      style={{
        borderBottom: "1px solid #F0D5CC",
        backgroundColor: "rgba(254, 246, 242, 0.94)",
      }}
    >
      <div className="mx-auto max-w-5xl px-6 flex items-center justify-between h-14">
        <Link
          href="/"
          className="font-mono text-sm font-bold tracking-tight transition-opacity hover:opacity-70"
          style={{ color: "#1A1020" }}
        >
          lucía lorenzo santos
        </Link>
        <nav className="flex items-center gap-6 font-mono text-xs" style={{ color: "#6C5B7B" }}>
          <Link
            href="/bootcamp"
            className="transition-colors hover:text-[#1A1020]"
            style={{ color: "inherit" }}
          >
            bootcamp
          </Link>
          <a
            href="https://github.com/lucialsantos"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-full font-semibold transition-opacity hover:opacity-80"
            style={{ backgroundColor: "#355C7D", color: "#FFFFFF" }}
          >
            github ↗
          </a>
        </nav>
      </div>
    </header>
  );
}
