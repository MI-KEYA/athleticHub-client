import React from 'react';
import Header from '../Components/Header';
import Hero from '../Components/Hero';
import { motion } from "motion/react"

const Home = () => {
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
        </div>
    );
};

export default Home;