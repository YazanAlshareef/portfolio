import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import CleanTable from "@/components/CleanTable";
import { about, alsoBuilt, next, profile, projects, skills, type Project } from "@/data/site";

const statusLabel: Record<Project["status"], string> = {
  live: "Live",
  building: "In progress",
  done: "Built",
  planned: "Coming soon",
};

const focus =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground";

export default function Home() {
  const hasPhoto = fs.existsSync(path.join(process.cwd(), "public", "yazan.jpg"));
  const initials = profile.name
    .split(" ")
    .map((w) => w[0])
    .join("");

  const links = [
    { label: "GitHub", href: profile.github },
    { label: "LinkedIn", href: profile.linkedin },
    { label: "Resume", href: profile.resume },
    { label: "Email", href: profile.email && `mailto:${profile.email}` },
  ].filter((l) => l.href);

  return (
    <>
      <div className="progress" aria-hidden="true" />

      <header className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-28">
        <div className="hero-in">
          <p className="font-mono text-sm text-muted">{profile.name}</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
            {profile.headline}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted text-pretty">{profile.intro}</p>
          <nav aria-label="Profile links" className="mt-8 flex flex-wrap gap-3">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className={`rounded-md border border-line bg-surface px-4 py-2 text-sm font-medium hover:border-clean ${focus}`}
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
        <CleanTable />
      </header>

      <main className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <section aria-labelledby="about" className="reveal grid gap-10 py-20 md:grid-cols-[280px_1fr]">
          <div>
            {hasPhoto ? (
              <Image
                src="/yazan.jpg"
                alt={`Portrait of ${profile.name}`}
                width={560}
                height={700}
                className="aspect-4/5 w-full rounded-2xl border border-line object-cover"
              />
            ) : (
              <div
                aria-hidden="true"
                className="flex aspect-4/5 w-full items-center justify-center rounded-2xl border border-line bg-surface text-6xl font-semibold text-clean"
              >
                {initials}
              </div>
            )}
          </div>
          <div>
            <h2 id="about" className="text-3xl font-semibold tracking-tight">
              About me
            </h2>
            <div className="mt-6 max-w-2xl space-y-4 text-lg leading-relaxed text-pretty">
              {about.summary.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <dl className="mt-8 grid max-w-2xl gap-4 sm:grid-cols-3">
              {about.facts.map((f) => (
                <div key={f.label} className="border-t border-line pt-3">
                  <dt className="text-sm text-muted">{f.label}</dt>
                  <dd className="mt-1 font-medium">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section aria-labelledby="projects" className="py-12">
          <h2 id="projects" className="text-3xl font-semibold tracking-tight">
            Projects
          </h2>
          <ul className="mt-8">
            {projects.map((p, i) => (
              <li
                key={p.title}
                style={{ top: `${5 + i * 1.5}rem` }}
                className="sticky mb-6 rounded-2xl border border-line bg-surface p-6 shadow-sm sm:p-8"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-2xl font-semibold">{p.title}</h3>
                  <span className="rounded-full border border-line px-3 py-0.5 text-sm text-clean">
                    {statusLabel[p.status]}
                  </span>
                </div>
                <p className="mt-3 max-w-2xl text-lg leading-relaxed text-muted">{p.summary}</p>
                <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tech used">
                  {p.stack.map((s) => (
                    <li key={s} className="rounded-md bg-background px-2.5 py-1 font-mono text-xs">
                      {s}
                    </li>
                  ))}
                </ul>
                {(p.repo || p.demo) && (
                  <div className="mt-5 flex gap-4 text-sm font-medium">
                    {p.demo && (
                      <a className={`underline underline-offset-4 ${focus}`} href={p.demo}>
                        Live demo
                      </a>
                    )}
                    {p.repo && (
                      <a className={`underline underline-offset-4 ${focus}`} href={p.repo}>
                        Code
                      </a>
                    )}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="also" className="reveal py-12">
          <h2 id="also" className="text-3xl font-semibold tracking-tight">
            Also built
          </h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            {alsoBuilt.map((a) => (
              <li key={a.title} className="border-t border-line pt-3">
                <h3 className="font-semibold">{a.title}</h3>
                <p className="mt-1 text-muted">{a.note}</p>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="next" className="reveal py-12">
          <h2 id="next" className="text-3xl font-semibold tracking-tight">
            Building next
          </h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {next.map((p) => (
              <li key={p.title} className="rounded-xl border border-dashed border-line p-5">
                <h3 className="font-semibold">{p.title}</h3>
                <p className="mt-2 text-muted">{p.summary}</p>
                <p className="mt-3 font-mono text-xs text-muted">{p.stack.join(", ")}</p>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="skills" className="reveal py-12">
          <h2 id="skills" className="text-3xl font-semibold tracking-tight">
            Skills
          </h2>
          <dl className="mt-6 grid gap-8 sm:grid-cols-3">
            {skills.map((s) => (
              <div key={s.group}>
                <dt className="text-lg font-semibold text-clean">{s.group}</dt>
                <dd className="mt-2 text-muted">{s.items.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section aria-labelledby="contact" className="reveal py-20">
          <h2 id="contact" className="text-3xl font-semibold tracking-tight">
            Get in touch
          </h2>
          <p className="mt-4 max-w-xl text-lg text-muted">
            Looking for an AI or data internship. Email me and I will reply.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className={`mt-6 inline-block rounded-md bg-clean px-5 py-3 font-medium text-background ${focus}`}
          >
            {profile.email}
          </a>
        </section>
      </main>

      <footer className="mx-auto w-full max-w-6xl border-t border-line px-4 py-6 text-sm text-muted sm:px-6">
        Built with Next.js and Claude Code. Deployed on Vercel.
      </footer>
    </>
  );
}
