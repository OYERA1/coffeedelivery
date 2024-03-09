import z from "zod";

export const schemaValidation = z.object({
	CEP: z.string().length(9, "CEP inválido").trim(),
	rua: z.string().min(3, "Rua inválida").max(50).trim(),
	numero: z.number().min(1, "Você precisa definir um numero").max(9999),
	complemento: z.string().trim().optional(),
	bairro: z.string().min(2, "Bairro inválido").trim(),
	cidade: z.string().min(2, "Cidade inválida").trim(),
	uf: z.string().min(2, "UF inválida").max(2),
	paymentMethod: z.string({ invalid_type_error: "Selecione uma opção válida" }),
});

export type TypeSchema = z.infer<typeof schemaValidation>;
