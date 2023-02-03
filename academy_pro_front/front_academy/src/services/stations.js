import axios from "axios"
const baseUrl = "http://localhost:3001/api/stations"

const getAll = async () => {
  const request = await axios.get(baseUrl)

  return request.data
}
const getOne = async (id) => {
    console.log(id,"id at service")
  const request = await axios.get(`${baseUrl}/stations/${id}`)

  return request.data
}
export default {
  getAll,
  getOne
}
