import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";

const buttonStyles = tv({
  base: "inline-flex items-center justify-center gap-2 rounded-control border px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:pointer-events-none disabled:opacity-50",
  variants: {
    intent: {
      primary:
        "border-primary bg-primary text-primary-foreground hover:bg-primary/90",
      secondary:
        "border-border bg-surface-raised text-foreground hover:border-primary/40 hover:bg-surface",
      outline:
        "border-border bg-transparent text-foreground hover:border-primary/50 hover:bg-primary/5",
      plain:
        "border-transparent bg-transparent text-foreground-muted hover:text-foreground",
    },
    size: {
      sm: "h-9 px-3 text-xs",
      md: "h-10 px-4",
      lg: "h-12 px-5",
    },
  },
  defaultVariants: {
    intent: "primary",
    size: "md",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {}

export function Button({ className, intent, size, ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonStyles({ intent, size }), className)}
      {...props}
    />
  );
}
