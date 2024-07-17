import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs'

const Btn = ({destination='/'}) => {
  return (
    <div className='flex'>
      <Link to={destination}
      className='bg-sky-800 rounded-lg px-4 text-white w-fit'>
        <BsArrowLeft className='text-2xl'/>
      </Link>
    </div>
  )
}

export default Btn
