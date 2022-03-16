import React from 'react'
import PostForm from '../components/PostForm'
import Posts from '../components/Posts'

const Home = () => {
  return (
    <div className='grid grid-cols-3 gap-4 px-4'>
        <section className='col-span-2'>
            <Posts />
        </section>
        <section>
            <PostForm />
        </section>
    </div>
  )
}

export default Home