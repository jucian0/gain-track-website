"use server";

import { joinEarlyAccess } from "@/lib/early-access";

export async function submitEarlyAccess(email: string) {
  return joinEarlyAccess(email);
}
