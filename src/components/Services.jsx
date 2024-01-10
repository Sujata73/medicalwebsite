import React from 'react'
import ServiceCard from '../layouts/ServiceCard'
import {RiMicroscopeLine} from 'react-icons/ri'
import {MdHealthAndSafety } from 'react-icons/md'
import {FaHeartbeat } from 'react-icons/fa'
import Button from '../layouts/Button'

const Services = () => {
    const icon1=<RiMicroscopeLine size={35} className='text-backgroundColor'/>
    const icon2=<MdHealthAndSafety size={35} className='text-backgroundColor'/>
    const icon3=<FaHeartbeat size={35} className='text-backgroundColor'/>

  return (
    <div className='flex flex-col justify-center lg:px-32 px-5 pt-24 lg:pt-16'>
        <div className=' flex flex-col lg:flex-row items-center justify-between gap-20'>
        <div className=' '>
            <h1 className='text-4xl font-semibold text-center lg:text-start '>Our Services</h1>
            <p className='mt-2 text-center lg:text-start'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem dolores saepe aperiam odio dolorum nam ab sint veritatis sunt dignissimos omnis, nihil assumenda vel incidunt, ipsam nulla, repellendus cumque eos.</p>
            </div>
            <div className='mt-4 lg:mt-0 lg:w-3/4'>
           <Button className="" title="See Services"/>
            </div>
            </div>
            <div className='flex flex-col lg:flex-row gap-10 pt-14'>
            <ServiceCard icon={icon1}/>
        <ServiceCard icon={icon2}/>
        <ServiceCard icon={icon3}/>
            </div>
        
    </div>
  )
}

export default Services