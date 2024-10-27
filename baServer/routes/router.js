
const express = require('express')
const router = express.Router();

const userController = require('../controller/userController')


//to set path register request
router.post('/register', userController.registerController)

module.exports = router;
