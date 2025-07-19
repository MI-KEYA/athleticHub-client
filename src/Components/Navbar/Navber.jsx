import React, { useContext } from 'react';
import { NavLink } from 'react-router';
import Swal from 'sweetalert2';
import userIcon from '/user.png';
import { AuthContext } from '../../Context/AuthContext';
import icon from '../../assets/R.png';
import { MdOutlineLogout } from 'react-icons/md';
import Loading from '../Loading';
import { FaChevronDown } from 'react-icons/fa';
import { RxDashboard } from 'react-icons/rx';
import { CgProfile } from 'react-icons/cg';

const Navber = () => {
    const { user, logOut, loading } = useContext(AuthContext);
    if (loading) return <Loading />;

    const handleLogOut = () => {
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
                Swal.fire(err.message);
            });
    };

    const link = (
        <>
            {[
                { to: '/', label: 'Home' },
                { to: '/AllEvents', label: 'All Events' },
                ...(user
                    ? [
                        { to: '/createEvent', label: 'Create Event' },
                        { to: '/myBookings', label: 'My Bookings' },
                        { to: '/manageEvents', label: 'Manage Events' },
                    ]
                    : []),
                { to: '/aboutUs', label: 'About Us' }
            ].map(({ to, label }) => (
                <NavLink
                    key={to}
                    to={to}
                    className={({ isActive }) =>
                        `px-2 py-2 ${isActive
                            ? 'lg:text-white font-bold border-b-2 lg:border-white'
                            : 'lg:text-white font-medium'}`
                    }
                >
                    {label}
                </NavLink>
            ))}
        </>
    );

    return (
        <div className="bg-blue-950 py-3 shadow-sm">
            <div className="navbar w-11/12 lg:w-2/3 mx-auto flex justify-between items-center">
                {/* Navbar Start - Logo and Mobile Menu */}
                <div className="flex items-center gap-4">
                    {/* Mobile Dropdown */}
                    <div className="dropdown lg:hidden">
                        <div tabIndex={0} role="button" className="btn btn-ghost p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 p-2 shadow w-52 z-[10]">
                            {link}
                        </ul>
                    </div>

                    {/* Logo */}
                    <img src={icon} alt="logo" className="w-10" />
                    <span
                        className="hidden lg:block text-white text-xl font-semibold no-underline hover:no-underline hover:bg-transparent hover:text-white cursor-default"
                    >
                        AthleticHub
                    </span>

                </div>

                {/* Navbar Center - Desktop Links */}
                <div className="hidden lg:flex items-center gap-4">
                    <ul className="menu menu-horizontal p-0 flex gap-2">{link}</ul>
                </div>

                {/* Navbar End - User Section */}
                <div className="flex items-center gap-4">
                    {user ? (
                        <div className="dropdown dropdown-end">
                            <div
                                tabIndex={0}
                                role="button"
                                className="flex items-center gap-2 bg-white px-3 py-1 rounded-full shadow cursor-pointer"
                            >
                                <img
                                    src={user?.photoURL || userIcon}
                                    alt="user"
                                    className="w-8 h-8 rounded-full object-cover border border-gray-300"
                                />
                                <FaChevronDown className="text-blue-950" />
                            </div>

                            <ul tabIndex={0} className="dropdown-content absolute right-0 mt-2 z-[50] w-52 p-2 shadow bg-base-100 rounded-box">
                                <li className="border-b pb-1 mb-1">
                                    <NavLink to="/profile" className="flex items-center gap-1"><CgProfile /> Profile</NavLink>
                                </li>
                                <li className="border-b pb-1 mb-1">
                                    <NavLink to="/dashboard" className="flex items-center gap-1"><RxDashboard /> Dashboard</NavLink>
                                </li>
                                <li>
                                    <button onClick={handleLogOut} className="flex items-center gap-1 cursor-pointer">
                                        <MdOutlineLogout /> Logout
                                    </button>
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <NavLink to="/auth/login" className="btn btn-sm text-blue-950 bg-white rounded-full px-4">
                            Login
                        </NavLink>
                    )}

                    {/* Hidden Register button */}
                    <NavLink to="/auth/register" className="btn btn-sm text-blue-950 rounded-full hidden">
                        Register
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navber;
