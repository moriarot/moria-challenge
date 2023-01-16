const eventsService = require('./events.service.js');
    
const getAllEvents = (req, res, cb) => {
    return eventsService.getAllEvents(req, res, cb);
} 

const getEventsByDate = (specificDate, req, res, cb) => {
    return eventsService.getEventsByDate(specificDate, req, res, cb);
} 

const addEvent = (req, res) => {
    eventsService.addEvent(req, res);
}   
const updateEvent = (req, res) => {
    eventsService.updateEvent(req, res);
} 
const deleteEvent = (req, res, cb) => {
    eventsService.deleteEvent(req, res, cb);
} 
module.exports = {
    getAllEvents,
    getEventsByDate,
    addEvent,
    updateEvent,
    deleteEvent
}