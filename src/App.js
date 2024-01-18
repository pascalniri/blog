import React from 'react';
import { Routes, Route, } from 'react-router-dom';
import Signin from './components/Signin'
import Signupform from './components/Signupform';
import './styles/editor.css';
import Navbar from './components/Navbar';
import HomeUI from './components/HomeUI';
import Editor from './components/Editor';
const App = () => {
  return (
    <>
      <Navbar/>

      <Routes>
       <Route path='/' element={<HomeUI/>} />
       <Route path='/signin' element={<Signin/>} />
      <Route path='/editor' element={<Editor/>} />
      <Route path='/signup' element={<Signupform/>} />
      
    </Routes>
    </>
    
  )
}

export default App
