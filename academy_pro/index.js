
const express = require("express")
const app = express()
const cors = require("cors")
require("dotenv").config()

const mongoose = require("mongoose")
const Journey = require("./models/trip")
app.use(cors())
app.use(express.json())
app.use(express.static("build"))


app.get("/api/journeys", (request, response) => {
  Journey.find({}).then((trips) => {
    response.json(trips)
  })
})






const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})