export interface Tenant {
    id: 26;
    name: string;
    address: string;
    updateAt: string;
    createdAt: string;
}

export interface PriceConfiguration {
    [key: string]: {
        priceType: "base";
        availableOptions: string[];
    };
}
export interface Attributes {
    name: string;
    widgetType: "switch" | "radio";
    availableOptions: string[];
    defaultValue: boolean | string;
}
export interface Category {
    _id: string;
    name: string;
    priceConfiguration: PriceConfiguration;
    attributes: Attributes[];
}

export interface ProductPriceConfig {
    [key: string]: {
        _id: string;
        priceType: "base" | "additional";
        avialableOptions: {
            [key: string]: number;
        };
    };
}
export interface ProdcutAttributes {
    name: string;
    value: boolean | string;
    _id: string;
}
export interface Product {
    _id: string;
    name: string;
    description: string;
    image: {
        image: string;
        public_id: string;
    };
    priceConfiguration: ProductPriceConfig;
    attributes: ProdcutAttributes[];
    isPublish: boolean;
    tenantId: string;
    categoryId: string;
    category: Category;
}
export interface ResponseType<T> {
    success: boolean;
    currentPage: number;
    perPage: number;
    total: number;
    data?: T[];
    docs: T[];
}

export interface CustomerI {
    customer: {
        _id: string;
        userId: string;
        firstName: string;
        lastName: string;
        email: string;
        addresses: { text: string; isDefault: boolean; _id: string }[];
        createdAt: string;
        updatedAt: string;
        __v: number;
    };
}
