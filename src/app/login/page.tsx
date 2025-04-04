"use client";
import { Button } from "@/components/ui/button";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const loginSchema = z.object({
    email: z.string().email({ message: "Please enter a valid email" }),
    password: z.string(),
});

type LoginType = z.infer<typeof loginSchema>;

export default function LoginPage() {
    const form = useForm<LoginType>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = (data: LoginType) => {
        console.log(data);
    };
    return (
        <main className="bg-gray-50 h-screen w-screen flex items-baseline  justify-center">
            <div className="w-full max-w-[400px] h-full max-h-[400px] mt-20  flex items-center justify-center bg-white rounded-lg ">
                <div className="flex w-full space-y-1.5 justify-center items-center  flex-col">
                    <div className="flex flex-col justify-center gap-2 items-center ">
                        <h1 className="text-2xl font-medium">Login</h1>
                        <p className="text-sm text-gray-400">
                            You need to login to access the website.
                        </p>
                    </div>
                    {/* Form */}
                    <div className="w-full max-w-[300px]">
                        <FormProvider {...form}>
                            <form className="space-y-3 mt-2" onSubmit={form.handleSubmit(onSubmit)}>
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <>
                                            <FormItem>
                                                <FormLabel>Email</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        {...field}
                                                        placeholder="Enter your email"
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        </>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <>
                                            <FormItem>
                                                <FormLabel>Password</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="password"
                                                        {...field}
                                                        placeholder="Enter your Password"
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        </>
                                    )}
                                />
                                <Button type="submit">Login</Button>
                            </form>
                        </FormProvider>
                    </div>
                </div>
            </div>
        </main>
    );
}
