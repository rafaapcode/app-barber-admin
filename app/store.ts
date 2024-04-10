import { create } from 'zustand'

type User = {
    id: string;
    email: string;
    name: string;
    fillInfo: boolean;
    image: string | null;
    role: string;
    session: any;
    iat: number;
    exp: number;
} | null;

type UserState = {
    loggedIn: string | false;
    user: User;
    logIn: (session: User) => void;
    logOut: () => void;
};
const LOCAL_LOGGEDIN_KEY = "loggedIn";

const getStatus = () => {
    const loggedIn = localStorage.getItem(LOCAL_LOGGEDIN_KEY) || false;
    return loggedIn;
};

export const useStore = create<UserState>((set) => ({
    loggedIn: getStatus(),
    user: null,
    logIn: (session: any) => set(() => {
        localStorage.setItem(LOCAL_LOGGEDIN_KEY, "true");
        return { user: session, loggedIn: "true" };
    }),
    logOut: () => set(() => {
        localStorage.setItem(LOCAL_LOGGEDIN_KEY, "false");
        return { user: null, loggedIn: "false" };
    }),
}));