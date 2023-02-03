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

  

const stationSchema = new mongoose.Schema(
  {
    FID: Number,
    ID: Number,
    Nimi: String,
    Name: String,
    Osoite: String,
    Adress: String,
    Kaupunki: String,
    Stad: String,
    Operaattor:String,
    Kapasiteet:String,
    x:Number,
    y:Number
  },
  { collection: "stations" }
)

stationSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()

    delete returnedObject.__v
  },
})

module.exports = mongoose.model("Station", stationSchema)
