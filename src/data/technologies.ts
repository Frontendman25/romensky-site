export type TechItem = {
  name: string;
  label: string;
  icon: "react" | "nextjs" | "typescript" | "nodejs" | "nestjs" | "postgresql" | "redis" | "mongodb" | "docker" | "cicd" | "testing";
};

export type TechGroup = {
  group: string;
  items: readonly TechItem[];
};

export const technologyGroups: readonly TechGroup[] = [
  {
    group: "Frontend",
    items: [
      { name: "React", label: "UI architecture", icon: "react" },
      { name: "Next.js", label: "SSR / App Router", icon: "nextjs" },
      { name: "TypeScript", label: "Typed systems", icon: "typescript" },
    ],
  },
  {
    group: "Backend",
    items: [
      { name: "Node.js", label: "APIs / services", icon: "nodejs" },
      { name: "NestJS", label: "Structured backends", icon: "nestjs" },
    ],
  },
  {
    group: "Data",
    items: [
      { name: "PostgreSQL", label: "Relational data", icon: "postgresql" },
      { name: "Redis", label: "Caching / queues", icon: "redis" },
      { name: "MongoDB", label: "Document data", icon: "mongodb" },
    ],
  },
  {
    group: "Delivery",
    items: [
      { name: "Docker", label: "Containers", icon: "docker" },
      { name: "CI/CD", label: "Release pipeline", icon: "cicd" },
      { name: "Testing", label: "Quality", icon: "testing" },
    ],
  },
];
