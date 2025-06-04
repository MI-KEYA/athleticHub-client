import React from 'react';
import { NavLink } from 'react-router';

const Header = () => {
    const link = <>
        <NavLink to='/'
            className={({ isActive }) =>
                isActive ? 'text-gray-500 font-bold border-b-3 ml-5   border-white' : 'text-gray-800 ml-5 font-semibold '
            }>Home
        </NavLink>
        <NavLink to='/bookEvent'
            className={({ isActive }) =>
                isActive ? 'text-gray-500 font-bold border-b-3 ml-5 border-white' : 'text-gray-800 ml-5 font-semibold '
            }>Book Event
        </NavLink>
        <NavLink to='/myBookings'
            className={({ isActive }) =>
                isActive ? 'text-gray-500 font-bold border-b-3 ml-5 border-white' : 'text-gray-800 ml-5 font-semibold '
            }>My Bookings
        </NavLink>
        <NavLink to='/manageEvents'
            className={({ isActive }) =>
                isActive ? 'text-gray-500 font-bold border-b-3 ml-5 border-white' : 'text-gray-800 ml-5 font-semibold '
            }>Manage Events
        </NavLink>


    </>
    return (
        <div
            className="min-h-screen"
            style={{
                backgroundImage: "url('/bg.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="navbar shadow-sm bg-transparent">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                        >
                            {link}
                        </ul>
                    </div>
                    <div className='flex justify-center'>
                        <img src="/public/R.png" alt="" className='w-[50px] lg:ml-5' />
                        <a className="btn btn-ghost hidden lg:flex text-xl">AthleticHub</a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {link}
                    </ul>
                </div>
                <div className="navbar-end flex gap-4">
                    <NavLink to='/auth/login' className='btn bg-gradient-to-r from-blue-400 to-purple-400 text-white rounded-full'>Login</NavLink>
                    <NavLink to='/auth/register' className='btn bg-gradient-to-r from-blue-400 to-purple-400 text-white rounded-full hidden lg:flex'>Register</NavLink>
                </div>
            </div>

            {/* You can add hero content here if needed */}
            <div className="flex flex-col justify-center items-center text-center text-white h-[calc(100vh-64px)]">
                <h1 className="text-5xl text-blue-300 font-bold">Welcome to AthleticHub</h1>
                <p className="text-lg font-semibold text-blue-800 mt-4">Be one of us.</p>
            </div>
        </div>
    );
};

export default Header;
