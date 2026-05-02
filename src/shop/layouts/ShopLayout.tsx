import { Outlet } from "react-router"
import CustomHeader from '../../components/CustomHeader';
import { Search, User, ShoppingCart } from "lucide-react";
import CustomFooter from '../../components/CustomFooter';

const ShopLayout = () => {
    return (
        <>
            <CustomHeader title={"Tienda"} links={[{ name: 'Inicio', url: '/' }, { icon: ShoppingCart, url: '#' }, { icon: User, url: 'Admin/login' }, {icon: Search, url: '#', isButton: true}]} />
            <Outlet />
            <CustomFooter description={"Todos los derechos reservados &copy; Santiago Robles"} links={[{name: 'Linkedin', url: '#'}]} />
        </>
    )
}

export default ShopLayout
