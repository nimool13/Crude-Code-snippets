const express = require('express')
const router = express.Router()

const IndexController = require('../controllers/index')

router.get('/', IndexController.index)
router.get('/discover', IndexController.discover)
router.get('/languages', IndexController.languages)
router.get('/language/:language', IndexController.language)

module.exports = router
