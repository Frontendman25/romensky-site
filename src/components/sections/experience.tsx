import { experience } from "@/data/experience";
import { links } from "@/data/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { CompanyMark } from "@/components/ui/social-links";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/cn";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 bg-paper-elevated py-[clamp(2.4rem,4.8vw,4.1rem)]">
      <Container>
        <SectionHeading
          number="04"
          eyebrow="Experience"
          title="Experience"
          description="A compact timeline. The full resume has the rest."
          action={
            <ButtonLink href={links.resume} variant="secondary">
              View full resume
            </ButtonLink>
          }
        />

        <ol className="mt-7 divide-y divide-line border-y border-line">
          {experience.map((item) => (
            <li key={item.id}>
              <Reveal>
                <article
                  className={cn(
                    "grid gap-2 py-4 sm:grid-cols-[7.5rem_minmax(0,0.85fr)_minmax(0,1.35fr)] sm:items-start sm:gap-8",
                    item.featured && "bg-paper px-4 sm:px-5",
                  )}
                >
                  <p className="text-sm text-ink-muted">{item.period}</p>
                  <div>
                    <h3 className="flex items-center gap-2 text-lg font-medium tracking-tight text-ink">
                      <CompanyMark id={item.id} className="size-5" />
                      {item.company}
                      {item.featured ? (
                        <span className="ml-2 align-middle text-[0.65rem] tracking-[0.16em] text-accent-ink uppercase">
                          Current
                        </span>
                      ) : null}
                    </h3>
                    <p className="mt-0.5 text-sm text-ink-muted">{item.role}</p>
                  </div>
                  <ul className="space-y-1.5 text-sm leading-relaxed text-ink-muted">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-2 size-1 shrink-0 bg-accent" aria-hidden="true" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
