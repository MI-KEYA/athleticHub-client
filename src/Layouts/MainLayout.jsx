import React from 'react';
import { Outlet, useLocation } from 'react-router';

import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Navber from '../Components/Navber';

const MainLayout = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    return (
        <div>
            <header>
                {
                    isHomePage ? <Header /> : <Navber />
                }
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