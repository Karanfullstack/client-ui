"use client";
import { Button } from "@/components/ui/button";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import login, { ResponseTypeAction } from "../action/login";
import { useState } from "react";
import { LoaderIcon } from "lucide-react";

// TODO: SHOW ERROR MESSAGE
const loginSchema = z.object({
    email: z.string().email({ message: "Please enter a valid email" }),
    password: z.string().min(4, { message: "Password must be at least 4 characters long" }),
});

type LoginType = z.infer<typeof loginSchema>;

export default function LoginPage() {
    const [status, setStatus] = useState({
        loading: false,
        error: "",
        isAuth: false,
    });

    const form = useForm<LoginType>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });
    // if (status.isAuth) {
    //     window.location.replace("/");
    //     return null;
    // }

    const onSubmit = async (data: LoginType) => {
        setStatus((prev) => ({ ...prev, loading: true }));
        try {
            const payload = new FormData();
            Object.entries(data).forEach(([Key, value]) => {
                payload.append(Key, value);
            });
            const response: Partial<ResponseTypeAction> = await login(payload);
            setStatus((prev) => ({
                ...prev,
                loading: false,
                isAuth: response.isAuthenticated as boolean,
                error: response.error ?? "",
            }));
        } catch (error) {
            console.log("error...", error);
        } finally {
            setStatus((prev) => ({ ...prev, loading: false }));
        }
    };
    return (
        <main className="bg-gray-50 h-screen w-screen flex items-baseline  justify-center">
            <div className="w-full max-w-[400px] h-full max-h-[400px] mt-20  flex items-center justify-center bg-white rounded-lg ">
                <div className="flex w-full space-y-1.5 justify-center items-center  flex-col">
                    <div className="flex flex-col justify-center gap-2 items-center ">
                        <h1 className="text-2xl font-medium">🍕 Login</h1>
                        <p className="text-sm text-gray-400">
                            {status.error ? (
                                <span className="text-red-300">{status.error}</span>
                            ) : (
                                "You need to login to access the website."
                            )}
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
                                <div className="w-full">
                                    <Button
                                        className="w-full"
                                        disabled={status.loading}
                                        type="submit"
                                    >
                                        {status.loading && <LoaderIcon className=" animate-spin" />}
                                        Login
                                    </Button>
                                </div>
                            </form>
                        </FormProvider>
                    </div>
                </div>
            </div>
        </main>
    );
}
