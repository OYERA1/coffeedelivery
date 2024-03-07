import z from "zod";

export const schemaValidation = z.object({
	CEP: z.string().includes("-").max(9).min(8).trim(),
	rua: z.string().min(3).max(50),
	numero: z.string().min(1).max(30),
	complemento: z.string().optional(),
	bairro: z.string().min(2),
	cidade: z.string().min(2),
	uf: z.string().min(2).max(2),
});

export type TypeSchema = z.infer<typeof schemaValidation>;
