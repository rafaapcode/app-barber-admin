import { create } from 'zustand'
import { persist } from "zustand/middleware";
import { User } from './types/UserType';

type UserState = {
    loggedIn: string | boolean;
    fillInfo: string | boolean;
    user: User;
    logIn: (session: User) => void;
    logOut: () => void;
    setFillInfo: (fillInfo: string) => void;
};

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
