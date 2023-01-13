
function Event({name, startTime, endTime}) {
    console.log('in one event')
    return (
      <div className="App">
        <div>{name}</div>
        <div>{startTime}</div>
        <div>{endTime}</div>
        <button>delete event</button>
      </div>
    );
  }
  
  export default Event;
  