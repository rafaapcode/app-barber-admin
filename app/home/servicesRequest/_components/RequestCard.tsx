import Image from "next/image";
import ScheduleButton from "./ScheduleButton";
import RefuseButton from "./RefuseButton";

export default function RequestCard() {
    return (
        <div className="bg-neutral-800 rounded-md h-[200px] md:h-[109px] p-5 flex flex-col gap-7 md:gap-0 md:flex-row md:justify-between md:items-center">
            <div className="flex gap-4 mx-auto md:mx-0">
                <div className="relative w-20 h-20 xl:w-24 xl:h-24">
                    <Image fill src={"/client.jpg"} alt="Client image" className="object-cover rounded-full" />
                </div>
                <div className="flex flex-col justify-center items-start gap-4">
                    <h2 className="text-base md:text-xl text-neutral-300">Nome do Cliente</h2>
                    <p className="text-xs md:text-sm text-neutral-500">15/08/2024 as 9h - CABELO</p>
                </div>
            </div>
            <div className="flex justify-between items-center w-full md:w-1/3">
                <ScheduleButton />
                <RefuseButton />
            </div>
        </div>
    )
};