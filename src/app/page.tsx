import Nav from "@/components/Nav";
import { experience, links, profile } from "@/lib/site";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="site-main max-w-6xl pb-4 sm:pt-24">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-16">
          <section className="space-y-5 lg:sticky lg:top-32 lg:self-start">
            <video
              src="/video.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              aria-label="short intro video"
              className="mx-auto aspect-square w-2/5 rounded-lg border border-line object-cover"
            />
            <p className="eyebrow">{profile.name}</p>
            <h1 className="text-2xl leading-tight tracking-[-0.04em] sm:text-3xl">
              I like building software for products, research, and education.
            </h1>
            <div className="space-y-4 text-base leading-7 text-copy">
              <p>{profile.summary}</p>
              <p>{profile.note}</p>
            </div>
          </section>

          <section className="border-t border-line pt-8 lg:border-t-0 lg:pt-0">
            <h2 className="section-title mb-4">experience</h2>
            <div className="space-y-3">
              {experience.map((item) => (
                <article key={`${item.org}-${item.date}`} className="entry">
                  <p className="entry-date">{item.date}</p>
                  <div className="min-w-0 space-y-1">
                    <h3 className="entry-title">{item.org}</h3>
                    <p className="entry-meta">
                      {item.role} / {item.place}
                    </p>
                    {item.summary ? (
                      <p className="entry-copy">{item.summary}</p>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>

        <section className="section mt-10 pt-7">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <p className="text-sm leading-6 text-copy">
              Best way to reach me is email.
            </p>
            <div className="link-row">
              {links
                .filter((link) => link.label !== "resume")
                .map((link) => (
                  <a key={link.href} href={link.href} className="site-link">
                    {link.label}
                  </a>
                ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
