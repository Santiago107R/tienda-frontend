import { createHashRouter } from "react-router";
import ShopLayout from "./shop/layouts/ShopLayout";
import HomePage from "./shop/pages/home/HomePage";
import ProductPage from "./shop/pages/product/ProductDetailPage";

export const AppRouter = createHashRouter([
    {
        path: '/',
        element: <ShopLayout  />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: 'product/:slug',
                element: <ProductPage />,
            }
        ]
    }
])