"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";

export default function LoginAdm() {
    const onSubmitHandle = () => {
        console.log("teste");
    };

    return (
        <div className="container border flex flex-col gap-y-16 border-slate-700 rounded-md p-5">
            <div className="mx-auto relative w-36 h-28">
                <Image fill alt="icon" src={"/navalha-icon.svg"} />
            </div>
            <form onSubmit={onSubmitHandle} className="w-[90%] md:w-1/2 mx-auto flex flex-col">
                <div className="mb-10">
                    <Label htmlFor="email" className="text-white text-lg md:text-xl">Email</Label>
                    <Input type="email" id="email" className="bg-white/20 outline-none border-none active:border-none active:outline-none" />
                </div>
                <div>
                    <Label htmlFor="senha" className="text-white text-lg md:text-xl">Senha</Label>
                    <Input type="password" id="senha" className="bg-white/20 outline-none border-none active:border-none active:outline-none" />
                </div>
                <Link href={"/barber"} className="mt-3 text-[#464646] hover:text-[#646464] transition-colors duration-200">Entrar como Barbeiro</Link>
                <div className="mx-auto">
                    <Button type="submit" variant={"ghost"} size={"lg"} className="text-white text-lg md:text-xl mt-5">
                        Entrar
                    </Button>
                </div>
            </form>
        </div>
    );
};