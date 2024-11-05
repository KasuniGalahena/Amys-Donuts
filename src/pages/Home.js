import React from 'react';
import { Link } from 'react-router-dom';
import chocolatetuffle from '../assets/images/product-images/7.png';
import coffeedonuts from '../assets/images/product-images/8.png';
import strawberryrainbow from '../assets/images/product-images/5.png';
import whitenutdonut from '../assets/images/product-images/6.png';
import gallery1 from '../assets/images/krispy-kreme-2022-berry-donuts-01.jpg';
import gallery2 from '../assets/images/krispy-kreme-2022-berry-donuts-02.jpg';
import gallery3 from '../assets/images/krispy-kreme-2022-berry-donuts-03.jpg';
import donutvector from '../assets/images/coffee-and-doughnuts-dunkin-donuts-clip-art-donuts-clipart-f9ed031131909f3b0702760f990ceca4.png';
import donutvector2 from '../assets/images/donuts-coffee-and-doughnuts-clip-art-donut-efcb2e7d5cf8494048514b9d67d3ace6.png';

const Home = () => {
  return (
    <>
      {/* banner    */}
      <div className='w-full bg-banner bg-no-repeat bg-center bg-cover flex items-center sm:justify-start justify-center'>
        <div className='grid grid-cols-1 sm:grid-cols-2'>
          <div className='sm:mt-10 sm:ml-14'>
            <div className='grid grid-rows-3 grid-flow-col gap-4'>
              <div className='sm:text-9xl text-5xl font-mali drop-shadow-lg text-primary sm:text-left text-center'>Get Glayed!</div>
              <div className='sm:text-5xl text-xl font-mali text-darkgreen sm:mt-10 mt-6 sm:text-left text-center'>Donut miss out on our fall flavors made with all natural ingredients. Stop by for a sugary treat today!</div>
              <div className='sm:mt-16 mt-8 drop-shadow-lg sm:text-left text-center'>
                <Link to="/products"><button className='bg-secondary text-white font-mali 
            lg:text-3xl py-3 px-20 rounded-full hover:bg-darkpink duration-500'>Order Now</button>
                </Link>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>

      {/* best sellers */}
      <div className='container mx-auto sm:py-24 py-1'>
        <div className='sm:text-7xl text-3xl font-mali text-primary text-center drop-shadow-md'>Best Sellers</div>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 sm:mt-14 mt-6">
          <div className="p-3">
            <div className="">
              <Link to="/product/7" className='w-full hover:animate-pulse cursor-pointer'>
                <img src={chocolatetuffle} alt='donut-img' />
              </Link>
            </div>
          </div>
          <div className="p-3">
            <div className="">
              <Link to="/product/8" className='w-full hover:animate-pulse cursor-pointer'>
                <img src={coffeedonuts} alt='donut-img' />
              </Link>
            </div>
          </div>
          <div className="p-3">
            <div className="">
              <Link to="/product/5" className='w-full hover:animate-pulse cursor-pointer'>
                <img src={strawberryrainbow} alt='donut-img' />
              </Link>
            </div>
          </div>
          <div className="p-3">
            <div className="">
              <Link to="/product/6" className='w-full hover:animate-pulse cursor-pointer'>
                <img src={whitenutdonut} alt='donut-img' />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* yellow background */}
      <div className='bg-lightyellow'>
        <div className='container mx-auto'>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 py-36">
            <div className="flex flex-col justify-center">
              <div className='sm:text-5xl text-3xl font-mali text-secondary sm:text-left text-center uppercase drop-shadow-md'>Gather 'round Amy's Donuts'</div>
              <div className=' sm:mt-10 mt-6 sm:text-2xl text-2xl font-mali'>Amy's Donuts' is a family-owned business and choice destination for gourmet
                donuts, coffee, employment, and positive vibes in each of our local markets.
              </div>
              <div className='sm:mt-8 mt-5'>
                <div className='sm:mt-2 mt-2 font-mali lg:text-2xl text-secondary hover:underline'><Link to="/about">Our story</Link></div>
                <div className='sm:mt-2 mt-2 font-mali lg:text-2xl text-secondary hover:underline'><Link to="/careers">Careers</Link></div>
              </div>
            </div>
            <div className='items-right animate-bounce'>
              <img src={donutvector} alt='donutbox' />
            </div>
          </div>
        </div>
        <div className='container mx-auto'>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 pb-36">
            <div className='items-right animate-bounce'>
              <img src={donutvector2} alt='donutbox' />
            </div>
            <div className="flex flex-col justify-center">
              <div className='sm:text-5xl text-3xl font-mali text-secondary sm:text-left text-center uppercase drop-shadow-md'>Summer is here</div>
              <div className=' sm:mt-10 mt-6 sm:text-2xl text-2xl font-mali'>This season we are offering our Popsicle Box, Father's Day Breakfast Box,
                and Patriotic Assortments & Lemonade - check out our season assortments and their availability here:
              </div>
              <div className='sm:mt-8 mt-5'>
                <div className='sm:mt-8 mt-4 drop-shadow-lg sm:text-left text-center'>
                  <Link to="/collection"><button className='bg-secondary text-white font-mali 
            lg:text-xl py-3 px-10 rounded-full hover:bg-darkpink duration-500'>Seasonal Donuts</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* follow us */}
      <div className='sm:text-5xl font-mali text-primary text-center sm:my-10 uppercase'>- Follow us on instergram <span className='text-secondary hover:underline'><Link to="">@Amy'sdonuts </Link></span>-</div>

      {/* gallery */}
      <div className='grid grid-cols-3'>
        <Link to="https://www.instagram.com/explore/tags/donuts/?hl=en" className='hover:contrast-50 cursor-pointer'>
          <img src={gallery1} alt='donutbox' className='w-full' />
        </Link>
        <Link to="https://www.instagram.com/explore/tags/donuts/?hl=en" className='hover:contrast-50 cursor-pointer'>
          <img src={gallery2} alt='donutbox' className='w-full' />
        </Link>
        <Link to="https://www.instagram.com/explore/tags/donuts/?hl=en" className='hover:contrast-50 cursor-pointer'>
          <img src={gallery3} alt='donutbox' className='w-full' />
        </Link>
      </div>
    </>
  )
}

export default Home;
