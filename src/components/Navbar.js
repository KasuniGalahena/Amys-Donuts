import React, { useState } from 'react';
import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div className='bg-primary text-center text-lg font-mali text-dark'>
                Welcome to the Amy's Donuts site
            </div>
            <div className='shadow-md w-full top-0 left-0'>
                <div className='md:flex items-center justify-between bg-white py-2 md:px-10 px-7'>
                    <div>
                        <Link to={'/'}>
                            <img src={logo} alt="Logo" className='w-20' />
                        </Link>
                    </div>

                    <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-1 cursor-pointer md:hidden'>
                        <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                    </div>

                    <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12 ' : 'top-[-490px]'}`}>
                        <li className='md:ml-8'>
                            <Link to="/products" className="text-gray-800 font-mali hover:text-primary duration-500">Products</Link>
                        </li>
                        <li className='md:ml-8'>
                            <Link to="/about" className="text-gray-800 font-mali hover:text-primary duration-500">About</Link>
                        </li>
                        <li className='md:ml-8'>
                            <Link to="/contact" className="text-gray-800 font-mali hover:text-primary duration-500">Contact</Link>
                        </li>
                        <li className='md:ml-8'>
                            <Link to="/cart" className="text-darkblue hover:text-secondary hover:drop-shadow-md"><FontAwesomeIcon icon={faCartShopping} /></Link>
                        </li>
                        <li>
                            <Link to="/login"><button className='bg-secondary text-white font-mali place-self-center shadow-lg py-1 px-6 rounded md:ml-8 hover:bg-darkpink duration-500'>Login</button></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar;
