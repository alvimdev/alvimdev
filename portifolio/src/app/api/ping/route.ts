import { sendContactMail } from "@/lib/mailer";
import { MailInput } from "@/types/mail";

export async function GET() {
  const input: MailInput = {
    name: "me",
    email: process.env.SMTP_USER || "example@mail.com",
    subject: "Ping",
    message: "Keep alive",
  };
  await sendContactMail(input);
  return new Response("pong");
}
