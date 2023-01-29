const Snippet = require('../models/snippet')

async function snippetMiddleware (req, res, next) {
  if (!req.session.user) return res.render('error', { status: 403, message: 'You are not allowed to edit this snippet' })

  // find the snippet by id, populate the user and check if the user is the same as the session user
  const { id } = req.params
  try {
    const snippet = await Snippet.findById(id).populate('user')
    // if the user is not the same as the session user, redirect to the home page
    if (snippet.user._id.toString() !== req.session.user._id.toString()) { return res.render('error', { status: 403, message: 'You are not allowed to edit this snippet' }) }

    next()
  } catch (err) {
    next(err)
  }
}

module.exports = snippetMiddleware
