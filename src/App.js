import React from 'react';
import { Routes, Route, } from 'react-router-dom';
import Signin from './components/Signin'
import Header from './components/Header'
import HomeUI from './components/HomeUI';
import Editor from './components/Editor';
const App = () => {
  return (
    // <>
     
    //  <Body/>
    //  <Grid/>
    // </>
    <Routes>
       <Route path='/' element={<HomeUI/>} />
       <Route path='/signin' element={<Signin/>} />
       <Route path="/editor" element={<Editor />} />
    </Routes>
  )
}

export default App
