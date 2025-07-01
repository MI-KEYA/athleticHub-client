import React from 'react';
import { Link } from 'react-router';

const AllEventsList = ({ eventdata, index }) => {
    const { _id, event, eventname, photo } = eventdata

    return (
        <tr>
            <th>
                <label>
                    {index + 1}
                </label>
            </th>
            <td>
                <div className="flex items-center gap-2">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img
                                src={photo}
                                alt="event" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{eventname}</div>
                    </div>
                </div>
            </td>
            <td>
                {event}
            </td>

            <td>

                <div className="flex  gap-4 mt-2 pb-5">

                    <Link to={`/events/${_id}`} className='btn rounded-full bg-blue-950 text-white'>Details</Link>
                </div>




            </td>
        </tr>
    );
};

export default AllEventsList;