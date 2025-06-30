import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';

const CreateEvent = () => {
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <div className="text-center py-10">Loading...</div>; // or a spinner
    }


    const handleSubmit = (e) => {
        e.preventDefault()

        const form = e.target;
        const formData = new FormData(form);
        const newEvent = Object.fromEntries(formData.entries())
        // console.log(newEvent);

        const eventDate = formData.get('eventdate');
        const eventTime = formData.get('eventtime');

        const combinedDateTime = new Date(`${eventDate}T${eventTime}:00`);
        newEvent.datetime = combinedDateTime.toISOString();

        axios.post("https://athletic-hub-server-tawny.vercel.app/events", newEvent)
            .then(res => {

                if (res.data.insertedId) {
                    Swal.fire({
                        title: "Event Added Successfully!",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }

            })
            .catch(err => {
                console.log(err);
                const errorMessage = err.message;
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `${errorMessage}`,

                });
            })
    }

    return (
        <div className='my-10 p-10 rounded-3xl w-10/11  lg:w-2/3 mx-auto border-2 border-blue-900'>
            <Helmet><title>AthleticHub | CreateEvent</title></Helmet>
            <div className='mb-10 text-center text-blue-950 space-y-4'>
                <h2 className='lg:text-6xl text-3xl font-semibold'>Add Event</h2>
                <p className='font-semibold'>Ready to host your next athletic event?</p>
                <p className=''>
                    Fill out the form below to create a new athletic event. Make sure to provide accurate details so participants can find and join your event easily. Once submitted, your event will appear in the Event List and be visible to all users.
                </p>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        {/* Event Name */}
                        <fieldset className="fieldset bg-slate-100 border-base-300 rounded-box border p-4">
                            <label className="label">Event Name</label>
                            <input type="text" name='eventname' className="input w-full"
                                placeholder="Event Name" />
                        </fieldset>
                        {/* Event Type */}
                        <fieldset className="fieldset bg-slate-100 border-base-300 rounded-box border p-4">
                            <label className="label">Event Type</label>
                            <select name='event' className="input w-full">
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
                        {/* description */}
                        <fieldset className="fieldset bg-slate-100 border-base-300 rounded-box border p-4">
                            <label className="label">Description</label>
                            <input type="text" name='description' className="input w-full"
                                placeholder="Description" />
                        </fieldset>
                        {/* event Date */}
                        <fieldset className="fieldset bg-slate-100 border-base-300 rounded-box border p-4">
                            <label className="label">Event Date</label>
                            <input type="date" name='eventdate' className="input w-full"
                                placeholder="Event Date" />
                        </fieldset>
                        <fieldset className="fieldset bg-slate-100 border-base-300 rounded-box border p-4">
                            <label className="label">Location</label>
                            <input type="text" name='location' className="input w-full"
                                placeholder="Event Location" />
                        </fieldset>
                        <fieldset className="fieldset bg-slate-100 border-base-300 rounded-box border p-4">
                            <label className="label">Event Time</label>
                            <input type="time" name='eventtime' className="input w-full" placeholder="Event Time" />
                        </fieldset>
                        {/* creator detail */}
                        <fieldset className="fieldset bg-slate-100 border-base-300 rounded-box border p-4">
                            <label className="label">Creator Email</label>
                            <input type="text" name='useremail' className="input w-full" defaultValue={user.email}
                                placeholder="Creator Email" />
                        </fieldset>
                        <fieldset className="fieldset bg-slate-100 border-base-300 rounded-box border p-4">
                            <label className="label">Creator Name</label>
                            <input type="text" name='username' className="input w-full" defaultValue={user.displayName}
                                placeholder="Creator Name" />
                        </fieldset>
                    </div>
                    {/* photourl */}
                    <fieldset className="fieldset bg-slate-100 border-base-300 rounded-box border my-6 p-4">
                        <label className="label">Event PhotoURL</label>
                        <input type="text" name='photo' className="input w-full"
                            placeholder="PhotoURL" />
                    </fieldset>
                    <input type="submit" className='btn text-white  hover:bg-blue-900 bg-blue-950 
                                w-full' name="" value='Add Event' />
                </form>
            </div>
        </div>
    );
};

export default CreateEvent;