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
    name: z.string().min(4, {
        message: "O nome deve ter no mínimo 4 caracteres"
    })
});

export const SettingsSchema = z.object({
    nomeBarbearia: z.string().min(6, { message: "O nome da barbearia deve ter no mínimo 6 caracteres" }),
    streetName: z.string().min(6, { message: "O nome da rua deve ter no mínimo 6 caracteres" }),
    cep: z.string().min(8, { message: "O CEP deve ter 8 caracteres" }).max(8, { message: "O CEP deve ter 8 caracteres" }),
    num: z.string().regex(/^\d*\.?\d+$/, {message: "O número deve ser composto somente por números inteiros e positivos"}),
    districtName: z.string().min(6, { message: "O nome do bairro deve ter no mínimo 6 caracteres" }),
    workingPeriod: z.string().regex(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]\s*-\s*(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/, {message: "O horário deve serguir o seguinte padrão : hh:mm - hh:mm"}),
    openWeekend: z.string().regex(/^(?:S|N|s|n)$/, {message: "O horário de funcionamento deve ser S ou N somente."})
});