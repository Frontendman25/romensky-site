import type { Metadata } from "next";
import Link from "next/link";
import { experience } from "@/data/experience";
import { links, site } from "@/data/site";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { CompanyMark } from "@/components/ui/social-links";

export const metadata: Metadata = {
  title: "Resume",
  description: `Resume — ${site.name}, ${site.role}.`,
};

export default function ResumePage() {
  return (
    <>
      <Header />
      <main>
      <Container className="max-w-3xl py-16">
        <p className="text-[0.7rem] tracking-[0.2em] text-accent-ink uppercase">Resume</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-[-0.03em] text-ink">{site.name}</h1>
        <p className="mt-2 text-ink-muted">{site.role}</p>
        <p className="mt-6 text-base leading-relaxed text-ink-muted">{site.summary}</p>
        <p className="mt-4 text-sm text-ink-muted">
          Prefer the PDF?{" "}
          <a href={links.resume} download className="underline decoration-accent decoration-2 underline-offset-4 text-ink">
            Download CV
          </a>
        </p>
        <div className="mt-6 flex gap-3">
          <a
            href={links.mailto}
            className="rounded-sm bg-accent px-4 py-2 text-sm font-medium text-ink"
          >
            Email
          </a>
          <Link href="/" className="rounded-sm border border-line px-4 py-2 text-sm text-ink">
            Back to site
          </Link>
        </div>
        <section className="mt-12 space-y-8">
          {experience.map((item) => (
            <article key={item.id} className="border-t border-line pt-6">
              <h2 className="flex items-center gap-2 text-xl text-ink">
                <CompanyMark id={item.id} className="size-5" />
                {item.company}
              </h2>
              <p className="text-sm text-ink-muted">
                {item.role} · {item.period}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink">{item.summary}</p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-ink-muted">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>
      </Container>
      </main>
      <Footer />
    </>
  );
}
