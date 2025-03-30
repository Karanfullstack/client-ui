"use client";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Tenant } from "@/types";
import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
export default function SelectRestaurant({ restaurants }: { restaurants: Tenant[] | undefined }) {
    const searchParams = useSearchParams();
    const router = useRouter();
    const filter = (filter: string) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set("restaurant", filter);
        router.push(`?${params.toString()}`, { scroll: false });
    };
    return (
        <Select onValueChange={(data) => filter(data)}>
            <SelectTrigger className="w-[180px] ">
                <SelectValue placeholder="Select a Restaurant" />
            </SelectTrigger>
            <SelectContent className="">
                <SelectGroup className=" ">
                    <SelectLabel>Restaurants</SelectLabel>
                    {restaurants?.map((tenant) => (
                        <SelectItem key={tenant.id} value={String(tenant.id)}>
                            {tenant.name}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}
