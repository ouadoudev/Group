const express = require('express')
const mongoose = require('mongoose')
const userRoute = require('./routes/userRoute')

require('dotenv').config()

const port = process.env.PORT || 3000

mongoose.connect('mongodb://localhost:27017/chat')

const app = express()
app.set('view engine', 'ejs');
app.use(express.static('public'));
const http = require('http').Server(app)

app.use('/', userRoute)

http.listen(port, () => {
  console.log(`server is running on port ${port}`)
})