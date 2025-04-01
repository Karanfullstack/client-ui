import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SSRCartItems from "./SSRCartItems";

export default function CartPage() {
    return (
        <div className="bg-[#f9f9f7] w-full flex flex-col h-[calc(100vh-64px)]">
            <div className="container max-w-[800px]  mt-6 p-3 m-auto">
                <h2 className=" font-semibold text-2xl">Shopping Cart</h2>

                <Card className="mt-5 border-0 shadow-none flex flex-col">
                    {/* cart titems */}
                    <SSRCartItems />
                    <div className="flex justify-between items-center px-5">
                        <h2 className="text-lg font-bold">${2300}</h2>
                        <Button>Chckout</Button>
                    </div>
                </Card>
            </div>
        </div>
    );
}
