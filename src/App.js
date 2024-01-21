import React from 'react';
import { Routes, Route, } from 'react-router-dom';
import Signin from './components/Signin'
import Signupform from './components/Signupform';
import './styles/editor.css';
import Navbar from './components/Navbar';
import HomeUI from './components/HomeUI';
import Editor from './components/Editor';
import Blogs from './components/Blogs';
import Posts from './components/Posts';
import Detail from './components/Detail'
import Create from './components/Create';
// import Footer from './components/Footer';
const App = () => {
  return (
    <>
      <Navbar/>

      <Routes>
       <Route path='/' element={<HomeUI/>} />
       <Route path='/signin' element={<Signin/>} />
      <Route path='/editor' element={<Editor/>} />
      <Route path='/signup' element={<Signupform/>} />
      <Route path='/blogs' element={<Blogs/>} />
      <Route path='/posts' element={<Posts/>} />
      <Route path='/read/:id' element={<Detail/>} />
      <Route path='/create' element={<Create/>} />
      {/* <Route path='/footer' element={<Footer/>} /> */}

    </Routes>
    </>
    
  )
}

export default App
