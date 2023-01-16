import Event from "./oneEvent";
import React, { useState, useEffect } from 'react';

function ShowEvents() {
  const [events, setEvents] = useState({});

  useEffect(() => {
    fetch("http://localhost:8000/events")
      .then((res) => res.json())
      .then((data) => setEvents((oldState) => { return data.events }));
  }, []);

    return (
      <div className="flex-container">
      {events && events.length &&  events.map((element, index) => {
        return <Event 
        key = {index}
        id = {element._id}
        name = {element.name} 
        startTime = {new Date(element.startTime)} 
        endTime = {new Date(element.endTime)} 
        />
      })}
      </div>
    );
  }
  
  export default ShowEvents;
  