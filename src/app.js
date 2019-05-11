//Require Express and Path Packages
const express = require('express')
const path = require('path')

//Require the routers
const postRouter = require('./routes/post')
const userRouter = require('./routes/user')

//Declare variables
const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname, '../public/')
const viewsPath = path.join(__dirname, '../views/')
//Initialize the App Variable
const app = express()

app.use(express.json())
app.use(express.static(publicDirectoryPath))

//Declare the routes
app.use(postRouter)
app.use(userRouter)

//Declare the views engine
app.set('view engine', 'hbs')
app.set('views', viewsPath)

//call the listen method
app.listen(port)
console.log(`App is up on port ${port}`)