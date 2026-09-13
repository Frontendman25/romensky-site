import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { getHeroSocials, site } from "@/data/site";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { CompactSocialRow } from "@/components/ui/social-links";
import { Reveal } from "@/components/motion/reveal";

const facts = [
  { label: "8+ years", detail: "Production software" },
  { label: "Remote", detail: "B2B / Contract" },
  { label: "International", detail: "Distributed product teams" },
] as const;

export function Hero() {
  const socials = getHeroSocials();

  return (
    <section className="border-b border-line bg-paper">
      <Container className="grid items-stretch gap-10 py-[clamp(2.5rem,6vw,4.5rem)] lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12">
        <Reveal>
          <p className="flex items-center gap-3 text-[0.7rem] font-medium tracking-[0.22em] text-ink-muted uppercase">
            <span className="text-accent-ink">01</span>
            <span className="h-px w-8 bg-accent" aria-hidden="true" />
            {site.role}
          </p>
          <h1 className="mt-5 max-w-[12ch] text-[clamp(2.6rem,7vw,5.15rem)] leading-[0.95] tracking-[-0.04em] text-ink">
            {site.headlineLead}
            <span className="mt-1 block font-medium italic tracking-[-0.03em]">
              {site.headlineEmphasis}
            </span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-ink-muted sm:text-lg">
            <strong className="font-semibold text-ink">Senior Full-Stack</strong> Engineer with 8+ years
            of experience building production web applications with{" "}
            <strong className="font-semibold text-ink">React</strong>,{" "}
            <strong className="font-semibold text-ink">Next.js</strong>,{" "}
            <strong className="font-semibold text-ink">TypeScript</strong>, and{" "}
            <strong className="font-semibold text-ink">Node.js</strong> — from frontend architecture and
            authentication to APIs, databases, testing, and deployment.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink href="/#work">
              View my work
              <ArrowDown size={16} aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href="/#contact" variant="secondary">
              Let’s talk
            </ButtonLink>
          </div>
          <ul className="mt-8 grid grid-cols-1 gap-4 border-t border-line pt-6 sm:grid-cols-3">
            {facts.map((fact) => (
              <li key={fact.label} className="sm:border-l sm:border-line sm:pl-4 first:sm:border-l-0 first:sm:pl-0">
                <p className="text-lg font-semibold tracking-tight text-ink">{fact.label}</p>
                <p className="mt-1 text-sm text-ink-muted">{fact.detail}</p>
              </li>
            ))}
          </ul>
          <CompactSocialRow channels={socials} className="mt-5" />
        </Reveal>

        <Reveal delay={0.08} className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-mist sm:aspect-[5/4] lg:aspect-auto lg:h-full lg:min-h-[34rem]">
            <Image
              src={site.photo}
              alt={`${site.name}, senior full-stack engineer`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="object-cover object-[center_12%]"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
