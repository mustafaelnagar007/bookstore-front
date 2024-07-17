import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Btn from './../companents/Btn';
import Spiner from '../companents/spiner';

const ShowBook = () => {
  const [book, setBook] = useState({})
  const [loading, setLoading] = useState(false)
  const { id } = useParams
  useEffect(() => {
    setLoading(true)
    axios.get(`http://localhost:5555/books/${id}`)
      .then(res => {
        setBook(res.data)
        setLoading(false)
      })
      .catch(error=>{
        console.log(error);
      setLoading(false)
      })
      
    
  }, [])
  return (

    <div className='p-4'>
       <Btn/>
       <h1 className='text-3xl my-4'>Show Book</h1>
       {loading?(<Spiner/>):  (
          <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
            <div className='my-4'>
              <span className='text-xl mr-4 text-gray-500'>Id</span>
              <span>{book._id}</span>
            </div>
            <div className='my-4'>
              <span className='text-xl mr-4 text-gray-500'>title</span>
              <span>{book.title}</span>
            </div>
            <div className='my-4'>
              <span className='text-xl mr-4 text-gray-500'>auther</span>
              <span>{book.auther}</span>
            </div>
            <div className='my-4'>
              <span className='text-xl mr-4 text-gray-500'>publich year</span>
              <span>{book.bublichYear}</span>
            </div>
            <div className='my-4'>
              <span className='text-xl mr-4 text-gray-500'>created time</span>
              <span>{new Date(book.createdAt).toString()}</span>
            </div>
            <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Last Update Time</span>
            <span>{new Date(book.updatedAt).toString()}</span>
          </div>
          </div>
        )}
      
       
    </div>
  )
}

export default ShowBook
