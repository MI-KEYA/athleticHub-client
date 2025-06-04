import React from 'react';
import {
    createBrowserRouter,
} from "react-router";
import MainLayout from '../Layouts/MainLayout';
import Home from '../Pages/Home';
import BookEvent from '../Components/BookEvent';
import AuthLayout from '../Layouts/AuthLayout';
import Login from '../Pages/Login';
import Register from '../Pages/Register';

const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: '/bookEvent',
                Component: BookEvent
            }
        ]
    },
    {
        path: '/auth',
        Component: AuthLayout,
        children: [
            {
                path: '/auth/login',
                Component: Login
            },
            {
                path: '/auth/register',
                Component: Register
            }
        ]
    }
]);

export default router;