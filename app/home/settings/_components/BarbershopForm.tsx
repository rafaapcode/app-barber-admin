"use client";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SettingsSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderCircle } from "lucide-react";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import * as z from 'zod';

export default function BarberShopForm() {
    const [isPending, startTransition] = useTransition();
    const form = useForm<z.infer<typeof SettingsSchema>>({
        resolver: zodResolver(SettingsSchema),
        defaultValues: {
            cep: "",
            districtName: "",
            nomeBarbearia: "",
            num: "0",
            openWeekend: "",
            streetName: "",
            workingPeriod: ""
        }, 
        mode: "onChange"
    });

    const onSubmit = (values: z.infer<typeof SettingsSchema>) => {
        startTransition(() => {
            console.log(values);
        });
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-[90%] mt-14 grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="mb-5 md:col-span-2">
                    <FormField control={form.control} name="nomeBarbearia" render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-white text-lg md:text-xl">Nome da barberia</FormLabel>
                            <FormControl>
                                <Input {...field} placeholder="Nome da barbearia" type="text" className="bg-white/20 border-none outline-none text-white" />
                            </FormControl>
                            <FormMessage className="text-red-500" />
                        </FormItem>
                    )} />
                </div>
                <div className="mb-5">
                    <FormField control={form.control} name="streetName" render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-white text-lg md:text-xl">Nome da rua</FormLabel>
                            <FormControl>
                                <Input {...field} placeholder="Nome da rua" type="text" className="bg-white/20 border-none outline-none text-white" />
                            </FormControl>
                            <FormMessage className="text-red-500" />
                        </FormItem>
                    )} />
                </div>
                <div className="mb-5">
                    <FormField control={form.control} name="cep" render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-white text-lg md:text-xl">CEP</FormLabel>
                            <FormControl>
                                <Input {...field} placeholder="CEP" type="text" className="bg-white/20 border-none outline-none text-white" />
                            </FormControl>
                            <FormMessage className="text-red-500" />
                        </FormItem>
                    )} />
                </div>
                <div className="mb-5">
                    <FormField control={form.control} name="num" render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-white text-lg md:text-xl">NÙMERO</FormLabel>
                            <FormControl>
                                <Input {...field} placeholder="CEP" type="number" className="bg-white/20 border-none outline-none text-white" />
                            </FormControl>
                            <FormMessage className="text-red-500" />
                        </FormItem>
                    )} />
                </div>
                <div className="mb-5">
                    <FormField control={form.control} name="districtName" render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-white text-lg md:text-xl">Nome Do bairro</FormLabel>
                            <FormControl>
                                <Input {...field} placeholder="Nome do bairro" type="text" className="bg-white/20 border-none outline-none text-white" />
                            </FormControl>
                            <FormMessage className="text-red-500" />
                        </FormItem>
                    )} />
                </div>
                <div className="mb-5 md:col-span-2">
                    <FormField control={form.control} name="workingPeriod" render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-white text-lg md:text-xl">Horário de Funcionamento</FormLabel>
                            <p className="text-neutral-300 text-sm">Siga o exemplo a seguir: <span className="font-bold text-neutral-500">hh:mm - hh:mm</span></p>
                            <FormControl>
                                <Input {...field} placeholder="Exemplo:  08:30 - 19:00" type="text" className="bg-white/20 border-none outline-none text-white" />
                            </FormControl>
                            <FormMessage className="text-red-500" />
                        </FormItem>
                    )} />
                </div>
                <div className="mb-5">
                    <FormField control={form.control} name="openWeekend" render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-white text-lg md:text-lg">Abre aos finais de semana e feriado</FormLabel>
                            <p className="text-neutral-300 text-sm">Coloque S para sim e N para não</p>
                            <FormControl>
                                <Input {...field} placeholder="Exemplo:  S" type="text" className="bg-white/20 border-none outline-none text-white" />
                            </FormControl>
                            <FormMessage className="text-red-500" />
                        </FormItem>
                    )} />
                </div>
                <div className="mb-5 md:col-span-2">
                    <h3>Upload das imagens da estrutura de sua barbearia</h3>
                    <div className="w-full h-[200px] bg-neutral-300"></div>
                </div>
                <div className="mb-5">
                    <h3>Banner da barbearia</h3>
                    <div className="w-full h-[200px] bg-neutral-300"></div>
                </div>
                <div className="mb-5 md:col-span-2">
                    <h3>Upload das fotos dos barbeiros</h3>
                    <div className="w-full h-[200px] bg-neutral-300"></div>
                </div>
                <div className="mb-5">
                    <h3>Logo da barbearia</h3>
                    <div className="w-full h-[200px] bg-neutral-300"></div>
                </div>
                <Button disabled={isPending} variant={'default'} type="submit" className="mb-5 text-2xl w-fit p-6">
                    {isPending ? <LoaderCircle className="w-4 h-4 animate-spin" /> : "SALVAR"}
                </Button>
            </form>
        </Form>
    )
};