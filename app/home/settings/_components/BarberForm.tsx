"use client";

"use client";

import { useStore } from "@/app/store";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SettingsBarberSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderCircle } from "lucide-react";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import * as z from 'zod';

export default function BarberForm() {
    const { setFillInfo, fillInfo } = useStore((state) => ({ setFillInfo: state.setFillInfo, fillInfo: state.fillInfo }));
    const [isPending, startTransition] = useTransition();
    const form = useForm<z.infer<typeof SettingsBarberSchema>>({
        resolver: zodResolver(SettingsBarberSchema),
        defaultValues: {
            valorBarba: "",
            valorBarbaeCabelo: "",
            valorCabelo: ""
        },
        mode: "onChange"
    });

    const onSubmit = (values: z.infer<typeof SettingsBarberSchema>) => {
        startTransition(() => {
            const newValues = { valorBarba: Number(values.valorBarba), valorCabelo: Number(values.valorCabelo), valorBarbaeCabelo: Number(values.valorBarbaeCabelo) };
            setFillInfo("true");
        });
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-[90%] mt-14 grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="mb-5">
                    <FormField control={form.control} name="valorBarba" render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-white text-lg md:text-xl">Valor do corte de cabelo</FormLabel>
                            <FormControl>
                                <Input {...field} placeholder="Exemplo: 55" type="text" className="bg-white/20 border-none outline-none text-white" />
                            </FormControl>
                            <FormMessage className="text-red-500" />
                        </FormItem>
                    )} />
                </div>
                <div className="mb-5">
                    <FormField control={form.control} name="valorBarbaeCabelo" render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-white text-lg md:text-xl">valor do corte de Barba e Cabelo</FormLabel>
                            <FormControl>
                                <Input {...field} placeholder="Exemplo: 50.00" type="text" className="bg-white/20 border-none outline-none text-white" />
                            </FormControl>
                            <FormMessage className="text-red-500" />
                        </FormItem>
                    )} />
                </div>
                <div className="mb-5">
                    <FormField control={form.control} name="valorCabelo" render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-white text-lg md:text-xl">Valor do corte de cabelo</FormLabel>
                            <FormControl>
                                <Input {...field} placeholder="Exemplo: 70.0" type="text" className="bg-white/20 border-none outline-none text-white" />
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
                    {isPending ? <LoaderCircle className="w-4 h-4 animate-spin" /> : (fillInfo ? "ATUALIZAR" : "SALVAR")}
                </Button>
            </form>
        </Form>
    )
};