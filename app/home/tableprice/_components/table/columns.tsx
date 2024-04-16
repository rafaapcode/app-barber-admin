"use client";

import { ColumnDef } from "@tanstack/react-table";

export type PriceTable = {
    id: string;
    price: number;
    service: string;
};

export const columns: ColumnDef<PriceTable>[] = [
    {
        accessorKey: "price",
        header: "Preço"
    },
    {
        accessorKey: "service",
        header: "Serviço"
    },
]