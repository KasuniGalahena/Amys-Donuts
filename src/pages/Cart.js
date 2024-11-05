import React from 'react';
import { Link } from 'react-router-dom';
import chocolatetuffle from '../assets/images/product-images/7.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faXmark } from '@fortawesome/free-solid-svg-icons'

const Cart = ({ cartItems }) => {
    return (
        <div className='container mx-auto sm:my-24 my-14'>
            <div className='sm:text-7xl text-3xl font-mali text-primary text-center drop-shadow-md'>Your cart</div>

            {/* { cartItems.length === 0 && (
                <div>
                    <div>Your cart is empty!</div>
                    <div><img src={emptycart} alt='cart-img' className='w-full' /></div>
                </div>
            )} */}

            <div className='flex flex-row gap-10 sm:mt-10 mt-6'>
                <div className='basis-2/3'>
                    <div className='flex flex-row items-center justify-center py-4 px-8 bg-lightpink rounded-lg drop-shadow-md'>
                        <div className='basis-1/12 text-left text-darkblue cursor-pointer'><FontAwesomeIcon icon={faXmark} /></div>
                        <div className='basis-1/12 text-center'><img src={chocolatetuffle} alt='donut-img' className='w-full' /></div>
                        <div className='basis-5/12 text-center sm:text-md text-md font-mali text-darkblue'>Chocolate rainbow sprinkles</div>
                        <div className='basis-2/12 text-center sm:text-md text-md font-mali text-darkblue'>2</div>
                        <div className='basis-3/12 text-right sm:text-md text-md font-mali text-darkblue'>Rs.300 /=</div>
                    </div>
                </div>
                <div className='basis-1/3'>
                    <div className='bg-lightpink rounded-md sm:py-8 py-3 drop-shadow-md'>
                        <div className='text-center sm:text-3xl text-2xl font-mali text-secondary drop-shadow-md sm:mb-6 mb-3'>Summary</div>
                        <div>
                            <div className='flex flex-row py-4 px-8 sm:text-md text-md font-mali'>
                                <div className='basis-1/2 text-left'>Total</div>
                                <div className='basis-1/2 text-right'>Rs.1000/=</div>
                            </div>
                            <div className='flex flex-row py-4 px-8 sm:text-md text-md font-mali'>
                                <div className='basis-1/2 text-left'>Shipping</div>
                                <div className='basis-1/2 text-right'>Rs.200/=</div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-lightpink rounded-md sm:py-8 py-3 sm:mt-6 mt-3 drop-shadow-md'>
                        <div className='flex flex-row py-4 px-8 sm:text-md text-md font-mali'>
                            <div className='basis-1/2 text-left'>Subtotal</div>
                            <div className='basis-1/2 text-right'>Rs.1200/=</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex float-right mt-5'>
                <Link to="">
                    <button className='bg-primary text-white font-mali lg:text-2xl float-right py-3 px-20 mr-5 rounded-full hover:bg-darkyellow duration-500'>Continue Shopping</button>
                </Link>
                <Link to="">
                    <button className='bg-secondary text-white font-mali lg:text-2xl float-right py-3 px-20 rounded-full hover:bg-darkpink duration-500'>Checkout</button>
                </Link>
            </div>

        </div>
    )
}
export default Cart;