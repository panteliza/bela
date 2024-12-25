import React from 'react'
//icons
import { FiLock } from 'react-icons/fi'

const Navbar = () => {
  return (
    <div className='container mx-auto pt-5 z-50  relative'>
      <div className='flex justify-between'>
        <p className='text-2xl font-bold'>Food Hunt</p>
        <div className='flex w-96 gap-16 text-xl'>
          {['Breakfast', 'Lunch', 'Dinner'].map((i) => (
            <p className='cursor-pointer'>{i}</p>
          ))}
        </div>
        <FiLock className='text-3xl cursor-pointer opacity-75 hover:opacity-100 ease-in-out duration-500 hover:drop-shadow-md' />
      </div>
    </div>
  )
}

export default Navbar