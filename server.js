const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// app.get('/sleep-tracker/src/App.js', (req, res) => {
app.get('/api/hello', (req, res) => {
  res.send({express: 'from express'});
});

// app.post('/sleep-tracker/src/components/SquareInfo.js', (req, res) => {
app.get('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `got post req, you send me ${req.body.post}`
  );
});

app.listen(port, () => console.log(`listening port ${port}`));
