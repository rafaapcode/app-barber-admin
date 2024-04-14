import { Button } from "@/components/ui/button";
import Image from "next/image";

interface BarbersCardProps {
    barberName: string;
    barberId: string;
}

export default function BarbersCard({ barberId, barberName}: BarbersCardProps) {
    return (
        <div className="bg-neutral-800 w-full flex justify-between items-center p-3 rounded-lg">
            <div className="flex gap-5 md:gap-16">
                <div className="relative w-14 h-14 md:w-24 md:h-24">
                    <Image fill src="/barber.jpg" alt="barber photo" className="object-cover rounded-full" />
                </div>
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-base md:text-2xl">{barberName}</h2>
                </div>
            </div>
            <div className="mr-2 md:mr-10">
                <Button variant={"ghost"}>EXCLUIR</Button>
            </div>
        </div>
    )
};