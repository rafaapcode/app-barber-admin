"use server";
import { RegisterSchema } from "@/schemas";
import * as z from "zod";

export const registerBarber = async (values: z.infer<typeof RegisterSchema>) => {
    const validateFields = RegisterSchema.safeParse(values);

    if (!validateFields.success) {
        return { error: "Campos Incorretos !!" };
    }

    return { success: "Barbeiro Cadastrado com sucesso !!" };
};