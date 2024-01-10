/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Doctor = () => {
    const slidder = useRef(null)
    const data=[
        {
            img:    "/assets/doc1.jpg",
            name:"Dr.Sujata Shrestha",
           specialist:"Orthopedic Surgeon",
        },
        {
            img:'/assets/doc2.jpg',
            name:"Dr.Manisha Gautam",
            specialist:'cardiologist',
        },
        {
            img:'/assets/doc3.jpg',
            name:'Dr.Puja Mishra',
            specialist:"Pediatrician",
        },
        {
            img:'/assets/doc4.jpg',
            name:'Dr.Puja Mishra',
            specialist:"Pediatrician",
        }, 
    
    {
        img:'/assets/doc5.jpg',
        name:'Dr.Puja Mishra',
        specialist:"Pediatrician",
    },
    {
        img:'/assets/doc6.jpg',
        name:'Dr.Puja Mishra',
        specialist:"Pediatrician",
    },
]
    const settings = {
        dots: true,
        accessibility:true,
        arrows:false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive:[
            {
            breakpoint: 1024,
            settings:{
                slidesToShow: 4,
            slidesToScroll: 2,
            infinite:true,
            dots:true,
            
           
            }
            
        }, 
        {
            breakpoint: 768,
            settings:{
                slidesToShow: 3,
            slidesToScroll: 2,
            infinite:true,
            dots:true,
            initialSlide:2,
            
           
            }
            
        }, 
        {
            breakpoint: 480,
            settings:{
                slidesToShow: 1,
            slidesToScroll: 1,
            infinite:true,
            dots:true,
       
           
            }
            
        }, 
           
  ]
      };
  return (
    <div className='min-h-screen flex flex-col justify-center lg:px-32 px-5'>
        <div className='flex flex-col items-center lg:flex-row  justify-between mb-10 lg:mb-0 gap-2'>
            <div>
                <h1 className='text-4xl font-semibold text-center lg:text-start'>Our Doctors</h1>
                <p className='mt-2 text-center lg:text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ex rerum non quasi deleniti quo itaque dignissimos, aut saepe quisquam, animi distinctio natus atque molestiae quos magnam maiores hic neque.</p>
            </div>
            <div className=' flex gap-5 mt-4 lg:mt-0'>
                <button className='bg-[#d5f2ec] text-backgroundColor px-4 py-2 roumded-lg active:bg-[#ade9dc]' onClick={()=>slidder.current.slickPrev()}><FaArrowLeft size={35}/></button>
                <button className='bg-[#d5f2ec] text-backgroundColor px-4 py-2 roumded-lg active:bg-[#ade9dc]'onClick={()=>slidder.current.slickPrev()}><FaArrowRight size={35}/></button>
            </div>
        </div>
        <div className='mt-10'>
            <Slider ref={slidder}{...settings}>
            {data.map((items,index)=>(
                <div className='h-[350px] text-black rounded-xl shadow-md mb-10 cursor-pointer 'key={index}>
                <div >
            <img src={items.img} className='h-56 rounded-t-xl w-full'/>
             </div>
             <div className='flex flex-col  items-center justify-center'><h1 className='font-semibold text-xl pt-4 '>{items.name}</h1>
             <h3 className='pt-2'>{items.specialist}</h3>
             </div>
            
             </div>
            ))}
            </Slider>
        </div>
        </div>
  )
}

export default Doctor