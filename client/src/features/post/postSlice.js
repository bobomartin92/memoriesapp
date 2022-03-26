import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import postService from './postService'

const initialState = {
    posts: [],
    post: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

//Get All Posts

export const getPosts = createAsyncThunk('post/getPosts', async(thunkAPI) => {
    try {
        return await postService.getPosts()
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

//Get A Post

export const getPost = createAsyncThunk('post/getPost', async(id, thunkAPI) => {
    try {
        return await postService.getPost(id)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

//Get Searched Posts

export const getPostsBySearch = createAsyncThunk('post/getPostsBySearch', async(search, thunkAPI) => {
    try {
        return await postService.getPostsBySearch(search)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

//Creat A Post

export const createPost = createAsyncThunk('post/createPost', async(postData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await postService.createPost(postData, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

//Update A Post

export const updatePost = createAsyncThunk('post/updatePost', async(postData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await postService.updatePost(postData, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

//Like A Post

export const likePost = createAsyncThunk('post/likePost', async(id, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await postService.likePost(id, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

//Add A Comment

export const addComment = createAsyncThunk('post/addComment', async(commentData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await postService.addComment(commentData, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

//Delete A Post

export const deletePost = createAsyncThunk('post/deletePost', async(id, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await postService.deletePost(id, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        reset: (state) => {
            state.isError = false
            state.isLoading = false
            state.isSuccess = false
            state.message = ''
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getPosts.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getPosts.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.posts = action.payload
            })
            .addCase(getPosts.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getPost.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getPost.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.post = action.payload
            })
            .addCase(getPost.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getPostsBySearch.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getPostsBySearch.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.posts = action.payload
            })
            .addCase(getPostsBySearch.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(createPost.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createPost.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.posts = [...state.posts, action.payload]
            })
            .addCase(createPost.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(updatePost.pending, (state) => {
                state.isLoading = true
            })
            .addCase(updatePost.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.posts = state.posts.map(post => post._id === action.payload._id ? action.payload : post)
                state.post = action.payload
            })
            .addCase(updatePost.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(likePost.pending, (state) => {})
            .addCase(likePost.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.posts = state.posts.map(post => post._id === action.payload._id ? action.payload : post)
                state.post = action.payload
            })
            .addCase(likePost.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(addComment.pending, (state) => {})
            .addCase(addComment.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.post = action.payload
            })
            .addCase(addComment.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(deletePost.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deletePost.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.posts = state.posts.filter(post => post._id !== action.payload)
            })
            .addCase(deletePost.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
})

export const {reset} = postSlice.actions

export default postSlice.reducer