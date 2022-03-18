import React, {useState} from 'react'
import FileBase64 from 'react-file-base64';

const PostForm = () => {

    const [auth, setAuth] = useState(true)

    const [formData, setFormData] = useState({
        title: '', message: '', tags:'', selectedFile: ''
    })

    const handleChange = (e) => {
        setFormData((p) => ({...p, [e.target.name]: e.target.value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData);

        clear()
    }

    const clear = () => {
        setFormData({
            title: '', message: '', selectedFile: '', tags: ''
        })
    }

  return (
    <div className='post-form mb-10'>
        <h1 className='text-center font-bold text-2xl mb-4'>{auth ? 'Create A ' : 'Edit ' } Memory</h1>
        <div>
          <form autoComplete='off' noValidate onSubmit={handleSubmit}>
            <input onChange={handleChange} className='auth-input' type="text" name="title" value={formData.title} placeholder='Title' required/>
            <textarea className='auth-input h-24' onChange={handleChange} name="message" id="" cols="30" rows="10" value={formData.message} placeholder='Message'></textarea>
            <input onChange={handleChange} className='auth-input' type="text" name="tags" value={formData.tags} placeholder='Tags' required/>
            <div className='file-input'>
                <FileBase64 multiple={ false } onDone={(f) => setFormData((p) => ({...p, selectedFile: f.base64}))} />
            </div>
            <button className='post-btn' type="submit">Submit</button>
          </form>
            <button className='clear-btn' onClick={clear}>Clear</button>
        </div>
    </div>
  )
}

export default PostForm