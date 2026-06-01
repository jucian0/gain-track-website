"use client";

import { FormEvent, useState } from "react";
import { submitEarlyAccess } from "@/app/actions/early-access";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type SignupState = {
  message: string;
  status: "idle" | "success" | "error";
};

export function EarlyAccessForm() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [state, setState] = useState<SignupState>({
    message: "",
    status: "idle",
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setState({ message: "", status: "idle" });

    const result = await submitEarlyAccess(email);

    setState({
      message: result.message,
      status: result.status,
    });

    if (result.status === "success") {
      setEmail("");
    }

    setIsSubmitting(false);
  }

  return (
    <form
      id="early-access"
      onSubmit={handleSubmit}
      className="mt-8 flex max-w-lg flex-col gap-3 rounded-lg border border-border bg-surface/70 p-3 sm:flex-row"
    >
      <div className="min-w-0 flex-1">
        <label className="sr-only" htmlFor="email">
          Email address
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          autoComplete="email"
          className="bg-background"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        {state.message ? (
          <p
            className={
              state.status === "success"
                ? "mt-2 text-xs text-primary"
                : "mt-2 text-xs text-red-300"
            }
          >
            {state.message}
          </p>
        ) : null}
      </div>
      <Button type="submit" size="lg" className="shrink-0" disabled={isSubmitting}>
        {isSubmitting ? "Joining..." : "Join tester list"}
      </Button>
    </form>
  );
}
