const asyncHandler = require('express-async-handler')
const Post = require('../models/postModel')

const getPosts = asyncHandler( async(req, res) => {
    const posts = await Post.find()
    res.status(200).json(posts)
})

const getPostsBySearch = asyncHandler( async(req, res) => {
    const {search} = req.query
    const title = new RegExp(search, 'i')

    const posts = await Post.find({$or: [{title}, {tags: {$in: title}}]})
    res.status(200).json(posts)
})

const createPost = asyncHandler(
    async (req, res) => {
        const memory = req.body

        if(!memory) {
            res.status(400)
            throw new Error('Complete all required fields')
        }

        const post = await Post.create({...memory, creatorId: req.user.id, creator: req.user.name})

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
const likePost = asyncHandler(
    async (req, res) => {
        const id = req.params.id

        const post = await Post.findById(id)

        if(!post) {
            res.status(400)
            throw new Error('Post does not exist')
        }

        let likes = post.likes

        if(likes.includes(req.user._id)) {
            likes = likes.filter((i) => req.user._id != i)
        } else {
            likes.push(req.user._id)
        }

        const updatedPost = await Post.findByIdAndUpdate(id, {likesCount: likes.length, likes}, {new: true})
        
        res.status(200).json(updatedPost)
    }
)

const addComment = asyncHandler(
    async (req, res) => {
        const id = req.params.id
        const {name, text} = req.body
        
        const post = await Post.findById(id)

        if(!post) {
            res.status(400)
            throw new Error('Post does not exist')
        }

        post.comments.push({name, text})

        const updatedPost = await Post.findByIdAndUpdate(id, { comments: post.comments }, {new: true})

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
        

        if(req.user.id !== post.creatorId) {
            res.status(401)
            throw new Error('Not Owner of Post')
        } else {

            await post.remove()
            res.status(200).json(id)
        }

    }
)


module.exports = {
    getPosts,
    getPostsBySearch,
    createPost,
    getPost,
    updatePost,
    likePost,
    deletePost,
    addComment
}