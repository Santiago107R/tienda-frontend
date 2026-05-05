import type { Product } from "@/types/products.response"
import ProductCard from "./ProductCard"

interface Props {
    products: Product[]
}

const ProductGrid = ({products}: Props) => {
    if (!Array.isArray(products)) {
        return <p className="text-2xl text-center text-black">No products found or data format incorrect.</p>;
    }

    return (
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4'>
            {
                products.map((product) => (
                    <ProductCard key={product.slug} image={product.image} title={product.title} price={product.price} slug={product.slug} />
                ))
            }
        </div>
    )
}

export default ProductGrid
