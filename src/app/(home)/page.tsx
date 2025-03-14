import Image from "next/image";
import PizzaBanner from "../../app/../../assets/heor.png";
import { Button } from "@/components/ui/button";
import ProductCard, { Product } from "./components/ProductCard";
import ProductImage from "@/../assets/Pepperoni-Traditional 1.png";
import ProductImage1 from "@/../assets/Margherita-Traditional 1.png";
import Tab from "./components/Tab";

const pizzaData: Product[] = [
    {
        name: "Margherita Magic",
        description:
            "Classic Margherita pizza with fresh mozzarella, basil, and rich tomato sauce.",
        image: ProductImage,
        price: "$9.99",
    },
    {
        name: "Pepperoni Bliss",
        description: "Delicious pepperoni pizza with a perfect balance of cheese and spice.",
        image: ProductImage1,
        price: "$12.99",
    },
    {
        name: "BBQ Chicken Supreme",
        description: "Smoky BBQ chicken pizza topped with red onions and mozzarella cheese.",
        image: ProductImage,
        price: "$14.99",
    },
    {
        name: "Veggie Delight",
        description: "Loaded with bell peppers, olives, onions, mushrooms, and mozzarella.",
        image: ProductImage,
        price: "$11.99",
    },
    {
        name: "Meat Lover’s Feast",
        description: "A hearty pizza loaded with pepperoni, sausage, bacon, and ham.",
        image: ProductImage,
        price: "$15.99",
    },
    {
        name: "Hawaiian Paradise",
        description: "Sweet and savory Hawaiian pizza with ham and pineapple.",
        image: ProductImage,
        price: "$13.99",
    },
];

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

                    <div className="grid  w-max m-auto grid-cols-4 gap-y-6 gap-x-6 justify-items-center py-8      ">
                        {pizzaData.map((product) => (
                            <ProductCard product={product} key={product.name} />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
