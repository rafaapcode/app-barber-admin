"use server";
import { RegisterSchema } from "@/schemas";
import * as z from "zod";

export const registerBarber = async (values: z.infer<typeof RegisterSchema>) => {
    const validateFields = RegisterSchema.safeParse(values);

    if (!validateFields.success) {
        return { status: false, message: "Campos Incorretos !!" };
    }

    const headers = new Headers({
        "Content-Type": "application/json"
    });

    const register = await fetch("http://localhost:3333/auth/register/barber", {
        method: "POST",
        headers,
        body: JSON.stringify(validateFields.data)
    });

    const result = await register.json();

    if(!result.status) {
        return {status: result.status, message: result.message}
    }

    return { status: result.status, message: result.message };
};