const express = require("express")
const app = express()
require("dotenv").config()
const cors = require("cors")
const journeyRouter = require("./routes/journeys")
const mongoose = require("mongoose")
mongoose.set("strictQuery", false)

console.log("connecting to", process.env.MONGODB_URI)

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("connected to MongoDB")
  })
  .catch((error) => {
    console.log("error connecting to MongoDB:", error.message)
  })

app.use(cors())
app.use(express.static("build"))
app.use(express.json())

app.use("/api/journeys", journeyRouter)
app.use("/api/journeys/:id", journeyRouter)



module.exports = app
