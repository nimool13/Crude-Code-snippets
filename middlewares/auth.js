function authMiddleware (req, res, next) {
  if (req.session.user) {
    next()
  } else {
    // render 403 with error message if the user is not logged in
    res.render('error', { status: 403, message: 'You are not logged in' })
  }
}

module.exports = authMiddleware
