import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects, type Project } from "@/data/projects";
import type { TechItem } from "@/data/technologies";
import { TechIcon } from "@/components/icons/tech-icon";
import { SectionHeading } from "@/components/ui/section-heading";
import { Container } from "@/components/ui/container";
import { CompanyMark } from "@/components/ui/social-links";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/cn";

const stackIcons: Record<string, TechItem["icon"]> = {
  React: "react",
  "Next.js": "nextjs",
  NestJS: "nestjs",
  TypeScript: "typescript",
  "Node.js": "nodejs",
  PostgreSQL: "postgresql",
};

function StatusLabel({ status }: { status: Project["status"] }) {
  const map = {
    live: "Selected",
    "case-study": "Contribution",
    upcoming: "Upcoming",
  } as const;

  return (
    <span className="inline-flex items-center gap-2 text-[0.68rem] font-medium tracking-[0.16em] uppercase opacity-80">
      <span className="size-1.5 bg-accent" aria-hidden="true" />
      {map[status]}
    </span>
  );
}

function ProjectLinks({ project }: { project: Project }) {
  if (project.links.length === 0) {
    return null;
  }
  return (
    <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium">
      {project.links.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className="inline-flex items-center gap-1 text-ink underline decoration-accent decoration-2 underline-offset-4 hover:text-ink/70"
          {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {link.label}
          <ArrowUpRight size={14} aria-hidden="true" />
        </Link>
      ))}
    </div>
  );
}

function ProjectCopy({ project }: { project: Project }) {
  return (
    <div className="flex min-w-0 flex-col justify-center">
      <StatusLabel status={project.status} />
      <p className="mt-3 inline-flex items-center gap-2 text-sm text-ink-muted">
        {project.id === "commercial" ? <CompanyMark id="rakuten" className="size-4" /> : null}
        {project.kicker}
      </p>
      <h3 className="mt-1 text-[clamp(1.55rem,2.8vw,2.1rem)] font-semibold leading-tight tracking-[-0.03em] text-ink">
        {project.url ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ink/70"
          >
            {project.name}
          </a>
        ) : (
          project.name
        )}
      </h3>
      <p className="mt-1 text-base font-medium text-ink">{project.title}</p>
      <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-muted">{project.description}</p>
      <p className="mt-3 text-[0.95rem] leading-relaxed text-ink">{project.contribution}</p>
      <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-2 text-xs tracking-wide text-ink-muted uppercase">
        {project.stack.map((item) => {
          const icon = stackIcons[item];
          return (
            <li key={item} className="inline-flex items-center gap-1.5 border-b border-line pb-0.5">
              {icon ? <TechIcon name={icon} className="size-3.5" /> : null}
              {item}
            </li>
          );
        })}
      </ul>
      <ProjectLinks project={project} />
    </div>
  );
}

export function Work() {
  return (
    <section id="work" className="scroll-mt-24 bg-paper-elevated py-[clamp(2.4rem,4.8vw,4.1rem)]">
      <Container>
        <SectionHeading
          number="03"
          eyebrow="Selected Work"
          title="Things I’m proud of"
          description="Product surfaces and the systems underneath. Selected commercial work is shown in an anonymized form due to confidentiality."
        />

        <div className="mt-8 flex flex-col gap-10 lg:gap-12">
          {projects.map((project) => {
            const imageFirst = project.layout === "image-left";

            return (
              <Reveal key={project.id}>
                <article
                  className={cn(
                    "grid items-center gap-7 lg:grid-cols-2 lg:gap-10",
                    !imageFirst && "lg:[&>div:first-child]:order-2",
                  )}
                >
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative aspect-[16/10] overflow-hidden rounded-sm bg-mist"
                    >
                      <Image
                        src={project.image.src}
                        alt={project.image.alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </a>
                  ) : (
                    <div className="relative aspect-[16/10] overflow-hidden rounded-sm bg-mist">
                      <Image
                        src={project.image.src}
                        alt={project.image.alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                  )}
                  <ProjectCopy project={project} />
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
