"use client"

import { useStore } from "@/app/store"
import BarberShopForm from "./BarbershopForm";
import BarberForm from "./BarberForm";

export default function Form() {
    const role = useStore((state) => state.user?.role);
    return (
        <>
            {role === "Admin" ? (<BarberShopForm />) : (<BarberForm />)}
        </>
    )
};