import Link from "next/link";

export const metadata = {
  title: "About — Lucía Santos",
  description: "The story behind the transition from Tech TA to TA Operations Partner (AI & Product).",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">

      {/* Header */}
      <section className="mb-16">
        <p className="font-[family-name:var(--font-geist-mono)] text-violet-400 text-xs mb-4 tracking-wider uppercase">
          the real story
        </p>
        <h1 className="text-4xl font-bold text-zinc-100 mb-4">About</h1>
      </section>

      {/* Story */}
      <article className="prose prose-invert prose-zinc max-w-none space-y-6 text-zinc-400 leading-relaxed">
        <p>
          I&apos;m a Tech Talent Acquisition professional at{" "}
          <span className="text-zinc-200 font-medium">Factorial</span> — a
          Barcelona-based HR tech company that builds its own ATS and business
          management software. My day job is recruiting engineers and technical
          roles. My goal is to stop doing that job manually.
        </p>

        <p>
          Not because I don&apos;t love recruiting — I do. But because most of
          what I do every day is work that should be handled by a system, not a
          person. Filtering candidates. Scheduling interviews. Chasing
          stakeholders for feedback. Rebuilding context every time I open a
          conversation thread. It&apos;s not strategy. It&apos;s maintenance.
        </p>

        <p>
          I&apos;m transitioning internally into a{" "}
          <span className="text-zinc-200 font-medium">
            TA Operations Partner (AI &amp; Product)
          </span>{" "}
          role — a position that lives at the intersection of TA operational
          needs, AI tooling, and embedded product management. The goal: bridge
          the gap between what the TA team needs and what the Recruitment
          Engineering team can build.
        </p>

        <p>
          This portfolio is how I get there. Every project I build here is
          something real — a spec an engineer could build from, a tool the TA
          team could use, an automation that removes a manual step. Nothing
          theoretical. Nothing for practice. Everything is for the actual
          problem.
        </p>

        <h2 className="text-xl font-semibold text-zinc-200 pt-4">
          What I&apos;m building toward
        </h2>

        <p>
          The role I want to be in looks like this: I own the lifecycle of
          internal recruitment tools at Factorial. I identify high-leverage
          opportunities where AI can automate manual TA work — screening,
          scheduling, data hygiene, candidate re-engagement. I write the specs.
          I build the prototypes. I partner with Engineering on the roadmap.
        </p>

        <p>
          I&apos;m not trying to become a software engineer. I&apos;m trying to
          become the person who understands the problem deeply enough that an
          engineer can build the right solution from what I give them.
        </p>

        <h2 className="text-xl font-semibold text-zinc-200 pt-4">
          The bootcamp
        </h2>

        <p>
          I built a 14-week curriculum to get myself there. Five phases: specs
          and PRDs, deployed AI tools, API integrations, agents and RAG, and a
          capstone product. Everything is free-tier tooling — no paywalls, no
          prerequisites except curiosity and time.
        </p>

        <p>
          The bootcamp and the portfolio are the same thing. This site updates
          as I work. The phases show what I&apos;ve done and what&apos;s coming.
          The projects section fills up as I ship things.
        </p>
      </article>

      {/* Skills I&apos;m building */}
      <section className="mt-16">
        <h2 className="text-xs font-[family-name:var(--font-geist-mono)] text-zinc-500 tracking-wider uppercase mb-6">
          skills in progress
        </h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {[
            {
              area: "Technical Specs & User Stories",
              detail: "Writing things engineers actually build from",
            },
            {
              area: "Product Thinking",
              detail: "Discovery, prioritization, roadmap ownership",
            },
            {
              area: "AI Tool Development",
              detail: "Prompt engineering, deployed apps, Gemini API",
            },
            {
              area: "API Literacy",
              detail: "Reading docs, testing endpoints, integration specs",
            },
            {
              area: "RAG & Agents",
              detail: "Context-grounded AI, multi-step workflows",
            },
            {
              area: "Human-in-the-Loop Design",
              detail: "AI that keeps humans in control of decisions",
            },
          ].map((skill) => (
            <div key={skill.area} className="border border-zinc-800 rounded-lg p-4">
              <p className="text-sm font-medium text-zinc-200 mb-1">
                {skill.area}
              </p>
              <p className="text-xs text-zinc-500">{skill.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-16 flex items-center gap-6">
        <Link
          href="/bootcamp"
          className="inline-flex items-center gap-2 bg-violet-500/20 border border-violet-500/40 text-violet-300 px-4 py-2 rounded-lg text-sm font-medium hover:bg-violet-500/30 transition-colors"
        >
          see the bootcamp →
        </Link>
        <a
          href="https://linkedin.com/in/lucialsantos"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
        >
          linkedin ↗
        </a>
        <a
          href="https://github.com/lucialsantos"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
        >
          github ↗
        </a>
      </section>
    </div>
  );
}
