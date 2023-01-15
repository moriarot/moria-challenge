import logo from './logo.svg';
import './App.css';
import ShowEvents from './pages/ShowAllEvens';
import React, { useState, useEffect } from 'react';
import UpdateEvent from './pages/UpdateEvent';


function App() {



  const [addEvent, setAddEvent] = useState(false);
  const [showEvent, setShowEvent] = useState(true);
  const [events, setEvents] = useState({});

  useEffect(() => {
    fetch("http://localhost:8000/events")
      .then((res) => res.json())
      .then((data) => setEvents((oldState) => { return data.events }));
  }, []);
  console.log("events", events);
  return (
    <div className="App">
      <div className='title'> EVENTS </div>
      <button onClick={() => setAddEvent((oldState) => !oldState)}>Add Event</button>

      {addEvent && <div className='add-event-container'>
        <UpdateEvent />
      </div>}

      {showEvent && <ShowEvents events={events} deleteEvents={() => setShowEvent(false)} />}
    </div>
  );
}

export default App;
