import axios from 'axios'

const API_URL = '/posts/'

const getPosts = async () => {
    const res = await axios.get(API_URL)
    return res.data
}

const createPost = async (postData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const res = await axios.post(API_URL, postData, config)
    return res.data
}

const updatePost = async ({id, updatedPost}, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const res = await axios.put(`${API_URL}${id}`, updatedPost, config)
    return res.data
}

const likePost = async (id, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const res = await axios.put(`${API_URL}like/${id}`, id, config)
    return res.data
}

const deletePost = async (id, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const res = await axios.delete(`${API_URL}${id}`, config)
    return res.data
}

const postService = {
    getPosts, createPost, updatePost, likePost, deletePost
}

export default postService