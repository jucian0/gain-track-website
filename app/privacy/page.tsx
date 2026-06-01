import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Privacy Policy | Gain Track",
  description: "Privacy policy for Gain Track.",
};

const sections = [
  {
    title: "Information we collect",
    body: "Gain Track may collect information needed to create an account, operate workout tracking features, and keep your training history available across sessions.",
  },
  {
    title: "Account information",
    body: "We may store your email, profile name, authentication/session data, and related account settings.",
  },
  {
    title: "Workout and session data",
    body: "We may store workout plans, exercise details, active and completed sessions, training history, progression data, notes, loads, reps, sets, and related performance context.",
  },
  {
    title: "Profile and avatar data",
    body: "We may store your profile name and avatar if you add them. These fields help identify your account inside the app.",
  },
  {
    title: "How we use information",
    body: "We use information to provide workout planning, session logging, history review, progression signals, account access, product reliability, and user support.",
  },
  {
    title: "Data sharing",
    body: "We do not sell personal information. Data may be shared with service providers that help operate the app, such as authentication, database, hosting, analytics, or support tools.",
  },
  {
    title: "Authentication and backend providers",
    body: "Gain Track may use Supabase or similar providers for authentication, database storage, file storage, and session management.",
  },
  {
    title: "Data storage and security",
    body: "We aim to use reasonable technical and organizational safeguards for stored data. No system can be guaranteed to be completely secure.",
  },
  {
    title: "Account deletion",
    body: "Users can request account deletion. When an account is deleted, associated account information and workout data should be removed or anonymized unless retention is required for legitimate operational or legal reasons.",
  },
  {
    title: "User rights",
    body: "Depending on your location, you may have rights to access, correct, export, restrict, or delete your personal information.",
  },
  {
    title: "Contact",
    body: "For privacy questions or account deletion requests, contact the Gain Track team through the support channel provided in the app or launch website.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-background">
        <section className="border-b border-border py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <Badge intent="neutral">Legal draft</Badge>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-4 text-sm text-foreground-muted">
              Last updated: June 1, 2026
            </p>
            <p className="mt-6 text-base leading-7 text-foreground-muted">
              This policy explains how Gain Track may collect, use, store, and
              protect information for a workout tracking product. This draft
              should be reviewed before public launch.
            </p>
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <Card className="bg-surface-raised p-6 shadow-none sm:p-8">
              <div className="space-y-8">
                {sections.map((section) => (
                  <section key={section.title} aria-labelledby={section.title}>
                    <h2
                      id={section.title}
                      className="text-xl font-semibold tracking-tight"
                    >
                      {section.title}
                    </h2>
                    <p className="mt-3 leading-7 text-foreground-muted">
                      {section.body}
                    </p>
                  </section>
                ))}
              </div>
            </Card>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
