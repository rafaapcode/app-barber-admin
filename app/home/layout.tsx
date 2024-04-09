import SessionVerify from "@/utils/verifiySession";

export default function HomeLayout({ children }: {children: React.ReactNode}) {
    return (
        <>
            <SessionVerify />
            {children}
        </>
    )
}