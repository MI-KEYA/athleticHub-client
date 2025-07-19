import React from 'react';
import CricketCard from './CricketCard';

const Cricket = ({ cricketEvents }) => {

    const sorted = [...cricketEvents].sort((a, b) => new Date(b.date) - new Date(a.date));
    const latestCricket = sorted.slice(0, 8);

    return (
        <div className='lg:w-4/5 w-4/5 md:w-11/12 mx-auto my-10 mb-20'>
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