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
    loggedIn: string | boolean;
    fillInfo: string | boolean;
    user: User;
    logIn: (session: User) => void;
    logOut: () => void;
    setFillInfo: (fillInfo: string) => void;
};
const LOCAL_LOGGEDIN_KEY = "loggedIn";
export const LOCAL_INFO_KEY = "fillInfo";

const getStatusLoggedIn = () => {
    if (typeof window !== 'undefined') {
        const loggedIn = localStorage.getItem(LOCAL_LOGGEDIN_KEY) || false;
        return loggedIn;
    }
    return false;
};

const getStatusFillInfo = () => {
    if (typeof window !== 'undefined') {
        const info = localStorage.getItem(LOCAL_INFO_KEY) || false;
        return info;
    }
    return false;
};

export const useStore = create<UserState>((set) => ({
    loggedIn: getStatusLoggedIn(),
    fillInfo: getStatusFillInfo(),
    user: null,
    logIn: (session: any) => set(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem(LOCAL_LOGGEDIN_KEY, "true");
            localStorage.setItem(LOCAL_INFO_KEY, session.fillInfo);
        }
        return { user: session, loggedIn: "true", fillInfo: session.fillInfo };
    }),
    logOut: () => set(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem(LOCAL_LOGGEDIN_KEY, "false");
        }
        return { user: null, loggedIn: "false" };
    }),
    setFillInfo: (fillInfo: string) => set(() => ({ fillInfo: fillInfo }))
}));