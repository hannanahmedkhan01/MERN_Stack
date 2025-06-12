const express = require("express");
const User= require('../models/userModels')
const router = express.Router()

const {registerUser, 
    loginUser,
     getMe,
    }= require('../controllers/userControl');
    
const {protect}=require('../middleware/authMiddleware')
//const { Route } = require("express");
router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me',protect, getMe)



module.exports = router
