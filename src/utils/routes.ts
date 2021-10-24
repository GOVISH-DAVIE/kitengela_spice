import { Cartegories } from "../components/admin/cartegories/cartegories";
import { NewCartegories } from "../components/admin/cartegories/newCartegories";
import { NewProducts } from "../components/admin/products/new";
import { AuthenticationFalback } from "../Pages/auth/authenticationFallback";
import { Login } from "../Pages/auth/login";
import { SignUp } from "../Pages/auth/signup";
import { Home } from "../Pages/home";

export const protectedRoutes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/cartegories',
        component: Cartegories
    },
    {
        path: '/am/cartegories/new',
        component: NewCartegories
    },
    {
        path: '/am/products/new',
        component: NewProducts
    },

    {
        path: '/login',
        component: AuthenticationFalback
    },

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