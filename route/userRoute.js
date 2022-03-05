const express = require('express')
const router = express.Router();

const user = require('../controller/userController')


router.get('/users',  user.all)

module.exports = router;