import React from 'react';
import { Helmet } from 'react-helmet';
// import bgImage from '../../assets/slider2.png'

const AboutUs = () => {
    return (
        // <div
        //     className="hero min-h-screen"
        //     style={{
        //         backgroundImage: `url(${bgImage})`,
        //         backgroundSize: 'cover',
        //         backgroundPosition: 'center',
        //     }}
        // >
        <div className="w-11/12 md:w-2/3 mx-auto my-16 min-h-screen space-y-12 text-gray-800">
            <Helmet>
                <title>plantCare | AboutUs</title>
            </Helmet>
            {/* Section 1: Intro / Mission */}
            <section className="text-center">
                <h2 className="text-3xl font-bold text-blue-900 mb-4">Welcome to AthleticHub</h2>
                <p className="text-lg md:text-xl max-w-3xl mx-auto">
                    AthleticHub is your go-to platform for discovering, booking, and managing athletic events with style and ease.
                    We blend functionality with modern aesthetics to provide athletes, organizers, and fans with a seamless experience.
                </p>
            </section>

            {/* Section 2: Who We Are */}
            <section className="bg-white border-r-4 border-blue-500 p-6 md:p-10 rounded-2xl shadow-md">
                <h3 className="text-2xl font-semibold mb-3 text-blue-800">Who We Are</h3>
                <p className="text-md md:text-lg">
                    AthleticHub was build by a passionate developer and sports lover who believe that managing athletic events shouldn't be complicated.
                    AthleticHub was created to simplify the process of organizing and joining events, with a beautiful and user-friendly interface.
                </p>
            </section>

            {/* Section 5: Our Vision */}
            <section className="p-6 md:p-10 border-l-4 border-blue-500 bg-white shadow-md rounded-md">
                <h3 className="text-2xl font-semibold mb-3 text-blue-800">Our Vision</h3>
                <p className="text-md md:text-lg">
                    Our vision is to make athletic event participation accessible, efficient, and beautiful for everyone —
                    whether you're a beginner, enthusiast, or seasoned professional.
                </p>
            </section>
        </div>
    );
};
// </div>


export default AboutUs;