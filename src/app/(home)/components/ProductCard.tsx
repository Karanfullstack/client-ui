import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import ToppingBox from "./ToppingBox";
import { Product, ResponseType } from "@/types";
import { miniMumPrice } from "@/lib/utils";
import { FilterProps } from "../../page";

// FIXME:  fetch based on all restaurant dynamically

export default async function ProductCard({ searchParams }: FilterProps) {
    const response = await fetch(
        `${process.env.BACKEND_URL}/api/catalog/product?limit=10&tenantId=${searchParams.restaurant}`,
        {
            cache: "no-store",
        }
    );

    if (!(response as Response).ok) {
        throw new Error("Product is not able to fetch");
    }
    const responseData = await (response as Response).json();
    console.log("respone", responseData);
    const { data: productResponse }: ResponseType<Product> = responseData;

    return (
        <div className="grid  w-max m-auto grid-cols-4 gap-y-6 gap-x-6 justify-items-center py-8      ">
            {productResponse?.map((product) => (
                <section key={product._id} className="w-64 h-80">
                    <Card className=" text-black h-full overflow-hidden rounded-lg shadow-white  border-0">
                        <div className=" overflow-auto">
                            <CardHeader className="m-0 p-0">
                                <div className="flex m-auto w-[100px] justify-center items-center ">
                                    <Image
                                        src={product.image.image}
                                        width="120"
                                        height="140"
                                        alt="product_image"
                                    />
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="text-lg text-left py-2   ">
                                    <p className="font-bold ">{product.name}</p>
                                    <p className="text-sm leading-snug line-clamp-4 my-1">
                                        {product.description}
                                    </p>
                                </div>
                            </CardContent>

                            <CardFooter>
                                <div className="flex justify-between items-center w-[240px] m-auto">
                                    <span>
                                        From $
                                        <span className="font-bold">{miniMumPrice(product)}</span>
                                    </span>
                                    <ToppingBox product={product} />
                                </div>
                            </CardFooter>
                        </div>
                    </Card>
                </section>
            ))}
        </div>
    );
}
