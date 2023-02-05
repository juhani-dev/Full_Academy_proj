const journeyRouter = require("express").Router()
const testJourney = require('../models/journey')

journeyRouter.get("/", async (request, response) => {
  const data = await testJourney.find({})
  console.log(data,"data")
  response.json(data)
})
journeyRouter.get("/:id", async (request, response) => {
  const data = await testJourney.findOne({ _id: request.params.id })
  console.log(data, "data")
  response.json(data)
})

module.exports = journeyRouter
