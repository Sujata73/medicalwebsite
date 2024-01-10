import React from 'react'
import Button from '../layouts/Button'

const Home = () => {
  return (
    <div className="  min-h-screen flex flex-col justify-center lg:px-32 px-5 text-white bg-[url('./assets/home.jpg')] bg-cover opacity-90">
        <div className='w-full lg:w-4/5 space-y-5 mt-10'>
            <h1 className='text-5xl font-bold leading-tight'>Empowering Health Choices for a Vibrant Life Your Trusted..</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, veritatis? Impedit praesentium, nemo accusantium quasi odio tenetur sequi possimus delectus totam harum necessitatibus corrupti ex. Numquam beatae illo iure deleniti.</p>
            <Button title="See Services"/>
        </div>
    </div>
  )
}

export default Home