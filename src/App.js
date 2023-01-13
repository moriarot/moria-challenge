import logo from './logo.svg';
import './App.css';
import AddEvent  from './pages/AddEvent.js';
import ShowEvents from './pages/ShowAllEvens';
import React, { useState, useEffect } from 'react';


function App() {

  

  const [message, setMessage] = useState("");
  const [ addEvent, setAddEvent] = useState(true);
  const [ showEvent, setShowEvent] = useState(true);
  const [events, setEvents ] = useState({});

  useEffect(() => {
    fetch("http://localhost:8000/events")
      .then((res) => res.json())
      .then((data) => setEvents((oldState)=> { return data.events }));
  }, []);
console.log("events", events);
  return (
    <div className="App">

      <button onClick={() => setShowEvent(true)}>show all events</button>
      <button onClick={() => setAddEvent(true)}>add event</button>
      <button>delete event</button>
      <button>update event</button>

      {showEvent && <ShowEvents events = {events} deleteEvents={()=> setShowEvent(false)} />}
      {addEvent && <AddEvent />}

    </div>
  );
}

export default App;
