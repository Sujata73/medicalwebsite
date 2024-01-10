import React from 'react'

const Button = (props) => {
  return (
    <div>
        <div>
            <button className='bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out '> 
                {props.title}
            </button>
        </div>
    </div>
  )
}

export default Button