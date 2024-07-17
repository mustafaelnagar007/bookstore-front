import React from 'react'
import { Routes , Route } from 'react-router-dom';
import ShowBook from './page/ShowBook.jsx';
import DeleteBook from './page/DeleteBook.jsx';
import EdaitBook from './page/EdaitBook.jsx';
import Home from './page/Home';
import CreateBook from './page/CreateBook.jsx';

const App = () => {
  return  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/books/create' element={<CreateBook />} />
    <Route path='/books/details/:id' element={<ShowBook />} />
    <Route path='/books/edit/:id' element={<EdaitBook />} />
    <Route path='/books/delete/:id' element={<DeleteBook />} />
  </Routes>
  
  
 
}
export default App
