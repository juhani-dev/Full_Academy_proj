const StationPage = ({journeys}) => {
    console.log(journeys,"sationpage")
    return(
    <div>
        here
        {journeys.map(line => 
            <li key={line._id}>{line.Departure}</li>
            )}
    </div>)
} 
export default StationPage