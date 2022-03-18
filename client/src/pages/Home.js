import React from 'react'
import PostForm from '../components/PostForm'
import Posts from '../components/Posts'
import SearchForm from '../components/SearchForm'

const Home = () => {
  return (
    <div className='px-4 flex flex-col-reverse lg:grid lg:grid-cols-3 gap-x-4'>
        <section className='lg:col-span-2'>
            <Posts />
        </section>
        <section>
            <SearchForm />
            <PostForm />
        </section>
    </div>
  )
}

export default Home