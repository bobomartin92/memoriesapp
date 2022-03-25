const { getPosts, getPostsBySearch, createPost, updatePost, likePost, deletePost, getPost, addComment } = require('../controllers/postControllers')
const { protect } = require('../middlewares/authMiddleware')

const router = require('express').Router()

router.route('/').get(getPosts).post(protect, createPost)

router.route('/search').get(getPostsBySearch)

router.route('/:id').get(getPost).put(protect, updatePost).delete(protect, deletePost)

router.put('/like/:id', protect, likePost)

router.put('/comment/:id', protect, addComment)

module.exports = router