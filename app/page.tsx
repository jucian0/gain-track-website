import {
  Activity,
  CalendarCheck,
  ChartNoAxesCombined,
  ClipboardList,
  History,
  Moon,
  Share2,
  Signal,
  Users,
} from "lucide-react";
import { FeatureCard } from "@/components/feature-card";
import { Hero } from "@/components/hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const features = [
  {
    title: "Ready-made workout templates",
    description: "Start from structured plans without rebuilding every session.",
    icon: ClipboardList,
  },
  {
    title: "Active session tracking",
    description: "Log sets, reps, load, and notes while the workout is happening.",
    icon: Activity,
  },
  {
    title: "Training history",
    description: "Review previous sessions without digging through notes.",
    icon: History,
  },
  {
    title: "Progression signals",
    description: "Spot when load, reps, or volume are ready to move.",
    icon: Signal,
  },
  {
    title: "Post-workout summary",
    description: "Leave each session with a compact record of what changed.",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Dark and light themes",
    description: "Use the interface in the mode that fits your training setup.",
    icon: Moon,
  },
];

const socialItems = [
  {
    title: "Sharing completed sessions",
    description: "Post what was done, not staged content.",
    icon: Share2,
  },
  {
    title: "Following friends' consistency",
    description: "Keep up with training rhythm without turning it into a feed.",
    icon: CalendarCheck,
  },
  {
    title: "Private training groups",
    description: "Small circles for people following plans together.",
    icon: Users,
  },
  {
    title: "Progress cards and achievements",
    description: "Clear milestones based on real session data.",
    icon: ChartNoAxesCombined,
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />

        <section className="border-b border-border bg-background py-20">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <Card className="bg-surface-raised shadow-none">
              <Badge intent="neutral">Problem</Badge>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight">
                Training progress gets scattered.
              </h2>
              <p className="mt-4 text-foreground-muted">
                Training progress gets lost in notes, screenshots, and memory.
                Most apps make logging feel heavier than training.
              </p>
            </Card>

            <Card className="border-primary/25 bg-primary/5 shadow-none">
              <Badge intent="primary">Solution</Badge>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight">
                One focused flow for real sessions.
              </h2>
              <p className="mt-4 text-foreground-muted">
                Gain Track keeps workouts, sessions, history, and progression
                signals in one focused flow.
              </p>
            </Card>
          </div>
        </section>

        <section id="features" className="border-b border-border bg-surface py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <Badge intent="primary">Features</Badge>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                Built around the session.
              </h2>
              <p className="mt-4 text-foreground-muted">
                Compact tools for the parts of training that need precision:
                plan, log, review, progress.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <FeatureCard key={feature.title} {...feature} />
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-background py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
            <div>
              <Badge intent="secondary">Future social layer</Badge>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                Social features, without the performance.
              </h2>
              <p className="mt-4 text-foreground-muted">
                Gain Track may support sharing and groups later, but the center
                stays on completed training and useful context.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {socialItems.map(({ title, description, icon: Icon }) => (
                <Card key={title} className="bg-surface-raised p-4 shadow-none">
                  <Icon aria-hidden="true" className="size-5 text-primary" />
                  <h3 className="mt-4 text-base font-semibold">{title}</h3>
                  <p className="mt-2 text-sm text-foreground-muted">
                    {description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-surface py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <Card className="border-primary/25 bg-background p-8 shadow-glow sm:p-10">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <Badge intent="primary">Early access</Badge>
                  <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                    Start building your training history.
                  </h2>
                  <p className="mt-4 max-w-2xl text-foreground-muted">
                    Join the early access list and follow the product as it
                    moves toward launch.
                  </p>
                </div>
                <a
                  href="#early-access"
                  className="inline-flex h-12 items-center justify-center rounded-control border border-primary bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                >
                  Get early access
                </a>
              </div>
              <Separator className="mt-8" />
              <p className="mt-5 text-xs text-foreground-muted">
                No backend is connected on this static website preview.
              </p>
            </Card>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
