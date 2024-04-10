'use client';

import { useStore } from "@/app/store";

export default function SignOutButton() {
    const logOut = useStore((state: any) => state.logOut);
    const click = () => {
        logOut();
    };

    return (
        <button onClick={click}>SAIR</button>
    )
};