let twattController = require('../controllers/twattController')
const express = require('express')
const router = express.Router()

router.get('/api/search', twattController.searchTwatt)

module.exports = router