import React, { Suspense, useEffect, useState } from 'react';


import { motion } from "motion/react";
import Hero from './Hero';
import Events from './Events';
import ExtraSection from './ExtraSection';
import MostBookedEvents from './MostBookedEvents';
import { Helmet } from 'react-helmet';

const Home = () => {
    const [events, setEvents] = useState([])


    useEffect(() => {
        fetch('http://localhost:3000/events')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])
    const sortedEvents = [...events].sort((a, b) => new Date(a.datetime) - new Date(b.datetime));
    const featuredEvents = sortedEvents.slice(0, 6);
    const heroImages = sortedEvents.slice(0, 3).map(event => event.photo);
    return (
        <div className=' lg:w-2/3 mx-auto my-10 '>
            <Helmet><title>AthleticHub | Home</title></Helmet>
            <motion.h1

                initial={{ scale: 0 }}
                animate={{ scale: 1, transition: { duration: 4 } }}
                className="text-3xl font-bold text-center mt-20 mb-10">Unleash <motion.span
                    animate={
                        {
                            color: ["#CC6CE7", "#5DE2E7", "#EFC3CA"],
                            transition: { duration: 2, repeat: Infinity }
                        }
                    }>
                    the Athlete</motion.span>  in You!
            </motion.h1>

            <Hero images={heroImages} />
            <Suspense fallback={"loading.."}>
                <Events events={featuredEvents} />

            </Suspense>
            <MostBookedEvents />
            <ExtraSection />
        </div>
    );
};

export default Home;