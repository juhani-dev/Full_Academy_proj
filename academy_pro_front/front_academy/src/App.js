import {useState,useEffect} from 'react'
import journeyService from "./services/journeys"
import stationService from "./services/stations"
import JourneyPage from './components/journeyPage'
import StationPage from './components/stationPage'
import OneStationPage from './components/OneStationPage'
import FilterStations from './components/stationListPage'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import { Button, Divider, Container,Typography } from "@mui/material"

const App = () => {
  const [journeys, setJourneys] = useState([])
  const [stations, setStations] = useState([])
  
  useEffect(() => {
    journeyService
      .getAll()
      .then(initialData => {
        setJourneys(initialData)
      })
  }, [])

  
  useEffect(() => {
      const datas = async () => {
         try {
          console.log("here")
           const get = await stationService.getAll()
           setStations(get)
           console.log(get,"get")
         } catch (e) {
           console.error(e)
         }
    } 
    datas()
  
  }, [])
  if(!stations ||!journeys){
    return (
      <div>
        loading..
       
      </div>
    )
  }
  
  return (
    <div>
      <Router>
        <Container>
          <Typography variant="h3" style={{ marginBottom: "0.5em" }}>
            Journey app
          </Typography>
          <Button component={Link} to="/" variant="contained" color="primary">
            JourneyPage
          </Button>
          <Button
            component={Link}
            to="/stations"
            variant="contained"
            color="primary"
          >
            StationPage
          </Button>
          <Divider hidden />

          <Routes>
            <Route
              path="/stations/:id"
              element={<OneStationPage journeys={journeys} />}
            />
            <Route path="/" element={<JourneyPage journeys={journeys} />} />
            <Route
              path="/stations"
              element={<StationPage stations={stations} />}
            />
            <Route
              path="/testing"
              element={<FilterStations  stations={stations} />}
            />
          </Routes>
        </Container>
      </Router>
    </div>
  )
}

export default App;
