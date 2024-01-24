import React from 'react'
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup'
import axios from 'axios';
const Create = () => {
  
  const schema = yup.object().shape({
    title: yup.string().required("Provide a blog title"),
    description: yup.string().required('Provide a blog description'),
    image: yup.mixed().required(),
 })
 const { register, handleSubmit} = useForm({
  // resolver: yupResolver(schema)
});
const onSubmit = async (data) => {
  console.log(data)

  const forData = new FormData();
  forData.append("title",data.title)
  forData.append("description",data.description)
  forData.append("image", data.image[0])



  try {
    const url = "https://blogapi-se2j.onrender.com/api/v1/blogs"
    const res = await axios.post(url, forData);
    alert('Blog published successfully')
    console.log(res)
  } catch (error) {
    console.log(error)
  }
}; 
  return (
    <div className='main-container'>
        <form className='form-container' onSubmit={handleSubmit(onSubmit)}>
            <input type='text' name='title' placeholder='Write Title' {...register('title')}/> 
            <input type='text' name='desc' placeholder='Write Description' {...register('description')}/>
            <input type='file' name='desc' placeholder='Write Description' className='file-area' {...register('image')}/>       
            <button className='newblog-btn' type='submit' >Post</button>
            <button className='newblog-btn' type='submit' >Post</button>
        </form>
        
    </div>
  )
}

export default Create