import { useEffect,useState } from "react"
import stationService from "../services/stations"
import {
  useParams,
} from "react-router-dom"

const OneStationPage = () => {
    const [station, setStation] = useState([])
    const id = useParams().id
    console.log(id)
     useEffect(() => {
       stationService.getOne(id).then((initialData) => {
         setStation(initialData)
       })
     }, [id])
     console.log(station,"station")
    return(
        <div>
            
            OneStationPage
            {station.Name}
        </div>
    )
}
export default OneStationPage