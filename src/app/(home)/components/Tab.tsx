import { TabsContent, TabsList, TabsTrigger, Tabs } from "@/components/ui/tabs";
import React from "react";

export default function Tab() {
    return (
        <Tabs defaultValue="Pizza" className="w-[200px]  ">
            <TabsList className="w-full ">
                <TabsTrigger className="text-md" value="Pizza">
                    Pizza
                </TabsTrigger>
                <TabsTrigger className="text-md" value="Bevrages">
                    Bevrages
                </TabsTrigger>
            </TabsList>
            <TabsContent value="Pizza">Make changes to your account here.</TabsContent>
            <TabsContent value="Bevrages">Change your password here.</TabsContent>
        </Tabs>
    );
}
