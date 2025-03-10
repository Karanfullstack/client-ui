import Image from "next/image";
import PizzaBanner from "../../app/../../assets/heor.png";
import { Button } from "@/components/ui/button";

export default function Home() {
    return (
        <main className="flex container m-auto justify-between items-center h-[500] ">
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
        </main>
    );
}
