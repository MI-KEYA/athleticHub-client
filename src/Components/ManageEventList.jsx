import React from 'react';
import { MdOutlineDelete, MdOutlineSecurityUpdateGood } from "react-icons/md";
import { Link } from 'react-router';


const ManageEventList = ({ events, index }) => {
    const { _id, event, eventname, photo } = events

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
                <div className="flex flex-wrap gap-2 mt-2">
                    <button className='btn border border-blue-950 text-blue-950 rounded-full flex items-center gap-1'>
                        <MdOutlineDelete />
                        Delete
                    </button>

                    <Link
                        to={`/updateEvents/${_id}`}
                        className='btn border border-blue-950 text-blue-950 rounded-full flex items-center gap-1'
                    >
                        <MdOutlineSecurityUpdateGood />
                        Update
                    </Link>
                </div>

            </td>
        </tr>
    );
};

export default ManageEventList;