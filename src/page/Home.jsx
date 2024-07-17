import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Spiner from '../companents/spiner.jsx'
import axios from 'axios'
import { AiOutlineEdit } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md'
import BooksTable from '../companents/home/bookTable.jsx';
import BooksCard from '../companents/home/bookCard.jsx'

const Home = () => {
    const [book, setbook] = useState([]);
    const [loading, setloading] = useState(false);
    const [showType, setShowType] = useState('table');

    useEffect(() => {
        setloading(true);
    axios
      .get('http://localhost:5555/books')
      .then((response) => {
        setbook(response.data.data);
        setloading(false);
      })
      .catch((error) => {
        console.log(error);
        setloading(false);
      });
  }, []);

    return (
// <div className='p-4'>
// <div className='flex justify-between  items-center'>
//     <h1 className='text-3xl my-8 '>Books List</h1><Link to={'/books/create'}>
//     <MdOutlineAddBox className='text-4xl text-sky-800'/></Link>
// </div>

//     <table className='  w-full border-separate border-spacing-2'>
//         <thead>
//             <tr><th className='border border-slate-600 rounded-md'>id</th>
//             <th className='border border-slate-600 rounded-md'>title</th>
//             <th className='border border-slate-600 rounded-md max-md:hidden'>Auther</th>
//             <th className='border border-slate-600 rounded-md max-md:hidden'>publich year</th>
//             <th className='border border-slate-600 rounded-md'>Operation</th></tr>
            
//         </thead>
//         <tbody>
//             {book.map((book , idx)=>(
//                 <tr key={book._id} className='h-8 '>
//                     <td className='border border-slate-700 rounded-md text-center'>
//                         {idx + 1}
//                     </td>
//                     <td className='border border-slate-700 rounded-md text-center'>
//                         {book.title}
//                     </td>
//                     <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
//                         {book.auther}
//                     </td>
//                     <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
//                         {book.bublichYear}
//                     </td>
//                     <td className='border border-slate-700 rounded-md text-center'>
//                         <div className='flex justify-center gap-x-4'>
//                             <Link to={`/books/details/${book._id}`}>
//                             <BsInfoCircle className='text-green-500 text-2xl'/>
//                             </Link>
//                             <Link to={`/books/edit/${book._id}`}><AiOutlineEdit className='text-2xl text-yellow-500'/>
//                             </Link>
//                             <Link to={`/books/delete/${book._id}`}>
//                             <MdOutlineDelete className='text-2xl text-red-500'/>
//                             </Link>
//                         </div>
//                     </td>
//                 </tr>
                
//             ))}
//         </tbody>

//     </table>
    

//         </div>
        
//     ) 

    <div className='p-4'>
      <div className='flex justify-center items-center gap-x-4'>
        <button
          className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
          onClick={() => setShowType('table')}
        >
          Table
        </button>
        <button
          className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
          onClick={() => setShowType('card')}
        >
          Card
        </button>
      </div>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl my-8'>Books List</h1>
        <Link to='/books/create'>
          <MdOutlineAddBox className='text-sky-800 text-4xl' />
        </Link>
      </div>
      {loading ? (
        <Spiner />
      ) : showType === 'table' ? (
        <BooksTable books={book} />
      ) : (
        <BooksCard books={book} />
      )}
    </div>
  );
}

export default Home ;
