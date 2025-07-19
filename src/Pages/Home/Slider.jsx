import React from 'react';
import { motion } from "motion/react";

const Slider = ({ images = [] }) => {
    // fallback to default static images if dynamic ones aren't passed
    const defaultImages = [
        '/assets/slider1.png',
        '/assets/slider2.png',
        '/assets/slider3.png',
        '/assets/slider4.png'
    ];

    const slides = images.length > 0 ? images : defaultImages;

    return (

        <div className=''>
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
            <div className="flex justify-center">
                <div className="carousel lg:w-4/5 w-4/5 md:w-11/12 mx-auto mb-10 rounded-xl h-[400px] ">
                    {slides.map((img, index) => (
                        <div
                            key={index}
                            id={`slide${index}`}
                            className="carousel-item relative w-full"
                        >
                            <img
                                src={img}
                                alt={`Slide ${index + 1}`}
                                className="w-full object-cover object-center h-[400px]"
                            />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href={`#slide${(index - 1 + slides.length) % slides.length}`} className="btn btn-circle">
                                    ❮
                                </a>
                                <a href={`#slide${(index + 1) % slides.length}`} className="btn btn-circle">
                                    ❯
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Slider;
