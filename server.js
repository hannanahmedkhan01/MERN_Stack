const express = require('express')
//const send = require('send')
const {errorhandler} = require('./middleware/errorMiddleware')
const dotenv = require('dotenv').config()

const port = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(errorhandler)
app.use('/api/goals',require('./routes/goalRoutes'))

app.listen(port, () => console.log(`Server Connected to ${port}!`))

