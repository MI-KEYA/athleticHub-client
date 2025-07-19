import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { motion } from 'motion/react';
import Loading from '../../Components/Loading';

const Slider = ({ images = [] }) => {
    const defaultImages = [
        '/assets/slider1.png',
        '/assets/slider2.png',
        '/assets/slider3.png',
    ];

    const [isLoading, setIsLoading] = useState(true);
    const slides = images.length ? images : defaultImages;

    useEffect(() => {
        const preloadImages = async () => {
            const promises = slides.map(
                (src) =>
                    new Promise((resolve) => {
                        const img = new Image();
                        img.src = src;
                        img.onload = resolve;
                    })
            );
            await Promise.all(promises);
            setIsLoading(false);
        };
        preloadImages();
    }, [slides]);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className="mx-auto lg:w-2/3 w-4/5 md:w-11/12 rounded-xl overflow-hidden">
            <motion.h1
                initial={{ scale: 0 }}
                animate={{ scale: 1, transition: { duration: 4 } }}
                className="text-3xl font-bold text-center mt-20 mb-10"
            >
                Unleash{' '}
                <motion.span
                    animate={{
                        color: ['#CC6CE7', '#5DE2E7', '#EFC3CA'],
                        transition: { duration: 2, repeat: Infinity },
                    }}
                >
                    the Athlete
                </motion.span>{' '}
                in You!
            </motion.h1>

            <Carousel
                showArrows={false}
                showThumbs={false}
                showStatus={false}
                autoPlay
                interval={3000}
                infiniteLoop
                transitionTime={600}
                swipeable
                emulateTouch
                dynamicHeight={false}
                renderIndicator={(onClickHandler, isSelected, index, label) => {
                    const style = {
                        margin: '0 6px',
                        cursor: 'pointer',
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        display: 'inline-block',
                        backgroundColor: isSelected ? '#000' : '#ccc',
                        transition: 'background-color 0.3s ease',
                    };
                    return (
                        <li
                            style={style}
                            onClick={onClickHandler}
                            onKeyDown={onClickHandler}
                            value={index}
                            key={index}
                            role="button"
                            tabIndex={0}
                            aria-label={`${label} ${index + 1}`}
                        />
                    );
                }}
            >
                {slides.map((src, idx) => (
                    <div key={idx} style={{ maxHeight: '400px', overflow: 'hidden' }}>
                        <img
                            src={src}
                            alt={`Slide ${idx + 1}`}
                            style={{ objectFit: 'cover', width: '100%', height: '400px' }}
                        />
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default Slider;
