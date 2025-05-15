import { FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { DollarSign, CreditCard } from "lucide-react"; // Import PayPal icon
import React from "react";
import { Control } from "react-hook-form";
import { FormSchema } from "./Form";

export default function Payment({ control }: { control: Control<FormSchema> }) {
    return (
        <div>
            <h3 className="my-3 text-sm font-medium">Choose Payment</h3>
            <FormField
                name="paymentMode"
                control={control}
                render={({ field }) => {
                    return (
                        <FormItem>
                            <FormControl>
                                <RadioGroup
                                    onChange={field.onChange}
                                    className="grid mt-3 grid-cols-3 gap-3"
                                >
                                    <div className="space-y-2">
                                        <FormControl>
                                            <RadioGroupItem
                                                className="peer sr-only"
                                                value="cash"
                                                id="cash"
                                            />
                                        </FormControl>
                                        <Label
                                            htmlFor="cash"
                                            className="flex h-[70px]  p-2 flex-col items-center justify-between rounded-md border-2 bg-white  hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                        >
                                            <DollarSign size={24} className="text-blue-600" />{" "}
                                            {/* PayPal Icon */}
                                            Cash
                                        </Label>
                                    </div>
                                    <div className="space-y-2">
                                        <FormControl>
                                            <RadioGroupItem
                                                className="peer sr-only"
                                                value="card"
                                                id="card"
                                            />
                                        </FormControl>
                                        <Label
                                            htmlFor="card"
                                            className="flex h-[70px]  p-2 flex-col items-center justify-between rounded-md border-2 bg-white  hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                        >
                                            <CreditCard size={24} className="text-blue-600" />{" "}
                                            {/* PayPal Icon */}
                                            Card
                                        </Label>
                                    </div>
                                </RadioGroup>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    );
                }}
            />
        </div>
    );
}
