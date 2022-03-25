import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addComment, getPost } from '../features/post/postSlice'
import moment from 'moment';

const Post = () => {
  const {id} = useParams()
  const user = JSON.parse(localStorage.getItem('user'))
  const dispatch = useDispatch()
  const {post, isLoading} = useSelector(state => state.post)
  const [text, setText] = useState('')

  useEffect(() => {
    dispatch(getPost(id))
  }, [id])

  if(isLoading) {
    return (
      <div className='top-5 left-5 h-screen'>
        <div className='animate-spin w-16 h-16 border-8 rounded-full border-t-blue-600 border-b-blue-600 border-l-blue-600 border-r-blue-200'></div>
      </div>
    )
  }

  const handleComment = () => {
    const comment = {name:  user.name, text}
    dispatch(addComment({id, comment}))
    setText('')
  }

  return (
    <div className='p-4'>
      {post &&
        <div className='bg-white shadow-lg p-4 rounded w-full'>
          <img className='rounded-md mb-3 my-4 md:w-96 mx-auto lg:w-1/2' src={post.selectedFile} alt="" />
          <div className=''>
            <h1 className='text-3xl font-bold'>{post.title}</h1>
            <p className='text-xs text-gray-300'>{post.tags.map(tag => `#${tag} `)}</p>
            <p className='my-4 text-base  text-justify text-gray-600'>{post.message}</p>
            <h3 className='text-lg font-bold'>Created By: {post.creator}</h3>
            <p className='text-sm text-gray-400'>{moment(post.createdAt).fromNow()}</p>
          </div>
          <section className='flex flex-col-reverse my-4 lg:flex-row lg:justify-around'>
            <div>
              <h1 className='mb-2 border-b-2 border-gray-400 font-bold text-xl text-center'>Comments</h1>
              <div className='px-4 h-48 overflow-y-auto'>
                {post.comments.map((c,i) => <p key={i} className='border-b-2 border-gray-400 px-2 mt-2 py-2'><span className='font-extrabold'>{c.name}</span> {` ${c.text}`}</p>)}
              </div>
            </div>
            {user && <div className='mb-4'>
              <h1 className='my-2 font-bold text-center'>Add a comment</h1>
              <textarea onChange={(e) => setText(e.target.value)} className='border-2 border-blue-400 w-full p-2' name="text" cols="30" rows="10" value={text} placeholder='Comment'></textarea>
              <button disabled={!text} onClick={handleComment} className='w-full py-2 mt-1 bg-blue-400 rounded text-white disabled:cursor-not-allowed disabled:bg-gray-200'>Comment</button>
            </div>}
          </section>
        </div>}
    </div>
  )
}

export default Post