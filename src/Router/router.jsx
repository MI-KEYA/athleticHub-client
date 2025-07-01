import React from 'react';
import {
    createBrowserRouter,
} from "react-router";
import MainLayout from '../Layouts/MainLayout';
import AuthLayout from '../Layouts/AuthLayout';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import MyBookings from '../Components/MyBookings/MyBookings';

import CreateEvent from '../Components/CreateEvent';
import Error from '../Pages/Error';
import Home from '../Pages/Home/Home';
import PrivateRoute from '../Context/PrivateRoute';
import EventDetails from '../Components/EventDetails';
import Loading from '../Components/Loading';
import UpdateEvent from '../Components/UpdateEvent';
import ManageEvents from '../Components/ManageEvents/ManageEvents';
import Dashboard from '../Components/Dashboard/Dashboard';
import Profile from '../Components/Profile/Profile';
import AllEvents from '../Components/AllEvents/AllEvents';

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
                element: <PrivateRoute>
                    <CreateEvent />
                </PrivateRoute>

            },
            {
                path: '/AllEvents',
                element:
                    <AllEvents />


            },
            {
                path: '/myBookings',
                element: <PrivateRoute>
                    <MyBookings />
                </PrivateRoute>

            },
            {
                path: '/manageEvents',
                loader: () => fetch('https://athletic-hub-server-tawny.vercel.app/events'),
                element: <PrivateRoute>
                    <ManageEvents />
                </PrivateRoute>,
                hydrateFallbackElement: <Loading />
            },
            {
                path: '/updateEvents/:id',
                Component: UpdateEvent,
                loader: ({ params }) => fetch(`https://athletic-hub-server-tawny.vercel.app/events/${params.id}`),
                hydrateFallbackElement: <Loading />
            },
            {
                path: '/events/:id',
                element: <PrivateRoute>
                    <EventDetails />
                </PrivateRoute>

            },
            {
                path: '/dashboard',
                Component: Dashboard
            },
            {
                path: '/profile',
                Component: Profile
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