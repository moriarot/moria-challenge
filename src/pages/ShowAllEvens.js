import Event from "./oneEvent";
import React, { useState, useEffect } from 'react';

function ShowEvents() {
  const [events, setEvents] = useState({});
  const [specificDate, setSpecificDate] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/events")
      .then((res) => res.json())
      .then((data) => setEvents((oldState) => { return data.events }));
  }, []);

  const getEventByDate = () => {
    fetch("http://localhost:8000/events-by-date?specificDate=" + specificDate)
      .then((res) => res.json())
      .then((data) => setEvents((oldState) => { return data.events }));
  }

  return (
    <div className="events-container">
      <div>events from date:
        <input id="specificDate" type="date" onChange={(e) => { setSpecificDate(e.target.value) }}></input>
        <button onClick={getEventByDate}>Show Event</button>

      </div>
      <div className="flex-container">

        {events && events.length && events.map((element, index) => {
          return <Event
            key={index}
            id={element._id}
            name={element.name}
            startTime={new Date(element.startTime)}
            endTime={new Date(element.endTime)}
          />
        })}
      </div>
    </div>
  );
}

export default ShowEvents;
