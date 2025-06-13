import React, { use, useState } from 'react';
import ManageEventList from './ManageEventList';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../Context/AuthContext';

const ManageEvents = () => {
    const initialEventData = useLoaderData();
    const { user } = use(AuthContext);
    const [eventData, setEventData] = useState(initialEventData);

    const myEvents = eventData.filter(event => event.username == user?.displayName)

    return (
        <div className="w-full px-2 lg:w-2/3 lg:mx-auto my-5">
            <div className="overflow-x-auto rounded-lg shadow">
                <table className="table w-full text-sm">
                    <thead className="bg-blue-950 text-white">
                        <tr>
                            <th>#</th>
                            <th>Event Name</th>
                            <th>Job</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myEvents.map((events, index) => (
                                <ManageEventList
                                    index={index}
                                    key={events._id}
                                    eventData={eventData}
                                    setEventData={setEventData}
                                    events={events}
                                />
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageEvents;
