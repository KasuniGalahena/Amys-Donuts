import React from 'react';
import { Link } from 'react-router-dom';
import careersimg from '../assets/images/careers-image.jpg';

const Careers = () => {
    return (
        <div className='container mx-auto sm:my-24 my-14'>
            <div className='sm:text-5xl text-3xl font-mali text-primary text-center drop-shadow-md'>Careers</div>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-10'>
                <div className='col-span-1 sm:my-10 font-mali sm:text-lg text-justify'>We are always looking for exceptional people to
                    join our team! Throughout the year, we often have positions available in our shops including Guest Services and Kitchen
                    Production, each with varying schedules. Successful applicants are customer-focused, ambitious, and motivated by a
                    fast-paced dynamic environment.
                    <br /><br />
                    Our mission is to impress and excite our guests in a way that cultivates loyalty and inspires them to share their
                    experiences. We build our actions and decisions around this mission.
                    <br /><br />
                    Our values are Integrity, Perseverance, Accountability, Thoughtfulness, and Positivity. These values describe our
                    everyday culture.
                    <br /><br />
                    Based on our mission and values, if you think The Amy's Donut will be a good fit for you, please click the APPLY NOW
                    button below.
                    <div className='sm:mt-16'>
                        <Link to="">
                            <button className='bg-secondary text-white font-mali lg:text-2xl py-3 px-20 rounded-full hover:bg-darkpink duration-500'>Apply Now</button>
                        </Link>
                    </div>
                </div>
                <div className='sm:my-10'><img src={careersimg} className='w-full rounded-lg' alt='careers-img' /></div>
            </div>
        </div>
    )
}

export default Careers
