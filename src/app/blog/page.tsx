import Nav from "@/components/Nav";

export default function Blog() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="site-main">
        <section className="space-y-4">
          <p className="eyebrow">blog</p>
          <h1 className="page-title">...</h1>
          <p className="page-copy">
          </p>
        </section>
      </main>
    </div>
  );
}
