import { UserSession } from "@/lib/session";
import { redirect } from "next/navigation";
import Form from "./Form";

export default async function Checkout({ searchParams }: { searchParams: { restaurant: string } }) {
    const searchQuery = Object.entries(searchParams).reduce((acc, [key, value]) => {
        if (typeof value === "string") {
            acc[key] = value;
        }
        return acc;
    }, {} as Record<string, string>);

    const searchFilter = new URLSearchParams(searchQuery);
    searchFilter.set("returnTo", "checkout");
    const session = await UserSession();

    if (!session?.user) {
        redirect(`/login?${searchFilter}`);
    }
    return <Form />;
}
