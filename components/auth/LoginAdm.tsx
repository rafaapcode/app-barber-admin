"use client";
import { LoginSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";
import { loginAdm } from "@/actions/loginAdm";
import { useTransition } from "react";
import { toast } from "sonner";
import { LoaderCircle } from "lucide-react";
import { useStore } from "@/app/store";
import { useRouter } from "next/navigation";

export default function LoginAdm() {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const logInUser = useStore((state: any) => state.logIn);
    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    });
    const onSubmit = (values: z.infer<typeof LoginSchema>) => {
        startTransition(() => {
            loginAdm(values).then((data) => {
                if (!data.status) {
                    toast.error(data.message);
                } else {
                    toast.success(data.message);
                    logInUser(data.data);
                    router.push("/home");
                }
            }).catch((error) => {
                toast.error("Tente novamente mais tarde !!");
            })
        });
    };

    return (
        <div className="container border flex flex-col gap-y-16 border-slate-700 rounded-md p-5">
            <div className="mx-auto relative w-36 h-28">
                <Image fill alt="icon" src={"/navalha-icon.svg"} />
            </div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} method="post" className="w-[90%] md:w-1/2 mx-auto flex flex-col">
                    <div className="mb-10">
                        <FormField control={form.control} name="email" render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-white text-lg md:text-xl">Email</FormLabel>
                                <FormControl>
                                    <Input disabled={isPending} {...field} placeholder="exemplo@email.com" type="email" className="bg-white/20 border-none outline-none text-white" />
                                </FormControl>
                                <FormMessage className="text-red-500" />
                            </FormItem>
                        )} />
                    </div>
                    <div>
                        <FormField control={form.control} name="password" render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-white text-lg md:text-xl">Senha</FormLabel>
                                <FormControl>
                                    <Input disabled={isPending} {...field} placeholder="*******" type="password" className="bg-white/20 border-none outline-none text-white" />
                                </FormControl>
                                <FormMessage className="text-red-500" />
                            </FormItem>
                        )} />
                    </div>
                    <div className="w-full flex justify-between items-center">
                        <Link href="/auth" className="text-[#464646] mt-2 mb-5 hover:text-[#646464] transition-colors duration-200">Entrar como barbeiro</Link>
                        <Link href="/auth/register" className="text-[#b9b9b9] mt-2 mb-5 hover:text-[#646464] transition-colors duration-200">Registre a sua <span className="font-bold underline">BARBEARIA</span></Link>
                    </div>
                    <Button disabled={isPending} className="text-white w-fit py-2 px-3 mx-auto mt-7" variant={"ghost"} type="submit">
                        {isPending ? <LoaderCircle className="w-4 h-4 animate-spin" /> : "ENTRAR"}
                    </Button>
                </form>
            </Form>
        </div>
    );
};