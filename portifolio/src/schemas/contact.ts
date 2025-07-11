import { z } from "zod";

export const ContactSchema = z.object({
  name:    z.string().min(2).max(64),
  email:   z.email(),
  subject: z.string().min(2).max(128),
  message: z.string().min(10).max(2048),
});

export type ContactInput = z.infer<typeof ContactSchema>;