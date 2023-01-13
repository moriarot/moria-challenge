import Event from "./oneEvent";
import React, { useState } from 'react';

function ShowEvents({events, hideEvents}) {
    console.log('in this page showAllEvents', Array(events))
    return (
      <div className="App">
      {events && events.length &&  events.map(element => {
    console.log('in this page showAllEvents 2', element)

        return <Event 
        name = {element.name} 
        startTime = {element.startTime} 
        endTime = {element.endTime} 
        />
      })}
      </div>
    );
  }
  
  export default ShowEvents;
  