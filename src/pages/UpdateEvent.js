import React, { useState } from 'react';

function UpdateEvent(props) {
  const [name, setName] = useState(props.name);
  const [startTime, setStartTime] = useState(new Date(props.startTime).toString());
  const [endTime, setEndTime] = useState(props.endTime);
console.log("propd", props)
console.log("propd typeof", typeof props.startTime)
console.log("propd ", (new Date(props.startTime)))
  const updateEvent = (e) => {
    const body = {
      id: props.id,
      update : {
        name,
        startTime: new Date(startTime), //todo
        endTime: endTime
      }    
    }
    fetch("http://localhost:8000/update-event", {
          method: "POST",
          body: JSON.stringify(body),
          headers: {
            "Content-Type": "application/json"
          }
        })
      .then((res) => res.json())
  }

  const addEvent = () => {
    console.log('add event', startTime, ",", endTime)
    const body = {
      name,
      startTime,
      endTime
    }
    fetch("http://localhost:8000/events", {
          method: "POST",
          body: JSON.stringify(body),
          headers: {
            "Content-Type": "application/json"
          }
        })
      .then((res) => res.json())
  }

  return (
    <div className="App">
    <form className="form-event">
        <label for="name">name</label>
        <input id="name" placeholder="name" onChange={(e)=> { setName(e.target.value) }} value = {name}></input><br/>
        <label for="name">startTime</label>
        <input id="startTime" type="datetime-local" onChange={(e)=> { setStartTime(e.target.value) }} value = {startTime}></input><br/>
        <label for="name">endTime</label>
        <input id="endTime" type="datetime-local" onChange={(e)=> { setEndTime(e.target.value) }} value = {endTime}></input><br/>
        <button type="submit" onClick={(e) => { props.id ? updateEvent(e) : addEvent(e) }}>{props.id ? 'save' : 'add event'}</button>
        <button onClick={()=> props.setUpdateMode(false)}>cancel</button>
    </form>
    </div>
  );
}

export default UpdateEvent;
