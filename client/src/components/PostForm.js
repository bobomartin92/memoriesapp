import FileBase64 from 'react-file-base64';


const PostForm = ({postForm}) => {

  const {edit, editForm, handleChange, handleSubmit, formData, setFormData, clear} = postForm
    
  return (
    <div className='post-form mb-10'>
        <h1 className='text-center font-bold text-2xl mb-4'>{!edit ? 'Create A ' : 'Edit ' } Memory</h1>
        <div>
          <form autoComplete='off' noValidate onSubmit={handleSubmit}>
            <input ref={editForm} onChange={handleChange} className='auth-input' type="text" name="title" value={formData.title} placeholder='Title*' required/>
            <textarea className='auth-input h-24' onChange={handleChange} name="message" id="" cols="30" rows="10" value={formData.message} placeholder='Message*'></textarea>
            <input onChange={handleChange} className='auth-input' type="text" name="tags" value={formData.tags} placeholder='Tags(seperate each tag with a ",")' required/>
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