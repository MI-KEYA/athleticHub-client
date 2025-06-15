import React from 'react';
import { useLoaderData } from 'react-router';
import BookEventList from '../BookEventList';

const BookEvent = () => {
    const eventData = useLoaderData()
    // console.log(eventData)

    return (
        <div>
            <h1 className='text-center text-3xl font-semibold text-blue-950 my-10'>Book Your Prefered Event</h1>
            <div className="w-full px-2 lg:w-2/3 lg:mx-auto my-5">
                <div className="overflow-x-auto rounded-lg shadow">
                    <table className="table w-full text-sm">
                        <thead className="bg-blue-950 text-white">
                            <tr>
                                <th>#</th>
                                <th>Event Name</th>
                                <th>Event Type</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                eventData.map((eventdata, index) => (<BookEventList
                                    eventdata={eventdata}
                                    index={index}
                                    key={eventdata._id}
                                />))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default BookEvent;