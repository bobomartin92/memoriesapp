const { timeStamp } = require('console')
const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    title : {
        type: String,
        required: [true, 'Post title is required']
    },
    message : {
        type: String,
        required: [true, 'Post message is required']
    },
    tags: {
        type: [String]
    },
    creator : String,
    selectedFile: {
        type: String,
        required: [true, 'Add an image of the memory']
    },
    likeCount : {
        type: Number,
        default: 0
    }
},{
    timestamps: true
})

module.exports = mongoose.model('post', postSchema)