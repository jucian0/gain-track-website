import { createClient } from "@/lib/supabase/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type EarlyAccessResult = {
  message: string;
  status: "success" | "error";
};

export async function joinEarlyAccess(emailInput: string): Promise<EarlyAccessResult> {
  const email = emailInput.trim().toLowerCase();

  if (!emailPattern.test(email)) {
    return {
      message: "Enter a valid email address.",
      status: "error",
    };
  }

  let supabase: ReturnType<typeof createClient>;

  try {
    supabase = createClient();
  } catch {
    return {
      message: "Early access signup is not configured yet.",
      status: "error",
    };
  }

  const { error } = await supabase
    .from("early_access_signups")
    .insert({
      email,
      source: "website",
      tester_program: "google-play-closed-test",
    });

  if (error?.code === "23505") {
    return {
      message: "You are on the early access list.",
      status: "success",
    };
  }

  if (error) {
    console.error("Early access signup failed", error);

    return {
      message: "Could not save your email right now.",
      status: "error",
    };
  }

  return {
    message: "You are on the early access list.",
    status: "success",
  };
}
