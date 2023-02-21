const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config()

const port = process.env.PORT || 8080;
const app = express()

app.use(cors())
app.use(express.json())

const uri = process.env.ATLAS_URI
mongoose.connect(uri)
const connection = mongoose.connection
connection.once('open', () => {
    console.log("S-a stabilit conexiunea la baza de date.")
})

const candidatiRoutes = require("./candidatiRoutes")
const candidatiRoutesFind = require("./candidatiRoutesFind")
app.use("/candidati", candidatiRoutes)
app.use("/candidatiFind", candidatiRoutesFind)

app.listen(port, () => {
    console.log(`The server is running on port: ${port}.`);
})