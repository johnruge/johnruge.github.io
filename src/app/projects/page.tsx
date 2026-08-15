import Nav from "@/components/Nav";
import { projects } from "@/lib/site";

export default function Projects() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="site-main">
        <section className="space-y-4">
          <h1 className="page-title">things I have built</h1>
        </section>

        <section className="section">
          <div className="divide-y divide-line">
            {projects.map((project) => (
              <article
                key={project.name}
                className="entry py-6 first:pt-0 last:pb-0"
              >
                <p className="entry-date">
                  {project.href ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="site-link"
                    >
                      github link
                    </a>
                  ) : project.course ? (
                    "course project"
                  ) : (
                    "closed source"
                  )}
                </p>
                <div className="min-w-0 space-y-1">
                  <h2 className="entry-title">{project.name}</h2>
                  <p className="entry-meta">{project.stack}</p>
                  <p className="entry-copy">{project.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
