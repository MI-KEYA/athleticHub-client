import React from 'react';
import {
    createBrowserRouter,
} from "react-router";
import MainLayout from '../Layouts/MainLayout';
import BookEvent from '../Components/BookEvent/BookEvent';
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
                path: '/bookEvent',
                element: <PrivateRoute>
                    <BookEvent />
                </PrivateRoute>,
                loader: () => fetch('http://localhost:3000/events'),
                hydrateFallbackElement: <Loading />
            },
            {
                path: '/myBookings',
                element: <PrivateRoute>
                    <MyBookings />
                </PrivateRoute>

            },
            {
                path: '/manageEvents',
                loader: () => fetch('http://localhost:3000/events'),
                element: <PrivateRoute>
                    <ManageEvents />
                </PrivateRoute>,
                hydrateFallbackElement: <Loading />
            },
            {
                path: '/updateEvents/:id',
                Component: UpdateEvent,
                loader: ({ params }) => fetch(`http://localhost:3000/events/${params.id}`),
                hydrateFallbackElement: <Loading />
            },
            {
                path: '/events/:id',
                element: <PrivateRoute>
                    <EventDetails />
                </PrivateRoute>

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