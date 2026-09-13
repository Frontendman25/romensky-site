import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  number: string;
  eyebrow: string;
  title: string;
  description?: string;
  action?: ReactNode;
  className?: string;
};

export function SectionHeading({
  number,
  eyebrow,
  title,
  description,
  action,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between", className)}>
      <div className="max-w-2xl">
        <p className="flex items-center gap-3 text-[0.7rem] font-medium tracking-[0.22em] text-ink-muted uppercase">
          <span className="text-accent-ink">{number}</span>
          <span className="h-px w-8 bg-accent" aria-hidden="true" />
          {eyebrow}
        </p>
        <h2 className="mt-2.5 text-[clamp(1.7rem,3.2vw,2.6rem)] font-semibold leading-[1.12] tracking-[-0.035em] text-ink">
          {title}
        </h2>
        {description ? (
          <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-muted">{description}</p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
