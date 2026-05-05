import useUtils from "@/hooks/useUtils";
import { Link } from "react-router"

interface Props {
    title: string;
    slug: string;
    image: string;
    price: number;
}

const ProductCard = ({image, title, price, slug}: Props) => {
    const {numberFormat} = useUtils()

    return (
        <>
            <div className="group relative bg-white border border-slate-100 rounded-2xl p-3 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer overflow-hidden flex flex-col h-full">

                <div className="aspect-square overflow-hidden rounded-xl bg-gray-50">
                    <Link to={`product/${slug}`}>
                        <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            src={image} alt="Producto" />
                    </Link>
                </div>

                <div className="mt-4 flex flex-col flex-1">
                    <h3 className="text-xs font-medium text-slate-400 uppercase tracking-wider text-center">
                        {numberFormat(price)}$
                    </h3>

                    <p className="text-sm md:text-base font-semibold text-slate-800 text-center mb-4 flex-1 line-clamp-2">
                        {title}
                    </p>

                    <div className="mt-auto">
                        <a href="#">
                            <button className="w-full py-2 px-2 flex justify-center items-center rounded-xl shadow-sm transition-colors text-sm font-bold bg-indigo-600 text-white hover:shadow-lg hover:bg-indigo-800">
                                Añadir
                            </button>
                        </a>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ProductCard
