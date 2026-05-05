
export interface ProductsResponse {
    count:    number;
    pages:    number;
    products: Product[];
}

export interface Product {
    id:          string;
    title:       string;
    price:       number;
    description: string;
    slug:        string;
    stock:       number;
    sizes:       string[] | null;
    gender:      null | string;
    image:       string;
    category:    string;
    user:        User;
}

export interface User {
    id:       string;
    name:     string;
    phone:    string;
    isActive: boolean;
    roles:    Role[];
}


export type Role = "admin" | "super-user" | "user"

