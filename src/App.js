import {useState,useEffect} from 'react'
import { myContext } from './components/Contex'
import { Routes, Route, } from 'react-router-dom';
import Signin from './components/Signin'
import Signupform from './components/Signupform';
import Navbar from './components/Navbar';
import HomeUI from './components/HomeUI';
import Blogs from './components/Blogs';
import Posts from './components/Posts';
import Detail from './components/Detail'
import Create from './components/Create';
import Update from './components/Update';
import Footer from './components/Footer';
const App = () => {
  const [blog,setBlog] = useState([])
     
  useEffect(()=>{
    const blos = async()=>{
      try {
        const response = await fetch("https://blogapi-se2j.onrender.com/api/v1/blogs")
        const jsonify = await response.json();
        setBlog(jsonify.blogs)
        // console.log(jsonify)
      } catch (error) {
        console.log(error)
      }
    }
    blos();
  },[])
  
  return (
    <>
      

     <myContext.Provider value ={{blog,setBlog}}>
         <Navbar/>
          <Routes>
            <Route path='/' element={<HomeUI/>} />
            <Route path='/signin' element={<Signin/>} />
            <Route path='/signup' element={<Signupform/>} />
            <Route path='/blogs' element={<Blogs/>} />
            <Route path='/posts' element={<Posts/>} />
            <Route path='/read/:id' element={<Detail/>} />
            <Route path='/create' element={<Create/>} />
            <Route path='/update/:id' element={<Update/>} />
            <Route path='/footer' element={<Footer/>} />

          </Routes>
     </myContext.Provider>
     
    </>
    
  )
}

export default App
