import Image from "next/image";
import Link from "next/link";
import Menu from "./Menu";
import UserButton from "@/app/home/_components/UserButton";

export default function Header() {
    return (
        <header className="w-full">
            <div className="container mx-auto flex items-center justify-between p-5 border-b border-[#282828]">
                <div className="relative w-11 h-7 md:w-20 md:h-14">
                    <Link href="/home">
                        <Image fill src={"/navalha-icon.svg"} alt="logo" className="object-cover" />
                    </Link>
                </div>
                <div className="flex md:items-center gap-x-5">
                    <UserButton />
                </div>
            </div>
        </header>
    )
};