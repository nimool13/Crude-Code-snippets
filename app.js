const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const logger = require('morgan')
const mongoose = require('mongoose')
const session = require('express-session')
const csrf = require('csurf')
const flash = require('connect-flash')

const indexRouter = require('./routes/index')
const userRouter = require('./routes/user')
const snippetRouter = require('./routes/snippet')

const app = express()
// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(logger('dev'))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.urlencoded({ extended: false }))

app.use(cookieParser())
app.use(csrf({ cookie: true }))
app.use(express.static(path.join(__dirname, 'public')))

app.use(session({
  secret: 'thisismysecretkey',
  saveUninitialized: true,
  cookie: { maxAge: 1000 * 60 * 60 * 24 },
  resave: false
}))

app.use(flash())
app.use(function (req, res, next) {
  res.locals.user = req.session.user
  res.locals.notification = req.flash('notification')[0]
  const token = req.csrfToken()
  res.cookie('XSRF-TOKEN', token)
  res.locals.csrfToken = token; next()
})

app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('index')
})

app.use(indexRouter)
app.use(userRouter)
app.use(snippetRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  const err = new Error('Page not found')
  err.status = 404
  next(err)
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.status = err.status || 500
  res.locals.message = err.status === 500 ? 'Internal Server Error' : err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

mongoose.connect('mongodb+srv://******', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
  console.log('Connected to MongoDB successfully!')
})
app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port http://localhost:3000')
})
 //yJY3mEVOBy8IeL4s
