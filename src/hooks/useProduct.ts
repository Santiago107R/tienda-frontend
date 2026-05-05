import { getProduct } from '@/action/get-product.action'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

const useProduct = (term: string) => {
    const productQuery = useQuery({
        queryKey: ['product', term],
        queryFn: () => getProduct(term),
        staleTime: 60 * 5,
    })

    return {
        productQuery
    }
}

export default useProduct
