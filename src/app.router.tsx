import { createHashRouter } from "react-router";
import ShopLayout from "./shop/layouts/ShopLayout";
import HomePage from "./shop/pages/home/HomePage";

export const AppRouter = createHashRouter([
    {
        path: '/',
        element: <ShopLayout  />,
        children: [
            {
                index: true,
                element: <HomePage />,
            }
        ]
    }
])