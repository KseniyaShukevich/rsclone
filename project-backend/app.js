const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const rfs = require('rotating-file-stream');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const settingsRouter = require('./routes/user-settings');
const trainingRouter = require('./routes/training');

const app = express();

mongoose.connect('mongodb+srv://admin:admin@englishcluster.myxb8.mongodb.net/english?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('we\'re connected!');
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
const accessLogStream = rfs.createStream('access.log', {
  interval: '1d',
  path: path.join(__dirname, '')
});

app.use(logger('combined', { stream: accessLogStream }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../project/dist')));

app.use('/', indexRouter);
app.use('/user', usersRouter);
app.use('/settings', settingsRouter);
app.use('/training', trainingRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  res.json({
    statusCode: 404
  });
});

// error handler
app.use((err, req, res, next) => {
  res.json({
    statusCode: 500,
    message: err.message
  });
});

module.exports = app;
