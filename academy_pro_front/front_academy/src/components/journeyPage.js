import {
  TextField,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  TableHead,
} from "@mui/material"

import { useState } from "react"
import ReactPaginate from "react-paginate"
import { Link } from "react-router-dom"

const Items = ({ currentStations }) => {

  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Departure station</TableCell>
              <TableCell align="right">Return station</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentStations.map((journey) => (
              <TableRow>
                <TableCell>{journey[0]}</TableCell>
                <TableCell>{journey[1]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
  /*return (
    
    <div>
      
      <Container>
        {currentStations.map((station) => (
          <li>
            dep {station[0]}
            ret {station[1]}
          </li>
        ))}
      </Container>
    </div>
  )*/
}
const FilterJourneys = ({ journeys }) => {
  const [search, setSearch] = useState("")
  const [showAll, setShowAll] = useState("")
  const stationsToShow = showAll
    ? journeys
    : journeys.filter(
        (journey) =>
          journey.DepartureStationName.toLowerCase().includes(
            search.toLowerCase()
          ) ||
          journey.ReturnStationName.toLowerCase().includes(
            search.toLowerCase()
          )
      )
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
      <PaginatedItems journeys={stationsToShow} />
    </div>
  )
}
const PaginatedItems = ({ journeys }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [stationsPerPage] = useState(3)

  if (!journeys) {
    return <di>loading</di>
  } else {
    const items = journeys.map((line) => [line.DepartureStationName, line.ReturnStationName])

    console.log(items, "names")

    const indexOfLastStation = currentPage * stationsPerPage
    const indexOfFirstStation = indexOfLastStation - stationsPerPage
    const currentStations = items.slice(indexOfFirstStation, indexOfLastStation)

    const paginate = ({ selected }) => {
      setCurrentPage(selected + 1)
    }

    return (
      <div>
        <Items currentStations={currentStations} />
        <ReactPaginate
          onPageChange={paginate}
          pageCount={Math.ceil(items.length / stationsPerPage)}
          previousLabel={"Prev"}
          nextLabel={"Next"}
        />
      </div>
    )
  }
}
export default FilterJourneys

/*import { useState } from "react"
import { TextField } from "@mui/material"
import ReactPaginate from "react-paginate"
const JourneyPage = ({journeys}) => {
  const [showAll, setShowAll] = useState("")
  const [search,setSearch] = useState("")
  const journeysToShow = showAll
    ? journeys
    : journeys.filter((note) => note.DepartureStationName.includes(search) )

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
export default JourneyPage*/
