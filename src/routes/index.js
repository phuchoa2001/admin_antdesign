import Home from '../page/Home';
import Users from '../page/Users';
import Order from '../page/Order';
import Products from '../page/Products';
import Link404 from '../page/Link404';
const routes = [
    {
        path: "/",
        exact: true,
        mani: () => <Home />,
    },
    {
        path: "/users",
        exact: false,
        mani: () => <Users />,
    },
    {
        path: "/order",
        exact: false,
        mani: () => <Order />,
    },
    {
        path: "/products",
        exact: false,
        mani: () => <Products />
        ,
    },
    {
        path: "",
        exact: true,
        mani: () => <Link404 />
        ,
    },
]
export default routes;