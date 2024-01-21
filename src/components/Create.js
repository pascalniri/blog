import React, {useState}from 'react'
import 'react-quill/disk/quill.snow.css'
const Create = () => {
 const [title, setTitle] = useState('')
 const [category, setCategory] = useState('Uncategorized')
 const [description, setDescription] = useState('')
 const [thumbnail, setThumbnail] = useState('')

 const modules ={
  toolbar:[
    [{'header':[1, 2, false]}],
    ['bold', 'italic', 'underline','strike','blockquote'],
    [{'list':'orderd'}, {'list':'bullet'}, {'indent':'-1'}, {'indent':'+1'}],
    ['link', 'image'],
    ['clean']
  ]
 }
 const formats=[
   'header',
    'bold', 'italic', 'underline','strike','blockquote',
    'list','bullet','indent',
    'link', 'image'
 ]
 const POST_CATEGORY =["Agriculture", "Development", "Education", "Entertainment", "Art"]
  return (
    <div className='main-container'>
        <form className='form-container'>
            <input type='text' name='title' placeholder='Write Title' value={title} onChange={e => setTitle(e.target.value)}
             autoFocus
            /> 
          <select name='category' value={category} onChange={e => setCategory(e.target.value)}>
              {
                POST_CATEGORY.map(cat => <option key={cat}>{cat}</option>)
              }
              <input type="file" onChange={e => setThumbnail(e.target.files[0])} accept='png, jpg, jpeg'/>
              <button type='submit' className='btn-primary'>Create</button>
          </select>
        </form>
    </div>
  )
}

export default Create