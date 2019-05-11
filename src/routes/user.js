const express = require('express')
const router = new express.Router()
require('../db/mongoose')
const User = require('../db/models/user')

//Add a user to the DB
router.post('/users/signup', async (req, res) => {
    try{
        const user = new User(req.body)

        await user.save()
        res.status(201).send(user)

    }catch(error){

        if(error.code == 11000){
            res.send({
                Error: 'The Email is already in use with another user account'
            })
            return
        }
        console.log(error.code)
        res.send(error)
    }
})

module.exports = router