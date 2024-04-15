"use server";
import { LoginSchema } from '@/schemas';
import * as z from 'zod';

export const loginAdm = async (values: z.infer<typeof LoginSchema>) => {
    const validatedFields = LoginSchema.safeParse(values);
    if (!validatedFields.success) {
        return { error: "Campos Incorretos !!" };
    }

    const headers = new Headers({
        "Content-Type": "application/json"
    });

    const token = await fetch("http://localhost:3333/auth/login", {
        method: "POST",
        headers,
        body: JSON.stringify(validatedFields.data)
    });

    const resToken = await token.json();

    if (!resToken.status) {
        return { status: resToken.status, message: resToken.message };
    }

    headers.append("Authorization", `Bearer ${resToken.data}`);
    const payload = await fetch("http://localhost:3333/auth/status", {
        method: "GET",
        headers,
    });
    const resultPayload = await payload.json();
    const updatedInfo = await fetch(`http://localhost:3333/auth/fillinfo/${resultPayload.email}`, {
        method: "GET",
        headers,
    });
    const infoStatus = await updatedInfo.json(); 
    const data = { ...resultPayload, ...infoStatus };
    return { status: true, message: "Login Realizado !!", data };
}