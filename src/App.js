import logo from './logo.svg';
import './App.css';
import AddEvent  from './pages/AddEvent.js';
import ShowEvents from './pages/ShowAllEvens';
import { useState } from 'react';

const events = [
  {
    name: 'interview', 
    startTime: '10:00 11/01',
    endTime: '10:30 11/01'
  },
  {
    name: 'diner', 
    startTime: '15:00 11/01',
    endTime: '16:00 11/01'
  },
]
function App() {

  const [ addEvent, setAddEvent] = useState(true);
  const [ showEvent, setShowEvent] = useState(true);


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
