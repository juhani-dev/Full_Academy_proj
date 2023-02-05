import { useState } from "react"
import { TextField } from "@mui/material"

const JourneyPage = ({journeys}) => {
  const [showAll, setShowAll] = useState("")
  const [search,setSearch] = useState("")
  const journeysToShow = showAll
    ? journeys
    : journeys.filter((note) => note.DepartureStationName.includes(search) )

  const handleChange = (event) => {
    setSearch(event.target.value)
  }
  console.log(journeys," journeya")
  return (
    <div>
      <TextField
    id="outlined-name"
    label="Search"
    value={search}
    onChange={handleChange}
/>
      {journeysToShow.map((line) => (
        <li key={line._id}>{line.DepartureStationName}</li>
      ))}
      here
      {journeys.map((line) => (
        <li key={line._id}>{line.Departure}</li>
      ))}
    </div>
  )
}
export default JourneyPage