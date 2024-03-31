"use server";
import { LoginSchema } from '@/schemas';
import * as z from 'zod';

export const loginBarber = async (values: z.infer<typeof LoginSchema>) => {
    const validatedFields = LoginSchema.safeParse(values);

    if (!validatedFields.success) {
        return { error: "Campos Incorretos !!" };
    }

    return { succes: "Login Realizado !!" }
}