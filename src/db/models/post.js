const mongoose = require('mongoose')
const validator = require('validator')

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

const Post = mongoose.model('Post', postSchema)

module.exports = Post