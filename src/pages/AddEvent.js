import React, { useState } from 'react';

function AddEvent() {
  return (
    <div className="App">
    <form>
        <label for="name">name</label>
        <input id="name" placeholder='name'></input><br/>
        <label for="name">startTime</label>

        <input id="startTime"></input><br/>
        <label for="name">endTime</label>

        <input id="endTime"></input><br/>
        <button type="submit" onClick={()=>{}}>add event</button>
    </form>
    </div>
  );
}

export default AddEvent;
