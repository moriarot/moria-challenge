var mongoose = require('mongoose');

var eventsSchema = new mongoose.Schema({
    name: String,
    startTime: Date,
    endTime: Date,
});
module.exports = mongoose.model('Events', eventsSchema);    