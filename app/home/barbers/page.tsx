import BarbersCard from "../_components/BarbersCard";
import RegisterBarber from "./_components/RegisterBarber";

export default function Barbers() {
    return (
        <section className="text-white container mx-auto">
            <RegisterBarber />
            <div className="mt-12">
                <BarbersCard barberId="ijbibc2198" barberName="Barber Name"/>
            </div>
        </section>
    )
};