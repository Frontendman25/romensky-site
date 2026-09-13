import type { SimpleIcon } from "simple-icons";
import { cn } from "@/lib/cn";

export function BrandGlyph({
  icon,
  className,
  fill,
  title,
}: {
  icon: Pick<SimpleIcon, "path" | "title">;
  className?: string;
  fill: string;
  title?: string;
}) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      aria-hidden={title ? undefined : true}
      className={cn("size-4 shrink-0", className)}
    >
      {title ? <title>{title}</title> : null}
      <path fill={fill} d={icon.path} />
    </svg>
  );
}
