
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { MdOutlineDelete, MdOutlineSecurityUpdateGood } from "react-icons/md";


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
        eventname, description, eventdate, photo
    } = events
    return (
        <div className="bg-base-100 lg:w-2/3 mx-auto lg:flex shadow-sm my-10">
            <figure className="px-10 py-10">
                <img
                    src={photo}
                    alt="event"
                    className="rounded-xl w-[300px]" />
            </figure>
            <div className="lg:pt-10 lg:pr-10">
                <div className='flex flex-col items-center gap-4'>
                    <h2 className="card-title ">{eventname}</h2>
                    <p className='text-center'>{description}</p>
                    <div className="badge badge-outline badge-primary">Event-Date: {eventdate}</div>
                </div>
                <div className="flex justify-center gap-4 mt-10 pb-5">
                    <button className='btn flex-end mt-3 bg-blue-950 text-white rounded-full lg:flex'><MdOutlineDelete />Delete</button>
                    <button className='btn flex-end mt-3 bg-blue-950 text-white rounded-full  lg:flex'><MdOutlineSecurityUpdateGood />Update</button>
                </div>
            </div>
        </div>
    );
};

export default EventDetails;