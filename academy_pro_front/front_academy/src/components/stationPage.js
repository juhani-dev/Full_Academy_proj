import {Link } from "react-router-dom"
const StationPage = ({stations}) => {
    
    return (
      <div>
        StationPage
       
        <ul>
          {stations.map((station) => (
            <li key={station._id}>
              <Link to={`/stations/${station.id}`}>{station.Name}</Link>
            </li>
          ))}
        </ul>
      </div>
    )
} 
export default StationPage