import {Link } from "react-router-dom"
import { useState } from "react"
import { TextField } from "@mui/material"
const StationPage = ({stations}) => {
    const [showAll, setShowAll] = useState("")
    const [search, setSearch] = useState("")

   

    const stationsToShow = showAll
      ? stations
      : stations.filter((station) => station.Name.toLowerCase().includes(search.toLowerCase()))

    const handleChange = (event) => {
      setSearch(event.target.value)
    }
    return (
      <div>
       
        <TextField
          id="outlined-name"
          label="Search"
          value={search}
          onChange={handleChange}
        />
        <ul>
          {stationsToShow.map((station) => (
            <li key={station._id}>
              <Link to={`/stations/${station.id}`}>{station.Name}</Link>
            </li>
          ))}
        </ul>
      </div>
    )
} 
export default StationPage