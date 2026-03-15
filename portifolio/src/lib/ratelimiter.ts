import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const redis = new Redis({
  url:   import.meta.env.UPSTASH_REDIS_REST_URL!,
  token: import.meta.env.UPSTASH_REDIS_REST_TOKEN!,
});

export const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(
    Number(import.meta.env.RATE_LIMIT) || 5,
    "10 m",
  ),
});