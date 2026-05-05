import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import { RouterProvider } from 'react-router';
import { AppRouter } from './app.router';

const queryClient = new QueryClient

const MyApp = () => {
    return (
        <>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={AppRouter} />
        </QueryClientProvider>
        </>
    )
}

export default MyApp
