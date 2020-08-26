const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');  

const listings = require('./routes/listing');

app.use(cors({ credentials: true, origin: true }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('api/listings', listings);

app.use(express.static(__dirname + '/frontend/dist'));
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname + '/frontend/dist/index.html'))
})

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});