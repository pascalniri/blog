import React, {useEffect, useState}from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
const Detail = () => {
    const[post, setPost] = useState([]);
    const{id} = useParams();
    const [imageArray, setImageArray] = useState([]);
    useEffect(() => {
     axios.get('https://dummyjson.com/products'+id)
     .then(res => {
        setPost(res.data)
       setImageArray(res.data.images)
    })
     .catch(err => console.log(err))
    },[])
  return (
    <div className='details-post-container'>
       <div className='title-description'>
         <h2>{post.title}</h2>
         <p>{post.description}</p>
       </div>
       <div className='images-container'>
        {imageArray.map((image, index)=>(
                <img src={image} alt="image" key={index}></img>
            ))}
       </div>
    </div>
  )
}

export default Detail