const Snippet = require('../models/snippet')

class SnippetController {
  async showSnippet (req, res, next) {
    const { id } = req.params
    try {
      const snippet = await Snippet.findById(id).populate('user')
      return res.render('snippet/_id', { snippet })
    } catch (err) {
      next(err)
    }
  }

  async createSnippet (req, res, next) {
    const { title, description, language, code } = req.body
    const user = req.session.user._id
    try {
      const snippet = await Snippet.create({ title, description, language, code, user })
      req.flash('notification', { type: 'success', message: 'Snippet created successfully' })
      return res.redirect(`/snippet/${snippet._id}`)
    } catch (err) {
      next(err)
    }
  }
  async showEditSnippet (req, res, next) {
    const { id } = req.params
    try {
      const snippet = await Snippet.findById(id)
      // add slash before backtick and $ and {}
      snippet.code = snippet.code.replace(/`/g, '\\`').replace(/\$/g, '\\$').replace(/\{/g, '\\{').replace(/\}/g, '\\}')
      return res.render('snippet/edit', { snippet })
    } catch (err) {
      next(err)
    }
  }

  async editSnippet (req, res, next) {
    const { id } = req.params
    const { title, description, language, code } = req.body
    try {
      const snippet = await Snippet.findByIdAndUpdate(id, { title, description, language, code })
      req.flash('notification', { type: 'success', message: 'Snippet updated successfully' })
      return res.redirect(`/snippet/${snippet._id}`)
    } catch (err) {
      next(err)
    }
  }

  async deleteSnippet (req, res, next) {
    const { id } = req.params
    try {
      await Snippet.findByIdAndDelete(id)
      req.flash('notification', { type: 'success', message: 'Snippet deleted successfully' })
      return res.redirect('/')
    } catch (err) {
      next(err)
    }
  }
}

module.exports = new SnippetController()