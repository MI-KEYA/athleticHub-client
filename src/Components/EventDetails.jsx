
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { MdOutlineAccessTime, MdOutlineBookmarkBorder, MdOutlineEditCalendar, MdOutlineEmojiEvents, MdOutlineLocationOn } from "react-icons/md";



const EventDetails = () => {
    const { id } = useParams()
    const [events, setEvents] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3000/events/${id}`)
            .then(res => res.json())
            .then(data => {
                setEvents(data)
            })
    }, [id])

    const {
        event, eventname, description, photo, datetime, location
    } = events


    // const handleDelete = () => {

    // }

    return (
        <div className="bg-base-100 lg:w-2/3 mx-auto lg:flex shadow-sm my-10">
            <figure className="px-10 py-10">
                <img
                    src={photo}
                    alt="event"
                    className="rounded-xl " />
            </figure>
            <div className="lg:pt-10 lg:pr-10 p-5">
                <div className='flex flex-col  gap-4'>
                    <h2 className="card-title font-bold text-blue-950 text-2xl">{eventname}</h2>
                    <p className=' text-gray-500'>{description}</p>

                    <p className='flex items-center gap-1'><MdOutlineEmojiEvents /> {event}</p>
                    <p className='flex items-center gap-1'><MdOutlineLocationOn /> {location}</p>
                    <p className='flex items-center gap-1'>
                        <MdOutlineEditCalendar />
                        {new Date(datetime).toLocaleDateString('en-US', {
                            weekday: 'short',
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                        })}
                    </p>
                    <p className='flex items-center gap-1'>
                        <MdOutlineAccessTime />
                        {new Date(datetime).toLocaleTimeString('en-US', {
                            hour: '2-digit',
                            minute: '2-digit',
                            hour12: true
                        })}
                    </p>

                </div>
                <div className="flex  gap-4 mt-10 pb-5">

                    <button className='btn flex-end mt-3 bg-blue-950 text-white rounded-full  lg:flex'><MdOutlineBookmarkBorder />Booking</button>
                </div>
            </div>
        </div>
    );
};

export default EventDetails;