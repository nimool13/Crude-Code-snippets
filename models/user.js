const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const Schema = mongoose.Schema

const userSchema = new Schema({
  username: {
    type: String, required: true, unique: true
  },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() }
})

// before create user, hash password using bcrypt
userSchema.pre('save', function (next) {
  const user = this
  if (!user.isModified('password')) return next()
  bcrypt.hash(user.password, 10, (err, hash) => {
    if (err) return next(err)
    user.password = hash
    next()
  })
})

// compare password
userSchema.methods.comparePassword = async function (password) {
  try {
    return await bcrypt.compare(password, this.password)
  } catch (err) {
    throw new Error(err)
  }
}

module.exports = mongoose.model('User', userSchema)
