import ProductGrid from '../../components/ProductGrid';
import useProducts from '@/hooks/useProducts';

const HomePage = () => {
    const { productsQuery } = useProducts()

    return (
        <div className="flex flex-col items-center justify-center p-3">
            <div className='mb-5'>
                <h2 className=" text-2xl border-b-2 border-b-gray-300 px-4 text-black">Inicio</h2>
            </div>

            <ProductGrid products={productsQuery.data?.products ?? []} />
        </div>
    )
}

export default HomePage
