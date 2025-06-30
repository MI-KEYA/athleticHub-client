import React from 'react';
import { motion } from "motion/react";

const Hero = () => {
    return (
        <div>
            <div
                className="h-500px"
                style={{
                    backgroundImage: "url('/bg.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                {/* You can add hero content here if needed */}
                <div className="flex flex-col justify-center items-center text-center text-white h-[calc(100vh-64px)]">

                    <motion.h1

                        initial={{ scale: 0 }}
                        animate={{ scale: 1, transition: { duration: 4 } }}
                        className="text-5xl text-blue-300 font-bold text-center my-10">Welcome to <motion.span
                            animate={
                                {
                                    color: ["#3B82F6", "#8B5CF6", "#EC4899"],
                                    transition: { duration: 4, repeat: Infinity }
                                }
                            }>
                            AthleticHub</motion.span>
                    </motion.h1>
                    <p className="text-lg font-semibold text-blue-800 mt-4">Be one of us.</p>


                </div>
            </div>
        </div>
    );
};

export default Hero;