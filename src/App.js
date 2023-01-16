import logo from './logo.svg';
import './App.css';
import ShowEvents from './pages/ShowAllEvens';
import React, { useState, useEffect } from 'react';
import UpdateEvent from './pages/AddAndUpdateEvent';


function App() {

  const [addEvent, setAddEvent] = useState(false);

  return (
    <div className="App">
      <div className='title'> EVENTS </div>
      <button className='add-event' onClick={() => setAddEvent((oldState) => !oldState)}>Add Event</button>

      {addEvent && <div className='add-event-container'>
        <UpdateEvent />
      </div>}

      <ShowEvents />
    </div>
  );
}

export default App;
