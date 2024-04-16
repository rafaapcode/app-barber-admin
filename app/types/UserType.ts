type UserBarber = {
    id: string;
    email: string;
    name: string;
    fillInfo: boolean;
    image: string | null;
    role: "Barber",
    admId: string;
    session: {
        token: string;
    },
    administrator: {
        email: string;
        id: string;
        image: string | null;
        name: string;
    },
    iat: number;
    exp: number;

} | null;

export type User = {
    id: string;
    email: string;
    name: string;
    fillInfo: boolean;
    image: string | null;
    role: "Admin";
    session: any;
    iat: number;
    exp: number;
} | UserBarber;