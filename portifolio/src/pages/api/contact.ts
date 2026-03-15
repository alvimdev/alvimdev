import type { APIRoute } from 'astro';
import { ratelimit } from '@/lib/ratelimiter';
import { parseContact, zodErrorToJson } from '@/lib/validators';
import { sendContactMail } from '@/lib/mailer';
import { z } from 'zod';

export const POST: APIRoute = async ({ request }) => {
  const ip = request.headers.get('x-forwarded-for') ?? 'unknown';

  const { success } = await ratelimit.limit(ip);
  if (!success)
    return Response.json({ error: 'Too many requests' }, { status: 429 });

  try {
    const data = parseContact(await request.json());
    await sendContactMail(data);
    return Response.json({ ok: true });
  } catch (err) {
    if (err instanceof z.ZodError)
      return Response.json({ error: zodErrorToJson(err) }, { status: 422 });

    console.error(err);
    return Response.json({ error: 'Mail error' }, { status: 500 });
  }
};