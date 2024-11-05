import React from 'react';
import { Link, useParams } from 'react-router-dom';
import data from '../data/products';
const productLogos = require.context('../assets/images/product-images', true);

const SingleProduct = () => {

  function getProductImage(id) {
    try {
      return productLogos(`./${id}.png`)
    } catch (error) {
      return '';
    }
  }

  const { id } = useParams();
  const product = data.find(p => p.id === id);
  console.log(product);

  return (
    <div className='container mx-auto sm:my-24 my-14'>
      <div className="grid grid-cols-2 gap-12">
        <div className='w-full'>
          <img src={getProductImage(product.id)} alt='Amys-donuts' className='w-full' />
        </div>
        <div className='text-mali'>
          <div className='sm:text-6xl text-3xl font-mali text-primary drop-shadow-md'>{product.pname}</div>
          <div className='sm:text-md sm:mt-10 mt-5 text-md font-mali text-darkblue text-justify'>{product.pdescription}
          </div>
          <div>
            <div className='sm:text-xl text-lg sm:mt-7 mt-3 font-mali sm:text-md text-md text-darkbluetext-darkblue'>Ingredients</div>
            <div className='sm:text-md text-md font-mali text-darkblue'>{product.pingredients}</div>
          </div>
          <div className='sm:text-2xl text-xl sm:mt-7 mt-3 font-mali sm:text-md text-md text-darkbluetext-darkblue'>{product.pprice}</div>
          <div className='sm:mt-10 mt-5'>
            <span className='font-mali sm:text-lg text-md text-darkbluetext-darkblue'>Quantity : </span>
            <input type='number' min={0} max={500} name='qty' className='border-2 border-secondary rounded-full text-center py-1'/>
          </div>
          <div>
            <Link to="/cart">
              <button className='bg-lightpink border-secondary border-2 text-secondary font-mali 
                        sm:py-2 py-0.4 sm:px-4 px-3 sm:mt-12 mt-5 rounded-full hover:bg-darkpink hover:text-white duration-500'>Add to Cart</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleProduct;
