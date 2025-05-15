"use client";
import { useQuery } from "@tanstack/react-query";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Form } from "@/components/ui/form";
import React from "react";
import Address from "./Address";
import OrderSummary from "./OrderSummary";
import Payment from "./Payment";
import { getCustomer } from "@/http";
import { CustomerI } from "@/types";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
    address: z
        .string({ required_error: "Address is required" })
        .min(2, { message: "Minimum 2 characters" }),
    paymentMode: z.enum(["card", "cash"], { required_error: "Payment mode is required" }),
    comment: z.string().optional(),
});

export type FormSchema = z.infer<typeof formSchema>;

export default function FormCheckout() {
    const { data } = useQuery<CustomerI>({
        queryKey: ["customer"],
        queryFn: getCustomer,
    });
    const form = useForm<FormSchema>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = (data: FormSchema) => {
        console.log(data);
    };

    return (
        <div className="bg-[#f9f9f7] w-full flex flex-col h-[calc(100vh-64px)]">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-full h-full">
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

                                {data?.customer && (
                                    <Address
                                        control={form.control}
                                        customer={{ customer: data?.customer }}
                                    />
                                )}
                                <Payment control={form.control} />
                                <div className="mt-5">
                                    <Textarea placeholder="Type your message here." />
                                </div>
                            </section>
                            <section className="w-2/5  h-full    shadow-sm rounded-md border-0 bg-white p-4 ">
                                <OrderSummary />
                            </section>
                        </main>
                    </div>
                </form>
            </Form>
        </div>
    );
}
