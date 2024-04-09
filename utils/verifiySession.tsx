"use client";
import { useStore } from "@/app/store";
import { redirect } from "next/navigation";

export default function SessionVerify() {
    const loggedIn = useStore((state: any) => state.user);
    console.log(loggedIn);
    if (!loggedIn) {
        return redirect("/");
    }
};