const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('../models/userModel')
const e = require('express')

const genToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: '1d'})
}

const signup = asyncHandler( async(req, res) => {
    const {name, email, password} = req.body

    if(!name || !email || !password){
        res.status(400)
        throw new Error('Please provide all fields')
    }

    const userExists = await User.findOne({email})

    if (userExists){
        res.status(400)
        throw new Error('User Exists')
    }

    const salt = await bcrypt.genSalt(12)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = await User.create({name, email, password: hashedPassword})

    if (user) {
        res.status(200).json({name: user.name, token: genToken(user._id)})
    } else {
        res.status(400)
        throw new Error('User not registered')
    }
})

const signin = asyncHandler(
    async (req, res) => {
        const {email, password} = req.body

        if(!email || !password){
            res.status(400)
            throw new Error('Please provide all fields')
        }

        const user = await User.findOne({email})

        if (!user){
            res.status(400)
            throw new Error('User Do Not Exists')
        } else {
            if (await bcrypt.compare(password, user.password)) {
                res.status(200).json({name: user.name, token: genToken(user._id)})
            } else {
                res.status(400)
                throw new Error('Password Incorrect')
            }
        }
        
    }
)


module.exports = {
    signin,
    signup
}