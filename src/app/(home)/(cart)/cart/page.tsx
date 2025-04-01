import { Card } from "@/components/ui/card";
import Image from "next/image";
import logo from "@/../assets/Margherita-Traditional 1.png";
import { Button } from "@/components/ui/button";

export default function CartPage() {
    return (
        <div className="bg-[#f9f9f7] w-full flex flex-col h-[calc(100vh-64px)]">
            <div className="container max-w-[800px]  mt-6 p-3 m-auto">
                <h2 className=" font-semibold text-2xl">Shopping Cart</h2>

                <Card className="mt-5 border-0 shadow-none flex flex-col">
                    <Card className=" border-0 px-2 py-0 rounded-md shadow-none justify-between flex ">
                        <section className=" px-2 h-[50px] flex justify-between items-center gap-3">
                            <div className="flex justify-between items-center gap-3">
                                <div>
                                    <Image src={logo} width={70} height={70} alt="imag" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold">Mushroom Pizza</h3>
                                    <div className="text-xs text-gray-400">
                                        <p>Small, Thin</p>
                                        <p>Chicken</p>
                                    </div>
                                </div>
                            </div>
                            {/* button */}
                            <div className="">
                                <div className="w-[95px] justify-center items-center relative  flex h-[30px] rounded-full bg-gray-100 ">
                                    <button className=" cursor-pointer h-[30px] hover:bg-gray-300 absolute left-0  w-[30px] rounded-full m-auto">
                                        +
                                    </button>
                                    <span className="text-sm">100</span>
                                    <button className=" cursor-pointer h-[30px] hover:bg-gray-300 absolute right-0   w-[30px] rounded-full m-auto">
                                        -
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <span className="font-semibold ">$1000</span>
                                <span className="text-lg">x</span>
                            </div>
                        </section>
                        <div className=" bg-gray-100 h-[1px] w-[700px] m-auto"></div>
                    </Card>

                    <div className="flex justify-between items-center px-5">
                        <h2 className="text-lg font-bold">${2300}</h2>
                        <Button>Chckout</Button>
                    </div>
                </Card>
            </div>
        </div>
    );
}
