"use client";

import { z } from "zod";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addAddress } from "@/http";
import { useState } from "react";

const formSchema = z.object({
    text: z.string().min(2, {
        message: "Please enter your address",
    }),
});
type formType = z.infer<typeof formSchema>;
export default function AddAdress({ customerId }: { customerId: string }) {
    const [isOpen, setIsOpen] = useState(false);
    const form = useForm<formType>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            text: "",
        },
    });
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationKey: ["address", customerId],
        mutationFn: async (text: string) => await addAddress(customerId, text),
        onSuccess: () => {
            form.reset();
            queryClient.invalidateQueries({ queryKey: ["customer"] });
        },
    });

    const addressHandle = async (data: formType) => {
        const result = await mutation.mutateAsync(data.text);
        setIsOpen(false);
        console.log(result);
    };
    return (
        <div className="w-full flex justify-end">
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger asChild>
                    <Button variant="link" className="text-primary">
                        + Add your new addreess
                    </Button>
                </DialogTrigger>
                <DialogContent className=" w-[350px] bg-accent">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(addressHandle)}>
                            <DialogHeader>
                                <DialogTitle>Address</DialogTitle>
                                <DialogDescription className="mb-2">
                                    We can save your address for the next time.
                                </DialogDescription>
                            </DialogHeader>
                            <div className="flex items-center space-x-2">
                                <div className="grid flex-1 gap-3">
                                    <FormField
                                        name="text"
                                        control={form.control}
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Textarea {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </div>
                            <DialogFooter>
                                <div className="flex justify-end mt-3">
                                    <Button type="submit">Save</Button>
                                </div>
                            </DialogFooter>
                        </form>
                    </Form>
                </DialogContent>
            </Dialog>
        </div>
    );
}
