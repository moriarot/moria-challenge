const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/events', (req, res) => {
    const events = [
        {
          name: 'interview', 
          startTime: '10:00 11/01',
          endTime: '10:30 11/01'
        },
        {
          name: 'diner', 
          startTime: '15:00 11/01',
          endTime: '16:00 11/01'
        },
      ]
    res.json({ events: events});
});

app.listen(8000, () => {
    console.log(`Server is running on port 8000.`);
  });