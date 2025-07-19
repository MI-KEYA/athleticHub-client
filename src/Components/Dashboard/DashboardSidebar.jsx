import React, { useContext } from 'react';
import { Link } from 'react-router';
import {
    MdOutlineDashboard,
    MdEventAvailable
} from 'react-icons/md';
import { FaCalendarAlt } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import { RiLogoutBoxLine } from 'react-icons/ri';
import icon from '../../assets/R.png';
import { AuthContext } from '../../Context/AuthContext'; // Adjust path as needed

const DashboardSidebar = () => {
    const { user, logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout()
            .then(() => console.log('User logged out'))
            .catch(error => console.error(error));
    };

    return (
        <div className="flex flex-col justify-between h-screen py-6 text-lg  text-white">
            <div>
                {/* Logo & Title */}
                <div className="flex flex-col items-center mb-10">
                    <img src={icon} alt="Logo" className="w-[60px]" />
                    <span className="text-2xl font-bold mt-2">AthleticHub</span>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col space-y-4 pl-4">
                    <Link to="/" className="flex items-center gap-3 hover:text-blue-400">
                        <MdOutlineDashboard /> Dashboard Home
                    </Link>
                    <Link to="/myBookings" className="flex items-center gap-3 hover:text-blue-400">
                        <FaCalendarAlt /> My Bookings
                    </Link>
                    <Link to="/profile" className="flex items-center gap-3 hover:text-blue-400">
                        <CgProfile /> Profile Info
                    </Link>
                    <Link to="/manageEvents" className="flex items-center gap-3 hover:text-blue-400">
                        <MdEventAvailable /> Manage Events
                    </Link>
                </div>
            </div>

            {/* Profile & Logout */}
            <div className="pl-4 mt-10">
                <div className="flex items-center gap-3 mb-3">
                    <img
                        src={user?.photoURL || 'https://i.ibb.co/4pDNDk1/avatar.png'}
                        alt="User"
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                        <p className="font-semibold">{user?.displayName || 'Anonymous'}</p>
                        <p className="text-sm text-gray-400">{user?.email}</p>
                    </div>
                </div>
                <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 text-red-400 hover:text-red-500"
                >
                    <RiLogoutBoxLine className="text-xl" /> Logout
                </button>
            </div>
        </div>
    );
};

export default DashboardSidebar;
