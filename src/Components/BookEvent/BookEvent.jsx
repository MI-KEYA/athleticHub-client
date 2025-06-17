import React, { useState, useEffect } from 'react';
import BookEventList from './BookEventList';
import { Helmet } from 'react-helmet';
import { AuthContext } from '../../Context/AuthContext';
import Loading from '../Loading';

const BookEvent = () => {
    const [events, setEvents] = useState([])
    const [loading, setLoading] = useState(true)
    const [searchText, setSearchText] = useState('');
    const [filteredEvents, setFilteredEvents] = useState([]);

    useEffect(() => {

        fetch('http://localhost:3000/events')
            .then(res => res.json())
            .then(data => {
                setEvents(data);
                setFilteredEvents(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching events:", error);
                setLoading(false);
            });
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        const filtered = events.filter(event =>
            event.eventname.toLowerCase().includes(searchText.toLowerCase()) ||
            (event.location && event.location.toLowerCase().includes(searchText.toLowerCase()))
        );
        setFilteredEvents(filtered);
    };

    if (loading) {
        return <Loading />
    }

    return (
        <div>
            <Helmet><title>AthleticHub | All Events</title></Helmet>
            <h1 className='text-center text-3xl font-semibold text-blue-950 my-10'>
                Book Your Preferred Event
            </h1>

            <div className="w-full px-2 lg:w-2/3 lg:mx-auto my-5">
                <div className="my-8">
                    <form
                        className="flex flex-col md:flex-row items-center justify-center gap-4"
                        onSubmit={handleSearch}
                    >
                        <input
                            type="text"
                            placeholder="Search by event name or location..."
                            className="input input-bordered w-[300px] max-w-xs text-blue-900 rounded-full"
                            value={searchText}
                            onChange={e => setSearchText(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="btn bg-gradient-to-r from-blue-900 to-blue-400 text-white rounded-full"
                        >
                            Search
                        </button>
                    </form>
                </div>

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
                            {filteredEvents.length > 0 ? (
                                filteredEvents.map((eventdata, index) => (
                                    <BookEventList
                                        key={eventdata._id}
                                        index={index}
                                        eventdata={eventdata}
                                    />
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4" className="text-center py-4 text-gray-500">
                                        No matching events found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default BookEvent;
