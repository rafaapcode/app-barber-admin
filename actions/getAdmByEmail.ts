"use server";
import db from "@/lib/db";

export default async function getAdmByEmail(email: string) {
    const exisitingUser = await db.administrator.findUnique({
        where: {
            email
        }
    });

    if(!exisitingUser) {
        return false;
    }

    return exisitingUser;
};