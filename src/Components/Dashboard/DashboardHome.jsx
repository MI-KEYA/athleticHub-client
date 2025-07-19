import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import Loading from '../Loading';

const DashboardHome = () => {
    const [eventCount, setEventCount] = useState(0);
    const [bookingCount, setBookingCount] = useState(0);
    const { user, loading } = useContext(AuthContext); // assumes user._id is available


    useEffect(() => {
        // Fetch total events
        fetch('https://athletic-hub-server-tawny.vercel.app/events')
            .then(res => res.json())
            .then(data => setEventCount(data.length))
            .catch(err => console.error('Failed to load events:', err));

        // Fetch user-specific bookings (based on _id)
        if (user?.email) {
            fetch(`https://athletic-hub-server-tawny.vercel.app/bookings?useremail=${user.email}`)
                .then(res => res.json())
                .then(data => setBookingCount(data.length))
                .catch(err => console.error('Failed to load bookings:', err));
        }
    }, [user?.email]);

    if (loading) {
        return <Loading />;
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 shadow rounded-xl text-center">
                <h3 className="text-xl font-semibold mb-2">Total Events</h3>
                <p className="text-3xl font-bold text-blue-900">{eventCount}</p>
            </div>

            <div className="bg-white p-6 shadow rounded-xl text-center">
                <h3 className="text-xl font-semibold mb-2">My Bookings</h3>
                <p className="text-3xl font-bold text-blue-900">{bookingCount}</p>
            </div>

            <div className="bg-white p-6 shadow rounded-xl text-center">
                <h3 className="text-xl font-semibold mb-2">My Profile</h3>
                <p className="text-gray-600">{user?.displayName || 'Profile info here'}</p>
            </div>
        </div>
    );
};

export default DashboardHome;
