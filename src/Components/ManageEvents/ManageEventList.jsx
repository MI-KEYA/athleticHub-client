import React from 'react';
import { MdOutlineDelete, MdOutlineSecurityUpdateGood } from "react-icons/md";
import { Link } from 'react-router';
import Swal from 'sweetalert2';


const ManageEventList = ({ events, index, eventData, setEventData }) => {
    const { _id, event, eventname, photo } = events


    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://athletic-hub-server-tawny.vercel.app/events/${_id}`, {
                    method: 'DELETE',

                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            // remove event from the state
                            const remainingEvents = eventData.filter(updatedEv => updatedEv._id !== _id)
                            setEventData(remainingEvents)
                        }
                    })

            }
        });

    }

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
                    <button
                        onClick={() => handleDelete(_id)}
                        className='btn border border-blue-950 text-blue-950 rounded-full flex items-center gap-1'>
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