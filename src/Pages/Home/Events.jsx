import React from 'react';
import EventCards from './EventCards';

const Events = ({ events }) => {
    console.log(events);
    return (
        <div className='my-10'>
            <h2 className='text-center font-bold  text-3xl'>Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
                {
                    events.map(events => <EventCards
                        events={events}
                        key={events._id}>

                    </EventCards>)
                }
            </div>
        </div>
    );
};

export default Events;