import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../../Context/AuthContext';
import { MdOutlineEditCalendar, MdOutlineAccessTime, MdOutlineDelete } from "react-icons/md";
import Swal from 'sweetalert2';
import { Link } from 'react-router';
import { Helmet } from 'react-helmet';
import Loading from '../Loading';

const MyBookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!user?.email) return;

        axios.get(`https://athletic-hub-server-tawny.vercel.app/bookings?useremail=${user.email}`)
            .then(res => {
                setBookings(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching bookings", err);
                setLoading(false);
            });
    }, [user]);

    if (loading) return <Loading />;

    if (bookings.length === 0) return <div className="text-center py-10 text-gray-500">No events booked yet.</div>;

    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://athletic-hub-server-tawny.vercel.app/bookings/${_id}`, {
                    method: 'DELETE'
                })
                    .then(() => {
                        setBookings(prev => prev.filter(booking => booking._id !== _id));
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    })

                const remainingEvents = bookings.filter(updatedEv => updatedEv._id !== _id)
                setBookings(remainingEvents)

            }
        });
    }

    return (
        <div className="max-w-4xl mx-auto p-4 min-h-screen mb-16">
            <Helmet><title>AthleticHub | MyBookings</title></Helmet>
            <h2 className="text-2xl font-bold mb-6 text-blue-950">My Booked Events</h2>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {bookings.map((booking, idx) => (
                    <div key={idx} className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
                        <img src={booking.photo} alt={booking.eventname} className="w-full h-48 object-cover" />
                        <div className="p-4 space-y-2">
                            <h3 className="text-xl font-semibold text-blue-900">{booking.eventname}</h3>
                            <div className="flex items-center gap-2 text-gray-600">
                                <MdOutlineEditCalendar />
                                {new Date(booking.datetime).toLocaleDateString()}
                            </div>
                            <div className="flex items-center gap-2 text-gray-600">
                                <MdOutlineAccessTime />
                                {new Date(booking.datetime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </div>
                            <div className='flex gap-5 items-center mt-3'>
                                <button
                                    onClick={() => handleDelete(booking._id)}
                                    className='btn  border border-blue-950 text-blue-950 rounded-full flex items-center gap-1'>
                                    <MdOutlineDelete />
                                    Delete
                                </button>


                                <Link to={`/events/${booking.eventId}`} className='btn  border border-blue-950 text-blue-950 rounded-full '>Details</Link>
                            </div>

                        </div>
                    </div>
                ))}

            </div>

        </div>
    );
};

export default MyBookings;