import React from 'react';
import { Outlet } from 'react-router';

import Footer from '../Components/Footer';
import Navber from '../Components/Navbar/Navber';
import Header from '../Components/Navbar/Header';


const MainLayout = () => {
    // const location = useLocation();
    // const isHomePage = location.pathname === '/';
    return (
        <div className='bg-blue-50'>
            <header className='sticky top-0 z-50'>
                <Navber />
            </header>

            <main>

                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default MainLayout;