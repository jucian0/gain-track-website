import type { LucideIcon } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type FeatureCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export function FeatureCard({
  title,
  description,
  icon: Icon,
}: FeatureCardProps) {
  return (
    <Card className="bg-surface-raised/70 shadow-none transition-colors hover:border-primary/30">
      <CardHeader>
        <div className="mb-3 grid size-9 place-items-center rounded-control border border-border bg-background text-primary">
          <Icon aria-hidden="true" className="size-4" />
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
}
