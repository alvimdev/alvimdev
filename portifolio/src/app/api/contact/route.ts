import type { NextRequest } from "next/server";
import { ratelimit } from "@/lib/ratelimiter";
import { parseContact, zodErrorToJson } from "@/lib/validators";
import { sendContactMail } from "@/lib/mailer";
import z from "zod";

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for") ?? "unknown";
  const { success } = await ratelimit.limit(ip.toString());
  if (!success)
    return Response.json({ error: "Too many requests" }, { status: 429 });

  try {
    const { name, email, subject, message } = parseContact(await req.json());
    await sendContactMail({ name, email, subject, message });
    return Response.json({ ok: true });
  } catch (err) {
    if (err instanceof z.ZodError){
      return Response.json({ error: zodErrorToJson(err) }, { status: 422 });
    }

    console.error(err);
    return Response.json({ error: "Mail error" }, { status: 500 });
  }
}
