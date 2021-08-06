import { Cartegories } from "../components/admin/cartegories/cartegories";
import { NewCartegories } from "../components/admin/cartegories/newCartegories";
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
    },
    {
        path: '/am/cartegories/new',
        component: NewCartegories
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