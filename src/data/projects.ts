export type ProjectLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type Project = {
  id: string;
  name: string;
  kicker: string;
  status: "live" | "case-study" | "upcoming";
  title: string;
  description: string;
  contribution: string;
  stack: readonly string[];
  image: {
    src: string;
    alt: string;
  };
  layout: "image-left" | "image-right";
  url?: string;
  links: readonly ProjectLink[];
};

export const projects: readonly Project[] = [
  {
    id: "lexi",
    name: "Lexi",
    kicker: "EdTech · Product engineering",
    status: "live",
    title: "AI-powered learning platform",
    description:
      "An EdTech product that helps people learn with personalized, AI-assisted content. Built as a real web application, not a demo wrapper around a prompt.",
    contribution:
      "Full-stack product work: application structure, TypeScript UI, Node APIs, and PostgreSQL data — with a focus on clarity, performance and something teachers and students can actually use.",
    stack: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "AI APIs"],
    image: {
      src: "/images/project-lexi.jpg",
      alt: "Lexi hotspot lesson: an isometric bedroom scene with vocabulary for bed, pillow, desk and wardrobe",
    },
    layout: "image-left",
    url: "https://tube-lex.vercel.app/home",
    links: [
      { label: "Open Lexi", href: "https://tube-lex.vercel.app/home", external: true },
    ],
  },
  {
    id: "commercial",
    name: "Commercial product engineering",
    kicker: "Rakuten · 2021–2026",
    status: "case-study",
    title: "B2B platforms, dashboards and delivery",
    description:
      "Senior full-stack work on internal and customer-facing product surfaces: complex workflows, data-heavy views, and the architecture needed to keep them fast and maintainable.",
    contribution:
      "End-to-end ownership with product teams across time zones: feature design, performance, and delivery. Selected work shown in an anonymized form due to confidentiality.",
    stack: ["React", "Next.js", "NestJS", "TypeScript", "Node.js", "PostgreSQL"],
    image: {
      src: "/images/rakuten.jpg",
      alt: "Rakuten wordmark on a purple gradient",
    },
    layout: "image-right",
    links: [],
  },
];
