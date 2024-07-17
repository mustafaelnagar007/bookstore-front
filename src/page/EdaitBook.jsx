
// import axios from 'axios';
// import Btn from './../companents/Btn';
// import React, {  useState ,useEffect} from 'react'
// import Spiner from '../companents/spiner';
// import { useNavigate ,useParams} from 'react-router-dom';
// const EdaitBook = () => {
//   const [title,setTitle]=useState('')
//   const [auther,setauther]=useState('')
//   const [bublichYear,setpublichYear]=useState('')
//   const [loading,setloading]=useState(false);
//   const navigate= useNavigate();
//   const {id}=useParams()
//   useEffect(()=>{
//     setloading(true)
//     axios.get(`http://localhost:5555/books/${id}`).then(res=>{
//      setTitle(res.data.title)
//     setauther(res.data.auther)
//     setpublichYear(res.data.bublichYear)
//     setloading(false)
//     })
//     .catch(error=>{
//       console.log(error)
//       setloading(false)
//       alert('an error happend please chick the console')
//     })
//   },[])
//   const putBook=()=>{
//     let data={
//       title,
//       auther,
//       bublichYear
//     };
//     setloading(true)
//     axios.post(`http://localhost:5555/books/${id}`, data)
//     .then(()=>{
//     setloading(false)
//      navigate('/')
//     })
//     .catch(error=>{
//       console.log(error);
//       alert('an error hapend please chick the console')
//       setloading(false)
//     })
//   }
//   return (
//     <div className='p-4'>
//       <Btn/>
//       <h1 className='text-3xl my-4'>create book</h1>
//       {loading?<Spiner/> :''}
//       <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[500px] p-4 mx-auto'>
//         <div className='my-4'>
//           <label className='text-xl mr-4 text-gray-500'>title</label>
//           <input type="text"  value={title} onChange={e=> setTitle(e.target.value)}
//           className='border-2 border-gray-500 px-4 py-2 w-full'/>
//         </div>
//         <div className='my-4'>
//           <label className='text-xl mr-4 text-gray-500'>auther</label>
//           <input type="text"  value={auther} onChange={e=>setauther(e.target.value)}
//           className='border-2 border-gray-500 px-4 py-2 w-full'/>
//         </div>
//         <div className='my-4'>
//           <label className='text-xl mr-4 text-gray-500'>publich Year</label>
//           <input type="number"  value={bublichYear} onChange={e=> setpublichYear(e.target.value)}
//           className='border-2 border-gray-500 px-4 py-2 w-full'/>
//         </div>
//         <button className='p-2 bg-sky-300 m-8' onClick={putBook}>save</button>
//       </div>
      
//     </div>
//   )
// }

// export default EdaitBook
import React, { useState, useEffect } from 'react';
import Btn from '../companents/Btn';
import Spiner from '../companents/spiner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const EditBook = () => {
  const [title, setTitle] = useState('');
  const [auther, setAuthor] = useState('');
  const [bublichYear, setbublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5555/books/${id}`)
    .then((res) => {
        setAuthor(res.data.auther);
        setbublishYear(res.data.bublichYear)
        setTitle(res.data.title)
        setLoading(false);
      }).catch((error) => {
        setLoading(false);
        alert('An error happened. Please Chack console');
        console.log(error);
      });
  }, [])
  
  const handleEditBook = () => {
    const data = {
      title,
      auther,
      bublichYear,
    };
    setLoading(true);
    axios
      .put(`http://localhost:5555/books/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book Edited successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        // alert('An error happened. Please Chack console');
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };

  return (
    <div className='p-4'>
      <Btn />
      <h1 className='text-3xl my-4'>Edit Book</h1>
      {loading ? <Spiner /> : ''}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Title</label>
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Auther</label>
          <input
            type='text'
            value={auther}
            onChange={(e) => setAuthor(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Publish Year</label>
          <input
            type='number'
            value={bublichYear}
            onChange={(e) => setbublishYear(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <button className='p-2 bg-sky-300 m-8' onClick={handleEditBook}>
          Save
        </button>
      </div>
    </div>
  )
}

export default EditBook