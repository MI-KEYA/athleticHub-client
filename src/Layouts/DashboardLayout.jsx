import React, { useState } from 'react';
import { Outlet } from 'react-router';
import DashboardSidebar from '../Components/Dashboard/DashboardSidebar';
import { FiMenu, FiX } from 'react-icons/fi';

const DashboardLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    const closeSidebar = () => setIsSidebarOpen(false);

    return (
        <div className="min-h-screen bg-gray-100 relative">
            {/* Mobile Header */}
            <div className="md:hidden p-4 flex justify-between items-center bg-blue-950 text-white">
                <span className="text-xl font-bold">AthleticHub</span>
                <button onClick={toggleSidebar}>
                    <FiMenu className="h-7 w-7" />
                </button>
            </div>

            {/* Desktop Sidebar */}
            <div className="hidden md:block fixed top-0 left-0 w-1/5 h-screen bg-blue-950 text-white p-6 z-50">
                <DashboardSidebar />
            </div>

            {/* Mobile Sidebar Slide-in */}
            {isSidebarOpen && (
                <div className="fixed inset-0 bg-opacity-50 z-50 md:hidden flex">
                    <div className="w-64 h-full bg-blue-950 text-white p-6 relative">
                        <button onClick={closeSidebar} className="absolute top-4 right-4">
                            <FiX className="h-6 w-6" />
                        </button>
                        <DashboardSidebar />
                    </div>
                    <div
                        onClick={closeSidebar}
                        className="flex-1"
                    ></div>
                </div>
            )}

            {/* Main Content */}
            <div className="md:ml-[20%] p-6 pt-20 md:pt-6">
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardLayout;
