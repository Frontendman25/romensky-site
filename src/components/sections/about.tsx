import Image from "next/image";
import { site } from "@/data/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-y border-line bg-paper py-[clamp(2.4rem,4.8vw,4.1rem)]">
      <Container className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.75fr)] lg:items-center lg:gap-16">
        <Reveal>
          <SectionHeading number="06" eyebrow="About" title={`Hi, I’m ${site.name.split(" ")[0]}.`} />
          <div className="mt-5 max-w-xl space-y-4 text-base leading-relaxed text-ink-muted">
            <p>
              I’m a software engineer with 8+ years of commercial experience, currently working with
              international product teams. I enjoy building products end-to-end and taking ownership
              beyond individual tickets.
            </p>
            <p>
              Outside of work, I play guitar 🎸, train at the gym 🏋️, travel ✈️ whenever I can, and
              spend probably too much time learning new things.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.06}>
          <div className="relative aspect-[4/5] max-w-sm overflow-hidden rounded-sm bg-mist lg:max-w-none">
            <Image
              src={site.aboutPhoto}
              alt={`${site.name} in the city`}
              fill
              sizes="(max-width: 1024px) 100vw, 36vw"
              className="object-cover object-[center_82%]"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
