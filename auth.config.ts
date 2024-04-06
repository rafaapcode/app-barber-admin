import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import type { NextAuthConfig } from "next-auth";
import { LoginSchema } from "./schemas";
import getAdmByEmail from "./actions/getAdmByEmail";

export default {
    providers: [Credentials({
        async authorize(credentials) {
            const validatedFields = LoginSchema.safeParse(credentials);

            if (validatedFields.success) {
                const { email, senha } = validatedFields.data;

                const user = await getAdmByEmail(email);
                if (!user || !user.password) return null;

                const passwordsMatch = await bcrypt.compare(senha, user.password);
                if (passwordsMatch) return user;
            }
            return null;
        }
    })]
} satisfies NextAuthConfig;