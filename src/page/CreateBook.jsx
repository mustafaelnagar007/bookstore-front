import axios from 'axios';
import Btn from './../companents/Btn';
import React, {  useState } from 'react'
import Spiner from '../companents/spiner';
import { useNavigate } from 'react-router-dom';
const CreateBook = () => {
  const [title,setTitle]=useState('')
  const [auther,setauther]=useState('')
  const [bublichYear,setpublichYear]=useState('')
  const [loading,setloading]=useState(false);
  const navigate= useNavigate();
  const postBook=()=>{
    let data={
      title,
      auther,
      bublichYear
    };
    setloading(true)
    axios.post(`http://localhost:5555/books`,data)
    .then(()=>{
    setloading(false)
     navigate('/')
    })
    .catch(error=>{
      console.log(error);
      alert('an error hapend please chick the console')
      setloading(false)
    })
  }
  return (
    <div className='p-4'>
      <Btn/>
      <h1 className='text-3xl my-4'>create book</h1>
      {loading? <Spiner/> :''}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[500px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>title</label>
          <input type="text"  value={title} onChange={e=> setTitle(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2 w-full'/>
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>auther</label>
          <input type="text"  value={auther} onChange={e=>setauther(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2 w-full'/>
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>publich Year</label>
          <input type="number"  value={bublichYear} onChange={e=> setpublichYear(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2 w-full'/>
        </div>
        <button className='p-2 bg-sky-300 m-8' onClick={postBook}>save</button>
      </div>
      
    </div>
  )
}

export default CreateBook
