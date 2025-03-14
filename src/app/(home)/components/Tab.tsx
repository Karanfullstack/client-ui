import { TabsContent, TabsList, TabsTrigger, Tabs } from "@/components/ui/tabs";
import { Category, ResponseType } from "@/types";
import React from "react";

export default async function Tab() {
    const categoryResponse = await fetch(`${process.env.BACKEND_URL}/api/catalog/category`, {
        next: {
            revalidate: 60 * 60,
        },
    });
    const { data: categoryData }: ResponseType<Category> = await categoryResponse.json();

    return (
        <Tabs defaultValue={categoryData[0]._id} className="w-[200px]  ">
            <TabsList className="w-full ">
                {categoryData.map((category) => (
                    <TabsTrigger key={category._id} className="text-md" value={category._id}>
                        {category.name}
                    </TabsTrigger>
                ))}
                <TabsContent value="pizza">Make changes to your account here.</TabsContent>
            </TabsList>
        </Tabs>
    );
}
