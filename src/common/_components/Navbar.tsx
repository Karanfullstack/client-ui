import { Button } from "@/components/ui/button";
import { Tenant, ResponseType } from "@/types";
import { Phone } from "lucide-react";
import Link from "next/link";
import CartSSR from "./CartSSR";
import SelectRestaurant from "./SelectRestaurant";

export default async function Navbar() {
    const response = await fetch(`${process.env.BACKEND_URL}/api/auth/tenants`, {
        next: {
            revalidate: 60 * 60, // 1 hour
        },
    });
    if (!response.ok) throw new Error("Failed to fetch tenants");
    const { data: restaurants }: ResponseType<Tenant> = await response.json();

    return (
        <header className=" h-16 ">
            <nav className=" py-4 container m-auto flex items-center justify-between ">
                {/* right side section */}
                <section className="flex space-x-4">
                    <span className="text-2xl font-bold">🍕 Pizza</span>
                    {/* select restaurant options */}
                    <SelectRestaurant restaurants={restaurants} />
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
                        <CartSSR />
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
