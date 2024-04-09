import * as z from "zod";

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Email inválido"
    }),
    password: z.string().min(8, {
        message: "A senha deve ter no mínimo 8 caracteres"
    })
});

export const RegisterSchema = z.object({
    email: z.string().email({
        message: "Email inválido"
    }),
    password: z.string().min(8, {
        message: "A senha deve ter no mínimo 8 caracteres"
    }),
    nome: z.string().min(4, {
        message: "O nome deve ter no mínimo 4 caracteres"
    })
});