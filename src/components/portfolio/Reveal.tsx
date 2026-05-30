import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "article";
}

export function Reveal({ children, className, delay = 0, as = "div" }: RevealProps) {
  const { ref, isVisible } = useReveal();
  const Tag = as;
  return (
    <Tag
      ref={ref as never}
      className={cn("reveal", isVisible && "is-visible", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
