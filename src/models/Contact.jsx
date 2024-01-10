import React from 'react'
import Button from '../layouts/Button'


const Contact = (handleClose) => {
 

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10'>
      <div className=' absolute mt-12 text-black'>
      <form className=' w-80 md:w-96 bg-white p-5 rounded-xl '>
      <h1 className='text-4xl font-semibold text-center text-backgroundColor'>Book Now</h1>
    <div className='flex flex-col  '>
      <input type='text' name='userFirstName' placeholder='First Name' className="py-3 px-2 my-2 bg-[#d5f2ec] rounded-lg"/>
    </div>
    <div className='flex flex-col'>
      <input type='text' name='LastName' placeholder='Last Name' className="py-3 px-2 my-2 bg-[#d5f2ec] rounded-lg"/>
    </div> 
    <div className='flex flex-col'>
      <input type='email' name='YourEmail' placeholder='Enter your email' className="py-3 px-2 my-2 bg-[#d5f2ec] rounded-lg"/>
    </div> 
    <div className='flex flex-col'>
      <input type='number' name='phone Number' placeholder='Enter your phone number' className="py-3 px-2 my-2 bg-[#d5f2ec] rounded-lg"/>
    </div> 
   <div className='flex gap-5'>
      <Button title="Book Appointment"/>
  
    <button  className='bg-backgroundColor text-white px-10 rounded-md active:bg-red-500' onClick={handleClose}>
      Close
    </button>
    </div> 
        </form>
        </div>
        </div>
  )
}

export default Contact