import React from 'react';
import donutcontact from '../assets/images/contact-page-img.png';

const Contact = () => {
  return (
    <div className='container mx-auto sm:mt-24 mt-14'>
      <div className='sm:text-5xl text-3xl font-mali text-primary text-center drop-shadow-md'>Contact us</div>

      <div className="mt-10 pb-12">

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-10'>
          <div className="col-span-1 sm:grid-cols-6 p-8 border-2 border-primary rounded-lg">
            <div className="sm:col-span-3 mt-4">
              <label for="first-name" className="block text-sm font-medium leading-6 text-gray-900 font-mali">First name</label>
              <div className="mt-2">
                <input type="text" name="first-name" id="first-name" autocomplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 font-mali shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6" />
              </div>
            </div>
            <div className="sm:col-span-3 mt-4">
              <label for="last-name" className="block text-sm font-medium leading-6 text-gray-900 font-mali">Last name</label>
              <div className="mt-2">
                <input type="text" name="last-name" id="last-name" autocomplete="family-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 font-mali shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6" />
              </div>
            </div>
            <div className="sm:col-span-3 mt-4">
              <label for="email" className="block text-sm font-medium leading-6 text-gray-900 font-mali">Email address</label>
              <div className="mt-2">
                <input id="email" name="email" type="email" autocomplete="email" className="block w-full rounded-md border-0 py-1.5 text-gray-900 font-mali shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6" />
              </div>
            </div>
            <div className="sm:col-span-3 mt-4">
              <label for="country" className="block text-sm font-medium leading-6 text-gray-900 font-mali">Country</label>
              <div className="mt-2">
                <select id="country" name="country" autocomplete="country-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 font-mali shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:max-w-xs sm:text-sm sm:leading-6">
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-6 mt-4">
              <label for="message" className="block text-sm font-medium leading-6 text-gray-900 font-mali">Your message</label>
              <div className="mt-2">
                <textarea id="message" name="message" type="message" autocomplete="message" rows={5} className="block w-full rounded-md border-0 py-1.5 text-gray-900 font-mali shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6" />
              </div>
            </div>
            <div className="mt-6 sm:col-span-6 flex items-center justify-end gap-x-6">
              <button type="button" className="rounded-md bg-white border-2 border-primary px-3 py-2 text-sm font-semibold leading-6 text-gray-900 font-mali">Cancel</button>
              <button type="submit" className="rounded-md bg-primary  border-2 border-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-darkyellow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">Save</button>
            </div>
          </div>
          <div className='grid'>
            <div className=''><img src={donutcontact} className='w-full rounded-lg' alt='donut-eating' /></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;
