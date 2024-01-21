import React from 'react'
import Footer from './Footer';

  const Blogs = () => {
   
  return (
<div>
    <table>
        <tr>
            <th>IMAGE LINK</th>
            <th>DESCRIPTION</th>
            <th>ACTION</th>
        </tr>
        <tr>
            <td>kkdoe</td>
            <td>kkdoejdowjd</td>
            <td><button className='add'>Edit</button><button className='delete'>Delete</button></td>
        </tr>
    </table>
    <Footer/>
  </div>

  )
}
  

export default Blogs