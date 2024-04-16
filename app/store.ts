import { create } from 'zustand'
import { persist } from "zustand/middleware";

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

type User = {
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



type UserState = {
    loggedIn: string | boolean;
    fillInfo: string | boolean;
    user: User;
    logIn: (session: User) => void;
    logOut: () => void;
    setFillInfo: (fillInfo: string) => void;
};
// const LOCAL_LOGGEDIN_KEY = "loggedIn";
// export const LOCAL_INFO_KEY = "fillInfo";

// const getStatusLoggedIn = () => {
//     if (typeof window !== 'undefined') {
//         const loggedIn = localStorage.getItem(LOCAL_LOGGEDIN_KEY) || false;
//         return loggedIn;
//     }
//     return false;
// };

// const getStatusFillInfo = () => {
//     if (typeof window !== 'undefined') {
//         const info = localStorage.getItem(LOCAL_INFO_KEY) || false;
//         return info;
//     }
//     return false;
// };

export const useStore = create<UserState, [["zustand/persist", UserState]]>(
    persist(
        (set) => ({
            loggedIn: "",
            fillInfo: "",
            user: null,
            logIn: (session: any) => set(() => ({ user: session, loggedIn: "true", fillInfo: session.fillInfo })),
            logOut: () => set(() => ({ user: null, loggedIn: "false" })),
            setFillInfo: (fillInfo: string) => set(() => ({ fillInfo: fillInfo }))
        }),
        {
            name: "user-session"
        },
    ),
);


// const set = (set) => ({
//     loggedIn: "",
//     fillInfo: "",
//     user: null,
//     logIn: (session: any) => set(() => {
//         // if (typeof window !== 'undefined') {
//         //     localStorage.setItem(LOCAL_LOGGEDIN_KEY, "true");
//         //     localStorage.setItem(LOCAL_INFO_KEY, session.fillInfo);
//         // }
//         return { user: session, loggedIn: "true", fillInfo: session.fillInfo };
//     }),
//     logOut: () => set(() => {
//         // if (typeof window !== 'undefined') {
//         //     localStorage.setItem(LOCAL_LOGGEDIN_KEY, "false");
//         // }
//         return { user: null, loggedIn: "false" };
//     }),
//     setFillInfo: (fillInfo: string) => set(() => ({ fillInfo: fillInfo }))
// })
