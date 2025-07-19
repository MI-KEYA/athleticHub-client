import React from 'react';

const Help = () => {
    return (
        <div className='w-2/3 mx-auto my-10'>
            <h1 className='text-2xl font-semibold my-8 text-blue-900'>Help/Faq's</h1>

            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title font-semibold">How do I create an account?</div>
                <div className="collapse-content text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
            </div>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold">I forgot my password. What should I do?</div>
                <div className="collapse-content text-sm">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</div>
            </div>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold">How do I update my profile information?</div>
                <div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
            </div>

            {/* AthleticHub specific FAQs */}
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold">What is AthleticHub?</div>
                <div className="collapse-content text-sm">AthleticHub is an event booking platform that allows athletes to find and register for athletic competitions easily.</div>
            </div>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold">How do I book an event on AthleticHub?</div>
                <div className="collapse-content text-sm">Browse available events, select the one you want, and click the "Book Now" button. Follow the prompts to complete your registration.</div>
            </div>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold">Can I cancel or change my event booking?</div>
                <div className="collapse-content text-sm">Yes, you can cancel or modify your booking from your account dashboard, but please check the event's cancellation policy before doing so.</div>
            </div>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold">Are there any fees to use AthleticHub?</div>
                <div className="collapse-content text-sm">Creating an account is free. Some events may require a registration fee which will be displayed during booking.</div>
            </div>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold">How do I know if my booking is confirmed?</div>
                <div className="collapse-content text-sm">Once your booking is complete, you will receive a confirmation email with event details and a booking reference number.</div>
            </div>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold">Can I participate in multiple events?</div>
                <div className="collapse-content text-sm">Yes, you can register for multiple events as long as they do not overlap in schedule.</div>
            </div>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold">How do I contact event organizers?</div>
                <div className="collapse-content text-sm">Event organizer contact details are provided on the event page. You can reach out to them via email or phone.</div>
            </div>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold">Is AthleticHub mobile-friendly?</div>
                <div className="collapse-content text-sm">Yes, AthleticHub is fully responsive and works well on mobile devices and tablets.</div>
            </div>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold">What should I do if I encounter a technical issue?</div>
                <div className="collapse-content text-sm">If you face any issues, please contact our support team via the "Contact Us" page or email support@athletichub.com.</div>
            </div>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold">How do I receive updates about upcoming events?</div>
                <div className="collapse-content text-sm">Subscribe to our newsletter or follow AthleticHub on social media to stay updated on upcoming athletic events and announcements.</div>
            </div>
        </div>
    );
};

export default Help;
