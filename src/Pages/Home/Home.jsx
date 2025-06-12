import React, { Suspense, useEffect, useState } from 'react';


import { motion } from "motion/react";
import Hero from './Hero';
import Events from './Events';

const Home = () => {
    const [events, setEvents] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/events')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])
    return (
        <div className=' w-2/3 mx-auto mb-10'>
            <motion.h1

                initial={{ scale: 0 }}
                animate={{ scale: 1, transition: { duration: 4 } }}
                className="text-3xl font-bold text-center my-10">Unleash <motion.span
                    animate={
                        {
                            color: ["#CC6CE7", "#5DE2E7", "#EFC3CA"],
                            transition: { duration: 2, repeat: Infinity }
                        }
                    }>
                    the Athlete</motion.span>  in You!
            </motion.h1>

            <Hero />
            <Suspense fallback={"loading.."}>
                <Events events={events} />
            </Suspense>
        </div>
    );
};

export default Home;