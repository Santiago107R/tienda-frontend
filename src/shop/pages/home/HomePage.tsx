import type { Product } from '@/types/product.type';
import ProductGrid from '../../components/ProductGrid';

export const products: Product[] = [
    {
        id: 1,
        title: "Camiseta Básica Oversize Algodón",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80",
        slug: "camiseta-basica-oversize-algodon",
        price: 15000,
        sizes: "S, M, L, XL",
        stock: 25,
        description: "Camiseta de corte oversize fabricada en 100% algodón orgánico de alto gramaje. Perfecta para un look casual y cómodo.",
        size: ["S", "M", "L", "XL"]
    },
    {
        id: 2,
        title: "Zapatillas Urban Running Rojas",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
        slug: "zapatillas-urban-running-rojas",
        price: 85000,
        sizes: "39, 40, 41, 42, 43",
        stock: 12,
        description: "Zapatillas deportivas con tecnología de amortiguación avanzada. Diseño en rojo vibrante para destacar en la ciudad.",
        size: ["39", "40", "41", "42", "43"]
    },
    {
        id: 3,
        title: "Pantalón Denim Slim Fit Clásico",
        image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&q=80",
        slug: "pantalon-denim-slim-fit-clasico",
        price: 42000,
        sizes: "38, 40, 42, 44, 46",
        stock: 0,
        description: "Jeans de corte ajustado pero elástico para máxima movilidad. Un esencial atemporal para cualquier guardarropa.",
        size: ["38", "40", "42", "44", "46"]
    },
    {
        id: 4,
        title: "Chaqueta de Cuero Sintético Moto",
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80",
        slug: "chaqueta-cuero-sintetico-moto",
        price: 95000,
        sizes: "M, L, XL",
        stock: 5,
        description: "Chaqueta estilo biker con detalles de cremallera en metal. Exterior resistente al agua y forro interior suave.",
        size: ["M", "L", "XL"]
    },
    {
        id: 5,
        title: "Gorra Trucker Vintage",
        image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800&q=80",
        slug: "gorra-trucker-vintage",
        price: 12000,
        sizes: "Única",
        stock: 40,
        description: "Gorra con malla trasera transpirable y cierre ajustable. Estilo retro ideal para los días soleados.",
        size: ["Única"]
    },
    {
        id: 6,
        title: "Buzo Hoodie Canguro Gris",
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80",
        slug: "buzo-hoodie-canguro-gris",
        price: 38000,
        sizes: "S, M, L",
        stock: 18,
        description: "Buzo con capucha y bolsillo frontal. Interior de frisa super suave, ideal para mantener el calor en invierno.",
        size: ["S", "M", "L"]
    },
    {
        id: 7,
        title: "Medias Deportivas Blancas (Pack x3)",
        image: "https://images.unsplash.com/photo-1582966772680-860e372bb558?w=800&q=80",
        slug: "medias-deportivas-blancas-pack-3",
        price: 9500,
        sizes: "S, M, L",
        stock: 50,
        description: "Pack de 3 pares de medias de algodón transpirable con refuerzo en talón y punta para mayor durabilidad.",
        size: ["S", "M", "L"]
    },
    {
        id: 8,
        title: "Mochila Urbana Impermeable",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80",
        slug: "mochila-urbana-impermeable",
        price: 55000,
        sizes: "Única",
        stock: 8,
        description: "Mochila de diseño minimalista con compartimento acolchado para laptop de 15 pulgadas y tela resistente al agua.",
        size: ["Única"]
    },
    {
        id: 9,
        title: "Shorts de Baño Estampados",
        image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=800&q=80",
        slug: "shorts-bano-estampados",
        price: 22000,
        sizes: "M, L, XL, XXL",
        stock: 15,
        description: "Traje de baño de secado rápido con forro interior de malla, cintura elástica y cordón ajustable.",
        size: ["M", "L", "XL", "XXL"]
    },
    {
        id: 10,
        title: "Reloj Minimalista Negro",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
        slug: "reloj-minimalista-negro",
        price: 75000,
        sizes: "Única",
        stock: 3,
        description: "Reloj de pulsera analógico con diseño de esfera limpia y correa de cuero genuino negro. Resistente al agua 3ATM.",
        size: ["Única"]
    }
];

const HomePage = () => {
    return (
        <div className="flex flex-col items-center justify-center p-3">
            <div className='mb-5'>
                <h2 className=" text-2xl border-b-2 border-b-gray-300 px-4 text-black">Inicio</h2>
            </div>

            <ProductGrid products={products} />
        </div>
    )
}

export default HomePage
