import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Tenant, ResponseType } from "@/types";
import { Phone } from "lucide-react";
import Link from "next/link";
import CartCount from "./CartCount";

export default async function Navbar() {
    const response = await fetch(`${process.env.BACKEND_URL}/api/auth/tenants`, {
        next: {
            revalidate: 60 * 60, // 1 hour
        },
    });
    if (!response.ok) throw new Error("Failed to fetch tenants");
    const { data: restaurants }: ResponseType<Tenant> = await response.json();

    return (
        <header className=" ">
            <nav className=" py-4 container m-auto flex items-center justify-between ">
                {/* right side secion */}
                <section className="flex space-x-4">
                    <span className="text-2xl font-bold">🍕 Pizza</span>
                    {/* select restaurant options */}
                    <Select>
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
                </section>
                {/* left side section */}
                <section className="text-sm">
                    <div className="flex items-center gap-3 font-medium">
                        <div>
                            <ul className="flex gap-3">
                                <li>
                                    <Link href={"/"}>Menu</Link>
                                </li>
                                <li>
                                    <Link href={"/"}>Orders</Link>
                                </li>
                            </ul>
                        </div>
                        {/* cart count place here */}
                        <CartCount />
                        <div className="flex justify-center items-center font-medium gap-1">
                            <Phone />
                            <span>+48 129212139</span>
                        </div>
                        <div>
                            <Button className=" hover:cursor-pointer">Logout</Button>
                        </div>
                    </div>
                </section>
            </nav>
        </header>
    );
}
