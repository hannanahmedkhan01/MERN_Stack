const express = require('express')
//const send = require('send')
const {errorhandler} = require('./middleware/errorMiddleware')
const dotenv = require('dotenv').config()

const port = process.env.PORT || 5000
const connectDB = require('./config/db')
const app = express()

connectDB()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/goals',require('./routes/goalRoutes'))
app.use('/api/users',require('./routes/userRoutes'))
app.use(errorhandler)

app.listen(port, () => console.log(`Server Connected to ${port}!`))

