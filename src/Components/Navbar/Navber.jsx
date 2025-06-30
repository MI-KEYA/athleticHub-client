import React, { useContext } from 'react';
import { NavLink } from 'react-router';
import Swal from 'sweetalert2';
import userIcon from '/user.png';
import { AuthContext } from '../../Context/AuthContext';
import icon from '../../assets/R.png'
import { MdOutlineLogout } from 'react-icons/md';
import Loading from '../Loading';
import { FaChevronDown } from 'react-icons/fa';
import { RxDashboard } from 'react-icons/rx';
import { CgProfile } from 'react-icons/cg';

const Navber = () => {

    const { user, logOut, loading } = useContext(AuthContext);
    if (loading) {
        return <Loading /> // or a spinner
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
                isActive ? 'text-gray-200 ml-5 font-bold border-b-3  border-white' : 'text-white ml-5 font-semibold '
            }>Home
        </NavLink>
        <NavLink to='/createEvent'
            className={({ isActive }) =>
                isActive ? 'text-gray-200 ml-5 font-bold border-b-3  border-white' : 'text-white ml-5 font-semibold  '
            }>Create Event
        </NavLink>
        <NavLink to='/bookEvent'
            className={({ isActive }) =>
                isActive ? 'text-gray-200 ml-5 font-bold border-b-3  border-white' : 'text-white ml-5 font-semibold '
            }>All Events
        </NavLink>
        <NavLink to='/myBookings'
            className={({ isActive }) =>
                isActive ? 'text-gray-200 ml-5 font-bold border-b-3  border-white' : 'text-white ml-5 font-semibold '
            }>My Bookings
        </NavLink>
        <NavLink to='/manageEvents'
            className={({ isActive }) =>
                isActive ? 'text-gray-200 ml-5 font-bold border-b-3  border-white' : 'text-white ml-5 font-semibold '
            }>Manage Events
        </NavLink>
    </>
    return (

        <div className="navbar lg:px-25 py-5 shadow-sm bg-blue-950">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                    <img src={icon} alt="" className='w-[50px] lg:ml-5' />
                    <a className="btn btn-ghost hidden lg:flex text-white text-xl">AthleticHub</a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {link}
                </ul>
            </div>

            <div className="navbar-end flex gap-4">
                {/* {user?.email && <div className='ml-5 text-blue-900'>{user.email}</div>} */}
                {/* <img
                        className='w-12 rounded-full border-2 border-white '
                        src={user && user.photoURL ? user.photoURL : userIcon}
                        alt="User"
                        title={user?.displayName || "Guest"}
                    /> */}

                {
                    user ? (
                        <div className="dropdown dropdown-end relative">
                            <div
                                tabIndex={0}
                                role="button"
                                className="flex items-center gap-2 bg-white px-2 py-1 rounded-full shadow cursor-pointer"
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
                                    <NavLink to="/profile" className="flex items-center gap-1"><CgProfile />Profile</NavLink>
                                </li>
                                <li className="border-b pb-1 mb-1">
                                    <NavLink to="/dashboard" className="flex items-center gap-1"><RxDashboard />Dashboard</NavLink>
                                </li>
                                <li>
                                    <button onClick={handleLogOut} className="flex items-center gap-1 cursor-pointer">
                                        <MdOutlineLogout /> Logout
                                    </button>
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <NavLink to="/auth/login" className="btn text-blue-950 rounded-full">Login</NavLink>
                    )
                }
                <NavLink to='/auth/register' className='btn  text-blue-950 rounded-full mr-4 hidden lg:flex'>Register</NavLink>
            </div>
        </div>



    );
};

export default Navber;