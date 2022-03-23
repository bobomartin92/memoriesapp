import Post from './Post'

const Posts = ({handle, posts, isLoading}) => {

  if(isLoading) {
    return (
      <div className='top-5 left-5 h-screen'>
        <div className='animate-spin w-16 h-16 border-8 rounded-full border-t-blue-600 border-b-blue-600 border-l-blue-600 border-r-blue-200'></div>
      </div>
    )
  }
 
  return (
    
    <div className='md:grid md:grid-cols-2 gap-x-5 gap-y-2 lg:grid-cols-3 xl:grid-cols-4'>
      {posts.length > 0 && (
            posts.map(post => (
              <Post key={post._id} post={post} handle={handle} />
            )))}
    </div>
  )
}

export default Posts