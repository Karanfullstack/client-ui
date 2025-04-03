import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { DollarSign, CreditCard } from "lucide-react"; // Import PayPal icon
import React from "react";

export default function Payment() {
    return (
        <div>
            <h3 className="my-3 text-sm font-medium">Choose Payment</h3>
            <RadioGroup defaultValue="google" className="grid mt-3 grid-cols-3 gap-3">
                <div className="space-y-2">
                    <RadioGroupItem className="peer sr-only" value="paypal" id="paypal" />
                    <Label
                        htmlFor="paypal"
                        className="flex h-[70px]  p-2 flex-col items-center justify-between rounded-md border-2 bg-white  hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                        <DollarSign size={24} className="text-blue-600" /> {/* PayPal Icon */}
                        Paypal
                    </Label>
                </div>
                <div className="space-y-2">
                    <RadioGroupItem className="peer sr-only" value="google" id="google" />
                    <Label
                        htmlFor="google"
                        className="flex h-[70px]  p-2 flex-col items-center justify-between rounded-md border-2 bg-white  hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                        <CreditCard size={24} className="text-blue-600" /> {/* PayPal Icon */}
                        Google
                    </Label>
                </div>
            </RadioGroup>
        </div>
    );
}
