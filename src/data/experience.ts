export type ExperienceItem = {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  featured?: boolean;
  summary: string;
  points: readonly string[];
};

export const experience: readonly ExperienceItem[] = [
  {
    id: "rakuten",
    company: "Rakuten",
    role: "Senior Full-Stack Software Engineer",
    period: "2021 — 2026",
    location: "International · Remote",
    summary:
      "Rakuten Advertising and Rakuten Rewards: performance marketing, cashback and loyalty products. Launched core B2B platforms from scratch across frontend, auth, data and delivery.",
    points: [
      "Built two core B2B enterprise platforms with React, Next.js (App Router), NestJS, TypeScript, Node.js and layered architecture.",
      "Designed auth with short-lived access tokens and silent refresh via httpOnly cookies; improved PostgreSQL/MongoDB query performance through indexing.",
      "Node.js streaming and Redis-backed server patterns; Docker / Docker Compose; deployments on Vercel, Render and Neon. Mentored engineers and ran technical interviews.",
    ],
  },
  {
    id: "apteka24",
    company: "APTEKA24.UA",
    role: "Frontend Engineer",
    period: "2020 — 2021",
    location: "Product company",
    summary:
      "Electronic medical information system for medication search and pharmacy delivery.",
    points: [
      "Performance and SEO work via Lighthouse / DevTools audits, bundle optimization and frontend refactoring.",
    ],
  },
  {
    id: "ukrgasbank",
    company: "UKRGASBANK",
    role: "Frontend Engineer",
    period: "2019 — 2020",
    location: "Enterprise · Top-5 Ukrainian bank",
    summary: "Digital banking dashboards in a regulated environment.",
    points: [
      "Maintained and enhanced React/Redux banking dashboards and refactored legacy frontend code.",
    ],
  },
  {
    id: "freelance",
    company: "Freelance & contract",
    role: "Frontend Engineer",
    period: "2017 — 2019",
    location: "Direct clients",
    summary: "Responsive websites and interactive advertising work.",
    points: [
      "Built responsive sites and interactive mobile advertising banners, galleries and mini-games in native JavaScript (ES6+).",
    ],
  },
];
