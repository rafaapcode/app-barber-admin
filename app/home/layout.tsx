import Header from "@/components/Header/Header";
import SessionVerify from "@/utils/verifiySession";

export default function LayoutPage({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative w-full h-full">
            <Header />
            <SessionVerify />
            {children}
        </div>
    )
};