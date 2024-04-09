"use server";
import { LoginSchema } from '@/schemas';
import * as z from 'zod';

export const loginAdm = async (values: z.infer<typeof LoginSchema>) => {
    const validatedFields = LoginSchema.safeParse(values);
    if (!validatedFields.success) {
        return { error: "Campos Incorretos !!" };
    }



    const token = await fetch("http://localhost:3333/auth/login", {
        method: "POST",
        body: JSON.stringify(validatedFields.data)
    });
    // const resToken = await token.json();
    // const headers = new Headers({
    //     "Content-Type": "application/json",
    //     "Authorization": `Bearer ${token}`
    // });
    // const payload = await fetch("http://localhost:3333/auth/status", {
    //     method: "GET",
    //     headers,
    // });
    console.log(JSON.stringify(validatedFields.data));
    // console.log(payload);
    
    return { succes: "Login Realizado !!"};
}