import {useState,useEffect} from 'react'
import journeyService from "./services/journeys"
import StationPage from './components/stationPage'
const App = () => {
  const [journeys, setJourneys] = useState([])
  
  useEffect(() => {
    journeyService
      .getAll()
      .then(initialData => {
        setJourneys(initialData)
      })
  }, [])
  console.log(journeys,"app")
  return (
    <div>
      here
      <StationPage journeys={journeys} />
    </div>
  )
}

export default App;
