import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";

const badgeStyles = tv({
  base: "inline-flex items-center rounded-sm border px-2 py-1 text-xs font-semibold",
  variants: {
    intent: {
      primary: "border-primary/30 bg-primary/10 text-primary",
      secondary: "border-secondary/30 bg-secondary/15 text-secondary-foreground",
      neutral: "border-border bg-surface-raised text-foreground-muted",
    },
  },
  defaultVariants: {
    intent: "primary",
  },
});

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeStyles> {}

export function Badge({ className, intent, ...props }: BadgeProps) {
  return <span className={cn(badgeStyles({ intent }), className)} {...props} />;
}
