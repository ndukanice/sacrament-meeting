import { headers } from "next/headers";

// Build the site's own URL from the incoming request so server components can
// call our API routes both locally and on Vercel (where localhost doesn't exist).
export async function getBaseUrl(): Promise<string> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? "http";

  return `${protocol}://${host}`;
}
