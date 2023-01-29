const User = require('../models/user')
const Snippet = require('../models/snippet')

class UserController {
  async register(req, res, next) {
    const { username, password } = req.body
    const getError = (error) => ({ error, username, password })
    // validate input
    if (!username || !password) {
      return res.render('register', getError('Please enter username and password'))
    }
    // validate username length
    if (username.length < 3) {
      return res.render('register', getError('Username must be at least 3 characters long'))
    }
    // validate username not containing special characters
    if (!/^[a-zA-Z0-9]+$/.test(username)) {
      return res.render('register', getError('Username can only contain letters and numbers'))
    }
    // validate password
    if (password.length < 6) {
      return res.render('register', getError('Password must be at least 6 characters long'))
    }

    try {
      // check if user already exists
      const existingUser = await User.findOne({ username })
      if (existingUser) {
        // if user already exists, return error message
        return res.render('register', getError('Username already exists'))
      }
      // create new user
      const user = await User.create({ username, password })
      // set session
      req.session.user = user
      req.flash('notification', { type: 'success', message: 'Registration successful' })
      res.redirect('/')
    } catch (err) {
      next(err)
    }
  }

  async login(req, res, next) {
    const { username, password } = req.body
    try {
      // check if user exists
      const user = await User.findOne({ username })
      if (!user) {
        // if user does not exist, return error message
        return res.render('login', { error: 'User does not exist' })
      }
      // check if password is correct
      const isValidPassword = await user.comparePassword(password)
      if (!isValidPassword) {
        // if password is incorrect, return error message
        return res.render('login', { error: 'Wrong password' })
      }
      // set session
      req.session.user = user
      req.flash('notification', { type: 'success', message: 'Login successful!' })
      res.redirect('/')
    } catch (err) {
      next(err)
    }
  }

  async logout(req, res) {
    // delete user session
    req.session.user = null
    req.flash('notification', { type: 'success', message: 'Logout successful!' })
    res.redirect('/')
  }

  async showUserPage(req, res, next) {
    const { username } = req.params
    try {
      // check if user exists
      const user = await User.findOne({ username })
      if (!user) {
        // if user does not exist, return error message
        return res.render('user/_username', { error: 'User does not exist' })
      }
      const totalSnippets = await Snippet.countDocuments({ user: user._id })
      const snippets = await Snippet.paginate({ query: { user: user._id }, page: 1, limit: 10 })
      snippets.forEach(snippet => {
        // get first 10 lines of code
        snippet.code = snippet.code.split('\n').slice(0, 10).join('\n')
      })
      // render user page
      res.render('user/_username', { userInfo: user, totalSnippets, snippets })
    } catch (err) {
      next(err)
    }
  }
}

module.exports = new UserController()
