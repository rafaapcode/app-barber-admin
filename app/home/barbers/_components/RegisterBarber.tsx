"use client";
import { registerBarber } from "@/actions/registerBarber";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerHeader, DrawerTrigger } from "@/components/ui/drawer";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RegisterSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus } from "lucide-react";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

export default function RegisterBarber() {
    const [isPending, startTransition] = useTransition();
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
            registerBarber(values)
                .then(data => {

                })
                .catch(error => {
                    console.log(error)
                })
        });
    };

    return (
        <Drawer>
            <DrawerTrigger>
                <div className="mt-5 flex gap-2 items-center hover:bg-white hover:text-black p-2 rounded-md transition-colors duration-200">CADASTRAR <Plus className="w-4 h-4" /></div>
            </DrawerTrigger>
            <DrawerContent className="container bg-neutral-800 border-none">
                <div className="py-5">
                    <DrawerHeader>
                        <h3 className="text-center text-2xl font-semibold mt-5 text-white">Cadastre um Barbeiro</h3>
                    </DrawerHeader>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-5 w-[90%] md:w-1/2 mx-auto flex flex-col">
                            <div className="mb-10">
                                <FormField control={form.control} name="email" render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-white text-lg md:text-xl">Email</FormLabel>
                                        <FormControl>
                                            <Input {...field} placeholder="eamil@example.com" type="email" className="bg-white/20 border-none outline-none text-white" />
                                        </FormControl>
                                        <FormMessage className="text-red-500" />
                                    </FormItem>
                                )} />
                            </div>
                            <div className="mb-10">
                                <FormField control={form.control} name="name" render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-white text-lg md:text-xl">Nome</FormLabel>
                                        <FormControl>
                                            <Input {...field} placeholder="Seu nome" type="text" className="bg-white/20 border-none outline-none text-white" />
                                        </FormControl>
                                        <FormMessage className="text-red-500" />
                                    </FormItem>
                                )} />
                            </div>
                            <div className="mb-10">
                                <FormField control={form.control} name="password" render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-white text-lg md:text-xl">Senha</FormLabel>
                                        <FormControl>
                                            <Input {...field} placeholder="********" type="password" className="bg-white/20 border-none outline-none text-white" />
                                        </FormControl>
                                        <FormMessage className="text-red-500" />
                                    </FormItem>
                                )} />
                            </div>
                            <Button className="text-white w-fit py-2 px-3 mx-auto mt-7" variant={"ghost"} type="submit">
                                REGISTRAR
                            </Button>
                        </form>
                    </Form>
                </div>
            </DrawerContent>
        </Drawer>
    )
};