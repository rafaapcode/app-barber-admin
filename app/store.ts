import { create } from 'zustand'

export const useStore = create((set) => ({
    user: null,
    logIn: (session: any) => set({ user: session }),
    logOut: () => set({ user: null })
}))