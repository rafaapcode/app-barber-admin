"use client";
import { useStore } from "@/app/store";
import { redirect } from "next/navigation";

export default function SessionVerify() {
    const loggedIn = useStore((state) => state.loggedIn);
    if (loggedIn === "false") {
        return redirect("/");
    }
};