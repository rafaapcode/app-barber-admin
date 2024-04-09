"use client";
import { redirect } from "next/navigation";

export default function SessionVerify() {
    const loggedIn = localStorage.getItem("loggedIn");
    if (!loggedIn) {
        return redirect("/");
    } 
};