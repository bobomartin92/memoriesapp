import React from 'react'
import {FaThumbsUp, FaRegThumbsUp} from 'react-icons/fa'
import { IconContext } from "react-icons";
import image from '../safety.jpg'

const Post = () => {
  return (
    <div className='bg-white shadow-md rounded-xl overflow-hidden mb-5'>
        <div className="relative">
            <img src={image} alt="image of place" />
            <div className='absolute top-4 left-4 text-white'>
                <h3>Person Name</h3>
                <p>3 hours ago</p>
            </div>
        </div>
        <div className="p-3">
            <p className='text-gray-300'>#tags</p>
            <h3 className='mt-3 mb-4'>Title</h3>
            <p className='text-gray-400 mb-3'>Message: Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
            <div className='flex items-center'>
                <IconContext.Provider value={{ className: "text-blue-600" }}>
                    <div>
                        <FaThumbsUp />
                    </div>
                </IconContext.Provider>
                <span className='ml-2 text-sm' >{` ${2} `}</span>
                <span className='ml-2 text-sm' >Likes</span>
            </div>
        </div>
    </div>
  )
}

export default Post