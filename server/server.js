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

const Event = require('./models/event.js');

 app.post("/events",jsonParser, function (req, res) {
        const postEvent = new Event({
        name: req.body.name,
        startTime: new Date(req.body.startTime),
        endTime: req.body.endTime,
    })

    postEvent.save(function (err) {
        if (err) {
            res.redirect("/error");
        } else {
            res.redirect("/thank-you");
        }
    });
 });



app.get('/events', (req, res) => {
    Event.find((err, docs) => {
      if (!err) {
        docs.map(element => {
            const date = new Date(element.startTime)
            element.startTime = date.toLocaleString();
            return element
        })
        res.json({ events: docs});
      } else {
          console.log('Failed to retrieve the Course List: ' + err);
      }
  })
});

app.post("/delete-event",jsonParser, function (req, res) {
  Event.deleteOne({_id: req.body.id}, function (err, docs) {
    if (err){
        console.log(err);
    }
    else{
        console.log("Result : ", docs);
    }
})
});

app.post("/update-event",jsonParser, function (req, res) {
  Event.findOneAndUpdate({_id: req.body.id},req.body.update, function (err, docs) {
    if (err){
        console.log(err);
    }
    else{
        console.log("Result : ", docs);
    }
})
   
});