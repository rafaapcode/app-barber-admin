import Header from "@/components/Header/Header";
import SessionVerify from "@/utils/verifiySession";

export default function LayoutPage({ children }: { children: React.ReactNode }) {
    return (
        <main className="relative w-full h-full">
            <Header />
            <SessionVerify />
            {children}
        </main>
    )
};