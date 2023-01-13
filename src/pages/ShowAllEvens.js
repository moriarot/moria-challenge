import Event from "./oneEvent";
function ShowEvents({events, hideEvents}) {
    console.log('in this page showAllEvents', Array(events))
    return (
      <div className="App">
      {events && events.map(element => {
    console.log('in this page showAllEvents 2', element)

        return <Event 
        name = {element.name} 
        startTime = {element.startTime} 
        endTime = {element.endTime} 
        />
      })}
      </div>
    );
  }
  
  export default ShowEvents;
  