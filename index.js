/*
 * Function : hbs-engine.js
 *
 * Description : helper function of handle bar
 *
 * Copyright (c) 2015-2018, Casiru.
 * Licensed under the Tripbtoz.
 */

'use strict'

const path = require('path')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

if (process.env.NODE_ENV !== 'production') {
  // app.use(morganLogger)
}

require('./backend/globals/alias')
require('./backend/globals/constants')

const familyApp = require('./backend/middlewares/familyApp')
const injectGlobalVariable = require('./backend/middlewares/injectGlobalVariable')
const variableService = require('./backend/services/variable')
const currencyService = require('./backend/services/currency')

// webpack
if (process.env.NODE_ENV === 'development') {
  require('./backend/middlewares/webpack')(app)
}
console.log(path.join(__dirname, '/favicon'))
const staticMiddleWare = express.static(path.join(__dirname, '/dist'))
const faviconMiddleWare = express.static(path.join(__dirname, '/favicon'))
app.use(staticMiddleWare)
app.use(faviconMiddleWare)

// Middle-ware
const compression = require('compression')
// const minify = require('express-minify');

let varInitDone = false
let currencyInitDone = false

app.disable('x-powered-by')

// In case of produnction, it set compression and minify for low data transfer
if (btozCfg.env === 'production') {
  app.use(compression())
  // app.use(minify()); // Current blocked for debug 170501
}

// Init currency
if (!currencyInitDone) {
  currencyInitDone = true
  currencyService.init()
  console.log('currency init done.')
}

// Init variable from DB
if (!varInitDone) {
  varInitDone = true
  variableService.init()
  console.log('variable init done.')
}

// Set after var init
require('./hbs-engine')

app.use(cookieParser()) // read cookies (needed for auth)
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '/.tmp')))
app.use(express.static(path.join(__dirname, '/public')))

const routeCANAPI = require('./backend/routes/api/booking')
app.use(familyApp)
app.use(injectGlobalVariable)
app.use('/api/can', routeCANAPI)

// Set global variables and constants
global.appname = 'gotivia'

// Set view engine ( hbs : handlebars )
app.set('trust proxy', 'loopback')
app.set('view engine', 'hbs')
app.set('view engine', 'pug')
app.engine('html', require('ejs').renderFile)
app.set('views', path.resolve(__dirname, './app/views'))
app.use((req, res, next) => {
  res.locals.env = btozCfg.env
  res.locals.NODE_ENV = process.env.NODE_ENV
  res.locals.BTOZ_DATA_ENV = process.env.BTOZ_DATA_ENV
  next()
})

app.use(require('./backend/routes/authentication/middleware.auth').verifyUserWithToken)

// Set pre route
require('./backend/globals/pre-route')(app)

app.use(require('./backend/middlewares/logHttp'))

const routeIndex = require('./backend/routes')
app.use('/', routeIndex)
// Set post route
require('./backend/globals/post-route')(app)

// appRoutes.printRoutes(app)

module.exports = app
