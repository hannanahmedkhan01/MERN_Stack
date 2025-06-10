const express = require("express");

const express = express.Router()

const {registerUser, 
    loginUser,
     getMe,
    }= require('../controllers/userControl');
//const { Route } = require("express");
router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', getMe)



module.exports = router
