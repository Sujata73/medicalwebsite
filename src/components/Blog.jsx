import React from 'react'
import Button from '../layouts/Button'
import BlogCard from '../layouts/BlogCard'
import blog1 from '../assets/blog1.jpg'
import blog2 from '../assets/blog2 (1).jpg'
import blog3 from '../assets/home.jpg'
import blog4 from '../assets/blog4.jpg'
import blog5 from '../assets/blog5.jpg'
import blog6 from '../assets/blog6.jpg'



const Blog = () => {
  return (
    <div className='min-h-screen  justify-center px-5 lg:px-32  pt-24'>
        <div className=' flex flex-col items-center lg:flex-row justify-between'>
            <div>
                <h1 className='text-4xl font-semibold text-center lg:text-start'>Latest Post</h1>
                <p className='mt-2 text-center lg:text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt amet rerum recusandae at, hic </p>
            </div>
            <div className='mt-4 lg:mt-0'>
               <Button  title="Our Articles"/>
            </div>
                </div>
            <div className='my-8'>
            <div className='flex gap-10 flex-col lg:flex-row flex-wrap justify-center'>
                <BlogCard img={blog1} headlines="Un raveling the Mysteries of Sleep" />
                <BlogCard img={blog2} headlines="The Heart-Healthy Diet"/>
                <BlogCard img={blog3} headlines="Understanding Pediatric Vaccination"/>
                <BlogCard img={blog4} headlines="Navigating Mental Health"/>
                <BlogCard img={blog5} headlines="The Importance of Regular Excercise"/>
                <BlogCard img={blog6} headlines="Skin Health 101"/>
            </div>
        </div>

    </div>
  )
}

export default Blog