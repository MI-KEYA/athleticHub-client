import React, { useContext } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';

const Navber = () => {

    const { user, logOut, loading } = useContext(AuthContext);
    if (loading) {
        return <div className="text-center py-10">Loading...</div>; // or a spinner
    }

    const handleLogOut = () => {
        // console.log('logged out');
        logOut()
            .then(() => {
                Swal.fire({
                    icon: "success",
                    title: "Logged Out Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch((err) => {
                const errorMessage = err.message;
                Swal.fire(`${errorMessage}`);


            })
    }

    const link = <>
        <NavLink to='/'
            className={({ isActive }) =>
                isActive ? 'text-gray-500 ml-5 font-bold border-b-3  border-blue-950' : 'text-gray-800 ml-5 font-semibold '
            }>Home
        </NavLink>
        <NavLink to='/bookEvent'
            className={({ isActive }) =>
                isActive ? 'text-gray-500 ml-5 font-bold border-b-3  border-blue-950' : 'text-gray-800 ml-5 font-semibold '
            }>Book Event
        </NavLink>
        <NavLink to='/myBookings'
            className={({ isActive }) =>
                isActive ? 'text-gray-500 ml-5 font-bold border-b-3  border-blue-950' : 'text-gray-800 ml-5 font-semibold '
            }>My Bookings
        </NavLink>
        <NavLink to='/manageEvents'
            className={({ isActive }) =>
                isActive ? 'text-gray-500 ml-5 font-bold border-b-3  border-blue-950' : 'text-gray-800 ml-5 font-semibold '
            }>Manage Events
        </NavLink>
    </>
    return (
        <div >
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
                    {user?.email && <div className='ml-5 text-blue-900'>{user.email}</div>}

                    {
                        user ? (
                            <button onClick={handleLogOut} className='btn  text-blue-900 rounded-full'>LogOut</button>
                        ) : (
                            <NavLink to='/auth/login' className='btn  text-blue-900 rounded-full'>Login</NavLink>
                        )
                    }
                    <NavLink to='/auth/register' className='btn  text-blue-900 rounded-full mr-4 hidden lg:flex'>Register</NavLink>
                </div>
            </div>

        </div>

    );
};

export default Navber;