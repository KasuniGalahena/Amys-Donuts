import React from 'react';
import logo from '../assets/images/logo.png';
import hand from '../assets/images/homer-simpson-doughnut-bart-simpson-lisa-simpson-ned-flanders-cartoon-donut-e7279c0b7cf8e0ab82b9c109c16f9369.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='w-full bg-darkyellow'>
      <div className='container mx-auto'>
        <div className='flex gap-4 items-center justify-center'>
          <div className='sm:w-1/5 sm:block hidden py-12'>
            <Link to={'/'}>
              <img src={logo} alt="Logo" className='w-64' />
            </Link>
          </div>
          <div className='sm:w-1/5 w-1/2 sm:py-16 py-5'>
            <div className='sm:mt-2 mt-2 font-mali lg:text-xl text-secondary hover:underline'><Link to="/products">Menu</Link></div>
            <div className='sm:mt-2 mt-2 font-mali lg:text-xl text-secondary hover:underline'><Link to="/about">About us</Link></div>
            <div className='sm:mt-2 mt-2 font-mali lg:text-xl text-secondary hover:underline'><Link to="/location">Location</Link></div>
            <div className='sm:mt-2 mt-2 font-mali lg:text-xl text-secondary hover:underline'><Link to="/careers">Careers</Link></div>
          </div>
          <div className='sm:w-1/5 w-1/2 sm:py-16 py-5'>
            <div className='sm:mt-2 mt-2 font-mali lg:text-xl text-secondary hover:underline'><Link to="/contact">Contact us</Link></div>
            <div className='sm:mt-2 mt-2 font-mali lg:text-xl text-secondary hover:underline'><Link to="/privacypolicy">Privacy policy</Link></div>
            <div className='sm:mt-2 mt-2 font-mali lg:text-xl text-secondary hover:underline'><Link to="/termsconditions">Terms & Conditions</Link></div>
          </div>
          <div className='sm:w-1/5 w-full sm:py-16 py-5'>
            <div className='sm:mt-2 mt-2 font-mali lg:text-xl text-secondary hover:underline'>Subscribe to our email</div>
            <input type="email" id="email" name="email" className='rounded-full mt-3 p-1' />
            <div className='sm:mt-2 mt-1 sm:text-right text-center'>
              <Link to="">
                <button className='bg-secondary text-white font-mali lg:text-lg py-1 px-5 rounded-full hover:bg-darkpink duration-500'>Submit</button>
              </Link>
            </div>
          </div>
          <div className='sm:w-1/5 sm:block hidden'>
            <img src={hand} alt="hand" className='w-64' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
