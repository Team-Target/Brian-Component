const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const port = 4005;
const { getItems } = require('../database/query');

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.json());
app.use(cors());
//app.use(express.urlencoded({extended: true})); //Parse URL-encoded bodies

app.get('/api/items', (req, res) => {
  getItems((err, data) => {
    if (err) {
      console.log('problem getting all items from server');
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  });
});


app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
