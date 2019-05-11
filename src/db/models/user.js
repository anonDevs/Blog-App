const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    age: {
        type: Number,
        required: true,
        validate(value) {
            if(value < 18){
                throw new Error('You must be above 18 to sign up!')
            }
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        validate(value) {
            if(!validator.isEmail(value)){
                throw new Error('The email you have provided is invalid!')
            }
        }
    },
    password: {
        type: String,
        required: true,
        validate(value) {
            if(value.length < 8){
                throw new Error('The password must be atleast 8 Characters long!')
            }
        }
    }

})

userSchema.pre('save', async function() {
    user = this

    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password, 8)
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User