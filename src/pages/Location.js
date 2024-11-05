import React from 'react';
import locationimg from '../assets/images/location-img.jpg';

const Location = () => {
    return (
        <div className='container mx-auto sm:my-24 my-14'>
            <div className='sm:text-5xl text-3xl font-mali text-primary text-center drop-shadow-md'>Location</div>
            <div className="grid grid-cols-2 gap-12 sm:my-10">
                <div>
                    <img src={locationimg} alt='location-img' className='rounded-lg' />
                </div>
                <div className='text-mali'>
                    <div>Portland, Maine – Commercial St.</div>
                    <div>177 Commercial St. Portland ME 04102</div>
                    <div>
                        <div>Hours</div>
                        <div>Monday-Thursday: 7:00 AM - 4:00 PM</div>
                        <div>Friday-Sunday:	7:00 AM - 6:00 PM</div>
                    </div>
                    <div>
                        <div>Online Ordering Hours</div>
                        <div>Online Ordering Available:	7AM-12PM</div>
                    </div>
                </div>
            </div>
            <iframe class="w-full min-h-screen"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12080.73732861526!2d-74.0059418!3d40.7127847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMDA2JzEwLjAiTiA3NMKwMjUnMzcuNyJX!5e0!3m2!1sen!2sus!4v1648482801994!5m2!1sen!2sus"
                frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0">
            </iframe>
        </div>
    )
}

export default Location;
