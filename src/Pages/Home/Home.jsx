import React, { Suspense, useEffect, useState } from 'react';



import Slider from './Slider';
import Events from './Events';
import ExtraSection from './ExtraSection/ExtraSection';
import MostBookedEvents from './MostBookedEvents';
import { Helmet } from 'react-helmet';
import Hero from './Hero';

const Home = () => {
    const [events, setEvents] = useState([])


    useEffect(() => {
        fetch('https://athletic-hub-server-tawny.vercel.app/events')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])
    const sortedEvents = [...events].sort((a, b) => new Date(a.datetime) - new Date(b.datetime));
    const featuredEvents = sortedEvents.slice(0, 8);
    const heroImages = sortedEvents.slice(0, 3).map(event => event.photo);
    return (
        <div >
            <Helmet><title>AthleticHub | Home</title></Helmet>
            <Hero />

            <Slider images={heroImages} />
            <Suspense fallback={"loading.."}>
                <Events events={featuredEvents} />

            </Suspense>

            <ExtraSection events={events} />
        </div>
    );
};

export default Home;