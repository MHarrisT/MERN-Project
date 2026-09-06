const express = require("express")
const app = express()
const errorMiddleware = require("./middleware/error")

// Fix for Express 5: enable extended query parser for nested bracket notation (e.g. price[gt]=1000)
app.set('query parser', 'extended')

app.use(express.json())

// route imports
const product = require("./routes/productRoute")

app.use('/api/v1',product)

// Middleware for Errors
app.use(errorMiddleware)

module.exports = app