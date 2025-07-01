import React, { useState, useEffect } from 'react';
import AllEventList from './AllEventList';
import { Helmet } from 'react-helmet';
import { AuthContext } from '../../Context/AuthContext';
import Loading from '../Loading';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import AllEventsCard from './AllEventsCard';


const AllEvents = () => {
    const [events, setEvents] = useState([])
    const [loading, setLoading] = useState(true)
    const [searchText, setSearchText] = useState('');
    const [filteredEvents, setFilteredEvents] = useState([]);
    const [viewMode, setViewMode] = useState('table')

    useEffect(() => {

        fetch('https://athletic-hub-server-tawny.vercel.app/events')
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


            <div className="w-full px-2 lg:w-4/5 lg:mx-auto my-5">
                <div className="grid grid-cols-1 md:grid-cols-6  gap-4 justify-between my-8">
                    <div className='md:col-span-5'>
                        <form
                            className=" flex md:flex-row items-center md:px-0 px-10 gap-2"
                            onSubmit={handleSearch}
                        >
                            <input
                                type="text"
                                placeholder="Search by event name or location..."
                                className="input input-bordered  max-w-xs text-blue-900 rounded-xl"
                                value={searchText}
                                onChange={e => setSearchText(e.target.value)}
                            />
                            <button
                                type="submit"
                                className="btn bg-gradient-to-r from-blue-900 to-blue-400 text-white rounded-xl"
                            >
                                Search
                            </button>
                        </form>
                    </div>
                    <div className="dropdown dropdown-bottom px-10 md:px-0 mt-2 md:mt-0">
                        <div tabIndex={0} role="button" className="btn rounded-xl bg-gradient-to-r from-blue-900 to-blue-400 text-white  text-950 m-1 flex items-center gap-2">Select <MdOutlineArrowDropDown className='text-2xl' /></div>
                        <ul tabIndex={0} className="dropdown-content menu bg-white rounded-box z-1 w-50 p-2 shadow-sm">
                            <li><button onClick={() => setViewMode('table')}>Table</button></li>
                            <li><button onClick={() => setViewMode('card')}>Card</button></li>

                        </ul>
                    </div>
                </div>


                {viewMode === 'table' ? (
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

                                        <AllEventList
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
                ) : (
                    <div className=' grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                        {
                            filteredEvents.length > 0 ? (
                                filteredEvents.map((eventdata) => (
                                    <AllEventsCard
                                        key={eventdata._id}
                                        eventdata={eventdata}
                                    />
                                ))
                            ) : (
                                <p className="text-center text-gray-500 col-span-full">No matching events found.</p>
                            )
                        }
                    </div>
                )}
            </div>
        </div>
    );
};

export default AllEvents;
