import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export function GET() {
  try {
    throw new Error("Sentry Example API Route Error");
  } catch (error) {
    console.error(error); // Aqui você pode substituir pelo Sentry.captureException(error);
  }
  
  return NextResponse.json({ data: "Testing Sentry Error..." });
}
