import { create } from 'zustand'

// type UserState = {

// };

export const useStore = create((set) => ({
    user: null,
    logIn: (session: any) => set({ user: session }),
    logOut: () => set({ user: null })
}))