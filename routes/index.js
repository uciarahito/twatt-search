let twattController = require('../controllers/twattController')
const express = require('express')
const router = express.Router()

router.post('/api/search', twattController.searchTwatt)

module.exports = router