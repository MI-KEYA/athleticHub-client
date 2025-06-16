import React from 'react';
import { Outlet } from 'react-router';
import Navber from '../Components/Navbar/Navber';

const AuthLayout = () => {
    return (
        <div className='min-h-screen'>
            <header>
                <Navber />
            </header>
            <main className='w-11/12 mx-auto py-5'>
                <Outlet />
            </main>

        </div>
    );
};

export default AuthLayout;