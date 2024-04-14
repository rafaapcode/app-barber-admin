import BarberShopForm from "./_components/BarbershopForm";

export default function Settings() {
    return (
        <section className="container mx-auto text-white">
            <div className="mt-12">
                <h2 className="text-2xl md:text-4xl">Configurações da Barbearia</h2>
                <span className="text-xs text-neutral-600">Preencha todos os campos corretamente para que sua barbearia fique visível para os usuários !</span>
            </div>
            <BarberShopForm />
        </section>
    )
};