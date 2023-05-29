import { createBrowserRouter } from "react-router-dom"
import Root from "../Layout/Root"
import Error from "../Pages/Error/Error"
import Home from "../Pages/Home/Home"
import Menu from "../Pages/Menu/Menu"
import Order from "../Pages/Order/Order"
import Login from "../Pages/Login/Login"
import Register from "../Pages/Register/Register"
import PrivateRoutes from "./PrivateRoutes"
import Secret from "../Pages/Shared/Secret/Secret"
import Dashboard from "../Layout/Dashboard/Dashboard"
import MyCart from "../Pages/Dashboard/MyCart/MyCart"
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers"

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
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/secret',
                element: <PrivateRoutes><Secret /></PrivateRoutes>
            }
        ]
    },
    {
        path: "dashboard",
        element: <PrivateRoutes><Dashboard /></PrivateRoutes>,
        children: [
            {
               path: "mycart",
               element: <MyCart /> 
            },
            {
               path: "allusers",
               element: <AllUsers /> 
            }
        ]
    }
])