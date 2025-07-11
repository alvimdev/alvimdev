import { MailInput } from "@/types/mail";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendContactMail({
  name,
  email,
  subject,
  message,
}: MailInput) {
  return transporter.sendMail({
    from: `"${name}" <${email}>`,
    to: process.env.SMTP_USER,
    replyTo: email,
    subject,
    text: message,
  });
}
