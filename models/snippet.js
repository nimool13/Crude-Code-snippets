const mongoose = require('mongoose')

const Schema = mongoose.Schema

const snippetSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  code: { type: String, required: true },
  language: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  user: { type: Schema.Types.ObjectId, ref: 'User' }
})

// before save code, update updatedAt
snippetSchema.pre('save', function (next) {
  this.updatedAt = Date.now()
  next()
})

// paginate function, use to paginate snippets by page and limit per page
snippetSchema.statics.paginate = function ({ query = {}, page, limit }) {
  return this.find(query).sort({ createdAt: -1 }).skip((page - 1) * limit).limit(limit).populate('user')
}

// create index for title, description, language and code
snippetSchema.index({ title: 'text', description: 'text', language: 'text', code: 'text' }, { language_override: 'dummy' })

module.exports = mongoose.models.Snippet || mongoose.model('Snippet', snippetSchema)
