import React from 'react';

const Hero = ({ images = [] }) => {
    // fallback to default static images if dynamic ones aren't passed
    const defaultImages = [
        '/assets/slider1.png',
        '/assets/slider2.png',
        '/assets/slider3.png',
        '/assets/slider4.png'
    ];

    const slides = images.length > 0 ? images : defaultImages;

    return (
        <div className="carousel w-full mb-10 rounded-xl h-[300px]">
            {slides.map((img, index) => (
                <div
                    key={index}
                    id={`slide${index}`}
                    className="carousel-item relative w-full"
                >
                    <img
                        src={img}
                        alt={`Slide ${index + 1}`}
                        className="w-full object-cover h-full"
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
    );
};

export default Hero;
