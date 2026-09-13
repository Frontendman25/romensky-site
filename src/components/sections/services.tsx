import { services } from "@/data/services";
import { SectionHeading } from "@/components/ui/section-heading";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-paper py-[clamp(2.4rem,4.8vw,4.1rem)]">
      <Container>
        <SectionHeading
          number="05"
          eyebrow="Services"
          title="Services"
          description="For companies hiring a senior engineer, and for teams who need a technical partner rather than an agency deck."
        />

        <div className="mt-8 grid max-w-[880px] gap-x-10 gap-y-8 sm:grid-cols-2">
          {services.map((service, index) => (
            <Reveal key={service.number} delay={index * 0.04}>
              <article className="border-t border-line pt-4">
                <p className="text-sm font-medium tracking-tight text-accent-ink">{service.number}</p>
                <h3 className="mt-2 text-lg tracking-tight text-ink">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{service.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
