const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Complete the name field']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Complete the email field']
    },
    password: {
        type: String,
        required: [true, 'Complete the password field']
    }
}, {timestamps: true})

module.exports = mongoose.model('User', userSchema)