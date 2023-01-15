import React, { useState } from 'react';
import UpdateEvent from './UpdateEvent';

function Event({ id, name, startTime, endTime }) {
  const [update, setUpdate] = useState(false);

  const deleteEvent = () => {
    const body = {
      id
    }
    console.log("in add event front @@", body)
    fetch("http://localhost:8000/delete-event", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((res) => res.json())
  }

  return (
    <div className="event-container">
      <div>{name}</div>
      <div>{startTime}</div>
      <div>{endTime}</div>
      <button onClick={deleteEvent}><i class="fa-solid fa-trash" />delete</button>
      <button onClick={() => setUpdate(true)}>update</button>
      {update && <UpdateEvent
        id={id}
        name={name}
        startTime={startTime}
        endTime={endTime}
      />}
    </div>
  );
}

export default Event;
