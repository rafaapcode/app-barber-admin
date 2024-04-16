"use client";
import { useStore } from "@/app/store";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface ScheduleCardProps {
    clientPhotoUrl?: string | null;
    clientName: string;
    scheduleInfo: string;
    barberPhotoUrl?: string | null;
}

export default function ScheduleCard({ barberPhotoUrl, clientName, clientPhotoUrl, scheduleInfo }: ScheduleCardProps) {
    const role = useStore((state) => state.user?.role);
    return (
        <div className="bg-neutral-800 w-full flex justify-between items-center p-3 rounded-lg">
            <div className="flex gap-2">
                <div className="relative w-16 h-16 md:w-24 md:h-24">
                    <Image fill src={!clientPhotoUrl ? "/client.jpg" : clientPhotoUrl} alt="client photo" className="object-cover rounded-md" />
                </div>
                <div className="flex flex-col gap-2">
                    <h2 className="text-base md:text-xl">{clientName}</h2>
                    <p className="text-xs md:text-sm text-neutral-500 font-semibold">{scheduleInfo}</p>
                </div>
            </div>
            {role === "Admin" ? (
                <div className="relative w-14 h-14 md:w-24 md:h-24">
                    <Image fill src={!barberPhotoUrl ? "/barber.jpg" : barberPhotoUrl} alt="client photo" className="object-cover rounded-full" />
                </div>
            ) : (
                <div>
                    <div className="hidden md:block animate-pulse cursor-text mr-5 bg-green-700 p-3 rounded-lg text-green-300 font-bold">EM ATENDIMENTO</div>
                    <div className="md:hidden relative w-10 h-10 mr-3 animate-bounce">
                        <Image fill src={"/inService.png"} alt="In service logo" className="object-cover rounded-full" />
                    </div>
                </div>
            )}
        </div>
    )
};