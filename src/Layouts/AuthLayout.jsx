import React from 'react';
import Navber from '../Components/Navber';
import { Outlet } from 'react-router';

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