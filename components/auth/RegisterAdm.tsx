"use client";

import { RegisterSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form, FormLabel, FormControl, FormField, FormItem, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { useTransition } from "react";
import { Button } from "../ui/button";
import { registerAdm } from "@/actions/registerAdm";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { LoaderCircle } from "lucide-react";

export default function RegisterAdm() {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();

    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            email: "",
            name: "",
            password: ""
        }
    });

    const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
        startTransition(() => {
            registerAdm(values)
                .then((data) => {
                    if (!data.status) {
                        toast.error(data.message);
                    } else {
                        toast.success(data.message);
                        router.push("/");
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
                        <FormField control={form.control} name="name" render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-white text-lg md:text-xl">Nome</FormLabel>
                                <FormControl>
                                    <Input disabled={isPending} {...field} placeholder="Seu nome" type="text" className="bg-white/20 border-none outline-none text-white" />
                                </FormControl>
                                <FormMessage className="text-red-500" />
                            </FormItem>
                        )} />
                    </div>
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
                                    <Input disabled={isPending} {...field} placeholder="************" type="password" className="bg-white/20 border-none outline-none text-white" />
                                </FormControl>
                                <FormMessage className="text-red-500" />
                            </FormItem>
                        )} />
                    </div>
                    <Button disabled={isPending} className="text-white w-fit py-2 px-3 mx-auto mt-7" variant={"ghost"} type="submit">
                        {isPending ? <LoaderCircle className="w-4 h-4 animate-spin" /> : "ENTRAR"}
                    </Button>
                </form>
            </Form>
        </div>
    );
};