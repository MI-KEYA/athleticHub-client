
import React from 'react';
import { Link } from 'react-router';

const EventCards = ({ events }) => {
    const { _id, eventname, description, photo, eventdate } = events
    // console.log(eventname);
    return (

        <div className="card bg-base-100  shadow-sm">
            <figure className="px-10 pt-10">
                <img
                    src={photo}
                    alt="event"
                    className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{eventname}</h2>
                <p>{description}</p>
                <div className="badge badge-outline badge-primary">Event-Date: {eventdate}</div>
                <Link to={`events/${_id}`} className='btn mt-3 bg-gradient-to-r from-blue-400 to-purple-400 text-white rounded-full  lg:flex'>Details</Link>
            </div>
        </div>

    );
};

export default EventCards;