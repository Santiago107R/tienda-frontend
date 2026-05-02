import { RouterProvider } from 'react-router';
import { AppRouter } from './app.router';

const MyApp = () => {
    return (
        <>
            <RouterProvider router={AppRouter} />
        </>
    )
}

export default MyApp
