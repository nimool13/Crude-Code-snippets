const express = require('express')
const router = express.Router()

const UserController = require('../controllers/user')

router.get('/login', (req, res) => {
  // if user already login, redirect to home page
  if (req.session.user) {
    return res.redirect('/')
  }
  res.render('login')
})
router.get('/register', (req, res) => {
  // if user already login, redirect to home page
  if (req.session.user) {
    return res.redirect('/')
  }
  res.render('register')
})

router.get('/user/:username', UserController.showUserPage)

router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.get('/logout', UserController.logout)

module.exports = router
