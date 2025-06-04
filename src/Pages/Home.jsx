import React from 'react';
import Header from '../Components/Header';
import Hero from '../Components/Hero';

const Home = () => {
    return (
        <div className=' w-2/3 mx-auto mb-10'>
            <h2 className="text-3xl font-bold text-center text-blue-950 my-10">
                Unleash the Athlete in You
            </h2>
            <Hero />
        </div>
    );
};

export default Home;