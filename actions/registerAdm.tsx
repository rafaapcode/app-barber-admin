"use server";
import { RegisterSchema } from '@/schemas';
import * as z from 'zod';
import bcrypt from "bcrypt";
import db from '@/lib/db';

export const registerAdm = async (values: z.infer<typeof RegisterSchema>) => {
    const validateFields = RegisterSchema.safeParse(values);

    if (!validateFields.success) {
        return { error: "Campos Incorretos !!" };
    }

    const { email, nome, senha } = validateFields.data;

    const hashedPassword = await bcrypt.hash(senha, 10);

    const exisitingUser = await db.administrator.findUnique({
        where: {
            email
        }
    });

    if (exisitingUser) {
        return { error: "Email já está em uso !" };
    }

    await db.administrator.create({
        data: {
            email,
            name: nome,
            password: hashedPassword,
        }
    });

    return { succes: "Registro Realizado !!" }
};