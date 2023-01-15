const event = require('./models/event.js');

const getAllEvents = async (req, res, cb) => {
    event.find((err, docs) => {
        if (!err) {
            docs.map(element => {
                const date = new Date(element.startTime)
                element.startTime = date.toLocaleString();
                return element
            })
            cb(docs);
        } else {
            console.log('Failed to retrieve the Course List: ' + err);
        }
    })
}

const addEvent = (req, res) => {
    const postEvent = new event({
        name: req.body.name,
        startTime: req.body.startTime,
        endTime: req.body.endTime,
    })

    postEvent.save(function (err) {
        if (err) {
            res.redirect("/error");
        } else {
            res.redirect("/thank-you");
        }
    });
}

const updateEvent = (req, res) => {
    event.findOneAndUpdate({ _id: req.body.id }, req.body.update, function (err, docs) {
        if (err) {
            console.log(err);
        }
        else {
            console.log("Result : ", docs);
        }
    })
}

const deleteEvent = (req, res) => {
    event.deleteOne({ _id: req.body.id }, function (err, docs) {
        if (err) {
            console.log(err);
        }
        else {
            console.log("Result : ", docs);
        }
    })
}

module.exports = {
    getAllEvents,
    addEvent,
    updateEvent,
    deleteEvent
}