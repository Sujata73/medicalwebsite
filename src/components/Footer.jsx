import React from 'react'

import { Link } from 'react-scroll'
const Footer = () => {
  return (
    <div className='bg-backgroundColor text-white rounded-t-3xl mt-8 md:mt-o'>
        <div className='flex flex-col md:flex-row justify-between p-8 lg:px-32 px-5'>
            <div className='w-full lg:w-1/4'>
            <h1 className='font-semibold text-xl'>CareMeds</h1>
            <p className='text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt saepe laborum consectetur aut distinctio atque aspernatur. Eaque quod magnam voluptatem qui earum quo vero totam aspernatur sed. Deserunt, doloribus iure.</p>
            </div>
            <div>
                <h1 className='font-semibold text-xl  pb-4 pt-5 md:pt-0'>About Us</h1>
                <nav className='flex flex-col gap-2'>
                <Link to="about" spy={true}  smooth={true} duration={500} className='cursor-pointer hover:text-hoverColor'>About Us</Link>
                <Link to="about" spy={true}  smooth={true} duration={500} className='cursor-pointer hover:text-hoverColor'>Services</Link>
                <Link to="about" spy={true}  smooth={true} duration={500} className='cursor-pointer hover:text-hoverColor'>Doctors</Link>
                <Link to="about" spy={true}  smooth={true} duration={500} className='cursor-pointer hover:text-hoverColor'>About</Link>
                </nav>
            </div>
            <div>
                <h1 className='font-semibold text-xl pb-4 pt-5 md:pt-0'>Services</h1>
                <nav className='flex flex-col gap-2'>
                <Link to="about" spy={true}  smooth={true} duration={500} className='cursor-pointer hover:text-hoverColor'>Lab Test</Link>
                <Link to="about" spy={true}  smooth={true} duration={500} className='cursor-pointer hover:text-hoverColor'>Health Check</Link>
                <Link to="about" spy={true}  smooth={true} duration={500} className='cursor-pointer hover:text-hoverColor'>Heart Health</Link>
                </nav>
            </div>
            <div className='w-full lg:w-1/4'>
                <h1 className='text-xl font-semibold pb-4 pt-5 md:pt-0'>Contact Us</h1>
                <nav className='flex flex-col'>
                <Link to="/" spy={true}  smooth={true} duration={500} className='cursor-pointer hover:text-hoverColor'>New Baneshowr Kathmandu,Nepal</Link>
                <Link to="/" spy={true}  smooth={true} duration={500} className='cursor-pointer hover:text-hoverColor'>Support@gmail.com</Link>
                <Link to="/" spy={true}  smooth={true} duration={500} className='cursor-pointer hover:text-hoverColor'>9847698091</Link>
                </nav>
            </div>
        </div>
        <div className='text-center py-4' >
            <p >@Copyright developed by<span className='text-hoverColor'>Sujata Shrestha</span>| All rights reserved</p>
        </div>
    </div>
  )
}

export default Footer