import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-blue-950 text-white py-10 mt-16">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
                {/* About Section */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">About AthleticHub</h3>
                    <p className="text-sm text-gray-300">
                        AthleticHub helps athletes discover and participate in sports events across various disciplines.
                        Whether you're a beginner or a pro, join events that match your passion.
                    </p>
                </div>


                {/* Why Choose Us Section */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Why Choose Us</h3>
                    <ul className="text-sm text-gray-300 space-y-1 list-disc list-inside">
                        <li> Easy event discovery & booking</li>
                        <li> Verified hosts and real-time updates</li>
                        <li> Community-driven experience</li>
                        <li> Secure & simple interface</li>
                    </ul>
                </div>

                {/* Contact & Social */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Get in Touch</h3>
                    <p className="text-sm text-gray-300">Email: support@athletichub.com</p>
                    <p className="text-sm text-gray-300 mb-2">Phone: +880-123-456789</p>
                    <p className="text-sm text-gray-300 mb-4">Hours: Mon - Fri (9:00 AM - 6:00 PM)</p>
                    <div className="flex gap-4 text-xl">
                        <a href="https://www.facebook.com/" target='_blank' className="hover:text-blue-400"><FaFacebook /></a>
                        <a href="https://www.instagram.com/" target='_blank' className="hover:text-pink-400"><FaInstagram /></a>
                        <a href="https://x.com/" target='_blank' className="hover:text-sky-400"><FaTwitter /></a>
                    </div>
                    <p className="text-sm text-gray-400 mt-4">© {new Date().getFullYear()} AthleticHub. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
