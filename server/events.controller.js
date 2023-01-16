const eventsService = require('./events.service.js');
const validetionName = /^[A-Za-z0-9 ]*$/;
const validetionDate = /^[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}(:[0-9]{2})?$/;

const getAllEvents = (req, res, cb) => {
    return eventsService.getAllEvents(req, res, cb);
}

const getEventsByDate = (specificDate, req, res, cb) => {
    return eventsService.getEventsByDate(specificDate, req, res, cb);
}

const addEvent = (req, res) => {
    if (req.body.name && validetionName.test(req.body.name) &&
        req.body.startTime && validetionDate.test(req.body.startTime) &&
        req.body.endTime && validetionDate.test(req.body.endTime)) { //check data
        eventsService.addEvent(req, res);
    }
}
const updateEvent = (req, res) => {
    if (req.body.update.name && validetionName.test(req.body.update.name) &&
        req.body.update.startTime && validetionDate.test(req.body.update.startTime) &&
        req.body.update.endTime && validetionDate.test(req.body.update.endTime)) { //check data
        eventsService.updateEvent(req, res);
    }
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