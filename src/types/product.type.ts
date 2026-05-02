export type Product = {
    id: number;
    title: string;
    image: string;
    slug: string;
    price: number;
    sizes: string;
    stock: number;
    description: string;
    size: string[];
    gender?: string;
}