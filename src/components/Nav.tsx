import Link from "next/link";
import { links, profile } from "@/lib/site";

export default function Nav() {
  const resumeLink = links.find((link) => link.label === "resume");

  return (
    <header className="fixed left-0 right-0 top-0 z-10 flex w-full items-start justify-between gap-4 bg-background/80 p-5 tracking-tight backdrop-blur-xl sm:p-8">
      <Link href="/" className="shrink-0 font-serif text-xl leading-none sm:text-2xl">
        {profile.shortName}
      </Link>
      <nav className="flex flex-row flex-wrap items-center justify-end gap-x-3 gap-y-1 font-mono text-[13px] uppercase tracking-[0.18em] text-muted sm:gap-x-5">
        <Link href="/" className="hover:text-foreground">
          about
        </Link>
        <Link href="/projects" className="hover:underline">
          projects
        </Link>
        <Link href="/blog" className="hover:underline">
          blog
        </Link>
        <a
          href={resumeLink?.href ?? "/johnruge_resume.pdf"}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground"
        >
          resume
        </a>
      </nav>
    </header>
  );
}
