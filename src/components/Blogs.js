import React from 'react'
// import axios from 'axios'

import { useState, useEffect,useContext } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import { myContext } from './Contex'

  const Blogs = () => {
   const [data, setData] = useState([])
   const navigate = useNavigate()
   const {blog} = useContext(myContext)

  //  useEffect(() => {
  //   axios.get('https://jsonplaceholder.typicode.com/users')
  //   .then(res => setData(res.data))
  //   .catch(err => console.log(err))
  //  }, [])
  return (
<div>
    <table>
        <tr>
            <th>TITLE</th>
            <th>IMAGE</th>
            <th>ACTION</th>
        </tr>
                
              
               {
                    blog.map((singleRow,index)=>{
                      return(
                      <tr>
                        <td>{singleRow.title}</td>
                        <td>{singleRow.image}</td>
                        <td>{singleRow.name}</td>
                        <td>
                          <button className='update'>Update</button>
                          <button className='delete'>Delete</button>
                          <button className='read'>Read</button>
                        </td>
                      </tr>
                      )
                    })
                }
               
      
    </table>
  </div>

  )
}
  

export default Blogs