import Image from "next/image";
import PizzaBanner from "@/../assets/heor.png";
import { Button } from "@/components/ui/button";
import ProductCard from "./(home)/components/ProductCard";
import Tab from "./(home)/components/Tab";
import { Suspense } from "react";
import { CardSkeleton } from "./(home)/components/CardSkeleton";
import { Toaster } from "sonner";
export interface FilterProps {
    searchParams: {
        restaurant: string;
    };
}
export default function Home({ searchParams }: FilterProps) {
    return (
        <main className="">
            <Toaster expand={false} richColors position="top-center" />
            <div className="flex container m-auto justify-between items-center h-[400px] ">
                <section className=" flex flex-col justify-center ">
                    <h1 className="text-5xl font-black  font-sans ">
                        Super Delecious Pizza
                        <br />
                        <span className="text-primary">Only 50 mins</span>
                    </h1>
                    <p className="text-2xl italic max-w-lg mt-8 font-bold leading-snug">
                        Get a yummy pizza in 30 min
                    </p>
                    <div className="mt-7">
                        <Button className="font-bold text-lg rounded-full">Order now</Button>
                    </div>
                </section>
                <section className=" flex flex-col justify-center  items-center">
                    <Image src={PizzaBanner} height={320} width={320} alt="Pizza_banner" />
                </section>
            </div>
            {/* tabs */}
            <section className="  bg-[#f5f5f5]  ">
                <div className="container m-auto    ">
                    <section className="flex w-max-full ml-26  pl-3  items-center justify-between px-7 pt-7">
                        <Tab />
                    </section>

                    {/* product card render  */}
                    <Suspense fallback={<CardSkeleton />}>
                        <ProductCard searchParams={searchParams} />
                    </Suspense>
                </div>
            </section>
        </main>
    );
}
