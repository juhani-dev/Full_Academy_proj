import { TextField } from "@mui/material"
import { useState } from "react"
import ReactPaginate from "react-paginate"
import {Link} from "react-router-dom"

const Items = ({ currentStations }) => {
  return (
    <>
      {currentStations.map((station) => (
        <li>
          <Link to={`/stations/${station[1]}`}>{station[0]}</Link>
        </li>
      ))}
      
    </>
  )
}
const FilterStations = ({stations}) => {
    const [search, setSearch] = useState("")
    const [showAll, setShowAll] = useState("")
    const stationsToShow = showAll
      ? stations
      : stations.filter((station) =>
          station.Name.toLowerCase().includes(search.toLowerCase())
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
        <PaginatedItems stations={stationsToShow}/>
      </div>
    )
}
const PaginatedItems = ({  stations }) => {
 
  const [currentPage, setCurrentPage] = useState(1)
  const [stationsPerPage] = useState(3)

  if (!stations) {
    return <di>loading</di>
  } else {
    
    const items = stations.map((line) => [line.Nimi,line._id])
    
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
export default FilterStations
