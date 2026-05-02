import type { Product } from "@/types/product.type"
import ProductCard from "./ProductCard"

interface Props {
    products: Product[]
}

const ProductGrid = ({products}: Props) => {
    return (
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4'>
            {
                products.map((product) => (
                    <ProductCard key={product.slug} id={product.id} image={product.image} title={product.title} price={product.price} slug={product.slug} />
                ))
            }
        </div>
    )
}

export default ProductGrid
