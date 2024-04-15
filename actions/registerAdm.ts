"use server";
import { RegisterSchema } from '@/schemas';
import * as z from 'zod';

export const registerAdm = async (values: z.infer<typeof RegisterSchema>) => {
    const validateFields = RegisterSchema.safeParse(values);

    if (!validateFields.success) {
        return { error: "Campos Incorretos !!" };
    }

    const headers = new Headers({
        "Content-Type": "application/json"
    });

    const result = await fetch("http://localhost:3333/auth/register/admin", {
        method: "POST",
        headers,
        body: JSON.stringify(validateFields.data)
    });

    const res = await result.json();

    if(!res.status) {
        return {status: res.status, message: res.message }
    }

    return { status: res.status, message: res.message };
};