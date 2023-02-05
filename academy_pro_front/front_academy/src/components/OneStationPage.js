import { useEffect,useState } from "react"
import stationService from "../services/stations"
import {
  useParams,
} from "react-router-dom"

const OneStationPage = ({journeys}) => {
    const [station, setStation] = useState([])
    const id = useParams().id
    
     useEffect(() => {
       stationService.getOne(id).then((initialData) => {
         setStation(initialData)
       })
     }, [id])
     console.log(station,"station")

    const departureStationCount = journeys.reduce( function( total,line){
         return line.ReturnStationId === station.ID ? total + 1 : total 
    },0)
    const returnStationCount = journeys.reduce(function (total, line) {
      return line.ReturnStationId === station.ID ? total + 1 : total
    }, 0)
    console.log(departureStationCount,returnStationCount,"counts")
    return(
        <div>
            
            OneStationPage
            {station.Name}
        </div>
    )
}
export default OneStationPage