import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data/products';
const productLogos = require.context('../assets/images/product-images', true);

const Products = () => {
  function getProductImage(id) {
    try {
      return productLogos(`./${id}.png`)
    } catch (error) {
      return '';
    }
  }
  console.log('aaa');
  return (
    <div className='container mx-auto sm:my-24 my-14'>
      <div className='sm:text-5xl text-3xl font-mali text-primary'>Donuts</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:mt-10 mt-6">

        {
          data.map((data, i) => (
            <div key={i} className="border-lightpink rounded-lg bg-lightpink p-7">
              <Link to={`/product/${data.id}`}>
                <div className="flex">
                  <div className='w-full rounded-lg' key={i}>
                    <img src={getProductImage(data.id)} alt='Amys-donuts' />
                  </div>
                  <div className='w-full text-right text-mali items-center'>
                    <div className='sm:text-md text-xl font-mali text-darkblue'>{data.pname}</div>
                    <div className='sm:text-2xl text-xl font-mali text-darkblue'>{data.pprice}</div>
                  </div>
                </div>
              </Link>
            </div>
          ))
        }

      </div>
    </div>
  )
}

export default Products;
