const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const UserModel = require("./models/Users")
const PORT = 3001

const app = express()
app.use(cors())
app.use(express.json())

const mongoURI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/crud"
mongoose.connect(mongoURI)

app.get('/', (req, res) => {
    UserModel.find({})
    .then(users => res.json(users))
    .catch(err => res.status(500).json({ error: err.message }))
})

app.get('/getUser/:id', (req, res) => {
    const id = req.params.id
    UserModel.findById({_id:id})
    .then(users => res.json(users))
    .catch(err => res.status(500).json({ error: err.message }))
})

app.put('/updateUser/:id', (req, res) => {
    const id = req.params.id
    UserModel.findByIdAndUpdate({_id: id}, {
        name: req.body.name, 
        email: req.body.email, 
        age: req.body.age
    })
    .then(users => res.json(users))
    .catch(err => res.status(500).json({ error: err.message }))    
})

app.delete('/deleteUser/:id', (req, res) => {
    const id = req.params.id
    UserModel.findByIdAndDelete({_id: id})
    .then(response => res.json(response))
    .catch(err => res.status(500).json({ error: err.message }))
})

app.post("/createUser", (req, res) => {
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.status(500).json({ error: err.message }))
})

app.listen(PORT, () => console.log("Server is Running on PORT " + PORT))
module.exports = app;