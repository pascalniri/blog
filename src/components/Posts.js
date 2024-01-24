import React, {useEffect, useState} from 'react'
import axios from 'axios';
import Post from './Post';
import Header from './Header';
// import Footer from './Footer';
const Posts = () => {
  const [records, setRecords] = useState([])
  const [blogs,setBlogs] = useState([])
   useEffect(() =>{
      axios.get('https://dummyjson.com/products')
      .then(res => {
        setBlogs(res.data.products)
          setRecords(res.data.products)
          })
      .catch(err => console.error(err))
   }, []);

   const getInputData = (event)=>{
         setBlogs(records.filter(r => r.title.toLowerCase().includes(event.target.value.toLowerCase())))
   }
    return (
      <div className='posts'>
        <Header/>
        <div className='search-container'>
          <input type="text" placeholder='Search' className='search-input'
           onChange={getInputData}
          ></input>
        </div>

        <div className='blog-icon'>
            <h1>Blogs</h1>
            <a href="/create">+ Blog</a>
          </div>
       <div className='posts-container'>
          {blogs.map((blog, index) =>(
            <Post blog={blog} key={index}/>
          ))}
       </div>
      </div>
    );
}

export default Posts