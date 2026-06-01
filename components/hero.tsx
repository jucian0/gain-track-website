import Link from "next/link";
import { ArrowRight, Check, Gauge, TimerReset, TrendingUp } from "lucide-react";
import { EarlyAccessForm } from "@/components/early-access-form";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const sessionRows = [
  ["Bench press", "4 x 6", "+2.5 kg"],
  ["Pull-up", "3 x 8", "hold"],
  ["Split squat", "3 x 10", "+1 rep"],
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(183,255,25,0.12),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(79,43,255,0.18),transparent_32%)]" />
      <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
        <div className="max-w-2xl">
          <Badge intent="primary">Gain Track</Badge>
          <h1 className="mt-5 max-w-3xl text-5xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Track your training. Progress with clarity.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-foreground-muted sm:text-lg">
            Follow workouts, log sessions, review history, and understand when
            it is time to progress.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#early-access"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-control border border-primary bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              Get early access <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
            <Link
              href="/privacy"
              className="inline-flex h-12 items-center justify-center rounded-control border border-border bg-surface-raised px-5 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              View privacy policy
            </Link>
          </div>

          <EarlyAccessForm />
        </div>

        <div aria-label="Gain Track app preview" className="relative">
          <Card className="border-border bg-surface-raised p-4 shadow-violet">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-foreground-muted">
                  Workout of the day
                </p>
                <h2 className="mt-1 text-xl font-semibold">Upper Strength A</h2>
              </div>
              <Badge intent="secondary">Week 6</Badge>
            </div>

            <Separator className="my-4" />

            <div className="grid gap-3">
              {sessionRows.map(([name, target, signal]) => (
                <div
                  key={name}
                  className="grid grid-cols-[1fr_auto_auto] items-center gap-3 rounded-control border border-border bg-background p-3"
                >
                  <span className="text-sm font-medium">{name}</span>
                  <span className="text-xs text-foreground-muted">{target}</span>
                  <span className="rounded-sm bg-primary/10 px-2 py-1 text-xs font-semibold text-primary">
                    {signal}
                  </span>
                </div>
              ))}
            </div>
          </Card>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <Card className="bg-surface p-4 shadow-none">
              <div className="flex items-center gap-3">
                <span className="grid size-9 place-items-center rounded-control bg-primary/10 text-primary">
                  <TimerReset aria-hidden="true" className="size-4" />
                </span>
                <div>
                  <p className="text-sm font-semibold">Active session</p>
                  <p className="text-xs text-foreground-muted">42 min logged</p>
                </div>
              </div>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-border">
                <div className="h-full w-2/3 bg-primary" />
              </div>
            </Card>

            <Card className="bg-surface p-4 shadow-none">
              <div className="flex items-center gap-3">
                <span className="grid size-9 place-items-center rounded-control bg-secondary/20 text-secondary-foreground">
                  <TrendingUp aria-hidden="true" className="size-4" />
                </span>
                <div>
                  <p className="text-sm font-semibold">Progression signal</p>
                  <p className="text-xs text-foreground-muted">Increase load next set</p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 text-xs text-primary">
                <Check aria-hidden="true" className="size-4" />
                Last 3 sessions completed cleanly
              </div>
            </Card>
          </div>

          <div className="absolute -right-4 top-12 hidden rounded-lg border border-border bg-background p-3 shadow-violet lg:block">
            <div className="flex items-center gap-2 text-xs text-foreground-muted">
              <Gauge aria-hidden="true" className="size-4 text-primary" />
              89% plan adherence
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
