const asyncHandler = require('express-async-handler')
const Post = require('../models/postModel')

const getPosts = asyncHandler( async(req, res) => {
    const posts = await Post.find()
    res.status(200).json(posts)
})

const createPost = asyncHandler(
    async (req, res) => {
        const memory = req.body

        const post = await Post.create(memory)

        res.status(201).json(post)
    }
)

const getPost = asyncHandler(
    async (req, res) => {
        res.status(200).json({message: `Get Post ${req.params.id}`})
    }
)

const updatePost = asyncHandler(
    async (req, res) => {
        res.status(200).json({message: 'Update Post' + req.params.id})
    }
)

const deletePost = asyncHandler(
    async (req, res) => {
        res.status(200).json({message: 'Delete Post' + req.params.id})
    }
)


module.exports = {
    getPosts,
    createPost,
    getPost,
    updatePost,
    deletePost,
}