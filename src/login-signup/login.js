import React from 'react';
import { Link } from 'react-router-dom';

const login = () => {
  return (
    <div className='h-screen w-full m-0 bg-login bg-opacity-10 bg-fixed'>
      <div className='h-screen w-full flex'>
        <div className='bg-lightpink m-auto border rounded-lg border-secondary'>
          <form className="w-80 p-6 space-y-4 md:space-y-6 sm:p-8 font-mali" action="#">
            <div>
              <label for="email" className="block mb-2 text-md font-medium text-gray-900 text-dark">Your email</label>
              <input type="email" name="email" id="email" className="border border-secondary text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" required="" />
            </div>
            <div>
              <label for="password" className="block mb-2 text-md font-medium text-gray-900 text-dark">Password</label>
              <input type="password" name="password" id="password" placeholder="••••••••" className="border border-secondary text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" required="" />
            </div>
            <button type="submit" className="w-full py-1 text-dark bg-darkyellow hover:bg-primary text-xl rounded-lg">Sign in</button>
            <div className='text-center hover:underline'>
              <Link to="/signup">
                Register
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default login;
