import Event from "./oneEvent";
import React, { useState } from 'react';

function ShowEvents({events, hideEvents}) {
    return (
      <div className="flex-container">
      {events && events.length &&  events.map((element, index) => {
        return <Event 
        key = {index}
        id = {element._id}
        name = {element.name} 
        startTime = {new Date(element.startTime).toLocaleString()} 
        endTime = {new Date(element.endTime).toLocaleString()} 
        />
      })}
      </div>
    );
  }
  
  export default ShowEvents;
  