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
const ADDADRESS = "/api/order/customer/address";
const REMOVEADDRESS = "/api/order/customer/address-remove";
export const getCustomer = async () =>
    await apiInstance.get<CustomerI>(GETUSTOMER).then((res) => {
        return { customer: res.data.customer };
    });

export const addAddress = (id: string, text: string) => {
    return apiInstance.patch(`${ADDADRESS}/${id}`, {
        text,
    });
};

export const removeAddress = (customerId: string, addressId: string) => {
    return apiInstance.patch(REMOVEADDRESS, {
        customerId,
        addressId,
    });
};
