import type { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";

const variants = {
  primary:
    "bg-accent text-ink hover:bg-accent-deep focus-visible:outline-accent",
  secondary:
    "bg-transparent text-ink border border-ink/15 hover:border-ink/40 hover:bg-ink/[0.03]",
  ghost: "bg-transparent text-ink hover:text-ink/70",
} as const;

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  className?: string;
  download?: boolean;
  external?: boolean;
};

function isExternalHref(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  download,
  external,
}: ButtonLinkProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-sm px-5 py-2.5 text-sm font-medium tracking-tight transition-colors focus-visible:outline-2 focus-visible:outline-offset-2",
    variants[variant],
    className,
  );

  if (external || isExternalHref(href)) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  if (download || href.endsWith(".pdf")) {
    return (
      <a href={href} className={classes} download>
        {children}
      </a>
    );
  }

  if (href.startsWith("mailto:")) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  // Same-page hashes: native anchors scroll; Next Link often no-ops on `/`.
  if (href.startsWith("#") || href.startsWith("/#")) {
    return (
      <a href={href.startsWith("/#") ? href.slice(1) : href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} download={download}>
      {children}
    </Link>
  );
}
