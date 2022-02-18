// Import express
const express = require('express')

// Initialize the app
const app = express()

// Import our quotes
const quotes = require('./quotes.json')

// Setup an endpoint
app.get("/", (req, res) => {
    res.send("Welcome to the quotes app!")
})


app.get("/quote", (req, res) => {
    let random = Math.floor(Math.random() * quotes.length)
    // console.log(quotes[random])
    let quote = quotes[random].text + "&rdquo; <br /> – " + quotes[random].from
    res.send(quote)
})


// Start listening for connections
app.listen("3000", () => {
    console.log("Listening on port 3000")
})