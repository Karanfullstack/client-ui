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
import { Phone, ShoppingBasket } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
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
                                <SelectLabel>Fruits</SelectLabel>
                                <SelectItem value="apple">Apple</SelectItem>
                                <SelectItem value="banana">Banana</SelectItem>
                                <SelectItem value="blueberry">Blueberry</SelectItem>
                                <SelectItem value="grapes">Grapes</SelectItem>
                                <SelectItem value="pineapple">Pineapple</SelectItem>
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
                        <div className=" relative mr-4">
                            <Link href={"/"}>
                                <ShoppingBasket />
                            </Link>
                            <span className="w-6 h-6 font-medium absolute flex -top-4 -right-5 text-white  items-center  justify-center bg-orange-500 rounded-full">
                                8
                            </span>
                        </div>
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
