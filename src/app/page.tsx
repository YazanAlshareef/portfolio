import { profile, projects, skills } from "@/data/site";

const statusLabel = { live: "Live", building: "In progress", planned: "Coming soon" };

export default function Home() {
  const links = [
    { label: "GitHub", href: profile.github },
    { label: "LinkedIn", href: profile.linkedin },
    { label: "Resume", href: profile.resume },
    { label: "Email", href: profile.email && `mailto:${profile.email}` },
  ].filter((l) => l.href);

  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
      <header>
        <p className="font-mono text-sm text-muted">{profile.name}</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-5xl">
          {profile.headline}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted text-pretty">{profile.intro}</p>
        <nav aria-label="Profile links" className="mt-8 flex flex-wrap gap-3">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="rounded-md border border-line px-4 py-2 text-sm font-medium hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </header>

      <section aria-labelledby="projects" className="mt-20">
        <h2 id="projects" className="text-sm font-semibold uppercase tracking-wider text-muted">
          Projects
        </h2>
        <ul className="mt-6 grid gap-4">
          {projects.map((p) => (
            <li key={p.title} className="rounded-lg border border-line p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <span className="font-mono text-xs text-muted">{statusLabel[p.status]}</span>
              </div>
              <p className="mt-2 leading-relaxed text-muted">{p.summary}</p>
              <p className="mt-3 font-mono text-xs text-muted">{p.stack.join(" · ")}</p>
              {(p.repo || p.demo) && (
                <div className="mt-4 flex gap-4 text-sm font-medium">
                  {p.demo && <a className="underline underline-offset-4" href={p.demo}>Live demo</a>}
                  {p.repo && <a className="underline underline-offset-4" href={p.repo}>Code</a>}
                </div>
              )}
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="skills" className="mt-20">
        <h2 id="skills" className="text-sm font-semibold uppercase tracking-wider text-muted">
          Skills
        </h2>
        <dl className="mt-6 grid gap-6 sm:grid-cols-3">
          {skills.map((s) => (
            <div key={s.group}>
              <dt className="font-semibold">{s.group}</dt>
              <dd className="mt-2 text-muted">{s.items.join(", ")}</dd>
            </div>
          ))}
        </dl>
      </section>

      <footer className="mt-24 border-t border-line pt-6 text-sm text-muted">
        Built with Next.js and Claude Code. Deployed on Vercel.
      </footer>
    </main>
  );
}
