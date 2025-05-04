"use client";
import { useQuery } from "@tanstack/react-query";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import Address from "./Address";
import OrderSummary from "./OrderSummary";
import Payment from "./Payment";
import { getCustomer } from "@/http";
import { CustomerI } from "@/types";

export default function Form() {
    const { data } = useQuery<CustomerI>({
        queryKey: ["customer"],
        queryFn: getCustomer,
    });
    console.log(data);
    return (
        <div className="bg-[#f9f9f7] w-full flex flex-col h-[calc(100vh-64px)]">
            <div className="container  m-auto max-w-[850px] mt-10">
                <main className=" flex justify-between gap-4 ">
                    <section className="w-3/5 h-full  min-h-[500px]  shadow-sm rounded-md border-0 bg-white p-4 ">
                        {/* HEADING */}
                        <h1 className="text-xl font-bold">Customer information</h1>
                        {/* INPUTS */}
                        <div>
                            <div className="flex flex-col gap-1 mt-4">
                                <Label className="text-xs" htmlFor="email">
                                    First Name
                                </Label>
                                <Input
                                    disabled
                                    defaultValue={data?.customer.firstName}
                                    className="bg-accent  "
                                    type="email"
                                    id="email"
                                />
                            </div>
                            <div className="flex flex-col gap-1 mt-4">
                                <Label className="text-xs" htmlFor="email">
                                    Last Name
                                </Label>
                                <Input
                                    disabled
                                    defaultValue={data?.customer.lastName}
                                    className="bg-accent"
                                    type="email"
                                    id="email"
                                />
                            </div>
                            <div className="flex flex-col gap-1 mt-4">
                                <Label className="text-xs" htmlFor="email">
                                    Email
                                </Label>
                                <Input
                                    disabled
                                    defaultValue={data?.customer.email}
                                    className="bg-accent"
                                    type="email"
                                    id="email"
                                />
                            </div>
                        </div>

                        {data?.customer && <Address customer={data?.customer} />}
                        <Payment />
                        <div className="mt-5">
                            <Textarea placeholder="Type your message here." />
                        </div>
                    </section>
                    <section className="w-2/5  h-full    shadow-sm rounded-md border-0 bg-white p-4 ">
                        <OrderSummary />
                    </section>
                </main>
            </div>
        </div>
    );
}
