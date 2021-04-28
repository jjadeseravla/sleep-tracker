const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

module.exports = app;


// const express = require('express');
// const bodyParser = require('body-parser');
//
// const app = express();
// const port = process.env.PORT || 5000;
//
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
//
// // app.get('/sleep-tracker/src/App.js', (req, res) => {
// app.get('/api/hello', (req, res) => {
//   res.send({express: 'from express'});
// });
//
// // app.post('/sleep-tracker/src/components/SquareInfo.js', (req, res) => {
// app.get('/api/world', (req, res) => {
//   console.log(req.body);
//   res.send(
//     `got post req, you send me ${req.body.post}`
//   );
// });
//
 // app.listen(port, () => console.log(`listening port ${port}`));
