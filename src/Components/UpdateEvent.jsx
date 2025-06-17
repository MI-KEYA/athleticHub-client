import React from 'react';
import { Helmet } from 'react-helmet';
import { useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const UpdateEvent = () => {
    const eventData = useLoaderData();
    const { _id, event, eventname, photo, description, username, useremail, eventdate, location, eventtime, datetime } = eventData;
    const navigate = useNavigate();

    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const values = Object.fromEntries(formData.entries());  // FIXED: assign to values

        const { eventdate, eventtime } = values;

        // Combine date and time into ISO datetime string
        const newDatetime = new Date(`${eventdate}T${eventtime}`).toISOString();

        // Create updated event object with combined datetime
        const updatedEvent = {
            ...values,
            datetime: newDatetime,
        };

        fetch(`http://localhost:3000/events/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updatedEvent),  // FIXED: send updatedEvent here
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        title: "Event Updated Successfully!",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
                navigate('/manageEvents');
            });
    };

    return (
        <div className='my-10 p-10 rounded-3xl w-10/11 lg:w-2/3 mx-auto border-2 border-blue-900'>
            <Helmet><title>AthleticHub | UpdateEvent</title></Helmet>
            <div className='mb-10 text-center text-blue-950 space-y-4'>
                <h2 className='lg:text-6xl text-3xl font-semibold'>Update Event</h2>
            </div>
            <div>
                <form onSubmit={handleUpdate}>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        {/* Event Name */}
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                            <label className="label">Event Name</label>
                            <input type="text" name='eventname' className="input w-full"
                                placeholder="Event Name"
                                defaultValue={eventname}
                            />
                        </fieldset>
                        {/* Event Type */}
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                            <label className="label">Event Type</label>
                            <select name='event' defaultValue={event} className="input w-full">
                                <option value="">Select Event Type</option>
                                <option value="Swimming">Swimming</option>
                                <option value="Sprinting">Sprinting</option>
                                <option value="Long Jump">Long Jump</option>
                                <option value="High Jump">High Jump</option>
                                <option value="Football">Football</option>
                                <option value="Cricket">Cricket</option>
                                <option value="Hurdle Race">Hurdle Race</option>
                            </select>
                        </fieldset>
                        {/* Description */}
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                            <label className="label">Description</label>
                            <input type="text" name='description' className="input w-full" defaultValue={description}
                                placeholder="Description" />
                        </fieldset>
                        {/* Event Date */}
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                            <label className="label">Event Date</label>
                            <input type="date" name='eventdate' className="input w-full"
                                defaultValue={eventdate || datetime?.slice(0, 10)} />
                        </fieldset>
                        {/* Location */}
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                            <label className="label">Location</label>
                            <input type="text" name='location' className="input w-full" defaultValue={location}
                                placeholder="Event Location" />
                        </fieldset>
                        {/* Event Time */}
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                            <label className="label">Event Time</label>
                            <input type="time" name='eventtime' className="input w-full"
                                defaultValue={eventtime || datetime?.slice(11, 16)} />
                        </fieldset>
                        {/* Creator Email */}
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                            <label className="label">Creator Email</label>
                            <input type="text" name='useremail' className="input w-full" defaultValue={useremail}
                                placeholder="Creator Email" />
                        </fieldset>
                        {/* Creator Name */}
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                            <label className="label">Creator Name</label>
                            <input type="text" name='username' className="input w-full" defaultValue={username}
                                placeholder="Creator Name" />
                        </fieldset>
                    </div>
                    {/* Photo URL */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border my-6 p-4">
                        <label className="label">Event PhotoURL</label>
                        <input type="text" name='photo' className="input w-full" defaultValue={photo}
                            placeholder="PhotoURL" />
                    </fieldset>
                    <input type="submit" className='btn text-white hover:bg-blue-900 bg-blue-950 w-full' value='Update Event' />
                </form>
            </div>
        </div>
    );
};

export default UpdateEvent;
