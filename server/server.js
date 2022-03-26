const path = require('path')
const express = require('express')
const dotenv = require("dotenv").config()
const mongoose = require("mongoose")
const postRoutes = require('./routes/postRoutes')
const userRoutes = require('./routes/userRoutes')
const {errorHandler} = require('./middlewares/errorHandler')
const cors = require('cors')
const port = process.env.PORT || process.env.LOCAL_PORT


const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())

app.use('/posts', postRoutes)
app.use('/users', userRoutes)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')))

    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, '../', 'client', 'build', 'index.html'))
    })
} else {
   app.get('/', (req, res) => {
       res.send('Change to production')
})}

app.use(errorHandler)

mongoose.connect(process.env.CLOUD_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    app.listen(port, () => {
        console.log(`db connected and server running at port: ${port}`);
    })
});
