const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())

const baseURL = "/api/books"
const books_controller = require("./controllers/books_controller")

app.post(baseURL, books_controller.create)

app.get(baseURL, books_controller.read)

app.put(`${baseURL}/:id`, books_controller.update)

const port = 3000
app.listen(port, () => console.log(`The magic is running on port ${port}`))