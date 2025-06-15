import React from 'react';
import { MdOutlineBookmarkBorder } from 'react-icons/md';
import { Link } from 'react-router';

const BookEventList = ({ eventdata, index }) => {
    const { event, eventname, photo } = eventdata
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

                    <button className='btn flex-end mt-3 bg-blue-950 text-white rounded-full  lg:flex'><MdOutlineBookmarkBorder />Booking</button>
                </div>




            </td>
        </tr>
    );
};

export default BookEventList;