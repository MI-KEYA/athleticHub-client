import React, { useContext } from 'react';
import { Link } from 'react-router';
import {
    MdOutlineDashboard,
    MdEventAvailable,
    MdOutlineLogout
} from 'react-icons/md';
import { FaCalendarAlt } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import { RiLogoutBoxLine } from 'react-icons/ri';
import icon from '../../assets/R.png';
import { AuthContext } from '../../Context/AuthContext'; // Adjust path as needed
import Swal from 'sweetalert2';

const DashboardSidebar = () => {
    const { user, logOut } = useContext(AuthContext);

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
                const errorMessage = err.message;
                Swal.fire(`${errorMessage}`);


            }).catch(error => console.error(error));
    };

    return (
        <div className="flex flex-col justify-between h-screen py-6  text-white">
            <div>
                {/* Logo & Title */}
                <Link to='/'>
                    <div className="flex flex-col items-center mb-10">
                        <img src={icon} alt="Logo" className="w-[60px]" />
                        <span className="text-2xl font-bold mt-2">AthleticHub</span>
                    </div>
                </Link>

                {/* Navigation Links */}
                <div className="flex flex-col space-y-4 md:px-4">
                    <Link to="/dashboard" className="flex items-center gap-3 hover:text-blue-400">
                        <MdOutlineDashboard /> Dashboard
                    </Link>
                    <Link to="/myBookings" className="flex items-center gap-3 hover:text-blue-400">
                        <FaCalendarAlt /> My Bookings
                    </Link>
                    <Link to="/dashboard/profile" className="flex items-center gap-3 hover:text-blue-400">
                        <CgProfile /> Profile Info
                    </Link>
                    <Link to="/manageEvents" className="flex items-center gap-3 hover:text-blue-400">
                        <MdEventAvailable /> Manage Events
                    </Link>
                    <Link to="/manageEvents" className="flex items-center gap-3 hover:text-blue-400">
                        <MdEventAvailable /> Help/FAQ'S
                    </Link>
                </div>
            </div>

            {/* Profile & Logout */}

            <div className="md:pl-4 md:pr-4 my-10">
                <hr className='my-5'></hr>
                <div className="flex items-center gap-3 mb-10">
                    <img
                        src={user?.photoURL || 'U'}
                        alt="User"
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                        <p className="font-semibold">{user?.displayName || 'Anonymous'}</p>
                        <p className="text-xs text-gray-400">{user?.email}</p>
                    </div>
                </div>
                <button
                    onClick={handleLogOut}
                    className="flex items-center justify-center gap-2 w-full px-4 py-2 border-2 border-white rounded-full text-white hover:bg-white hover:text-blue-950 transition duration-200"
                >
                    <MdOutlineLogout className="" />
                    Logout
                </button>


            </div>
        </div>
    );
};

export default DashboardSidebar;
