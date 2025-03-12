import Image, { StaticImageData } from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import ToppingBox from "./ToppingBox";

export type Product = {
    name: string;
    description: string;
    image: StaticImageData;
    price: string;
};
type Props = {
    product: Product;
};
export default function ProductCard({ product }: Props) {
    return (
        <section className="w-64 h-80">
            <Card className=" text-black h-full overflow-hidden rounded-lg shadow-white  border-0">
                <div className=" overflow-auto">
                    <CardHeader className="m-0 p-0">
                        <div className="flex w-full justify-center items-center ">
                            <Image
                                src={product.image}
                                objectFit="cover"
                                width="160"
                                height="140"
                                alt="product_image"
                            />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="text-lg text-left py-2   ">
                            <p className="font-bold ">{product.name}</p>
                            <p className="text-sm leading-5 py-1">{product.description}</p>
                        </div>
                    </CardContent>

                    <CardFooter>
                        <div className="flex justify-between items-center w-[240px] m-auto">
                            <span>From {product.price}</span>
                            <ToppingBox product={product} />
                        </div>
                    </CardFooter>
                </div>
            </Card>
        </section>
    );
}
