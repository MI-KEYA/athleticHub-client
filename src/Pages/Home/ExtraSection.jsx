import React from 'react';
import { Link } from 'react-router';

const ExtraSection = () => {
    return (
        <div
            className="hero h-[300px] "
            style={{
                backgroundImage:
                    "url(https://i.ibb.co/dsJdrvbK/slider2.png)",
            }}
        >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">
                        Book Or Add Your First Event With Us.
                    </p>
                    <div className='flex items-center gap-5'>
                        <Link to='/bookEvent' className="btn btn-primary">Book Now</Link>
                        <Link to='/createEvent' className="btn btn-primary">Create Now</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtraSection;