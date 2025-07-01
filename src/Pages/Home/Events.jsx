import React from 'react';
import EventCards from './EventCards';
import { Link } from 'react-router';
import { MdOutlineReadMore } from 'react-icons/md';

const Events = ({ events }) => {
    // console.log(events);
    return (
        <div className='w-4/5 mx-auto my-10'>
            <h2 className='text-center font-bold  text-3xl'>Upcoming Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 my-10">
                {
                    events.map(events => <EventCards
                        events={events}
                        key={events._id}>

                    </EventCards>)
                }
            </div>
            <Link to='/AllEvents' className='btn flex justify-center items-center rounded-full w-1/5 mx-auto bg-blue-950 text-white '>
                See More<MdOutlineReadMore className='text-xl' />
            </Link>
        </div>
    );
};

export default Events;