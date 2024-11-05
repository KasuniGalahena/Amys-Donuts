import React from 'react';

const signup = () => {
  return (
    <div>
      <div className='h-screen w-full m-0 bg-login bg-opacity-10 bg-fixed'>
        <div className='h-screen w-full flex'>
          <div className='bg-lightpink m-auto border rounded-lg border-secondary'>
            <form className="grid grid-cols-2 p-6 space-y-4 md:space-y-6 sm:p-8 font-mali" action="#">
              <div className='col-span-2'>
                <label for="username" className="block mb-2 text-md font-medium text-gray-900 text-dark">Username</label>
                <input type="text" name="username" id="username" className="border border-secondary text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" required="" />
              </div>
              <div className='col-span-1 mr-3'>
                <label for="firstname" className="block mb-2 text-md font-medium text-gray-900 text-dark">First name</label>
                <input type="text" name="firstname" id="firstname" className="border border-secondary text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" required="" />
              </div>
              <div className='col-span-1'>
                <label for="surname" className="block mb-2 text-md font-medium text-gray-900 text-dark">surname</label>
                <input type="text" name="surname" id="surname" className="border border-secondary text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" required="" />
              </div>
              <div className='col-span-2'>
                <label for="email" className="block mb-2 text-md font-medium text-gray-900 text-dark">Your email</label>
                <input type="email" name="email" id="email" className="border border-secondary text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" required="" />
              </div>
              <div className='col-span-2'>
                <label for="password" className="block mb-2 text-md font-medium text-gray-900 text-dark">Password</label>
                <input type="password" name="password" id="password" placeholder="••••••••" className="border border-secondary text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" required="" />
              </div>
              <div className='col-span-2'>
                <button type="submit" className="w-full py-1 text-dark bg-darkyellow hover:bg-primary text-xl rounded-lg">Sign in</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default signup;
