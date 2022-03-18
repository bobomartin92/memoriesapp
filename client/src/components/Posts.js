import React from 'react'
import Post from './Post'

const Posts = () => {
  return (
    <div className='md:grid md:grid-cols-2 gap-x-5 gap-y-2 lg:grid-cols-3 xl:grid-cols-4'>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
    </div>
  )
}

export default Posts