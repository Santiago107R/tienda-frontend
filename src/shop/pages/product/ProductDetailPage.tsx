import { useState } from "react";
import { Link, useParams } from "react-router";
import { ChevronLeftCircle } from "lucide-react";
import useUtils from "@/hooks/useUtils";
import useProduct from "@/hooks/useProduct";

const ProductDetailPage = () => {
    const { numberFormat } = useUtils();
    const { slug } = useParams();

    const [selectedSizes, setSelectedSizes] = useState<string[]>([]);

    const toggleSelectedSize = (size: string) => {
        setSelectedSizes((prev) => {
            const newSet = new Set(prev || []);

            if (newSet.has(size)) {
                newSet.delete(size);
            } else {
                newSet.add(size);
            }

            return Array.from(newSet);
        });
    };

    if (!slug) return null;

    const { productQuery } = useProduct(slug);

    if (!productQuery.data) {
        return (
            <div className="max-w-6xl mx-auto m-10 p-4">
                <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200 p-3">
                    <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 9.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="mt-2 text-2xl font-medium text-gray-900">Producto no encontrado</h3>
                    <p className="mt-1 text-gray-500">Lo sentimos, no pudimos encontrar el artículo que buscas.</p>
                    <div className="mt-6">
                        <Link to="/" className="text-indigo-600 font-bold hover:text-indigo-500 underline">Volver a la tienda</Link>
                    </div>
                </div>
            </div>
        );
    }

    const hasSizes = !!productQuery.data.sizes?.length;

    const isButtonDisabled = hasSizes && selectedSizes.length === 0;

    return (
        <div className="max-w-6xl mx-auto m-10 p-4">
            <div className="mb-4">
                <Link to="/" className="inline-block transition-transform hover:scale-110">
                    <ChevronLeftCircle className="text-4xl w-10 h-10 text-slate-800" />
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

                {/* Columna de Imagen */}
                <div className="bg-gray-50 flex justify-center items-center p-8">
                    <img
                        src={productQuery.data?.image || '/assets/img/no_foto.png'}
                        alt={productQuery.data.title}
                        className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300 ease-in-out drop-shadow-xl"
                    />
                </div>

                {/* Columna de Información */}
                <div className="p-8 flex flex-col">
                    <span className="text-sm font-semibold text-indigo-600 uppercase tracking-widest mb-2">
                        {productQuery.data.gender}
                    </span>

                    <h1 className="text-4xl font-extrabold text-gray-800 mb-4 leading-tight">
                        {productQuery.data.title}
                    </h1>

                    <p className="text-3xl font-light text-gray-900 mb-6">
                        {numberFormat(productQuery.data.price)} <span className="text-xl font-bold">$</span>
                    </p>

                    <hr className="mb-6 border-gray-100" />

                    <div className="mb-8">
                        <h3 className="text-sm font-bold text-gray-400 uppercase mb-2">Descripción</h3>
                        <p className="text-gray-600 leading-relaxed">
                            {productQuery.data.description}
                        </p>
                    </div>

                    {/* Selector de Talles */}
                    {hasSizes && (
                        <div className="mb-8">
                            <h3 className="text-sm font-bold text-gray-400 uppercase mb-3">Talles Disponibles</h3>
                            <div className="flex flex-wrap gap-2">
                                {productQuery.data.sizes!.map((size) => (
                                    <button
                                        key={size}
                                        type="button"
                                        onClick={() => toggleSelectedSize(size)}
                                        className={`px-4 py-2 border-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${selectedSizes && selectedSizes.includes(size)
                                            ? 'border-indigo-600 bg-indigo-50 text-indigo-600'
                                            : 'border-gray-200 hover:border-indigo-600'
                                            }`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="mt-auto">
                        {productQuery.data.stock !== undefined && (
                            <p className={`mb-4 text-sm font-medium ${productQuery.data.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
                                ● {productQuery.data.stock > 0 ? `En stock (${productQuery.data.stock} unidades)` : 'Agotado'}
                            </p>
                        )}

                        <button
                            disabled={isButtonDisabled || productQuery.data.stock === 0}
                            className={`w-full py-4 rounded-xl font-bold text-lg transition-all shadow-lg active:scale-95 transform ${isButtonDisabled || productQuery.data.stock === 0
                                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                                    : 'bg-black text-white hover:bg-gray-800'
                                }`}
                        >
                            {productQuery.data.stock === 0
                                ? 'Agotado'
                                : isButtonDisabled
                                    ? 'Seleccionar talle'
                                    : 'Añadir al carrito'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;