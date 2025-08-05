import { ratelimit } from "@/lib/ratelimiter";

export async function GET() {
  const { success } = await ratelimit.limit("ping");
  if (!success) {
    return new Response("Rate limit hit", { status: 429 });
  }

  return new Response("pong");
}
