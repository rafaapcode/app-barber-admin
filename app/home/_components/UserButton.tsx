"use client";

import { useStore } from "@/app/store";
import SignOutButton from "@/components/SignOutButton";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { LogOut, Settings, UsersRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function UserButton() {
    const info = useStore((state) => state.fillInfo);
    console.log(typeof info);
    return (
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button className="p-2 bg-white/20 rounded-full border border-white/30">
                        <div className="relative w-6 h-6 rounded-full">
                            <Image fill src="/user.svg" alt="Logo user" />
                        </div>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-neutral-800 text-white mt-2">
                    <DropdownMenuLabel>Minha conta</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <div className="flex gap-2 items-center justify-center">
                            <div className="relative">
                                <div className={cn("absolute w-1.5 h-1.5 bg-red-600 rounded-full", info === "true" && "hidden")}></div>
                                <Settings className="w-4 h-4" />
                            </div>
                            <Link href={"/home/settings"} className="text-white hover:text-gray-800">Configurações</Link>
                        </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <div className="flex gap-2 items-center justify-center">
                            <UsersRound className="w-4 h-4" />
                            <Link href={"/home/barbers"} className="text-white hover:text-gray-800">Barbeiros</Link>
                        </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <div className="flex gap-2 items-center justify-center">
                            <LogOut className="w-4 h-4" />
                            <SignOutButton />
                        </div>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
};