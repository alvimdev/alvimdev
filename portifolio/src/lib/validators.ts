import { z } from "zod";
import { ContactSchema } from "@/schemas/contact";

export function parseContact(body: unknown) {
  const result = ContactSchema.safeParse(body);
  if (!result.success) {
    throw result.error;
  }
  return result.data;
}

export function zodErrorToJson(err: unknown) {
  if (err instanceof z.ZodError) {
    return z.treeifyError(err);
  }
  return { message: "Unknown validation error" };
}
