import { CustomerI } from "@/types";
import axios from "axios";

export const apiInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});

const GETUSTOMER = "/api/order/customer";
export const getCustomer = async () =>
    await apiInstance.get<CustomerI>(GETUSTOMER).then((res) => {
        return { customer: res.data.customer };
    });
