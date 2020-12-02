import {CreateAccount} from "./pages/CreateAccount";
import { DistributorListing } from "./pages/DistributorListings";
import { Home } from "./pages/Home.jsx";
import { ItemDetails } from "./pages/ItemDetails";
import {Login} from "./pages/Login";
import { OrderHistory } from "./pages/OrderHistory";
import SearchPage from "./pages/SearchPage";
import { UserProfile } from "./pages/UserProfile.jsx";
import App from "./App";
import { CreateListing } from "./pages/CreateListing";
import { ListingEditor } from "./pages/ListingEditor";
import React from "react"

export const ROUTES = [
    { path: '/search', component: SearchPage},
    { path: '/distDetails', component: DistributorListing},
    { path: "/listing/:id", component: ListingEditor },
    { path: "/createListing", component: CreateListing },
    { path: '/create', component: CreateAccount },
    { path: '/orders', component: OrderHistory},
    { path: '/user/:id', component: UserProfile},
    { path: '/home', component: Home},
    { path: '/', render: () => <Login onLogin={App().onLogin()}/> }
]