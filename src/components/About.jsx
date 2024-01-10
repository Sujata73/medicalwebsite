import React from 'react'

const About = () => {
  return (
    <div className='min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 gap-10 pt-24  lg:pt-16 '>
        <div className='w-full lg:w-3/4  space-y-4'>
            <h1 className='text-4xl font-semibold text-center lg:text-start'>About Us</h1>
            <p className='text-justify  lg:text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium vel nemo possimus reiciendis voluptatum sed laborum facilis itaque ad harum, eligendi dolorem vero enim unde, excepturi molestiae? Incidunt, fuga error.</p>
            <p className='text-justify lg:text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quia molestias quaerat amet accusamus consequuntur veniam quasi repudiandae blanditiis praesentium, fugiat numquam maxime asperiores fuga officiis nemo sunt laboriosam quas.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi maiores perspiciatis odio deleniti illum accusamus. Neque, nulla aliquid! Ab itaque reprehenderit minus quia vel similique impedit corporis. Quaerat, beatae laudantium.</p>
        </div>
        <div className='w-full lg:w-3/4'>
            <img src={require('../assets/about.jpg')} alt='img' className='rounded-lg '/>
        </div>
    </div>
  )
}

export default About