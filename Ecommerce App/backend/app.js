const express = require("express")
const app = express()
const errorMiddleware = require("./middleware/error")

// Fix for Express 5: enable extended query parser for nested bracket notation (e.g. price[gt]=1000)
app.set('query parser', 'extended')

app.use(express.json());

const cookieParser = require("cookie-parser");
app.use(cookieParser());

// route imports
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");

app.use("/api/v1", product);
app.use("/api/v1", user);

// Middleware for Errors
app.use(errorMiddleware)

module.exports = app