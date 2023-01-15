const eventsService = require('./events.service.js');
    
const getAllEvents = (req, res, cb) => {
    return eventsService.getAllEvents(req, res, cb);
} 

const addEvent = (req, res) => {
    eventsService.addEvent(req, res);
}   
const updateEvent = (req, res) => {
    eventsService.updateEvent(req, res);
} 
const deleteEvent = (req, res) => {
    eventsService.deleteEvent(req, res);
} 
module.exports = {
    getAllEvents,
    addEvent,
    updateEvent,
    deleteEvent
}