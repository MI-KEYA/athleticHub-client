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
import MyBookings from '../Components/MyBookings';
import ManageEvents from '../Components/ManageEvents';
import CreateEvent from '../Components/CreateEvent';
import Error from '../Pages/Error';

const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        errorElement: <Error />,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: '/createEvent',
                Component: CreateEvent
            },
            {
                path: '/bookEvent',
                Component: BookEvent
            },
            {
                path: '/myBookings',
                Component: MyBookings
            },
            {
                path: '/manageEvents',
                Component: ManageEvents
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