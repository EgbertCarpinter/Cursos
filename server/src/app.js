const express = require('express');
const path = require('path');

const logger = require('morgan');

const bodyParser = require('body-parser');

const mongoose = require('./mongoose');  

const threadsRouter = require('./routes/threads');

const app = express();

if (process.env.NODE_ENV !== 'test') {

  app.use(logger('dev'));
}

app.use(logger('dev'));
app.use(bodyParser.json());





app.use('/threads', threadsRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  const message = err.message;
  const stack = req.app.get('env') === 'development' ? err.stack : {};


  res.status(err.status || 500);
  res.json({
    stack,
    message,
  });
});

module.exports = app;
