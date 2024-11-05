import React from 'react';
import donuteating from '../assets/images/donut-eating.jpg';

const About = () => {
  return (
    <div className='container mx-auto sm:mt-16 mt-14'>
      <div className='sm:text-5xl text-3xl font-mali text-primary text-center drop-shadow-md'>About us</div>

      <div className='grid lg:grid-cols-2 grid-cols-1 gap-10'>
        <div className='col-span-1 sm:my-10 font-mali sm:text-lg text-justify'>We wanted an oasis in the city, to slow down and
          savor the nostalgia and taste of a secret 1920s doughnut recipe in a gorgeous vintage environment.
          <br /><br />
          In early 2002, we set out to create that space. What started as a daydream between
          brothers led to a single storefront on Capitol Hill. Thanks to the incredible support of the communities we’ve
          had the pleasure of serving, Top Pot has grown throughout the Puget Sound.
          <br /><br />
          We remain committed to the simple ideals that brought us this far-quality, inclusiveness,
          and integrity in every single thing we do.
        </div>
        <div className='sm:my-10'><img src={donuteating} className='w-full rounded-lg' alt='donut-eating' /></div>
      </div>
    </div>

  )
}

export default About;
