import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getPost } from '../features/post/postSlice'
import moment from 'moment';

const Post = () => {
  const {id} = useParams()
  const dispatch = useDispatch()
  const {post, isLoading} = useSelector(state => state.post)

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

  return (
    <div className='h-screen p-4'>
      {post && <div>
        <div className='bg-white shadow-lg p-4 rounded flex flex-col justify-center items-center md:items-start lg:flex-row-reverse'>
            <img className='rounded-md mb-3 md:w-96 md:my-4 lg:ml-4' src={post.selectedFile} alt="" />
          <div>
            <h1 className='text-3xl font-bold'>{post.title}</h1>
            <p className='text-xs text-gray-300'>{post.tags.map(tag => `#${tag} `)}</p>
            <p className='my-4 text-base  text-justify text-gray-600'>{post.message}</p>
            <h3 className='text-lg font-bold'>Created By: {post.creator}</h3>
            <p className='text-sm text-gray-400'>{moment(post.createdAt).fromNow()}</p>
          </div>
          <section></section>
        </div>
      </div> }
    </div>
  )
}

export default Post