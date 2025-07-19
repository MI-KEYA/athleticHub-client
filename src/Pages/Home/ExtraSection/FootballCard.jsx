import React from 'react';
import { MdOutlineEditCalendar, MdOutlineEmojiEvents, MdOutlineLocationOn } from 'react-icons/md';
import { Link } from 'react-router';

const FootballCard = ({ events }) => {
    const { _id, eventname, event, photo, eventdate } = events
    // console.log(eventname);
    return (

        <Link to={`events/${_id}`}>
            <div className="card bg-base-100 shadow-sm flex flex-col h-full transform transition duration-300 ease-in-out hover:shadow-xl hover:scale-105 hover:-translate-y-1">
                <figure>
                    <img
                        src={photo}
                        alt="event"
                        className="rounded-t-xl h-[180px] w-full object-cover"
                    />
                </figure>

                <div className="flex flex-col px-3 pt-1 mb-4 flex-grow">
                    <h2 className="card-title min-h-[3rem]">{eventname}</h2>
                    <p className='flex items-center gap-1 text-gray-500 mt-2'><MdOutlineEmojiEvents /> {event}</p>
                    <p className='flex items-center gap-1 text-gray-500'><MdOutlineEditCalendar /> {eventdate}</p>
                </div>
            </div>
        </Link>

    )
};

export default FootballCard;