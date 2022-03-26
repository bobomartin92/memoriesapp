import React from 'react'
import {FaThumbsUp, FaEdit, FaTrash, FaRegThumbsUp } from 'react-icons/fa'
import { IconContext } from "react-icons";
import moment from 'moment';

const Post = ({post, handle}) => {
    const user = JSON.parse(localStorage.getItem('user'))
    const {handleEdit, handleLike, handleDelete, navigate} = handle
  return (
    <div className='bg-white shadow-md rounded-xl overflow-hidden mb-5 '>
        <div onClick={() => navigate(`/post/${post._id}`)} className="relative w-96 h-44 hover:scale-105 transition cursor-pointer">
            <img className='w-full h-full' src={post.selectedFile} alt={`${post.title}`} />
            <div className='bg-gray-500 opacity-40 z-10 absolute w-full h-full top-0 '></div>
            <div className='absolute top-4 left-4 text-white z-20'>
                <h3 className='font-extrabold tracking-tighter'>{post.creator}</h3>
                <p className='text-xs'>{moment(post.createdAt).fromNow()}</p>
            </div>
        </div>
        <div className="p-3">
            <p className='text-gray-300 text-xs'>{
                post.tags.map(tag => `#${tag} `)
            }</p>
            <h3 className='mt-3 mb-4 font-bold'>{post.title}</h3>
            <p className='text-gray-400 mb-3 text-xs text-justify h-16'>{`${post.message.substring(0,150)}...`}</p>
            <div className='flex justify-between mt-2'>
                <div className='flex items-center'>
                    {user && post.likes.includes(user.id) ? (<IconContext.Provider value={{ className: "text-blue-600 cursor-pointer" }}>
                        <div onClick={() => handleLike(post)}>
                            <FaThumbsUp />
                        </div>
                    </IconContext.Provider>) : (<IconContext.Provider value={{ className: "text-blue-600 cursor-pointer" }}>
                        <div onClick={() => handleLike(post)}>
                            <FaRegThumbsUp />
                        </div>
                    </IconContext.Provider>)}
                    <span className='ml-1 text-sm' >{ ` ${post.likesCount} `}</span>
                    <span className='ml-1 text-sm' >Likes</span>
                </div>
                <div>
                    {(user && user.id === post.creatorId) && <IconContext.Provider value={{ className: "text-blue-400 cursor-pointer" }}>
                        <div onClick={() => handleEdit(post)}>
                            <FaEdit />
                        </div>
                    </IconContext.Provider>}
                </div>
                {(user && user.id === post.creatorId) && <div onClick={() => handleDelete(post)} className='flex cursor-pointer hover:font-bold'>
                    <IconContext.Provider value={{ className: "text-red-600" }}>
                            <div >
                                <FaTrash />
                            </div>
                    </IconContext.Provider>
                    <span className='text-sm text-red-400' >Delete</span>
                </div>}
            </div>
        </div>
    </div>
  )
}

export default Post