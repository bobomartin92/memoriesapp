const asyncHandler = require('express-async-handler')
const Post = require('../models/postModel')

const getPosts = asyncHandler( async(req, res) => {
    const posts = await Post.find()
    res.status(200).json(posts)
})

const createPost = asyncHandler(
    async (req, res) => {
        const memory = req.body

        if(!memory) {
            res.status(400)
            throw new Error('Complete all required fields')
        }

        const post = await Post.create(memory)

        res.status(201).json(post)
    }
)

const getPost = asyncHandler(
    async (req, res) => {
        const id = req.params.id
        const post = await Post.findById(id)

        if(!post) {
            res.status(400)
            throw new Error('Post does not exist')
        }

        res.status(200).json(post)
    }
)

const updatePost = asyncHandler(
    async (req, res) => {
        const id = req.params.id
        const update = req.body
        const post = await Post.findById(id)

        if(!post) {
            res.status(400)
            throw new Error('Post does not exist')
        }

        const updatedPost = await Post.findByIdAndUpdate(id, update, {new: true})
        res.status(200).json(updatedPost)
    }
)

const deletePost = asyncHandler(
    async (req, res) => {
        const id = req.params.id
        const post = await Post.findById(id)

        if(!post) {
            res.status(400)
            throw new Error('Post does not exist')
        }

        await post.remove()

        res.status(200).json(id)
    }
)


module.exports = {
    getPosts,
    createPost,
    getPost,
    updatePost,
    deletePost,
}