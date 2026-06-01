import { NextResponse } from "next/server";
import { joinEarlyAccess } from "@/lib/early-access";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const result = await joinEarlyAccess(String(body?.email ?? ""));

  if (result.status === "error") {
    return NextResponse.json({ error: result.message }, { status: 400 });
  }

  return NextResponse.json({ message: result.message });
}
