"use server";
import { LoginSchema } from '@/schemas';
import * as z from 'zod';

export const loginBarber = async (values: z.infer<typeof LoginSchema>) => {
    const validatedFields = LoginSchema.safeParse(values);

    if (!validatedFields.success) {
        return { status: false , message: "Campos Incorretos !!" };
    }

    const headers = new Headers({
        "Content-Type": "application/json"
    });

    const token = await fetch("http://localhost:3333/auth/login/barber", {
        method: "POST",
        headers,
        body: JSON.stringify(validatedFields.data)
    });

    const resToken = await token.json();
    // console.log(resToken);
    if (!resToken.status) {
        return { status: resToken.status, message: resToken.message };
    }

    headers.append("Authorization", `Bearer ${resToken.data}`);
    const payload = await fetch("http://localhost:3333/auth/status", {
        method: "GET",
        headers,
    });
    const resultPayload = await payload.json();

    const updatedInfo = await fetch(`http://localhost:3333/auth/fillinfo/barber/${resultPayload.email}`, {
        method: "GET",
        headers,
    });
    const infoStatus = await updatedInfo.json(); 
    const data = { ...resultPayload, ...infoStatus };
    return { status: true, message: "Login Realizado !!", data };
}