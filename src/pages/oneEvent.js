import React, { useState } from 'react';
import UpdateEvent from './UpdateEvent';

function Event({ id, name, startTime, endTime }) {
  const [updateMode, setUpdateMode] = useState(false);

  const deleteEvent = () => {
    fetch("http://localhost:8000/delete-event", {
      method: "POST",
      body: JSON.stringify({ id }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((res) => res.json())
  }

  return (
    <div className="event-container">
      {!updateMode ? <div className="event-data">
        <div className="name-data">{name}</div>
        <div><span>StartTime: </span>{startTime.toLocaleString()}</div>
        <div><span>EndTime: </span>{endTime.toLocaleString()}</div>
        <div className="div-buttons">
          <button onClick={deleteEvent}><i class="fa-solid fa-trash" />delete</button>
          <button onClick={() => setUpdateMode(true)}>update</button>
        </div>
      </div> :
        <UpdateEvent
          id={id}
          name={name}
          startTime={startTime}
          endTime={endTime}
          setUpdateMode = {setUpdateMode}
        />
      }
    </div>
  );
}

export default Event;
