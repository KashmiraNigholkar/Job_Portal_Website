import React from 'react'
import {assets} from  '../assets/assets'

const Navbar = () => {
  return (
    <div className='shadow py-4'>
        <div  className='container px-4 2xl:px-20 mx-auto flex justify-between items-center'>
            <img src={assets.logo} alt="" />
        </div>
        <div className='flex gap-4 max:sm:text-xs '>
        <button className='text-gray-600 '>Recruiter Login</button>
        <button className='bg-blue text-white px-6 sm:px-9 py-2 rounded-full'>Login</button>
      </div>
    </div>
  )
}

export default Navbar