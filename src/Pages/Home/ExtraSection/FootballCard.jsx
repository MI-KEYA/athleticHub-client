import React from 'react';
import { MdOutlineEditCalendar, MdOutlineEmojiEvents, MdOutlineLocationOn } from 'react-icons/md';
import { Link } from 'react-router';

const FootballCard = ({ events }) => {
    const { _id, eventname, event, photo, eventdate, location } = events
    // console.log(eventname);
    return (

        <div className="card bg-base-100  shadow-sm">
            <figure className="px-5 pt-5">
                <img
                    src={photo}
                    alt="event"
                    className="rounded-xl h-[200px]" />
            </figure>
            <div className="flex flex-col px-3 py-5 ">
                <h2 className="card-title">{eventname}</h2>
                <p className='flex items-center gap-1 text-gray-500 mt-4'><MdOutlineEmojiEvents /> {event}</p>
                <p className='flex items-center gap-1 text-gray-500 '><MdOutlineEditCalendar /> {eventdate}</p>
                <p className='flex items-center gap-1 text-gray-500 '><MdOutlineLocationOn /> {location}</p>

                <Link to={`events/${_id}`} className='btn mt-3 bg-gradient-to-r from-blue-900 to-blue-300 text-white rounded-full  lg:flex'>Details</Link>
            </div>
        </div>
    )
};

export default FootballCard;