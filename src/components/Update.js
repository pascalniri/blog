import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const Update = () => {
    const {id} = useParams()
    const [values, setValues] = useState({
        id: id,
        name: '',
        email: '',
    })
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users/'+id)
        .then(res => {
            setValues({...values, name:res.data.name, email:res.data.email,})
        })
        .catch(err => console.log(err))
},[])
    const navigate = useNavigate()
   const handleSubmit = (e) => {
     e.preventDefault();

     axios.put('https://jsonplaceholder.typicode.com/users/'+id, values)
        .then(res => {
             navigate('/blogs')})
        .catch(err => console.log(err))
   }
  return (
    <div className='main-container' onSubmit={handleSubmit}>
    <form className='form-container' >
        <input type='text' name='title' placeholder='Write Title'  value={values.name}
         onChange={e=> setValues({...values, name: e.target.value})}
        /> 
        <input type='text' name='desc' placeholder='Write Description' value={values.email} 
          onChange={e=> setValues({...values, name: e.target.value})}
        />
        <input type='file' name='desc' placeholder='Write Description' className='file-area' value={values.file} />       
        <button className='newblog-btn' type='submit' >Update</button>
    </form>
    
</div>
  )
}

export default Update