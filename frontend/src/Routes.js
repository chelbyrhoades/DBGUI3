import {CreateAccount} from "./pages/CreateAccount";
import { Home } from "./pages/Home.jsx";
import { ItemDetails } from "./pages/ItemDetails";
import {Login} from "./pages/Login";
import { OrderHistory } from "./pages/OrderHistory";
import { UserProfile } from "./pages/UserProfile";

export const ROUTES = [
    { path: '/create', component: CreateAccount },
    { path: '/orders', component: OrderHistory},
    { path: '/userP', component: UserProfile},
    { path: '/home', component: Home},
    { path: '/', component: Login}
]