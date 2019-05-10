const express = require('express')
const path = require('path')
const postRouter = require('./routes/post')

const port = 3000
const publicDirectoryPath = path.join(__dirname, '../public/')
const viewsPath = path.join(__dirname, '../views/')

const app = express()

app.use(express.json())
app.use(express.static(publicDirectoryPath))
app.use(postRouter)

app.set('view engine', 'hbs')
app.set('views', viewsPath)

app.listen(port)
console.log(`App is up on port ${port}`)