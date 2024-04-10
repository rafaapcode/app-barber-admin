'use client';

import { useStore } from "@/app/store";
import { Button } from "./ui/button";

export default function SignOutButton() {
    const logOut = useStore((state: any) => state.logOut);
    const click = () => {
        logOut();
    };

    return (
        <Button onClick={click}>LogOut</Button>
    )
};