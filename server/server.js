const express = require('express')
const dotenv = require("dotenv").config()
const mongoose = require("mongoose")
const postRoutes = require('./routes/postRoutes')
const {errorHandler} = require('./middlewares/errorHandler')
const port = process.env.PORT || process.env.LOCAL_PORT


const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/posts', postRoutes)

app.use(errorHandler)

mongoose.connect(process.env.LOCAL_URI || process.env.CLOUD_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    app.listen(port, () => {
        console.log(`db connected and server running at port: ${port}`);
    })
});
