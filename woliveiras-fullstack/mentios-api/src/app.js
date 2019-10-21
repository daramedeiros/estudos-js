
//chamamos o Express, instacioamos na constante app
const express = require('express')

//APP
const app = express()

//Load routes
cosnt indexRoutes = require('./routwe/index-routes')
app.use('/', indexRoutes)

module = app

