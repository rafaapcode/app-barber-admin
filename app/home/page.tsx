import ScheduleCard from "./_components/ScheduleCard";

export default function Home() {
    return (
        <div className="text-white container mx-auto">
            <div className="mt-12">
                <h1 className="text-2xl md:text-4xl">AGENDAMENTOS DO DIA</h1>
            </div>
            <div className="h-[470px] md:h-[900px] lg:h-[1100px]  xl:h-[650px] mt-5 md:mt-14 overflow-y-auto scroll-smooth">
                <ScheduleCard clientName="Nome do Cliente" scheduleInfo="09/09/2024 as 09:00"/>
            </div>
        </div>
    )
};