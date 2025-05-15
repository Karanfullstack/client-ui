import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CustomerI } from "@/types";
import { Trash2 } from "lucide-react";
import AddAdress from "./AddAdress";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeAddress } from "@/http";
import { FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Control } from "react-hook-form";
import { FormSchema } from "./Form";

type Props = {
    customer: CustomerI;
    control: Control<FormSchema>;
};
export default function Address({ customer, control }: Props) {
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationKey: ["customer", customer.customer._id],
        mutationFn: async (addressId: string) =>
            await removeAddress(customer.customer._id, addressId),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["customer"] });
        },
    });
    const handleRemoveAddress = async (addressId: string) => {
        await mutation.mutateAsync(addressId);
        console.log("success");
    };
    return (
        <section className="mt-5">
            {/* address title */}
            <div className="flex text-sm justify-between   items-center">
                <span>Address</span>
                <AddAdress customerId={customer.customer._id} />
            </div>
            <div className="mt-4 ">
                <FormField
                    control={control}
                    name="address"
                    render={({ field }) => {
                        return (
                            <FormItem>
                                <FormControl>
                                    <RadioGroup
                                        onChange={field.onChange}
                                        className="grid grid-cols-2 gap-6"
                                    >
                                        {customer.customer.addresses.map((address) => (
                                            <Card
                                                key={address._id}
                                                className="flex px-2 relative  items-center shadow-none rounded-sm space-x-2"
                                            >
                                                <Trash2
                                                    onClick={() => handleRemoveAddress(address._id)}
                                                    size={15}
                                                    className="absolute  right-0 top-1 "
                                                />
                                                <div className="flex items-start justify-start space-x-2">
                                                    <FormControl>
                                                        <RadioGroupItem
                                                            value={address.text}
                                                            id={address._id}
                                                        />
                                                    </FormControl>
                                                    <Label htmlFor="r2">{address.text}</Label>
                                                </div>
                                            </Card>
                                        ))}
                                    </RadioGroup>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        );
                    }}
                />
            </div>
        </section>
    );
}
