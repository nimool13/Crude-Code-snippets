const express = require('express')
const SnippetController = require('../controllers/snippet')
const router = express.Router()

const authMiddleware = require('../middlewares/auth')
const snippetMiddleware = require('../middlewares/snippet')

router.get('/snippet/create', authMiddleware, function (req, res) {
  res.render('snippet/create')
})

router.get('/snippet/:id', SnippetController.showSnippet)

router.get('/snippet/:id/edit', snippetMiddleware, SnippetController.showEditSnippet)
router.post('/snippet/:id/edit', snippetMiddleware, SnippetController.editSnippet)
router.get('/snippet/:id/delete', snippetMiddleware, SnippetController.deleteSnippet)

router.post('/snippet/create', authMiddleware, SnippetController.createSnippet)

module.exports = router
