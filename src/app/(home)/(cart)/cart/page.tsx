import { Card } from "@/components/ui/card";
import SSRCartItems from "./SSRCartItems";

export default function CartPage() {
    return (
        <div className="bg-[#f9f9f7] w-full flex flex-col h-[calc(100vh-64px)]">
            <div className="container max-w-[800px]  mt-6 p-3 m-auto">
                <h2 className=" font-semibold text-2xl">Shopping Cart</h2>

                <Card className="mt-5 border-0 shadow-none flex flex-col">
                    {/* cart titems */}
                    <SSRCartItems />
                </Card>
            </div>
        </div>
    );
}
