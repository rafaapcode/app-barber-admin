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

export default function LoginAdm() {
    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            senha: ""
        }
    });

    const onSubmit = (values: z.infer<typeof LoginSchema>) => {
        startTransition(() => {
            loginAdm(values).then((data) => {
                if (data.error) {
                    toast.error(data.error);
                } else {
                    toast.success(data.succes);
                }
            });
        });
    };

    return (
        <div className="container border flex flex-col gap-y-16 border-slate-700 rounded-md p-5">
            <div className="mx-auto relative w-36 h-28">
                <Image fill alt="icon" src={"/navalha-icon.svg"} />
            </div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-[90%] md:w-1/2 mx-auto flex flex-col">
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
                        <FormField control={form.control} name="senha" render={({ field }) => (
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
                        ENTRAR
                    </Button>
                </form>
            </Form>
        </div>
    );
};