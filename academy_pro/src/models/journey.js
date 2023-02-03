
const mongoose = require("mongoose")

mongoose.set("strictQuery", false)

const url = process.env.MONGODB_URI

console.log("connecting to", url)

mongoose
  .connect(url)
  .then((result) => {
    console.log("connected to MongoDB")
  })
  .catch((error) => {
    console.log("error connecting to MongoDB:", error.message)
  })
const testJourneySchema = new mongoose.Schema(
  {
    departure: String,
    return: String,
    departureStationName: String,
    departureStationId: String,
    returnStationName: String,
    returnStationId: String,
    distance: String,
    duration: String,
  },
  { collection: "journey" }
)


testJourneySchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    
    delete returnedObject.__v
  },
})

module.exports = mongoose.model("testJourney", testJourneySchema)
