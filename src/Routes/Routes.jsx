import { createBrowserRouter } from "react-router-dom"
import Root from "../Layout/Root"
import Error from "../Pages/Error/Error"
import Home from "../Pages/Home/Home"
import Menu from "../Pages/Menu/Menu"
import Order from "../Pages/Order/Order"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/menu',
                element: <Menu />
            },
            {
                path: '/order/:category',
                element: <Order />
            }
        ]
    }
])