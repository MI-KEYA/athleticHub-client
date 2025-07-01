import React from 'react';
import { MdOutlineEditCalendar, MdOutlineEmojiEvents, MdOutlineLocationOn } from 'react-icons/md';
import { Link } from 'react-router';

const AllEventsCard = ({ eventdata }) => {
    const { _id, eventname, event, photo, eventdate, location } = eventdata
    // console.log(eventname);
    return (

        <div className="card bg-base-100 shadow-sm flex flex-col h-full">
            <figure className="px-5 pt-5">
                <img
                    src={photo}
                    alt="event"
                    className="rounded-xl h-[200px] w-full object-cover"
                />
            </figure>

            <div className="flex flex-col px-3 py-5 flex-grow">
                <h2 className="card-title min-h-[3rem]">{eventname}</h2>

                <p className='flex items-center gap-1 text-gray-500 mt-4'><MdOutlineEmojiEvents /> {event}</p>
                <p className='flex items-center gap-1 text-gray-500'><MdOutlineEditCalendar /> {eventdate}</p>
                <p className='flex items-center gap-1 text-gray-500'><MdOutlineLocationOn /> {location}</p>

                <div className="mt-auto pt-4">
                    <Link to={`/events/${_id}`} className='btn bg-gradient-to-r from-blue-900 to-blue-300 text-white rounded-full w-full'>
                        Details
                    </Link>
                </div>
            </div>
        </div>
    )
};
export default AllEventsCard;