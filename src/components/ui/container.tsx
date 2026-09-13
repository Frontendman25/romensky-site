import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div
      className={cn("mx-auto w-full max-w-[1200px] px-[clamp(1.15rem,3.2vw,1.75rem)]", className)}
      {...props}
    >
      {children}
    </div>
  );
}
