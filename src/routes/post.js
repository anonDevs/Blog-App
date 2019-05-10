const express = require('express')
const router = new express.Router()
require('../db/mongoose')
const Post = require('../db/models/post')

//Create a post
router.post('/api/post', async (req, res) => {  
    try {
        //console.log(req.body)
        post = new Post(req.body)
    
        await post.save()
    
        res.status(201).send(post)
        
    } catch (error) {
        res.status(400).send(error)
    }
})

//Get All posts
router.get('/api/post', async (req, res) => {
    try {
        const posts = await Post.find({})
        res.send(posts)
    } catch (error) {
        res.status(500).send(error)
    }
})

//Get One Post
router.get('/api/post/')

module.exports = router 