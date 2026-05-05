import { tiendaApi } from "@/api/tienda.api"
import type { Product } from "@/types/products.response"

export const getProduct = async (term: string) => {
    const { data } = await tiendaApi.get<Product>(`product/${term}`)

    return data
}