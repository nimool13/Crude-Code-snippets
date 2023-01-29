const Snippet = require('../models/snippet')

class IndexController {
  async index(req, res, next) {
    try {
      const snippets = await Snippet.paginate({ page: 1, limit: 5 })
      snippets.forEach(snippet => {
        // get first 10 lines of code
        snippet.code = snippet.code.split('\n').slice(0, 10).join('\n')
      })
      return res.render('index', { snippets })
    } catch (error) {
      next(error)
    }
  }

  async discover(req, res, next) {
    try {
      let { page } = req.query
      const { search } = req.query
      page = parseInt(page) || 1
      if (page < 1) page = 1
      const limit = 10

      const query = search ? { $text: { $search: search } } : {}
      const count = await Snippet.countDocuments(query)
      const totalPages = Math.ceil(count / limit)
      if (totalPages === 0) return res.render('discover', { snippets: [], totalPages: 1, page: 1, header: `${search} - No result found`, search })
      if (page > totalPages) return res.redirect(`/discover?page=${totalPages}${search ? `&search=${search}` : ''}`)

      const snippets = await Snippet.paginate({
        query, page, limit
      })

      snippets.forEach(snippet => {
        // get first 10 lines of code
        snippet.code = snippet.code.split('\n').slice(0, 10).join('\n')
      })
      return res.render('discover', { snippets, totalPages, page, header: search && `${search} - ${count} results found`, search })
    } catch (err) {
      next(err)
    }
  }
  
  async languages(req, res, next) {
    try {
      // count the number of snippets for each language
      const languages = await Snippet.aggregate([
        { $group: { _id: '$language', count: { $sum: 1 } } }
      ])
      languages.forEach(language => {
        language.name = language._id
        delete language._id
      })
      return res.render('languages', { languages })
    } catch (err) {
      next(err)
    }
  }

  async language(req, res, next) {
    try {
      const { language } = req.params
      let { page } = req.query
      page = parseInt(page) || 1
      if (page < 1) page = 1
      const limit = 10

      const count = await Snippet.countDocuments({ language })
      const totalPages = Math.ceil(count / limit)
      if (totalPages === 0) return res.render('discover', { snippets: [], totalPages: 1, page: 1, header: `${language} - No result found` })

      if (page > totalPages) return res.redirect(`/language/${language}?page=${totalPages}`)

      const snippets = await Snippet.paginate({
        query: {
          language
        },
        page,
        limit
      })

      snippets.forEach(snippet => {
        // get first 10 lines of code
        snippet.code = snippet.code.split('\n').slice(0, 10).join('\n')
      })
      return res.render('discover', { snippets, totalPages, page, header: language })
    } catch (err) {
      next(err)
    }
  }
}

module.exports = new IndexController()
