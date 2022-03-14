const { getPosts, createPost, updatePost, deletePost, getPost } = require('../controllers/postControllers')

const router = require('express').Router()

router.route('/').get(getPosts).post(createPost)

router.route('/:id').get(getPost).put(updatePost).delete(deletePost)

module.exports = router