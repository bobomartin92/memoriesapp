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
    creatorId : {
        type: String,
        required: true,
    },
    creator : {
        type: String,
        required: true,
    },
    selectedFile: {
        type: String,
        required: [true, 'Add an image of the memory']
    },
    likes : {
        type: [String]
    },
    likesCount : {
        type: Number,
        default: 0
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Post', postSchema)