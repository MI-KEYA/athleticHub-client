import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router';
import { MdOutlineAccessTime, MdOutlineBookmarkBorder, MdOutlineEditCalendar, MdOutlineEmojiEvents, MdOutlineLocationOn } from "react-icons/md";
import axios from 'axios';
import Swal from 'sweetalert2';
import { AuthContext } from '../Context/AuthContext';
import { Helmet } from 'react-helmet';
import Loading from './Loading';

const EventDetails = () => {
    const { id } = useParams();
    const { user } = useContext(AuthContext);

    const [event, setEvent] = useState(null);
    const [isBooked, setIsBooked] = useState(false);
    const [loading, setLoading] = useState(true);
    const [totalBookings, setTotalBookings] = useState(0);

    // Fetch event details
    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:3000/events/${id}`)
            .then(res => {
                setEvent(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to fetch event", err);
                setLoading(false);
            });
    }, [id]);

    // Fetch total bookings and check if user booked
    useEffect(() => {
        if (!event?._id) return;

        axios.get('http://localhost:3000/bookings')
            .then(res => {
                const eventBookings = res.data.filter(b => b.eventId === event._id);
                setTotalBookings(eventBookings.length);

                if (user) {
                    const userBooked = eventBookings.find(b => b.useremail === user.email);
                    setIsBooked(!!userBooked);
                }
            })
            .catch(err => {
                console.error("Error fetching bookings:", err);
            });
    }, [event, user]);

    // Handle booking
    const handleBooking = () => {
        if (!user) {
            Swal.fire({
                icon: 'error',
                title: 'You must be logged in to book',
            });
            return;
        }

        const newBooking = {
            eventId: event._id,
            eventname: event.eventname,
            datetime: event.datetime,
            photo: event.photo,
            useremail: user.email,
            username: user.displayName || "Anonymous"
        };

        axios.post('http://localhost:3000/bookings', newBooking)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        title: "Event Booked Successfully!",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    setIsBooked(true);
                    setTotalBookings(prev => prev + 1); // increment total bookings
                }
            })
            .catch(err => {
                console.error(err);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: err.message,
                });
            });
    };

    if (loading) return <Loading />;
    if (!event) return <div className="text-center py-10 text-red-500">Event not found.</div>;

    return (
        <div className="bg-base-100 lg:w-2/3 mx-auto lg:flex shadow-sm my-10 rounded-lg border border-gray-200">
            <Helmet><title>AthleticHub | EventDetails</title></Helmet>
            <figure className="px-10 py-10 lg:w-1/2">
                <img
                    src={event.photo}
                    alt="event"
                    className="rounded-xl w-full object-cover"
                />
            </figure>
            <div className="lg:pt-10 lg:pr-10 p-5 lg:w-1/2 flex flex-col justify-between">
                <div className="flex flex-col gap-4">
                    <h2 className="card-title font-bold text-blue-950 text-2xl">{event.eventname}</h2>
                    <p className="text-gray-500">{event.description}</p>

                    <p className="flex items-center gap-1"><MdOutlineEmojiEvents /> {event.event}</p>
                    <p className="flex items-center gap-1"><MdOutlineLocationOn /> {event.location}</p>
                    <p className="flex items-center gap-1">
                        <MdOutlineEditCalendar />
                        {new Date(event.datetime).toLocaleDateString('en-US', {
                            weekday: 'short',
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                        })}
                    </p>
                    <p className="flex items-center gap-1">
                        <MdOutlineAccessTime />
                        {new Date(event.datetime).toLocaleTimeString('en-US', {
                            hour: '2-digit',
                            minute: '2-digit',
                            hour12: true
                        })}
                    </p>

                    <p className="text-gray-500">Added By: {event.username}</p>

                    {/* ✅ Total bookings */}
                    <p className="flex items-center text-blue-600 gap-1 ">
                        <MdOutlineBookmarkBorder />
                        {totalBookings} Booking{totalBookings !== 1 && 's'}
                    </p>
                </div>

                <div className="flex gap-4 pt-2">
                    <button
                        onClick={handleBooking}
                        disabled={isBooked}
                        className={`btn mt-3 rounded-full flex items-center gap-2 ${isBooked ? "bg-gray-400 cursor-not-allowed" : "bg-blue-950 text-white"}`}
                    >
                        <MdOutlineBookmarkBorder />
                        {isBooked ? "Already Booked" : "Book Event"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EventDetails;