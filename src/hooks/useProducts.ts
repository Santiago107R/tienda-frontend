import { getAllProducts } from "@/action/get-all-products.action"
import { useQuery } from "@tanstack/react-query"

const useProducts = () => {
    const productsQuery = useQuery({
        queryKey: ['products'],
        queryFn: getAllProducts,
        staleTime: 60 * 5
    })
    
    return {
        productsQuery,
    }
}

export default useProducts
