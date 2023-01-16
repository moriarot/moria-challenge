var mongoose = require('mongoose');

var eventsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
      },
    startTime: Date,
    endTime: Date,
});
module.exports = mongoose.model('Events', eventsSchema);    