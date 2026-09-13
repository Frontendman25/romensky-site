import type { SimpleIcon } from "simple-icons";
import {
  siDocker,
  siGithubactions,
  siMongodb,
  siNestjs,
  siNextdotjs,
  siNodedotjs,
  siPostgresql,
  siReact,
  siRedis,
  siTypescript,
  siVitest,
} from "simple-icons";
import type { TechItem } from "@/data/technologies";
import { cn } from "@/lib/cn";

const icons: Record<TechItem["icon"], SimpleIcon> = {
  react: siReact,
  nextjs: siNextdotjs,
  typescript: siTypescript,
  nodejs: siNodedotjs,
  nestjs: siNestjs,
  postgresql: siPostgresql,
  redis: siRedis,
  mongodb: siMongodb,
  docker: siDocker,
  cicd: siGithubactions,
  testing: siVitest,
};

export function TechIcon({
  name,
  className,
  onDark = false,
}: {
  name: TechItem["icon"];
  className?: string;
  onDark?: boolean;
}) {
  const icon = icons[name];
  const fill = name === "nextjs" && onDark ? "#F4F1EB" : `#${icon.hex}`;

  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={cn("size-5 shrink-0", className)}
    >
      <title>{icon.title}</title>
      <path fill={fill} d={icon.path} />
    </svg>
  );
}
