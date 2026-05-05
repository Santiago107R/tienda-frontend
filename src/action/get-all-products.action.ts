import { tiendaApi } from "@/api/tienda.api"
import type { ProductsResponse } from "@/types/products.response"

export const getAllProducts = async () => {
    const {data} =  await tiendaApi.get<ProductsResponse>('product')

    return data
}