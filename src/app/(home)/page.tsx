import Image from "next/image";
import PizzaBanner from "../../app/../../assets/heor.png";
import { Button } from "@/components/ui/button";
import ProductCard from "./components/ProductCard";

import Tab from "./components/Tab";
import { Suspense } from "react";
import { CardSkeleton } from "./components/CardSkeleton";

export default function Home() {
    return (
        <main className="">
            <div className="flex container m-auto justify-between items-center h-[500] ">
                <section className=" flex flex-col justify-center ">
                    <h1 className="text-7xl font-black font-sans ">
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
                    <Image src={PizzaBanner} height={400} width={400} alt="Pizza_banner" />
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
                        <ProductCard />
                    </Suspense>
                </div>
            </section>
        </main>
    );
}
