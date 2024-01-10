import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { AiOutlineClose } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import Contact from '../models/Contact';

const Navbar = () => {
    const [menu,setMenu] = useState(false)
    const [close,setClose] =useState(false)
    const handleChange =()=>{
        setMenu(!menu)
    }
    const handleCloseForm =()=>{
        setClose(!close)
    }
  return (
    <div className='w-full fixed z-10 text-white'>
        <div>
            <div className='flex justify-between p-5 lg:px-32 px-5 bg-backgroundColor  shadow-lg'>
                <div  className='flex flex-row items-center cursor-pointer hover:text-hoverColor'>
                <Link className='cursor-pointer hover:text-hoverColor'>
                <h1 className='font-semibold text-2xl'>CareMeds</h1></Link>
                </div>
               <nav className='hidden lg:flex flex-row items-center  font-medium text-lg gap-8'>
                <Link to="home" spy={true}  smooth={true} duration={500} className='cursor-pointer hover:text-hoverColor'>Home</Link>
                <div className=' group relative'>
                <Link to="about" spy={true}  smooth={true} duration={500} className='cursor-pointer hover:text-hoverColor'>About
                <ul  className='hidden group-hover:block bg-red-500 absolute space-y-2 '>
                    <li>home</li>
                    <li>home</li>
                    </ul></Link>
                    </div>
                <Link to="services" spy={true}  smooth={true} duration={500} className='cursor-pointer hover:text-hoverColor'>Services</Link>
                <Link to="doctor" spy={true}  smooth={true} duration={500} className='cursor-pointer hover:text-hoverColor'>Doctors</Link>
                <Link to="blog" spy={true}  smooth={true} duration={500} className='cursor-pointer hover:text-hoverColor'>Blog</Link>
               </nav>
               <div className='hidden lg:flex'>
                <button className='bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out'onClick={handleCloseForm}>
                    Contact Us
                </button>
               </div>
               {close &&(<Contact handleClose={handleCloseForm}/>)}
               <div className='lg:hidden flex items-center'>
                {menu?(<AiOutlineClose onClick={handleChange} className='z-10'/> ):(< RxHamburgerMenu onClick={handleChange}/>)}
               </div>
               <div className={`${menu? " bg-black w-full absolute left-0 top-0 h-96 flex items-center justify-center  transition duration-300 ease-in-out ":" absolute left-[-100%]"}`} >
                <nav className='flex flex-col gap-5 '>
                <Link to="home" spy={true}  smooth={true} duration={500} className='cursor-pointer hover:text-hoverColor '>Home</Link>
                <Link to="about" spy={true}  smooth={true} duration={500} className='cursor-pointer hover:text-hoverColor'>About</Link>
                <Link to="services" spy={true}  smooth={true} duration={500} className='cursor-pointer hover:text-hoverColor'>Services</Link>
                <Link to="doctor" spy={true}  smooth={true} duration={500} className='cursor-pointer hover:text-hoverColor'>Doctors</Link>
                <Link to="blog" spy={true}  smooth={true} duration={500} className='cursor-pointer hover:text-hoverColor'>Blog</Link>
                <button className='bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out'onClick={handleCloseForm}>
                    Contact Us
                </button>
                </nav>
               </div>
              
            </div>
        </div>
    </div>
  )
}

export default Navbar