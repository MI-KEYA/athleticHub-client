import React from 'react';
import FootballCard from './FootballCard';

const Football = ({ footballEvents }) => {

    const sorted = [...footballEvents].sort((a, b) => new Date(b.date) - new Date(a.date));
    const latestFootball = sorted.slice(0, 8);


    return (
        <div className='lg:w-4/5 w-4/5 md:w-11/12 mx-auto my-10'>
            <h2 className='text-center font-bold text-3xl mt-20 mb-10 text-blue-900'>Upcoming Football Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 my-10">
                {
                    latestFootball.map(events => (
                        <FootballCard
                            key={events._id}
                            events={events}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default Football;
