import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify';
import { createPost, updatePost, likePost, deletePost} from '../features/post/postSlice'
import PostForm from '../components/PostForm'
import Posts from '../components/Posts'
import SearchForm from '../components/SearchForm'

const Home = () => {

  const user = JSON.parse(localStorage.getItem('user'))
  const [edit, setEdit] = useState(false)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
        title: '', message: '', tags:'', selectedFile: ''
    })

    const {title, message, tags, selectedFile} = formData


    const handleChange = (e) => {
        setFormData((p) => ({...p, [e.target.name]: e.target.value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(edit) {
          if(!title || !message || !selectedFile || !formData._id) {
            toast.error('Complete All fields to edit post')
          } else {
            const updatedPost = {title, message, selectedFile, tags: tags.split(',')}
            dispatch(updatePost({updatedPost, id: formData._id}))
          }
        } else {

          if(!title || !tags || !message || !selectedFile) {
            toast.error('Complete All fields to create a post')
          } else {
            
            dispatch(createPost({title, message, selectedFile, tags: tags.split(',')}))
          }
        }

        clear()
    }

    const clear = () => {
        setFormData({
            title: '', message: '', selectedFile: '', tags: ''
        })
        setEdit(false)
    }
  
    const handleLike = (post) => {

      dispatch(likePost(post._id))
    }


  const handleEdit = (post) => {
    const {title, message, tags, selectedFile, _id} = post
    setEdit(true)
    setFormData({title, message, tags:tags.join(','), selectedFile, _id})
  }
  
  const handleDelete = (post) => {
    dispatch(deletePost(post._id))
  }

  return (
    <div className='px-4 flex flex-col-reverse lg:grid lg:grid-cols-3 gap-x-4'>
        <section className='lg:col-span-2'>
            <Posts handle={{handleEdit, handleLike, handleDelete}}  />
        </section>
        <section>
            <SearchForm />
            {user ? <PostForm postForm={{handleChange, handleSubmit, clear, formData, setFormData, edit}} /> : 
            
            <div className='bg-white shadow-lg py-2 px-3 text-justify'>
              Please <span className='cursor-pointer text-blue-400' onClick={() => navigate('/auth')}>Sign In</span> to create memories and also like and comment on other memories.
            </div>}
        </section>
    </div>
  )
}

export default Home