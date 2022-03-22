import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts, reset } from '../features/post/postSlice'
import Post from './Post'

const Posts = ({handle}) => {

  const dispatch = useDispatch()
  const {posts, isLoading, isError, message} = useSelector(state => state.post)

  useEffect(() => {
    if(isError) {
      console.log(message);
    }

    dispatch(getPosts())
  }, [isError, dispatch, message])
 
  return (
    
    <div className='md:grid md:grid-cols-2 gap-x-5 gap-y-2 lg:grid-cols-3 xl:grid-cols-4'>
      {posts.length > 0 ? (
            posts.map(post => (
              <Post key={post._id} post={post} handle={handle} />
            ))) : (
              <h3>No post to display yet</h3>
              )}
    </div>
  )
}

export default Posts