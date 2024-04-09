"use client";
import { Button } from "@/components/ui/button";
import { useStore } from "../store";

export default function Home() {
    const logOut = useStore((state: any) => state.logOut);
    const click = () => {
        logOut();
        localStorage.removeItem("loggedIn");
    };
    return (
        <div>
            <Button onClick={click}>LogOut</Button>
        </div>
    )
};