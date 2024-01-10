import React from 'react'

const BlogCard = (props) => {
  return (
    <div className='w-full lg:w-1/4 hover:scale-105 cursor-pointer rounded-lg space-y-2 transition duration-300 ease-in-out shadow-md p-5'>
        <img className='h-64 lg:h-40 w-full rounded-lg' src={props.img} alt='img'/>
        <h1 className='text-lg text-center font-semibold'>{props.headlines}</h1>
        <p className='text-center text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, repellat voluptas, quam reiciendis ab commodi odit explicabo temporibus eum iusto magni alias porro vero placeat dolorum quasi optio numquam ipsum!</p>
    </div>
  )
}

export default BlogCard