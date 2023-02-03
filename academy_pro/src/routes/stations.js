const stationRouter = require("express").Router()
const station = require("../models/station")

stationRouter.get("/", async (request, response) => {
  const data = await station.find({})
  console.log(data, "data")
  response.json(data)
})
stationRouter.get("/:id", async (request, response) => {
  const data = await station.findOne({ _id: request.params.id })
  console.log(data, "data")
  response.json(data)
})
module.exports = stationRouter
