import type { APIRoute } from 'astro';
import { ratelimit } from '@/lib/ratelimiter';

export const GET: APIRoute = async () => {
  const { success } = await ratelimit.limit('ping');
  if (!success)
    return new Response('Rate limit hit', { status: 429 });

  return new Response('pong');
};