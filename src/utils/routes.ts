import { Cartegories } from "../components/admin/cartegories/cartegories";
import { Login } from "../components/auth/login";
import { SignUp } from "../components/auth/signup";
import { Home } from "../components/home";

export const protectedRoutes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/cartegories',
        component: Cartegories
    }
]

export const openRoutes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/signup',
        component: SignUp
    },
    {
        path: '/login',
        component: Login
    }

]