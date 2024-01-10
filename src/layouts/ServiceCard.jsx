import React from 'react'

const ServiceCard = (props) => {
  return (
    <div className='flex flex-col bg-white shadow-md w-full lg:w-1/3  items-center text-center  group rounded-lg cursor-pointer hover:-translate-y-2 transition  duration-300 ease-in-out p-5'>
        <div className='bg-[#d5f2ec] p-3 rounded-full transition-colors duration-300 ease-in-out group-hover:bg-[#ade9dc]'>
            {props.icon}
        </div>
        <h1 className='font-semibold text-lg'>{props.title}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore maiores ab voluptates maxime accusantium laboriosam sed id eum mollitia culpa vero facere itaque dignissimos blanditiis esse, provident ullam recusandae! Vitae.</p>
         <h3 className='text-backgroundColor cursor-pointer hover:text-[#ade9dc] transition duration-300 ease-in-out'>Learn More</h3>
    </div>
  )
}

export default ServiceCard