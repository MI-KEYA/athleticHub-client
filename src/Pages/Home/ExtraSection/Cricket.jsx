import React from 'react';
import CricketCard from './CricketCard';

const Cricket = ({ cricketEvents }) => {

    const sorted = [...cricketEvents].sort((a, b) => new Date(b.date) - new Date(a.date));
    const latestCricket = sorted.slice(0, 8);

    return (
        <div className='w-11/13 mx-auto my-10'>
            <h2 className='text-center font-bold text-3xl mt-20 mb-10 text-blue-900'>Upcoming Cricket Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 my-10">
                {
                    latestCricket.map(events => <CricketCard
                        key={events._id}
                        events={events}
                    />)
                }
            </div>
        </div>
    );
};

export default Cricket;