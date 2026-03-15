import { z } from 'zod';

const contactSchema = z.object({
  name:    z.string().min(1, 'Nome obrigatório').max(100),
  email:   z.email('Email inválido'),
  message: z.string().min(10, 'Mensagem muito curta').max(2000),
});

export type ContactInput = z.infer<typeof contactSchema>;

export function parseContact(data: unknown): ContactInput {
  return contactSchema.parse(data);
}

export function zodErrorToJson(err: z.ZodError) {
  return z.treeifyError(err);
}