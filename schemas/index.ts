import * as z from "zod";

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Email inválido"
    }),
    senha: z.string().min(8, {
        message: "A senha deve ter no mínimo 8 caracteres"
    })
});

