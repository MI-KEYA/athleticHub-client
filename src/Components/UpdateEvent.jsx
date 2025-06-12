import React from 'react';
import { useLoaderData } from 'react-router';

const UpdateEvent = () => {
    const eventData = useLoaderData();
    const { event, eventname, photo, description, username, useremail, eventdate } = eventData;
    console.log(event);
    return (
        <div className='my-10 p-10 rounded-3xl w-10/11  lg:w-2/3 mx-auto border-2 border-blue-900'>

            <div className='mb-10 text-center text-blue-950 space-y-4'>
                <h2 className='lg:text-6xl text-3xl font-semibold'>Update Event</h2>

            </div>
            <div>
                <form >
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
                                <option value="Hurdle Race">Hurdle Race</option>
                            </select>
                        </fieldset>
                        {/* description */}
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                            <label className="label">Description</label>
                            <input type="text" name='description' className="input w-full" defaultValue={description}
                                placeholder="Description" />
                        </fieldset>
                        {/* event Date */}
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                            <label className="label">Event Date</label>
                            <input type="date" name='eventdate' className="input w-full" defaultValue={eventdate}
                                placeholder="Event Date" />
                        </fieldset>
                        {/* creator detail */}
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                            <label className="label">Creator Email</label>
                            <input type="text" name='useremail' className="input w-full" defaultValue={useremail}
                                placeholder="Creator Email" />
                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                            <label className="label">Creator Name</label>
                            <input type="text" name='username' className="input w-full" defaultValue={username}
                                placeholder="Creator Name" />
                        </fieldset>
                    </div>
                    {/* photourl */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border my-6 p-4">
                        <label className="label">Event PhotoURL</label>
                        <input type="text" name='photo' className="input w-full" defaultValue={photo}
                            placeholder="PhotoURL" />
                    </fieldset>
                    <input type="submit" className='btn text-white  hover:bg-blue-900 bg-blue-950 
                                w-full' name="" value='Add Event' />
                </form>
            </div>
        </div>
    );
};

export default UpdateEvent;