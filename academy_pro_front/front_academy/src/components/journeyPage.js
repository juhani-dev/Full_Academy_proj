const JourneyPage = ({journeys}) => {
  console.log(journeys, "journeypage")
  return (
    <div>
      here
      {journeys.map((line) => (
        <li key={line._id}>{line.Departure}</li>
      ))}
    </div>
  )
}
export default JourneyPage