const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const app = express();
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
mongoose.connect("mongodb://127.0.0.1:27017/moriaTest"
    , {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connected!'))

app.use(cors());
app.use(express.json());

app.listen(8000, () => {
    console.log(`Server is running on port 8000.`);
});

const eventsController = require('./events.controller.js')

app.get('/events', async (req, res) => {
    eventsController.getAllEvents(req, res, (docs) => {
        res.json({ events: docs });
    });
});

app.get('/events-by-date', async (req, res) => {
    eventsController.getEventByDate(req.query.specificDate, req, res, (docs) => {
        res.json({ events: docs });
    });
});

app.post("/events", jsonParser, function (req, res) {
    eventsController.addEvent(req, res);
});

app.post("/update-event", jsonParser, function (req, res) {
    eventsController.updateEvent(req, res);
});

app.post("/delete-event", jsonParser, function (req, res) {
    eventsController.deleteEvent(req, res);
});